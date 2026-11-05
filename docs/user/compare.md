---
title: "Compare: Pali Editions Side by Side"
description: "Any text of the Pali Canon in six editions at once, with the differences highlighted. What we corrected, and how to report a mistake."
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
| **MS** | Mahāsaṅgīti (SuttaCentral) | Thailand | [SuttaCentral](https://suttacentral.net) |
| **MS05** | Mahāsaṅgīti 2005, as printed | Thailand | [tipitaka2500.github.io](https://tipitaka2500.github.io) |
| **PTS** | Pali Text Society | UK | [GRETIL](https://gretil.sub.uni-goettingen.de/) |
| **SR** | Siam Rath 1927 | Thailand | E-Tipitaka |

## How to compare

- **✦ → Compare** on any line opens the text with every edition, differences on.
- Choose the editions in [Settings](/settings) or the reader's quick settings. In columns (**Alt+C**), **−** / **+**
  remove or add a column.
- The **Differences** switch highlights what most of the editions shown do not have.

<img src={CompareDiff} alt="SN 56.11 in Mahāsaṅgīti, Buddha Jayanti and Chaṭṭha Saṅgāyana with Differences on" style={{maxWidth: 'min(720px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

Try it: [sn56.11](pathname:///sn56.11?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1).

## What we corrected

- **SuttaCentral (MS):** `aparimutto` → `parimutto` (sn35.19, sn35.20), `Idha, bhikkhave` → `Idhāvuso` (dn33) and
  other errors against the printed edition —
  [dg-node#71](https://github.com/dhammagift/dg-node/issues/71), [sc-data#463](https://github.com/suttacentral/sc-data/issues/463).
- **Buddha Jayanti:** words glued by a quotation mark —
  [dg-node#72](https://github.com/dhammagift/dg-node/issues/72), [tipitaka.lk#154](https://github.com/pathnirvana/tipitaka.lk/issues/154).
- **Mahāsaṅgīti 2005:** `ānāmi` → `jānāmi` (AN 1.439–446), and 278 readings sent for checking —
  [dg-node#73](https://github.com/dhammagift/dg-node/issues/73), [tipitaka2500#1](https://github.com/tipitaka2500/tipitaka2500.github.io/issues/1).
- **Lines out of place:** 577 lines in 73 texts put back where they belong (sn35.229, sn24.5 and others).

## Found a mistake?

Send the line link (**✦ → Link**) and what is wrong:
[GitHub](https://github.com/dhammagift/offline-data/issues), [Telegram](https://t.me/dhamma_gift) or
[e-mail](mailto:agiftofdhamma@gmail.com).
