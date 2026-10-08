import React, { useEffect, useRef, useState } from 'react';

// Adds two things to a prose page that has no embedded live reader of its own (Principles of
// Translation, Rationale, Sutta Principles): word-by-word Pali dictionary lookup, and a
// "Listen" button.
//
// Dictionary: reuses the real production popup dictionary (assets/js/paliLookup.js) exactly
// as embedded elsewhere on the site (see siteroot/assets/common/o.html's <top-nav-icons
// show-dict>) — lazy-loads the same script+CSS, same toggle button markup/classes, so it's
// the same feature, not a reimplementation. It only reacts to elements marked `lang="pi"` —
// this component auto-tags the article's own <code>/<em> spans that are Pali/Sanskrit terms
// (Latin script) and leaves plain Russian/English emphasis alone (Cyrillic text is never
// tagged), since the three target pages were never hand-marked with lang="pi" to begin with.
//
// Listen: verified live (playwright, o.html) that the production TTS engine
// (read/js/voice.js) does NOT work on this content — it only knows how to read real sutta
// segment data or one specific legacy table layout; on a plain prose page it logs "Нет
// данных для воспроизведения" and never speaks. Rather than force this content into that
// legacy shape, this reads the article's rendered text itself: with the DG voices (the reader's
// Piper server), and with the browser's own Web Speech API only if that server does not answer.
// `inline`: only the dictionary on/off icon, as a span that sits inside a sentence ("tap this icon
// to turn the dictionary on and off") — used on the Dictionary help page. Same loading/tagging.
// `termSelector`: which elements count as Pali terms. The Dictionary page passes "em" — there
// **bold** and `code` hold key names (Alt+A, DPD) that must not turn into word lookups.
export default function PageTools({ articleSelector = '.theme-doc-markdown', inline = false, termSelector = 'code, em, strong' }) {
  const [dictOn, setDictOn] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  // Starts false (matches server-rendered output, no `window` at build time) and is corrected
  // in the effect below. Deliberately NOT computed inline in the render body: when the effect
  // that sets dictOn from localStorage happens to compute the same value as its initial state
  // (the common case — no prior visit), React bails out of re-rendering, and an inline
  // `typeof window !== 'undefined'` check would then stay frozen at its build-time (false)
  // value forever, even in the browser. A real state transition guarantees the correction
  // actually lands for a page whose true value differs from the server guess.
  const [isRu, setIsRu] = useState(false);

  useEffect(() => {
    setIsRu(window.location.pathname.startsWith('/ru/'));

    const stored = window.localStorage.getItem('dictionaryVisible');
    setDictOn(stored === null ? true : stored === 'true');

    if (!document.getElementById('palilookup-css-lazy')) {
      const link = document.createElement('link');
      link.id = 'palilookup-css-lazy';
      link.rel = 'stylesheet';
      link.href = '/assets/css/paliLookup.css';
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[data-palilookup]')) {
      const script = document.createElement('script');
      script.src = '/assets/js/paliLookup.js';
      script.defer = true;
      script.dataset.palilookup = 'true';
      document.body.appendChild(script);
    }

    const article = document.querySelector(articleSelector);
    if (article) {
      article.querySelectorAll(termSelector).forEach((el) => {
        const text = el.textContent;
        // eslint-disable-next-line no-control-regex
        if (/[Ѐ-ӿ]/.test(text)) return; // has Cyrillic -> not a Pali/Sanskrit term
        if (!/[a-zA-Z]/.test(text)) return; // nothing to look up
        el.setAttribute('lang', 'pi');
        el.classList.add('pli-lang');
      });
    }

    return () => {
      stopRef.current = true;
      if (audioRef.current) audioRef.current.pause();
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, [articleSelector, termSelector]);

  function toggleDict() {
    // paliLookup.js itself listens for clicks on .toggle-dict-btn (document level) and flips its
    // own in-memory flag + localStorage — toggling here as well cancelled it out, so the icon
    // never changed. Once the script is loaded, only mirror its result.
    if (typeof window.toggleDictionaryVisible === 'function') {
      setTimeout(() => setDictOn(window.localStorage.getItem('dictionaryVisible') !== 'false'), 0);
      return;
    }
    const next = !dictOn;
    setDictOn(next);
    window.localStorage.setItem('dictionaryVisible', String(next));
    document.querySelectorAll('.toggle-dict-btn img').forEach((img) => {
      img.src = next ? '/assets/svg/comment.svg' : '/assets/svg/comment-slash.svg';
    });
  }

  // Web Speech API reads the page. Two things made it silent before: one utterance with the whole
  // article (Chrome, especially on Android, drops or never starts very long utterances) and no
  // voice chosen for the page language. So: short chunks read one after another, a voice picked
  // by language (waiting for the voice list, it is empty on first use), and a message instead of
  // silence when the browser has no speech engine.
  function pickVoice(synth, lang) {
    const base = lang.slice(0, 2).toLowerCase();
    const voices = synth.getVoices().filter((v) => v.lang && v.lang.toLowerCase().startsWith(base));
    return voices.find((v) => v.localService) || voices[0] || null;
  }

  function waitForVoices(synth) {
    return new Promise((resolve) => {
      if (synth.getVoices().length) return resolve();
      const done = () => { synth.removeEventListener('voiceschanged', done); resolve(); };
      synth.addEventListener('voiceschanged', done);
      setTimeout(done, 1500);
    });
  }

  function speechChunks(text, max = 180) {
    const parts = text.split(/\n+|(?<=[.!?…])\s+/).map((t) => t.trim()).filter(Boolean);
    const out = [];
    parts.forEach((part) => {
      let rest = part;
      while (rest.length > max) {
        let cut = rest.lastIndexOf(', ', max);
        if (cut < max / 2) cut = rest.lastIndexOf(' ', max);
        if (cut < 1) cut = max;
        out.push(rest.slice(0, cut + 1).trim());
        rest = rest.slice(cut + 1).trim();
      }
      if (rest) out.push(rest);
    });
    return out;
  }

  const stopRef = useRef(false);
  const audioRef = useRef(null);

  // DG voice first: the same Piper voices and server as the reader's player (read/js/voice.js,
  // fetchPaliVoiceAudio): dgru for Russian, alan for English, or the voice the reader saved in
  // tts_dg_voice_<lang>. Each chunk is one request ({audioContent}: base64 mp3); the next one is
  // fetched while the current one plays. If the voice server does not answer, the browser's own
  // voice reads the rest (below).
  const DG_TTS_URLS = ['https://api.dhamma.gift/api/tts/pali', '/api/tts/pali'];
  const DG_VOICES = { ru: ['dgru', 'ruslan', 'irina'], en: ['alan', 'norman', 'kathleen'] };

  function dgVoice(lang) {
    const saved = window.localStorage.getItem('tts_dg_voice_' + lang);
    return DG_VOICES[lang].includes(saved) ? saved : DG_VOICES[lang][0];
  }

  async function fetchDgAudio(text, voice) {
    const body = JSON.stringify({ text, rate: 1, voice });
    for (const url of DG_TTS_URLS) {
      try {
        const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body,
                                     signal: AbortSignal.timeout(20000) });
        if (r.ok) return 'data:audio/mp3;base64,' + (await r.json()).audioContent;
      } catch (e) { /* next url */ }
    }
    return null;
  }

  // Resolves with the index of the first chunk it could not get (chunks.length = all read).
  async function playDg(chunks, lang) {
    const voice = dgVoice(lang);
    let next = fetchDgAudio(chunks[0], voice);
    for (let i = 0; i < chunks.length; i++) {
      const src = await next;
      if (stopRef.current) return chunks.length;
      if (!src) return i;
      next = i + 1 < chunks.length ? fetchDgAudio(chunks[i + 1], voice) : null;
      await new Promise((resolve) => {
        const audio = new Audio(src);
        audioRef.current = audio;
        audio.onended = audio.onerror = resolve;
        audio.play().catch(resolve);
      });
      if (stopRef.current) return chunks.length;
    }
    return chunks.length;
  }

  async function toggleListen() {
    const synth = window.speechSynthesis;
    if (speaking) {
      stopRef.current = true;
      if (audioRef.current) audioRef.current.pause();
      if (synth) synth.cancel();
      setSpeaking(false);
      return;
    }
    const article = document.querySelector(articleSelector);
    if (!article) return;
    let chunks = speechChunks(article.innerText);
    if (!chunks.length) return;

    stopRef.current = false;
    setSpeaking(true);
    const done = await playDg(chunks, isRu ? 'ru' : 'en');
    if (stopRef.current || done >= chunks.length) { setSpeaking(false); return; }
    chunks = chunks.slice(done);

    const lang = isRu ? 'ru-RU' : 'en-US';
    if (!synth || typeof window.SpeechSynthesisUtterance === 'undefined') {
      window.alert(isRu ? 'Этот браузер не умеет озвучивать текст.' : 'This browser cannot read text aloud.');
      setSpeaking(false);
      return;
    }
    synth.cancel(); // drop a stale queue (Chrome keeps it after a page reload in the same tab)
    await waitForVoices(synth);
    const voice = pickVoice(synth, lang);
    if (!voice) {
      window.alert(isRu
        ? 'В браузере нет голоса для русского языка. Установите голос в настройках речи устройства.'
        : 'No English voice found in this browser. Install a voice in your device speech settings.');
      setSpeaking(false);
      return;
    }

    let i = 0;
    const next = () => {
      if (stopRef.current || i >= chunks.length) { setSpeaking(false); return; }
      const utter = new SpeechSynthesisUtterance(chunks[i++]);
      utter.lang = lang;
      utter.voice = voice;
      utter.onend = next;
      utter.onerror = (e) => {
        if (e.error === 'canceled' || e.error === 'interrupted') return;
        stopRef.current = true;
        setSpeaking(false);
      };
      synth.speak(utter);
    };
    next();
  }

  const dictToggle = (
    <a
      onClick={toggleDict}
      title={
        isRu
          ? 'Словарь по клику на слово (Alt+A)'
          : 'Popup dictionary on word click (Alt+A)'
      }
      className="toggle-dict-btn cursor-pointer"
      style={{ cursor: 'pointer', display: 'inline-flex', verticalAlign: 'middle' }}
      role="button"
      aria-pressed={dictOn}
    >
      <img
        src={dictOn ? '/assets/svg/comment.svg' : '/assets/svg/comment-slash.svg'}
        alt={isRu ? 'Словарь вкл/выкл' : 'Dictionary on/off'}
        width="22"
        height="22"
      />
    </a>
  );

  if (inline) return dictToggle;

  return (
    <div
      style={{
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center',
        margin: '0 0 1.5rem',
      }}
    >
      {dictToggle}
      <a
        onClick={toggleListen}
        title={isRu ? (speaking ? 'Остановить' : 'Слушать статью') : speaking ? 'Stop' : 'Listen to this page'}
        className="cursor-pointer"
        style={{ cursor: 'pointer', display: 'inline-flex', textDecoration: 'none' }}
      >
        {/* #989898 — same fixed gray as assets/svg/comment.svg, not `currentColor`: inside an
            <a> here, currentColor resolves to Docusaurus's green link color, which made this
            icon look like an unrelated accent button instead of matching the dictionary
            icon right next to it. */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="#989898"
            d={speaking ? 'M6 5h4v14H6zM14 5h4v14h-4z' : 'M8 5v14l11-7z'}
          />
        </svg>
      </a>
    </div>
  );
}
