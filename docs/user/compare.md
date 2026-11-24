---
title: "Compare 6 Pali Canon Editions — Differences in One Click"
description: "The only place with all six editions of the Pali Canon side by side, differences highlighted, in one click. Any sutta line by line: Siam Rath (Thailand), Buddha Jayanti (Sri Lanka), Chaṭṭha Saṅgāyana (Myanmar), Mahāsaṅgīti 2005, Mahāsaṅgīti and PTS, with the differences highlighted."
keywords: [Pali Canon editions, Tipitaka comparison, BJT, VRI, Chattha Sangayana, Siam Rath, PTS, Mahasangiti]
slug: /compare
sidebar_label: "Compare 6 Editions"
sidebar_position: 3
---

import CompareDiff from '@site/static/img/help/compare-diff-en.png';

<head>
  <title>Compare 6 Pali Canon Editions — Differences in One Click</title>
</head>

# Compare 6 Pali Canon Editions

Only here are all six editions of the Pali Canon side by side: any text, line by line, with the differences highlighted, in one click.

| Tag | Edition | Country, original script | Type of edition | Source |
|---|---|---|---|---|
| [**SR**](#siam-rath-1927-sr) | Siam Rath 1927 | Thailand, Thai | national | E-Tipitaka |
| [**BJT**](#buddha-jayanti-bjt) | Buddha Jayanti (1957-1993) | Sri Lanka, Sinhala | national | [Tipitaka.lk](https://tipitaka.lk) |
| [**VRI**](#chaṭṭha-saṅgāyana-vri) | Chaṭṭha Saṅgāyana (Sixth Council, 1954-1956) | Myanmar, Burmese | national | [Tipitaka.org](https://tipitaka.org) |
| [**MS05**](#mahāsaṅgīti-2005-printed-ms05) | Mahāsaṅgīti 2005, as printed | Roman script | derived: the Sixth Council edition (Myanmar) in Roman script | [Tipitaka2500](https://tipitaka2500.github.io) |
| [**MS**](#mahāsaṅgīti-ms) | Mahāsaṅgīti | Roman script | derived from MS05: SuttaCentral's segments and edits | [SuttaCentral](https://suttacentral.net) |
| [**PTS**](#pts) | Pali Text Society (from the 1880s) | UK, Roman script | critical, European: from manuscripts of Sri Lanka, Myanmar and Thailand | [GRETIL](https://gretil.sub.uni-goettingen.de/) |

A tag leads to the edition's known problems, below.

Column order: the national editions first, from fewer late texts in the Khuddaka Nikāya to more: SR, BJT, VRI. Then the Mahāsaṅgīti, the printed one (MS05) first, then SuttaCentral's version (MS), and PTS last, a critical edition. Columns you arrange yourself keep your order.

There are three national editions: SR, BJT, VRI. MS05 and MS are derived from the Myanmar one, which is why they are almost the same as VRI. In the late Khuddaka Nikāya books Siam Rath has none of the Milindapañha, Nettippakaraṇa and Peṭakopadesa, Buddha Jayanti has the last two, Chaṭṭha Saṅgāyana all three.

## How to compare

- **✦ → Compare** on any line opens the text with every edition and every translation in your languages, differences on;
  your own Compare settings stay as they were.
- The **Compare** reader mode (**Alt+Shift+2**) shows by default every edition, a translation in your main language and
  the differences. What you change there (editions, lines or columns, translators, differences) is kept.
- Choose the editions in [Settings](/settings) or the reader's quick settings. In columns (**Alt+C**), a column's
  name (**▾**) opens a menu to put another edition or a translation in it, and **−** / **+** remove or add a column.
- The **Differences** switch highlights where an edition departs from the reading of the national editions shown
  (SR, BJT, VRI): their majority decides. MS05, MS and PTS are marked where they differ from it but do not vote. With one
  national edition shown, it is the reference; with none, every edition shown votes.

<img src={CompareDiff} alt="SN 56.11 in Buddha Jayanti, Chaṭṭha Saṅgāyana and Siam Rath with Differences on" style={{maxWidth: 'min(720px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

Try it: [sn56.11](https://dhamma.gift/sn56.11?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1).

## Problems of each edition and what we did

✅ fixed here · 📨 reported to the edition · ➖ left as the edition has it, shown by Differences · ❗ not solved yet

### Siam Rath 1927 (SR)

| | what | where |
|---|---|---|
| ✅ | no Pātimokkha: the Mahāmakuṭa Pātimokkha is shown (column **Mahāmakuṭa**), its preliminaries whole in the first line | [pli-tv-bu-pm:1.1](https://dhamma.gift/pli-tv-bu-pm?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ✅ | Mahāmakuṭa Pātimokkha: OCR misreadings corrected against the Vibhaṅga rules and VRI (`piṇghapātaṃ` → `piṇḍapātaṃ`, `paṭinissajajeyya` → `paṭinissajjeyya` …), 51 lines | [pli-tv-bu-pm:194.1](https://dhamma.gift/pli-tv-bu-pm?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |

### Buddha Jayanti (BJT)

Reported: [tipitaka.lk#154](https://github.com/pathnirvana/tipitaka.lk/issues/154), [dg-node#72](https://github.com/dhammagift/dg-node/issues/72).

| | what | where |
|---|---|---|
| 📨 | words glued by a quotation mark, 4 places |  |
| ➖ | two suttas where MS has one | [sn37.5:1.1](https://dhamma.gift/sn37.5?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [sn37.15:1.1](https://dhamma.gift/sn37.15?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |

### Chaṭṭha Saṅgāyana (VRI)

| | what | where |
|---|---|---|
| ✅ | Pātimokkha rule names and section titles ran into the text | [pli-tv-bu-pm:1.1](https://dhamma.gift/pli-tv-bu-pm?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ❗ | almost a whole book in its first line | [ya7.2.1:1.1](https://dhamma.gift/ya7.2.1?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ➖ | `uddissamānena` for `uddissamāne na` (apart in the Vibhaṅga: "does not listen carefully"); the same in MS | [pli-tv-bu-pm:138.4](https://dhamma.gift/pli-tv-bu-pm?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |

### Mahāsaṅgīti 2005, printed (MS05)

Only clear misprints are corrected: a letter lost or garbled, in one place. Vowel length and the edition's usual spelling are kept. Reported: [tipitaka2500#1](https://github.com/tipitaka2500/tipitaka2500.github.io/issues/1), [dg-node#73](https://github.com/dhammagift/dg-node/issues/73); the full list: [mso-typos.md](https://github.com/dhammagift/offline-data/blob/main/dhammagift/root/build/compare/mso-typos.md).

| | what | where |
|---|---|---|
| ✅ | `ānāmi` → `jānāmi` (8 places), `yoveti` → `yo vedi`, `kharapattasannitaṁ` → `kharapattasannibhaṁ` | [an1.439:1.3](https://dhamma.gift/an1.394-574?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [iti99:6.1](https://dhamma.gift/iti99?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [ja526:41.2](https://dhamma.gift/ja526?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ➖ | the negation `na` missing | [mn94:3.6](https://dhamma.gift/mn94?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [pli-tv-kd2:21.1.1](https://dhamma.gift/pli-tv-kd2?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ➖ | part of a phrase missing (`pāṇātipātaṁ pahāya`, `so rūpe` …), 9 places | [an10.217:20.2](https://dhamma.gift/an10.217?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [sn22.149:1.7](https://dhamma.gift/sn22.149?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ➖ | a word no other edition has, 15 places | [dn9:33.26](https://dhamma.gift/dn9?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [dn29:30.4](https://dhamma.gift/dn29?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ➖ | vowel length and spelling (`dussilyaṁ`, `thinamiddha` …), 150 readings | [an10.75:9.4](https://dhamma.gift/an10.75?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [mn10:36.6](https://dhamma.gift/mn10?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ❗ | a few Paṭṭhāna passages missing from the reconstruction site | [patthana3.3:1.1](https://dhamma.gift/patthana3.3?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |

### Mahāsaṅgīti (MS)

Errors of SuttaCentral's version, introduced by their edits; the printed edition does not have them. Reported: [sc-data#463](https://github.com/suttacentral/sc-data/issues/463), [dg-node#71](https://github.com/dhammagift/dg-node/issues/71).

| | what | where |
|---|---|---|
| 📨 | `aparimutto` for `parimutto`: the meaning reversed | [sn35.19:2.9](https://dhamma.gift/sn35.19?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [sn35.20:2.2](https://dhamma.gift/sn35.20?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| 📨 | `Idha, bhikkhave` for `Idhāvuso` | [dn33:1.11.85](https://dhamma.gift/dn33?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| 📨 | two segments in the wrong order | [sn22.7:8.2](https://dhamma.gift/sn22.7?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| 📨 | `vā` missing; `ammukhāvinayena` for `sammukhāvinayena` | [pli-tv-bu-vb-ss13:2.8](https://dhamma.gift/pli-tv-bu-vb-ss13?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [pli-tv-pvr5:122.4](https://dhamma.gift/pli-tv-pvr5?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| 📨 | the English note "On Display: Title of Section Only" instead of Pali | [sn48.137-146:1.1](https://dhamma.gift/sn48.137-146?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [sn50.67-76:1.1](https://dhamma.gift/sn50.67-76?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| 📨 | the exposition of the four truths, which the print has, left out | [mn10:44.3](https://dhamma.gift/mn10?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |

### PTS

| | what | where |
|---|---|---|
| ✅ | the start of a sentence torn off before a passage PTS does not print, 38 places | [dn22:18.27](https://dhamma.gift/dn22?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ❗ | three views told in almost the same formulas: the block of the second stands in place of the first | [mn60:7.1](https://dhamma.gift/mn60?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ➖ | no end lines or headings; the Jātaka verses only; no Netti or Peṭakopadesa |  |

### All editions

| | what | where |
|---|---|---|
| ✅ | lines out of place put back: 577 lines in 73 texts, and 185 lines in 19 texts where a repeated passage shifted the alignment | [sn35.229:1.1](https://dhamma.gift/sn35.229?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [an4.102:3.2](https://dhamma.gift/an4.102?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ✅ | a chain of headings printed as one line split into its MS headings: 3079 lines in 96 texts (Chaṭṭha Saṅgāyana, Mahāsaṅgīti 2005; Paṭṭhāna, Yamaka) | [patthana3.1:114.0.1](https://dhamma.gift/patthana3.1?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [ya2.2.1:1.0.1](https://dhamma.gift/ya2.2.1?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ✅ | the closing ti of a quotation, printed by PTS as a word of its own, put back on its line: 3026 lines in 1570 texts (PTS, Buddha Jayanti) | [an1.5:1.2](https://dhamma.gift/an1.5?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1), [sn34.50:1.8](https://dhamma.gift/sn34.50?mode=multi&editions=th,bjt,my,mso,ms,pts&diff=1) |
| ❗ | 1160 places left where a word stands in another line (in 777 more the edition prints a passage twice, which is no error); worked through by plan, twice a week |  |

In detail, with every place: [editions-problems.md](https://github.com/dhammagift/offline-data/blob/main/dhammagift/root/build/compare/editions-problems.md).
## Found a mistake?

Send the line link (**✦ → Link**) and what is wrong:
[GitHub](https://github.com/dhammagift/offline-data/issues), [Telegram](https://t.me/dhamma_gift) or
[e-mail](mailto:agiftofdhamma@gmail.com).
