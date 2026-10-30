---
title: "Voice: Listen to the Suttas (TTS)"
description: "Listen to any sutta in Pali, English or Russian with high-quality neural voices, free and without limits: the Pali, the translation or both, and repeat for memorizing."
slug: /tts
sidebar_position: 5
---

import AppFrame from '@site/src/components/AppFrame';
import SiteLink from '@site/src/components/SiteLink';
import TtsAbLoop from '@site/static/img/help/tts-ab-loop-en.png';

# Voice / TTS

> The Dhamma was originally an oral teaching. — <SiteLink to="/an5.209">AN 5.209</SiteLink>

Live demo — voice mode starts automatically via a URL parameter, no
clicking required (the floating player at the bottom is the point here, not
the reader text behind it):

<AppFrame src="/an5.209?autoplay=1&lang=en" title="Live voice player" height={260} />

## 5 ways to activate Voice Mode

1. Click the **Voice** link at the top of the page (next to En, Ru, etc.).
2. Click the 🔉 icon to the left of the text's title.
3. Click any Pali or translation sentence to highlight it, then click the
   **Play** button that appears bottom-right.
4. Hover/tap before or after a line to reveal a **✦** link, then choose
   "Listen".
5. Press **Alt+R** (**Option+R** on Mac).

## Player

- **Controls** — Play/Pause, previous/next sentence.
- **Navigation** — pause, click a Pali sentence to highlight it, press Play
  to resume from there.
- **Mode** — what is read: Pāḷi / Pāḷi + translation / translation /
  translation + Pāḷi.
- **Speed** — the speed button opens a slider with presets; the default
  for Pāḷi is 0.7× ("normal" for the DG voice).
- **Settings** (⚙) — auto-scroll, autoplay, pause between sentences and
  **Voice settings**.

## Voices: three kinds

In **⚙ → Voice settings** you choose the voice separately for Pāḷi and for
the translation, in three steps: kind → language → voice. The ▶ next to a
voice plays a short sample (DG voices).

:::tip[Neural voices made for Pāḷi]
No phone or computer has a Pāḷi voice, so we made our own. They are in
beta and still being tuned by ear, sound by sound.
:::

### DG Voice — our own free neural voices (default)

They run on our server: no key, no limits, nothing to install. Each one
can also be downloaded to your device and then reads without internet.

- **Pāḷi**
  - **Pratham ♂ · Piper** (default): a neural voice (Piper) that reads Pāḷi
    through our own Pāḷi pronunciation rules (letters → sounds, stress,
    long vowels), tuned in blind listening rounds. Beta.
  - **o Dhamma.Gift ♂ · beta**: a voice trained on real Pāḷi readings.
    Its pronunciation is closer to living Pāḷi, but the sound is still
    rough. A new version is on the way.
  - **Priyamvada ♀ · Piper**: a female voice with the same rules.
- **English**: **Yojanāni ♂** (default), **Alan ♂** (UK), **Kathleen ♀**
  (US).
- **Russian**: **Puriso ♂** (default), **o Dhamma.Gift ♂ · beta**,
  **Irina ♀**.
- Pāḷi words inside a translation (sutta, Dhamma, bhikkhu, names) are read
  the Pāḷi way. Abbreviations are spelled out (Ven. → Venerable, SN 56.11 →
  Saṁyutta Nikāya 56, 11). Russian words get the right stress, and ё where
  the text prints е.
- The next sentences are prepared while one is playing, so there are no
  gaps between them.

### Offline: download a DG voice

In **Voice settings → DG Voice**, each voice in the list has a ⬇ icon
with its download size. Once downloaded, the voice reads on your device
with no network, on the reader and on the Memo page. The 🗑 icon deletes it.
The English and Russian voices download a shared pronunciation module with
the first of them. The o Dhamma.Gift voices are the owner's own and are
released under CC BY-NC-SA 4.0.

### Google — cloud voices with a free quota

High-quality cloud voices. Pāḷi is read by a Punjabi (pa-IN) voice through
Devanagari with our own fixes. Needs **your own Google API key** (see
below); the free monthly quota is generous for personal use.

### Built-in — your device's voices, work offline

