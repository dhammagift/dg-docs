---
title: "Reader: Pali Text with Translations"
description: "Read any sutta in Pali with the translation line by line, compare translators side by side, learn it by heart from first letters, or read the Pali in Devanagari or Thai."
slug: /read
sidebar_position: 2
---

import AppFrame from '@site/src/components/AppFrame';
import ReaderLogo from '@site/static/img/reader-logo.png';
import ReaderModesDrawer from '@site/static/img/help/reader-modes-drawer-en.png';
import ReaderContextMenu from '@site/static/img/help/reader-context-menu-en.png';
import ReaderQuickSettingsDict from '@site/static/img/help/reader-quick-settings-dict-en.png';

# Reader

<img src={ReaderLogo} className="dg-page-logo" alt="Dhamma.Gift logo: a conch shell over an open book" style={{width: 124}} />

Open any sutta directly by its id (`dn22`, `mn139`, `sn56.11`, `an4.180`) —
no search needed. Try it live below (this is the real reader, not a demo
clone — click around, switch modes, change the font):

<AppFrame src="/dn22?lang=en" title="Live reader — DN 22" height={700} />

## The icons above the text

| Icon | What it does | Keys |
|:---:|---|---|
| **External links ▾** | This text on other sites and in other editions | |
| ![Eye](/img/help/icons/eye-slash.svg) | Variants from other editions: on / off | **Alt+V** |
| ![Columns](/img/help/icons/align-right.svg) | One or two columns | **Alt+C** |
| ![Speech bubble](/img/help/icons/comment.svg) | [Dictionary](/dictionary): on / off, then click a word | **Alt+A** |
| ![Frame](/img/help/icons/select-slash.svg) | Multi-select: select a few words and they open in the dictionary | **Alt+J** |
| ![Compass](/img/help/icons/compass.svg) | [Quick window](/quickmodal): favorites, history | **Alt+P** |
| ![Question mark](/img/help/icons/question.svg) | This help | **Alt+H** |
| ![Bell](/img/help/icons/bell.svg) | Shown when the text is in your subscription: mark it read | |
| ![List](/img/help/icons/list-ul-solid-full.svg) **Title** | Contents of the text | **Alt+W** |
| **‹ dn21 · dn23 ›** | Previous / next text | **Ctrl+←** / **Ctrl+→** |

Every shortcut is on the [Hotkeys](/hotkeys) page.

## Reading modes

Four reading modes, listed under "Reading modes" in the burger menu (☰),
each with its own Alt+Shift hotkey:

