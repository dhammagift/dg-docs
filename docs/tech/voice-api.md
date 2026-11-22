---
title: "Text to Speech API"
description: "Our free TTS for Pali, English and Russian: the same neural voices as on the site, from a browser or a server, no key, no sign-up."

---

# Voice API (TTS)

The Dhamma.Gift voice is a text-to-speech service: the same one that reads in the site's player and
the dictionary. It can be called from a browser or a server, no key, no login.

:::warning[Terms of use]
- `pratham`, `priyamvada`, `alan`, `kathleen`, `irina`, `puriso` may be used freely, within the limits below
  and each voice's own licence.
- `dg`, `dgru`, `dgen` (Cūḷa DG, Yojanāni DG) are made from recordings of real people's voices. All rights
  reserved. They may be used only on the Dhamma.Gift website and in the Dhamma.Gift apps. Any other use
  through this API — personal and non-commercial included — requires prior written permission from
  Dhamma.Gift.
:::

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
| `pratham` | Pāḷi | "Pratham": Piper neural voice + our Pāḷi pronunciation rules (IAST → sounds, stress, long vowels). Default |
| `dg` | Pāḷi | "Cūḷa DG": a voice trained on real Pāḷi readings. Beta |
| `priyamvada` | Pāḷi | "Priyamvada": a female Piper voice with the same rules |
| `dgen`, `alan`, `kathleen` | English | Piper voices. `dgen` is "Yojanāni DG" (the default): trained on a real person's readings. Pāḷi words and abbreviations (Ven., SN 56.11) are read properly |
| `puriso`, `dgru`, `irina` | Russian | Piper voices. `dgru` is "Cūḷa DG" (the default); `puriso` is Supertonic's male voice M1 taught to Piper. Pāḷi in Latin script is read the Pāḷi way, Russian words with the right stress |

`GET /api/tts/dg-voices` gives the list as `{"voices": [{"id", "lang", "label"}]}` in menu order (a language's first voice is its default; Yojanāni DG is listed there by its internal id `miles`, which works the same as `dgen`); `GET /api/tts/health` shows that the
service is up and which version of the pronunciation rules it uses. `GET /api/tts/offline/pali-ipa.json`
gives the rules, the engine and the voice models that DG downloads to read on the device, offline.

How Pāḷi is read: every letter is sounded, punctuation becomes pauses, `…pe…` is read as "peyyāla".

## A whole text as one MP3

`POST /api/tts/memo` — the lines read one after another with pauses of any length between them (Google
stops at 10 seconds); this is what the Memo page saves.

| Field | Meaning |
|---|---|
| `segments` | the lines, up to 200 and 20 000 characters in all |
| `voice`, `rate` | as above |
| `delay` | the pause between lines, seconds, up to 3600 |
| `end_delay` | the pause at the end, seconds, up to 3600 |
| `sound` | `gong.mp3` or `tick.mp3` at the end, or empty |

The answer is the MP3 itself (`audio/mpeg`): the speech itself at most 30 minutes, the whole file with its
pauses at most 180. One such request counts as ten against the per-minute limit.

## Licences

- The service code and the Pāḷi rules: [github.com/dhammagift/pali-tts](https://github.com/dhammagift/pali-tts).
- `pratham`: weights MIT ([rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices)),
  recordings AI4Bharat IndicVoices (CC BY 4.0).
- `dg`, `dgru`, `dgen`: all rights reserved; only on the Dhamma.Gift website and apps, anything else
  with prior written permission (see Terms of use above).
- `priyamvada`, `alan`, `kathleen`, `irina`: [rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices),
  each under its own licence.

## Also at this address

The same host serves the [MCP server](./mcp.md) (`/mcp`) and the site's [API](https://dhamma.gift/api-docs/)
(`/api/…`), with the same texts and database as dhamma.gift.
