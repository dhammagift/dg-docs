---
title: Voice API (TTS)
---

# Voice API (TTS)

The Dhamma.Gift voice is an open text-to-speech service: the same one that reads in the site's
player and the dictionary. Anyone can call it from a browser or a server — no key, no login.

**Address:** `https://api.dhamma.gift` · CORS is open · a limit of 60 requests per minute per IP.

## Read a phrase

`POST /api/tts/pali` with JSON:

| Field | Meaning |
|---|---|
| `text` | the text, up to 2000 characters. Pāḷi in IAST (`Evaṁ me sutaṁ`), a translation in English or Russian |
| `voice` | the voice (below); `pratham` by default |
| `rate` | speed, 0.25–3; `1` is the voice's own pace (the site reads Pāḷi at 0.875) |

The answer is `{"audioContent": "<base64 MP3>"}` — the same shape as Google's Text-to-Speech, so a
player written for Google plays it as is. MP3, mono, 22 kHz, ~40 kbit/s; repeated requests come from a
cache.

```bash
curl -s https://api.dhamma.gift/api/tts/pali -H 'content-type: application/json' \
  -d '{"text":"Evaṁ me sutaṁ.","voice":"pratham","rate":0.875}' \
  | python3 -c 'import json,sys,base64; open("evam.mp3","wb").write(base64.b64decode(json.load(sys.stdin)["audioContent"]))'
```

```js
const r = await fetch('https://api.dhamma.gift/api/tts/pali', {
  method: 'POST', headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ text: 'Evaṁ me sutaṁ.', voice: 'pratham', rate: 0.875 })
});
new Audio('data:audio/mp3;base64,' + (await r.json()).audioContent).play();
```

## Voices

| `voice` | Language | What it is |
|---|---|---|
| `pratham` | Pāḷi | Piper neural voice + our Pāḷi pronunciation rules (IAST → sounds, stress, long vowels). Beta |
| `dg` | Pāḷi | "o Dhamma.Gift": a voice trained on real Pāḷi readings. Beta |
| `alan`, `norman`, `kathleen` | English | Piper voices; Pāḷi words and abbreviations (Ven., SN 56.11) are read properly |
| `ruslan`, `irina` | Russian | Piper voices; Pāḷi in Latin script is read the Pāḷi way |

`GET /api/tts/dg-voices` gives the list as `{voice: language}`; `GET /api/tts/health` shows that the
service is up and which version of the pronunciation rules it uses.

How Pāḷi is read: every letter is sounded, punctuation becomes pauses, `…pe…` is read as "peyyāla".

## A whole text as one MP3

`POST /api/tts/memo` — the lines read one after another with pauses of any length between them (Google
stops at 10 seconds); this is what the Memo page saves.

| Field | Meaning |
|---|---|
| `segments` | the lines, up to 200 and 20 000 characters in all |
| `voice`, `rate` | as above |
| `delay` | the pause between lines, seconds, up to 300 |
| `end_delay` | the pause at the end, seconds, up to 600 |
| `sound` | `gong.mp3` or `tick.mp3` at the end, or empty |

The answer is the MP3 itself (`audio/mpeg`), at most 45 minutes long. One such request counts as ten
against the per-minute limit.

## Licences

- The service code and the Pāḷi rules: [github.com/dhammagift/pali-tts](https://github.com/dhammagift/pali-tts).
- `pratham`: weights MIT ([rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices)),
  recordings AI4Bharat IndicVoices (CC BY 4.0).
- `dg`: CC BY-NC-SA 4.0 — non-commercial use only.
- The English and Russian voices: [rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices),
  each under its own licence.

## Also at this address

The same host serves the [MCP server](./mcp) (`/mcp`) and the site's [API](pathname:///api-docs/)
(`/api/…`), with the same texts and database as dhamma.gift.
