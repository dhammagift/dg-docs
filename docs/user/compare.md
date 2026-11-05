---
title: "Compare: Pali Editions Side by Side"
description: "Read any line of the Pali Canon in six editions at once: Mahāsaṅgīti, Buddha Jayanti, Chaṭṭha Saṅgāyana, Siam Rath, Mahāsaṅgīti 2005 and PTS, with the differences highlighted. What we corrected, and how to report what you find."
slug: /compare
sidebar_position: 3
---

# Compare: Pali Editions Side by Side

The Pali Canon has come down to us in several printed editions, made in different countries from different
manuscripts. They agree almost everywhere, but not quite everywhere. Dhamma.Gift lets you read any text in
six editions at once, line by line, and shows exactly where they differ.

## The editions

| Tag | Edition | Country | Source |
|---|---|---|---|
| **MS** | Mahāsaṅgīti Tipiṭaka, as edited by SuttaCentral | Thailand | [SuttaCentral](https://suttacentral.net) (`bilara-data`) |
| **BJT** | Buddha Jayanti Tipiṭaka | Sri Lanka | [tipitaka.lk](https://tipitaka.lk), CC BY-ND 4.0 |
| **VRI** | Chaṭṭha Saṅgāyana (Sixth Council) | Myanmar | [VRI, tipitaka.org](https://tipitaka.org) |
| **SR** | Syāmaraṭṭha (Siam Rath) 1927 | Thailand | E-Tipitaka |
| **MS05** | Mahāsaṅgīti 2005 as printed (World Tipiṭaka) | Thailand | [tipitaka2500.github.io](https://tipitaka2500.github.io), CC0 |
| **PTS** | Pali Text Society | UK | [GRETIL](https://gretil.sub.uni-goettingen.de/), CC BY-SA 4.0 |

**MS** is the text every line of the site is built on. SuttaCentral made it from the printed Mahāsaṅgīti 2005,
so **MS05** shows what the book itself says, without SuttaCentral's edits.

The text of each edition is **not edited** by us. Buddha Jayanti is transliterated from Sinhala and Siam Rath
from Thai script into Roman letters, then each edition is cut into the same lines (segments) as MS. Every word
of the edition goes into exactly one line, in its own order. An empty line (**—**) means the edition simply has
no text there: usually one edition writes a repeated passage out in full while another abbreviates it with
**…pe…**.

## How to compare

- **From any line.** Tap the invisible **✦** at the start of a line and choose **Compare**. The text opens in
  the [Multi mode](/read) at that line, with every edition and with the differences already highlighted. **Back**
  returns you to where you were reading.
- **Choose your editions.** In [Settings](/settings), in the quick settings of the reader or in the Translations
  window, pick which editions to show and in what order:
  - only **MS** — the usual reading;
  - **one other edition** — the text is read in that edition; a line it lacks is taken from MS and marked **MS**;
  - **several editions** — every line in each of them, each with its tag; in the column view, one column per
    edition (**−** / **+** at the top of a column remove it or add the next one).
- **Differences.** With several editions shown, the **Differences** switch between the ‹ previous · next › links
  highlights the words of a
  line that most of the shown editions do not have; with two texts, every difference. Capital letters,
  punctuation, quotation marks and ṁ / ṃ are not counted as differences.
- **Variant readings** (the eye icon, **Alt+V**). Under each line, the readings of all editions and the editions'
  own footnotes, in the form `word → reading (editions)`.
- **A link to share.** The address keeps your choice: `?editions=bjt,my` opens the text in those editions for
  whoever you send it to.

Try it: [sn35.229 in all editions](pathname:///sn35.229?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1).

## What we found and corrected

While aligning the editions word by word over the whole Canon, we found a number of mistakes. We do not
change other people's texts. We report the mistakes to whoever publishes the text, and we fix our own data.

- **Errors in SuttaCentral's Pali (MS).** In a few places SuttaCentral's text differs from the very book it was
  made from, and every other edition agrees with the book: `aparimutto` for `parimutto` (sn35.19, sn35.20),
  `Idha, bhikkhave` for `Idhāvuso` in the Saṅgīti Sutta (dn33), two lines in the wrong order (sn22.7), a missing
  `vā` (Vinaya ss13), `ammukhāvinayena` for `sammukhāvinayena` (Parivāra), and English editorial notes inside the
  Pali (sn48, sn50). These come first in the variant readings, marked **SC error**. The full report:
  [dhammagift/dg-node#71](https://github.com/dhammagift/dg-node/issues/71), sent to SuttaCentral as
  [sc-data#463](https://github.com/suttacentral/sc-data/issues/463).
- **Typos in Buddha Jayanti.** Four places in tipitaka.lk where a quotation mark glues two words together:
  reported to them as [tipitaka.lk#154](https://github.com/pathnirvana/tipitaka.lk/issues/154). When they
  correct it, our text follows at the next rebuild.
- **The Mahāsaṅgīti 2005 against all others.** 278 places where the printed Mahāsaṅgīti (and so MS) reads
  otherwise than every other edition, many of them looking like misprints (`dussilyaṁ` for `dussīlyaṁ`,
  `thinamiddha` for `thīnamiddha`). They are listed for checking in
  [2-other-differences.md](https://github.com/dhammagift/offline-data/blob/main/dhammagift/root/build/compare/sc-report/2-other-differences.md).
  We have not changed them: some may be deliberate choices of that edition.
- **Lines in the wrong place.** Matching editions to MS lines is done by rules, not by hand, so a rule can miss.
  When we find such a place, we improve the rule and rebuild the whole Canon. For example, in November 2026 a
  whole paragraph of Buddha Jayanti stood in one line of sn35.229 with the next three lines empty; the fix put
  271 lines in 32 texts back in place.

## Found a mistake? Tell us

If a word of an edition stands in the wrong line, a line is empty where the edition has text, or you see a typo
or a reading that seems wrong, please tell us. Send the link to the line (**✦** → **Link**), the edition, and
what you see:

- GitHub: [dhammagift/offline-data issues](https://github.com/dhammagift/offline-data/issues)
- Telegram: [@dhamma_gift](https://t.me/dhamma_gift)
- E-mail: [agiftofdhamma@gmail.com](mailto:agiftofdhamma@gmail.com)

Every report is checked against all the editions. If it is a mistake of the source, we pass it on to its
publisher; if it is ours, we correct the rule, so the same mistake is fixed everywhere it occurs.