Uses the speech synthesis of your system or browser: no internet needed,
nothing is sent anywhere. There is no Pāḷi voice in any system, so install
one of **Sanskrit (India)**, **Hindi (India)**, **Nepali** or
**Indonesian** for the closest pronunciation; if none is installed,
English is used as a fallback.

- **Android** — Settings → Accessibility → Text-to-speech output, then
  install voice data for the language:
  [Android help](https://support.google.com/accessibility/android/answer/6006983).
- **iPhone / iPad** — Settings → Accessibility → Spoken Content → Voices:
  [Apple help](https://support.apple.com/guide/iphone/hear-iphone-speak-the-screen-selection-or-typing-iph96b214f0/ios).
- **Mac** — System Settings → Accessibility → Spoken Content → System
  voice → Manage Voices:
  [Apple help](https://support.apple.com/guide/mac-help/change-spoken-content-settings-mchlp2290/mac).
- **Windows** — Settings → Time & language → Speech → Manage voices → Add
  voices: [Microsoft help](https://support.microsoft.com/en-us/windows/appendix-a-supported-languages-and-voices-4486e345-7730-53da-fcfe-55cc64300f01).

After installing a voice, reload the page and pick it in **Voice settings
→ Built-in**.

## A-B loop — repeat a passage for memorization

The **AB** button next to the player is a separate tool layered on top of
normal playback: pick a start and end point in the text, and the player
repeats just that passage, with a pause between repeats and a repeat
limit (or infinite).

<img src={TtsAbLoop} alt="A-B loop panel: A/B points, pause between repeats, repeat counter" style={{maxWidth: 'min(300px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

- Click **AB** — if a line was already selected, it immediately becomes
  point **A** and the panel waits for you to click a line for point **B**;
  if nothing was selected, click a line for **A** first, then for **B**.
  As soon as both points are set, the loop starts automatically.
- **Pause (sec)** — how long to wait between repeats.
- **Repeat count** — defaults to ∞ (infinite); type your own number and
  the loop stops on its own once it's done.
- To move a point, click it again and pick a new line. To clear a point,
  **right-click** (or **long-press** on phones) directly on the A or B
  button.
- The passage between the two points is marked in the text with a
  vertical bar on the left.

## Hotkeys

| Key | Action |
|---|---|
| Alt+R | Toggle Voice Mode |
| S | Toggle autoscroll |
| Space | Play / Pause |
| ← → or ↑ ↓ | Previous / Next segment |
| 1 | Mode: Pāḷi |
| 2 | Mode: Pāḷi + Translation |
| 3 | Mode: Translation |
| 4 | Mode: Translation + Pāḷi |
| + / - | Increase / decrease speed |
| R | Reset speed to default |

:::info[Space and the arrow keys only work with auto-scroll on]
If "Autoscroll" is off (the **S** key, or the toggle in the player
settings), Space and the arrow keys stop responding to player control —
that's expected behavior, not a bug. The 1–4 keys and +/- always work,
regardless of autoscroll.
:::

## Panel footer

- **Voice settings** — kinds of voices, languages and voices, samples, the
  Google API key.
- **File** — a link to an audio file, when one exists for that text.
- **Help ?** — this page.

## Google API key (optional)

Needed only for the Google voices. Create a project in Google Cloud,
enable the **Text-to-Speech API** and create an API key
([how to start](https://cloud.google.com/text-to-speech/docs/before-you-begin));
paste it in **Voice settings → Google API Key**. Free monthly limits and
prices: [Google Cloud pricing](https://cloud.google.com/text-to-speech/pricing).
By default translations use the cheaper Standard voices, Pāḷi a premium one.

## Whole texts in MP3

For some texts, a **Listen in MP3** line under the text gives the whole
sutta as one file, in Pāḷi and in the translation, read by the DG voices,
with the translator named. The Vinaya's two Vibhaṅgas have audio as well:
Pāḷi for 347 rules and Russian for 34.

## MP3 for the Memo page

On the Memo page the ⬇ button saves the text as one MP3 in the voice you
chose: with the DG voice the pauses between lines can be of any length
(Google's are limited to 10 seconds).