<img src={ReaderModesDrawer} alt="The 'Reading modes' panel in the burger menu: Reading, Compare, For Memorization, Devanagari" style={{maxWidth: 'min(320px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

| Hotkey | Mode | What it shows |
|---|---|---|
| Alt+Shift+1 | Reading | Pāḷi + one translation, always in your main language |
| Alt+Shift+2 | Compare | Editions of the Canon or translations side by side: by default every edition, a translation in your main language and the differences; what you change there is kept |
| Alt+Shift+3 | For Memorization | First-letter mnemonic (the same trick as [Memo](/memo#transform--first-letter-hints), applied straight to the live sutta text) |
| Alt+Shift+4 | Devanagari | Pāḷi in another script + Pāḷi in Latin |

:::tip[Alt+Shift+digit — the mode, Alt+1 — the language]
Alt+Shift+1…4 switch the mode and keep the language you're reading in.
The language switches with **Alt+1**, the same on every page of the site;
**Alt+2** opens the table of contents and **Alt+3** the dictionary.
:::

A mode isn't tied to one fixed language — "Devanagari", for instance,
shows Pali in whichever script you've selected (see below) alongside the
Latin transliteration, not literally the Devanagari script only.

Translations come in 25 languages. For Thai, Mahachula (DN 1–34,
MN 1–76) comes first, then Siam Rath.

## Pali editions

Besides **MS**, the Pali can be read in Buddha Jayanti (**BJT**), Chaṭṭha Saṅgāyana (**VRI**), Siam Rath (**SR**),
Mahāsaṅgīti 2005 (**MS05**) and Pali Text Society (**PTS**): one of them, or several side by side with the
**Differences** switch. See [Compare](/compare).

## Translators, voices and sharing

- **Plates.** In the Compare mode by lines each translation line starts with a quiet plate with the translator's
  short name (**Suj**, **Tns**, **O** — the project's own translation), the editions' plates in capitals
  (**MS**, **BJT**). The line above the text names what is shown: `Pāḷi MS Trn: o`.
- **A speaker on every title line.** 🔈 next to the Pali title reads the Pali, next to a translation's title
  that translation, next to an edition's title that edition, down the whole text. The **Voice** item of a
  line's menu reads the text of that line's column too. See [Voice / TTS](/tts).
- **Pāḷi / translation on and off** (the pill at the bottom right, **Alt+Z**) keeps the line you are reading
  where it is on the screen.
- **Share links carry your view.** A link copied from the reader opens for the recipient exactly what you
  see: the translations in their order, the Pali editions, the script, columns or lines, variants and
  differences — for that visit only; their own settings stay as they were.

## Context menu

The reader's real gem is the per-line context menu. Hover (or tap) the
start or end of any line — Pali or translation — and a tiny **✦**
appears; clicking it opens a menu with 7 actions:

<img src={ReaderContextMenu} alt="Segment context menu: Line, Paragraph, Link, Voice, Bookmark, Memorize, Compare" style={{maxWidth: 'min(460px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

- **Line** — copy this line (Pali + translation) with a link to it.
- **Paragraph** — copy every line from here to the end of the paragraph
  (for verse/gāthā texts with no shared paragraph, this just copies the
  current line).
- **Link** — copy just a link to the line, no text.
- **Voice** — start voice playback from this line — see
  [Voice / TTS](/tts).
- **Bookmark** — add the line to favorites — see the "Favorites" tab in
  the [Quick Window](/quickmodal).
- **Memorize** (sometimes labeled "Meditate" — both open the same thing,
  the label is picked at random) — opens
  [Memo](/memo) pre-filled with the text from this line onward (up to
  about 1,200 characters).
- **Compare** — opens this line in the Compare mode with the most for this
  visit: every Pali edition and every translation in your languages, the
  differences highlighted. Your own Compare settings stay as they were — see
  [Compare](/compare).

:::info[Why clicking the text itself does something different]
The menu only opens from the invisible **✦**. Clicking the line's text
directly (not the ✦) selects it for the voice player and shows a ▶ Play
button — a separate feature, covered in [Voice / TTS](/tts).
:::

**Right-click / long-press on ✦** is the shortcut: it copies just the
line link, no menu.

## Pali script

**Alt+L** cycles through four common scripts: Latin (ISO) → Brahmi → Devanagari →
Thai. The full list — around 160 scripts (Burmese, Khmer, Sinhala, and
anything else [Aksharamukha](https://www.aksharamukha.com/) can convert
to) — is in the dropdown on the [Settings](/settings) page.

## Text size

The burger menu (☰) has **−** and **+** buttons for the text size, from
70 % to 250 %. **Alt+−** and **Alt+=** do the same, **Alt+0** goes back
to 100 %.

The starting size follows the device: 100 % on a computer, 110 % on a phone,
120 % on a tablet. In the [Dhamma.Gift app](/dhamma-gift-app) a two-finger
pinch changes the text size in the reader and in the search results.

## Dictionary

Clicking any Pali word (with the dictionary turned on) looks it up
straight in [Dict.Dhamma.Gift](/dictionary) — either in a popup over the
text or in a separate tab, depending on the dictionary mode you've
chosen. See [Dictionary](/dictionary) for the dictionary itself, its
hotkeys and display modes.

The dictionary mode (which window it opens) and a couple of other reading
options live in the **Quick Settings** panel (the sliders icon next to
the search box — also works inside the reader):

<img src={ReaderQuickSettingsDict} alt="Quick Settings panel in the reader: dictionary mode and reading options" style={{maxWidth: 'min(300px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

- **Dictionary** — the same list of modes described on the
  [Dictionary](/dictionary) page: built-in DPD, Dict.DG popup or new
  window (full or mini), DharmaMitra.org, sutta-search-only, or an
  external app (DPD Android, DictTango, Mdict, GoldenDict-NG) — separately for
  English and Russian DPD.
- **Show variants** (Alt+V) and **Column mode** (Alt+C) — the same
  buttons already in the toolbar above the text, duplicated here for
  convenience.
- **Hide Pāḷi punctuation** (Alt+G) — strips punctuation from the Pali
  text, handy for memorization.

Further down the same panel is a **"Pāḷi diacritics"** block — buttons
for the special Pali characters (ā ī ū ṁ ñ ṅ ṭ ḍ ṇ ḷ); clicking one
inserts it straight into the search box at the cursor, for when your
keyboard doesn't have them.

## Hotkeys

| Key | Action |
|---|---|
| Alt+Shift+1 … Alt+Shift+4 | Switch reading mode (see table above) |
| Alt+1 | Switch the language (English / Russian) |
| Alt+C | Toggle 1-column / 2-column layout |
| Alt+V | Show/hide Pali spelling variants |
| Alt+Q | Add/remove the current page from favorites |
| Alt+A | Toggle the [dictionary](/dictionary) on word click |
| Alt+N | Open the [dictionary](/dictionary) in a separate window |
| Alt+W | Table of contents of the text |
| Alt+2 | Open the [TOC Navigator](/toc) at this sutta's chapter |
| Alt+Z | Show/hide the Pali or the translation (the Pāḷi / En pill at the bottom right) |
| Alt+− / Alt+= / Alt+0 | Smaller / larger / default text size |
| Ctrl+← / Ctrl+→ | Previous / next sutta |
| Click a line | Select it for the voice player (see [Voice / TTS](/tts)) |
| Click ✦ at the start/end of a line | Open the context menu (see above) |
| Right-click / long-press ✦ | Copy just the link |

All hotkeys are listed on [Keyboard shortcuts](/hotkeys).

## External editions and cross-references

**External links ▾** above the text opens the same passage on other sites.
Each site has small plates with the Pali editions it gives:

- **4NT** (s.4nt.org) — **MS BJT VRI SIAM** side by side (in the reader
  itself: [Compare](/compare)).
- **Digital Pali Reader** — **VRI SIAM**, Burmese and Thai editions.
- **Tipitaka.lk** — **BJT**, the Buddha Jayanti Tipiṭaka.
- **SuttaCentral** — **MS**.
- **The Buddha's Words** — **MS**.
- **Th.ru / Th.su** — Theravada.ru / Theravada.su (Russian interface only;
  Theravada.su for the Dīgha Nikāya, the one collection complete there).
- **Final** (Vinaya texts only) — jumps to the final edition of a rule, if
  it changed over the course of the history/discussion.

The other icons of this row are described [above](#the-icons-above-the-text).

## Under the text

- **Listen in MP3** — under some texts, a line with MP3 files of the
  whole text: the Pali and the translation, with the translator named.
- Under every text: links to **Principles by the Suttas · Rationale ·
  Glossary**.
- A row of icons: copy link, **Export** (**Copy**, **TXT**, **MD**, **PDF** —
  the text as it is on screen), Edit Translation (the
  [Translation Editor](/translator)), [Memo](/memo), Create Lists, Compare,
  History, DharmaMitra and 4NT.
- The **Pāḷi / En** pill at the bottom right (Alt+Z) shows or hides
  either language.
