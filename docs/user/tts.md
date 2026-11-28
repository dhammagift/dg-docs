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

> "There are these five dangers, monks, for one who recites the Dhamma in a drawn-out singing voice." — <SiteLink to="/an5.209:1.1?lang=en&hide=id">AN 5.209</SiteLink>

Try it: the line below is already selected — press ▶ at the bottom of the frame and listen:

<AppFrame src="/an5.209:1.1?lang=en" title="Live voice player" height={420} />

## 5 ways to start the voice

1. Click the 🔉 icon next to the text's title: next to the Pali title it reads the Pali, next to a
   translation's title that translation.
2. Click any Pali or translation sentence to highlight it, then press the ▶ button that appears at the
   bottom.
3. Tap the **✦** before or after a line and choose **Voice** in its menu.
4. Open a link to a line (for example `/an5.209:1.1`): the line is highlighted and ▶ is already there.
5. Press **Alt+R** (**Option+R** on Mac).

On the search results page **Alt+R** reads the quotes found, in the same
player: each sutta's name first, then its quotes, and the row being read is
highlighted.

## Player

- **Controls** — Play/Pause, previous/next sentence.
- **Navigation** — pause, click a Pali sentence to highlight it, press Play
  to resume from there.
- **Mode** — what is read: Pāḷi / Pāḷi + translation / translation /
  translation + Pāḷi.
- **Speed** — the speed button opens a slider with presets; the default
  for Pāḷi is 0.7× ("normal" for the DG voice).
- **Memo** — opens the [Memo](/memo) page.
- **AB** — the [A-B loop](#a-b-loop--repeat-a-passage-for-memorization).
- **Settings** (⚙) — **Scroll** (S: the text follows the voice), the
  pause between phrases in seconds, **Pause only between paragraphs**, and
  **Voice settings**.

## Voices: three kinds

**⚙ → Voice settings** has two rows, **Pāḷi** and **Translation**: tap a
row, pick the kind (**DG Voice**, **Google Cloud** or **System**), then the
voice; for Google, first its language. The ▶ next to a row plays a short
sample (DG voices). ↺ brings back the default voices; downloaded voices stay.
On the first play a tip lists the three kinds; × hides it.

:::tip[The first neural voices that speak Pāḷi]
DG Voice are the first neural voices that read Pāḷi as plain speech, not chant: with Pāḷi's long and
short vowels, and without the singing voice <SiteLink to="/an5.209:1.1?lang=en&hide=id">AN 5.209</SiteLink> warns about.
:::

### DG Voice — our own free neural voices (default)

They run on our server: no key, no limits, nothing to install. Each one
can also be downloaded to your device and then reads without internet.

- **Pāḷi**
  - **Pratham ♂ · Piper** (default): reads Pāḷi by our pronunciation rules.
  - **Cūḷa DG ♂ · beta**: trained on real Pāḷi readings.
  - **Priyamvada ♀ · Piper**: a female voice, the same pronunciation rules.
- **English**: **Yojanāni DG ♂** (US, default), **Alan ♂** (UK), **Kathleen ♀**
  (US).
- **Russian**: **Cūḷa DG ♂** (default), **Puriso ♂**,
  **Irina ♀**.
- Pāḷi words inside a translation (sutta, Dhamma, bhikkhu, names) are read
  the Pāḷi way. Abbreviations are spelled out (Ven. → Venerable, SN 56.11 →
  Saṁyutta Nikāya 56, 11). Russian words get their stress from the context
  (дела́ его / иметь де́ла), online and with a downloaded voice alike, and ё
  where the text prints е.
- The next sentences are prepared while one is playing, so there are no
  gaps between them.

### Limitations

- **Pāḷi:** rare words and long compounds are sometimes pronounced inaccurately.
- **Pāḷi:** a line of one or two words sounds less clear than the same words inside a phrase.
- **Cūḷa DG (Pāḷi):** the sound is still rougher than Pratham's.
- **Russian:** where the stress depends on the meaning (за́мок / замо́к), it is sometimes wrong.
- **Kathleen:** low sound quality.

### Offline: download a DG voice

In **Voice settings → DG Voice**, each voice in the list has a ⬇ icon
with its download size. Once downloaded, the voice reads on your device
with no network, on the reader and on the Memo page. The 🗑 icon deletes it.
The English and Russian voices download a shared pronunciation module with
the first of them. While a DG voice is reading online, the player itself
offers **Listen offline · Download** with the voice's size; × hides the offer.

:::warning[Cūḷa DG and Yojanāni DG voices: all rights reserved]
The **Cūḷa DG** and **Yojanāni DG** voices are made from recordings of real people's voices. All rights
in these voices and their models are reserved.

**Permitted only:** downloading these voices and listening to texts with them on the Dhamma.Gift website
and in the Dhamma.Gift apps.

**Prohibited without prior written permission from Dhamma.Gift:**
- any use of these voices or their models outside the Dhamma.Gift website and apps, personal and
  non-commercial use included;
- copying, distributing, publishing or passing on the model files to third parties;
- cloning or imitating these voices;
- training or fine-tuning other models on these models or on the audio they produce;
- any commercial use.

This restriction is also stated in the file of each such model.
:::

### Google — cloud voices with a free quota

High-quality cloud voices. Pāḷi is read by a Punjabi (pa-IN) voice through
Devanagari with our own fixes. They work with a built-in trial key; for
regular use enter **your own Google API key** (see below), whose free
monthly quota is generous for personal use.

### System — your device's voices, work offline

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
→ System**.

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
- The panel opens under the player; **AB** opens and closes it again.
- **Pause between loops** — seconds to wait between repeats (− / + or type
  a number).
- **Repeats** — defaults to ∞ (infinite); set your own number and the loop
  stops on its own once it's done. The 🗑 button clears both points.
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

Only for the Google voices, when the trial key isn't enough. Create a project in Google Cloud,
enable the **Text-to-Speech API** and create an API key
([how to start](https://cloud.google.com/text-to-speech/docs/before-you-begin));
once a Google voice is chosen, **Voice settings** shows a key field under the
two rows: paste it there. Free monthly limits and
prices: [Google Cloud pricing](https://cloud.google.com/text-to-speech/pricing).
By default translations use the cheaper Standard voices, Pāḷi a premium one.

## Whole texts in MP3

For some texts, an **MP3:** line under the text (for example **MP3: Pali ·
English**) gives the whole sutta as one file, in Pāḷi and in the
translation, read by the DG voices; hover the translation link to see the
translator. The Vinaya's two Vibhaṅgas have audio as well:
Pāḷi for 347 rules and Russian for 34.

## MP3 for the Memo page

On the Memo page the ⬇ button saves the text as one MP3 in the voice you
chose: with the DG voice the pauses between lines can be of any length
(Google's are limited to 10 seconds).
