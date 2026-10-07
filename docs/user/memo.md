---
slug: /memo
sidebar_position: 8
---

import AppFrame from '@site/src/components/AppFrame';
import MemoBubble from '@site/static/img/help/memo-firstletter-bubble-en.png';

# Memo

The "Memorize & Meditate" tool — build a custom audio session from any
text: precise slicing by period/comma/line, custom repetition counts and
pause durations, an end-of-cycle gong, MP3 export, a standalone
interval-timer mode, and a first-letter visual-cue mode for
memorization. You don't have to paste text in by hand to get here either
— **"Memorize"** in the [reader's context menu](/read#context-menu)
opens Memo already filled in with the passage you clicked.

<AppFrame src="/memo" title="Memo — Memorize & Meditate" height={700} />

## Transform — first-letter hints

The **"Transform"** button turns pasted text into a row of first letters,
one per word — the classic memorization technique where you hold the
whole text in your head and the page only shows you the anchor letters.
Clicking a letter doesn't just reveal the full word in a tooltip — it
also opens that word's **dictionary** entry right next to it:

<img src={MemoBubble} alt="Clicking a first letter reveals the word and its dictionary entry" style={{maxWidth: 'min(700px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

:::tip[For a whole canonical text, switch reader modes instead of copying]
"Transform" is for your own text — notes, a hand-picked set of lines. To
read an entire sutta this way, don't copy it in here — switch the reader
to **"For Memorization"** mode instead (Alt+Shift+3, see [Reading modes](/read#reading-modes))
— same first-letter trick, applied directly to the live sutta text, with
its translation, and no manual copying.
:::

## AI Expand — the reverse operation

If a text goes the other way and uses shorthand like "…pe…" or "etc."
(*peyyāla*, the standard convention in Pali texts for not spelling out a
repetitive list in full), the **✨ AI Expand** button sends the text to
ChatGPT with a ready-made prompt: recognize the pattern (the five
aggregates, the six sense bases, the twelve links of dependent
origination, the 32 parts of the body, and so on) and expand the
shorthand into the full text in the original language.

:::info[AI Expand opens an external ChatGPT tab]
The text is passed to chatgpt.com in the address bar, like any ordinary
link with a parameter. Nothing is saved on Dhamma.gift and nothing passes
through the app's own server.
:::

## Built-in presets

The list icon opens a set of ready-made sessions — not just to try out
the tool, but usable as standalone practice material: Ānāpānasati
(mindfulness of breathing, the AN/MN formula), Sampajānapabba, a
breakdown of the five aggregates (khandha), a passage on Dukkhasamudayaṁ
Ariyasaccaṁ, Ādittasutta (SN 35.28, "All Is Burning"), and a list of
idle-talk topics (tiracchānakathā) — each already set up with its own
separator, pauses and repeat count.

## Pātimokkha — self-check from memory

The **Selfcheck** links (see [Links](#links) below) open the full
bhikkhu and bhikkhunī Pātimokkha text (with no links to commentary — on
purpose, so you can check whether you actually remember the rules), plus
links to third-party sites hosting the same Pātimokkha text.

## Voice settings (TTS)

- **Separator** — how to cut the text into pieces (period, comma, line,
  etc.).
- **Interval** — the pause between pieces.
- **End pause** — a separate, usually longer pause at the end of the
  whole cycle.
- **Sound** — a gong (or another sound) at the end of the cycle, or none.
- **Cycle** — how many times to repeat (infinite included).
- **Translation** — read the translation instead of / alongside Pali.

A finished session can be downloaded as an MP3 (the download icon) — say,
to listen offline or outside the browser.

## Limits of the audio file

When you download a session as an MP3:

- **DG voice** — the interval and the end pause can each be up to **1 hour**;
  the whole file up to **3 hours**; the speech itself up to **30 minutes**
  (pauses do not count towards it). Up to 200 lines and 20,000 characters
  of text.
- **Google voice** (needs your own API key in the settings) — pauses up to
  **10 seconds**.

See also [Voice / TTS](/tts) for the simpler player built right into the
reader, without slicing or repeats.

## Links

- Tips & Tricks for memorization: [English](https://docs.google.com/document/d/1JWHEFqcaNhYwYneWBnTp9rkgWecDB4IIHX1l3AxSiWM/edit?tab=t.0#heading=h.j8yrupzfcw9i) · [Russian](https://docs.google.com/document/d/12A4jNFrSQywZubM7bL2pgQK0fOtr6LEBJMjGb7nTNlw/edit?tab=t.0#heading=h.j8yrupzfcw9i)
- [Open any sutta this way](https://dhamma.gift/memorize/)
- Pātimokkha: [Bhikkhu](https://dhamma.gift/pm.php?expand=true) · [Bhikkhunī](https://dhamma.gift/bipm.php?expand=true)
- Pātimokkha on other sites: [Dhamma.ru](https://dhamma.gift/ru/assets/materials/prat.html) · [TBW](https://dhamma.gift/bw/vi/vi.html#content) · [ATI](https://dhamma.gift/accesstoinsight.org/tipitaka/vin/sv/index.html)
- Selfcheck: [Bhikkhu](https://dhamma.gift/assets/rr.html) · [Bhikkhunī](https://dhamma.gift/assets/rrbi.html)
