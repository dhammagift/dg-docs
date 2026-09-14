---
slug: /dictionary
sidebar_position: 4
---

import AppFrame from '@site/src/components/AppFrame';
import PageTools from '@site/src/components/PageTools';
import ThemedImage from '@theme/ThemedImage';
import DictPlatformDropdown from '@site/static/img/help/dict-platform-dropdown-en.png';
import PopupLight from '@site/static/img/help/dict-popup-light-en.png';
import PopupDark from '@site/static/img/help/dict-popup-dark-en.png';

# Dictionary

The dictionary is built into the site: it pops up when you click a Pali word
while reading, and it opens in the "Dictionary" tab of the [Quick
Window](/quickmodal). The built-in dictionary is **DPD** (Digital Pāḷi
Dictionary). The full version with every dictionary is a separate site,
[dict.dhamma.gift](https://dict.dhamma.gift) — more on it below.

## Try it on this page

The dictionary is connected right here: click a Pali word — *bhagavā*,
*dukkha*, *nibbāna*. The icon <PageTools inline termSelector="em" /> turns the
dictionary on and off; on the site **Alt+A** does the same.

## Pick a dictionary mode and try it in the reader

Below is a real reader page with Quick Settings open. In the "Dictionary"
block pick the language and the mode, then click any Pali word in the text. On
the site Quick Settings open from the sliders icon in the search field or with
**Alt+S**.

<AppFrame src="/mn1?quick=1" title="MN 1 in the reader with Quick Settings" height={560} />

Modes in the list: the built-in DPD, Dict.DG in a popup or a new window
(compact or full), DharmaMitra.org, sutta search only, and external apps
(DictTango, Mdict, GoldenDict-NG). **Alt+B** switches the mode.

### Multi-select: phrases and sentences

A click opens one word. To look up a phrase or translate a whole sentence,
turn on multi-select — the selection icon in the reader toolbar or **Alt+J** —
and select that part of the Pali text. After 3 seconds the selection opens
by itself in the dictionary of the chosen mode. For translating and parsing a
sentence, the DharmaMitra.org mode or a right click on the **DG** button in
the dictionary window works best. The delay (3 or 5 seconds) can be changed
in [Settings](/settings), under "Multi-select".

## The dictionary window

<ThemedImage
  alt="Dictionary entry for bhagavā with the buttons in the top right corner"
  sources={{light: PopupLight, dark: PopupDark}}
  style={{maxWidth: '100%', width: 640, display: 'block', margin: '1rem auto'}}
/>

| Button | What it does |
|---|---|
| 🔍 | Searches the texts on Dhamma.Gift for the word |
| **DG** | Opens the word in the full dictionary — dict.dhamma.gift |
| **DG** with a right click, a middle click or a long tap on a phone | Opens DharmaMitra — grammar analysis and research on the word |
| ✕ | Closes the window (Esc) |

Drag the window by its title and resize it from the bottom right corner.

## The full version: Dict.Dhamma.Gift

[Dict.Dhamma.Gift](https://dict.dhamma.gift) isn't just one dictionary,
it's a platform — the page itself is titled "Pali Multi-Dictionary", and
its manifest describes it as "a Pāḷi multi-dictionary combining DPD,
Gandhari, PTS, Sanskrit and Sutta-Vinaya definitions in one place". The
📘 button next to the search box opens access to all of these sources —
see below.

<AppFrame src="/dict/" title="Dict.Dhamma.Gift" height={550} />

### Dictionary hotkeys

| Key | Action |
|---|---|
| `/` | Focus the search box |
| Alt+M | Menu |
| Alt+P or Alt+Y | Compass — the Dhamma.Gift quick window |
| Alt+F | Find on the page |
| Alt+S | Look the word up in another dictionary |
| Alt+Shift+S | Settings |
| Alt+H | Help |
| Alt+Q | Add the word to favorites |
| Alt+R | Read the word aloud |
| Alt+T | Toggle theme |
| Alt+− / Alt+= / Alt+0 | Smaller / larger / normal font size |
| Alt+1 | Switch interface language (En/Ru) |
| Alt+2 | Dhamma.Gift table of contents |
| Alt+3 | This word in Dhamma.Gift search |

Double-clicking any word inside an entry also searches for it.

### The whole platform at once — the 📘 button

<img src={DictPlatformDropdown} alt="Dict.Dhamma.Gift's menu of every connected dictionary" style={{maxWidth: 320, display: 'block', margin: '0 auto 1.5rem'}} />

- **Quick links** — search via Dhamma.Gift, DharmaMitra.org.
- **Pali dictionaries** — PTS Dictionary, Cone (Gandhari.org), DPR
  Analysis, Critical Pali Dictionary (CPD).
- **Sanskrit dictionaries** — Monier-Williams and three more from
  sanskrit-lexicon.uni-koeln.de (Śabda-sāgara, Apte, Macdonell), Glosbe
  Pāḷi-Sanskrit, Sanskrit Dictionary, LearnSanskrit.
- **Other resources** — WisdomLib, Google Custom Search, Aksharamukha
  (script converter).

### Display settings

The right-hand panel has font size, dark/light theme, serif font,
niggahita spelling (ṃ/ṁ), collapsing grammar/examples/summary sections by
default, an "one section at a time" accordion mode, the sandhi mark (’),
male/female voice for read-aloud, and showing/hiding source links.

## A separate site and browser extensions

Dict.Dhamma.Gift is a separate site you can open directly:
[dict.dhamma.gift](https://dict.dhamma.gift). The DPD popup dictionary also
works outside Dhamma.Gift — as a [browser extension](/browser-extension)
(Chrome, Firefox, Edge, Opera) and as a Tampermonkey script
([installation](https://github.com/dhammagift/dictPlugin/blob/main/ExtentionMethod.md));
the plugin can be embedded on any site
([details](https://github.com/dhammagift/dictPlugin?tab=readme-ov-file#dictplugin)).
