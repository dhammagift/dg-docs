---
title: "Compare 6 Pali Editions Side by Side"
description: "Any sutta line by line in 6 Pali editions: Mahāsaṅgīti, Buddha Jayanti (Sri Lanka), Chaṭṭha Saṅgāyana (Myanmar), Siam Rath (Thailand), Mahāsaṅgīti 2005 and PTS, with the differences highlighted."
keywords: [Pali Canon editions, Tipitaka comparison, BJT, VRI, Chattha Sangayana, Siam Rath, PTS, Mahasangiti]
slug: /compare
sidebar_position: 3
---

import CompareDiff from '@site/static/img/help/compare-diff-en.png';

# Compare: Pali Editions Side by Side

Any text can be read in six Pali editions at once, line by line, with the differences highlighted.

| Tag | Edition | Country | Source |
|---|---|---|---|
| **BJT** | Buddha Jayanti | Sri Lanka | [tipitaka.lk](https://tipitaka.lk) |
| **VRI** | Chaṭṭha Saṅgāyana | Myanmar | [tipitaka.org](https://tipitaka.org) |
| **SR** | Siam Rath 1927 | Thailand | E-Tipitaka |
| **MS** | Mahāsaṅgīti (SuttaCentral) | Thailand | [SuttaCentral](https://suttacentral.net) |
| **MS05** | Mahāsaṅgīti 2005, as printed | Thailand | [tipitaka2500.github.io](https://tipitaka2500.github.io) |
| **PTS** | Pali Text Society | UK | [GRETIL](https://gretil.sub.uni-goettingen.de/) |

## How to compare

- **✦ → Compare** on any line opens the text with every edition, differences on.
- Choose the editions in [Settings](/settings) or the reader's quick settings. In columns (**Alt+C**), **−** / **+**
  remove or add a column.
- The **Differences** switch highlights what most of the editions shown do not have.

<img src={CompareDiff} alt="SN 56.11 in Mahāsaṅgīti, Buddha Jayanti and Chaṭṭha Saṅgāyana with Differences on" style={{maxWidth: 'min(720px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

Try it: [sn56.11](https://dhamma.gift/sn56.11?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1).

## Problems of each edition and what we did

✅ fixed here · 📨 reported to the edition · ➖ left as the edition has it, shown by Differences · ❗ not solved yet

### Mahāsaṅgīti (SuttaCentral)

Introduced by SuttaCentral's own edits; the printed edition does not have them. Reported: [sc-data#463](https://github.com/suttacentral/sc-data/issues/463), [dg-node#71](https://github.com/dhammagift/dg-node/issues/71).

| | what | where |
|---|---|---|
| 📨 | `aparimutto` for `parimutto`: the meaning reversed | [sn35.19:2.9](https://dhamma.gift/sn35.19?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [sn35.20:2.2](https://dhamma.gift/sn35.20?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| 📨 | `Idha, bhikkhave` for `Idhāvuso` | [dn33:1.11.85](https://dhamma.gift/dn33?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| 📨 | two segments in the wrong order | [sn22.7:8.2](https://dhamma.gift/sn22.7?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| 📨 | `vā` missing; `ammukhāvinayena` for `sammukhāvinayena` | [pli-tv-bu-vb-ss13:2.8](https://dhamma.gift/pli-tv-bu-vb-ss13?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [pli-tv-pvr5:122.4](https://dhamma.gift/pli-tv-pvr5?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| 📨 | the English note "On Display: Title of Section Only" instead of Pali | [sn48.137-146:1.1](https://dhamma.gift/sn48.137-146?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [sn50.67-76:1.1](https://dhamma.gift/sn50.67-76?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| 📨 | the exposition of the four truths, which the print has, left out | [mn10:44.3](https://dhamma.gift/mn10?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |

### Mahāsaṅgīti 2005, printed

Only clear misprints are corrected: a letter lost or garbled, in one place. Vowel length and the edition's usual spelling are kept. Reported: [tipitaka2500#1](https://github.com/tipitaka2500/tipitaka2500.github.io/issues/1), [dg-node#73](https://github.com/dhammagift/dg-node/issues/73); the full list: [mso-typos.md](https://github.com/dhammagift/offline-data/blob/main/dhammagift/root/build/compare/mso-typos.md).

| | what | where |
|---|---|---|
| ✅ | `ānāmi` → `jānāmi` (8 places), `yoveti` → `yo vedi`, `kharapattasannitaṁ` → `kharapattasannibhaṁ` | [an1.439:1.3](https://dhamma.gift/an1.394-574?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [iti99:6.1](https://dhamma.gift/iti99?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [ja526:41.2](https://dhamma.gift/ja526?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ➖ | the negation `na` missing | [mn94:3.6](https://dhamma.gift/mn94?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [pli-tv-kd2:21.1.1](https://dhamma.gift/pli-tv-kd2?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ➖ | part of a phrase missing (`pāṇātipātaṁ pahāya`, `so rūpe` …), 9 places | [an10.217:20.2](https://dhamma.gift/an10.217?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [sn22.149:1.7](https://dhamma.gift/sn22.149?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ➖ | a word no other edition has, 15 places | [dn9:33.26](https://dhamma.gift/dn9?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [dn29:30.4](https://dhamma.gift/dn29?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ➖ | vowel length and spelling (`dussilyaṁ`, `thinamiddha` …), 150 readings | [an10.75:9.4](https://dhamma.gift/an10.75?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [mn10:36.6](https://dhamma.gift/mn10?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ❗ | a few Paṭṭhāna passages missing from the reconstruction site | [patthana3.3:1.1](https://dhamma.gift/patthana3.3?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |

### Buddha Jayanti

Reported: [tipitaka.lk#154](https://github.com/pathnirvana/tipitaka.lk/issues/154), [dg-node#72](https://github.com/dhammagift/dg-node/issues/72).

| | what | where |
|---|---|---|
| 📨 | words glued by a quotation mark, 4 places |  |
| ➖ | two suttas where MS has one | [sn37.5:1.1](https://dhamma.gift/sn37.5?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [sn37.15:1.1](https://dhamma.gift/sn37.15?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |

### Chaṭṭha Saṅgāyana (VRI)

| | what | where |
|---|---|---|
| ✅ | Pātimokkha rule names and section titles ran into the text | [pli-tv-bu-pm:1.1](https://dhamma.gift/pli-tv-bu-pm?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ❗ | almost a whole book in its first line | [ya7.2.1:1.1](https://dhamma.gift/ya7.2.1?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |

### Siam Rath 1927

| | what | where |
|---|---|---|
| ✅ | no Pātimokkha: the Mahāmakuṭa Pātimokkha is shown, its preliminaries whole in the first line | [pli-tv-bu-pm:1.1](https://dhamma.gift/pli-tv-bu-pm?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |

### PTS

| | what | where |
|---|---|---|
| ✅ | the start of a sentence torn off before a passage PTS does not print, 38 places | [dn22:18.27](https://dhamma.gift/dn22?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ➖ | no end lines or headings; the Jātaka verses only; no Netti or Peṭakopadesa |  |

### All editions

| | what | where |
|---|---|---|
| ✅ | lines out of place put back: 577 lines in 73 texts, and 150 lines in 11 texts where a repeated passage shifted the alignment | [sn35.229:1.1](https://dhamma.gift/sn35.229?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [an4.102:3.2](https://dhamma.gift/an4.102?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ❗ | 2772 places left where a word stands in another line; worked through by plan, twice a week |  |

In detail, with every place: [editions-problems.md](https://github.com/dhammagift/offline-data/blob/main/dhammagift/root/build/compare/editions-problems.md).
## Found a mistake?

Send the line link (**✦ → Link**) and what is wrong:
[GitHub](https://github.com/dhammagift/offline-data/issues), [Telegram](https://t.me/dhamma_gift) or
[e-mail](mailto:agiftofdhamma@gmail.com).
