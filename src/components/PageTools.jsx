import React, { useEffect, useState } from 'react';

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
// Listen: the site's own player (read/js/voice.js), loaded here like paliLookup.js. The article is
// marked data-dg-tts-prose, which voice.js reads block by block in its legacy (non-sutta) mode, so
// the page gets the real player: DG voices, pause/resume, prev/next, speed, and it picks up where
// the reader stopped (voice.js keeps the last segment per page).
// `inline`: only the dictionary on/off icon, as a span that sits inside a sentence ("tap this icon
// to turn the dictionary on and off") — used on the Dictionary help page. Same loading/tagging.
// `termSelector`: which elements count as Pali terms. The Dictionary page passes "em" — there
// **bold** and `code` hold key names (Alt+A, DPD) that must not turn into word lookups.
export default function PageTools({ articleSelector = '.theme-doc-markdown', inline = false, termSelector = 'code, em, strong' }) {
  const [dictOn, setDictOn] = useState(true);
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

    if (!inline && !document.querySelector('script[data-dg-voice]')) {
      const script = document.createElement('script');
      script.src = '/read/js/voice.js';
      script.defer = true;
      script.dataset.dgVoice = 'true';
      document.body.appendChild(script);
    }

    const article = document.querySelector(articleSelector);
    if (article) {
      if (!inline) article.setAttribute('data-dg-tts-prose', '');
      article.querySelectorAll(termSelector).forEach((el) => {
        const text = el.textContent;
        // eslint-disable-next-line no-control-regex
        if (/[Ѐ-ӿ]/.test(text)) return; // has Cyrillic -> not a Pali/Sanskrit term
        if (!/[a-zA-Z]/.test(text)) return; // nothing to look up
        el.setAttribute('lang', 'pi');
        el.classList.add('pli-lang');
      });
    }

    // Docs navigate without reloading: the player must not go on reading the page that was left.
    return () => {
      if (document.querySelector('#voice-player-container.active')) document.querySelector('.close-tts-btn')?.click();
    };
  }, [articleSelector, termSelector, inline]);

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
      {/* voice.js opens its player on any a.voice-link; with no data-slug it keys "continue where I
          stopped" by the page path. #989898 — same fixed gray as assets/svg/comment.svg, not `currentColor`: inside an
          <a> here, currentColor resolves to Docusaurus's green link color. */}
      <a
        className="voice-link cursor-pointer"
        title={isRu ? 'Слушать статью' : 'Listen to this page'}
        style={{ cursor: 'pointer', display: 'inline-flex', textDecoration: 'none' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="#989898" d="M8 5v14l11-7z" />
        </svg>
      </a>
    </div>
  );
}
