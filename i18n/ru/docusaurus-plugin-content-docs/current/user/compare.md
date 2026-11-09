---
title: "Сравнение: Издания Пали Рядом"
description: "Любой текст Палийского канона сразу в шести изданиях с подсветкой отличий. Проблемы каждого издания, что мы исправили и как сообщить об ошибке."
slug: /compare
sidebar_position: 3
---

import CompareDiff from '@site/static/img/help/compare-diff.png';

# Сравнение: издания пали рядом

Любой текст можно читать сразу в шести изданиях пали, строка за строкой, с подсветкой отличий.

| Метка | Издание | Чей текст | Источник |
|---|---|---|---|
| **BJT** | Buddha Jayanti (1957-1993) | **национальный**: Шри-Ланка, сингальские рукописи | [Tipitaka.lk](https://tipitaka.lk) |
| **VRI** | Chaṭṭha Saṅgāyana (Шестой собор, 1954-1956) | **национальный**: Мьянма | [Tipitaka.org](https://tipitaka.org) |
| **SR** | Siam Rath 1927 | **национальный**: Таиланд, королевское издание | E-Tipitaka |
| **MS05** | Mahāsaṅgīti 2005, печатная | мьянманский текст (Шестой собор) латиницей; издана в Таиланде (Dhamma Society) | [Tipitaka2500.github.io](https://tipitaka2500.github.io) |
| **MS** | Mahāsaṅgīti, цифровая | MS05 в цифровом виде: SuttaCentral оцифровал, разбил на сегменты и правил текст | [SuttaCentral](https://suttacentral.net) |
| **PTS** | Pali Text Society (1880-е и позже) | **не национальный**: европейское критическое издание по рукописям Шри-Ланки, Мьянмы, Таиланда | [GRETIL](https://gretil.sub.uni-goettingen.de/) |

Национальных канонов три: BJT, VRI, SR. MS05 и MS не отдельная традиция, а мьянманский текст в другой оцифровке, поэтому с VRI они почти совпадают.

## Как сравнивать

- **✦ → Сравнить** на любой строке открывает текст во всех изданиях, отличия уже включены.
- Издания выбираются в [Настройках](/settings) или в быстрых настройках ридера. В колонках (**Alt+C**) **−** / **+**
  убирают или добавляют колонку.
- Переключатель **Отличия** подсвечивает то, чего нет у большинства показанных изданий.

<img src={CompareDiff} alt="SN 56.11 в Mahāsaṅgīti, Buddha Jayanti и Chaṭṭha Saṅgāyana с включёнными отличиями" style={{maxWidth: 'min(720px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

Попробуйте: [sn56.11](pathname:///ru/sn56.11?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1).

## Проблемы изданий и что мы сделали

✅ исправлено у нас · 📨 сообщено изданию · ➖ оставлено как в издании, видно в отличиях · ❗ ещё не решено

### Mahāsaṅgīti, цифровая (MS)

Ошибки цифровой версии: внесены правками SuttaCentral при оцифровке, в печатном издании их нет. Сообщено: [sc-data#463](https://github.com/suttacentral/sc-data/issues/463), [dg-node#71](https://github.com/dhammagift/dg-node/issues/71).

| | что | где |
|---|---|---|
| 📨 | `aparimutto` вместо `parimutto`: смысл наоборот | [sn35.19:2.9](pathname:///ru/sn35.19?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [sn35.20:2.2](pathname:///ru/sn35.20?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| 📨 | `Idha, bhikkhave` вместо `Idhāvuso` | [dn33:1.11.85](pathname:///ru/dn33?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| 📨 | два сегмента в обратном порядке | [sn22.7:8.2](pathname:///ru/sn22.7?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| 📨 | пропущено `vā`; `ammukhāvinayena` вместо `sammukhāvinayena` | [pli-tv-bu-vb-ss13:2.8](pathname:///ru/pli-tv-bu-vb-ss13?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [pli-tv-pvr5:122.4](pathname:///ru/pli-tv-pvr5?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| 📨 | английская пометка «On Display: Title of Section Only» вместо пали | [sn48.137-146:1.1](pathname:///ru/sn48.137-146?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [sn50.67-76:1.1](pathname:///ru/sn50.67-76?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| 📨 | нет изложения четырёх истин, которое есть в печати | [mn10:44.3](pathname:///ru/mn10?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |

### Mahāsaṅgīti 2005, печатная (MS05)

Исправляем только явные опечатки: выпавшая или искажённая буква, одно место. Долготу гласных и привычное для издания написание оставляем. Сообщено: [tipitaka2500#1](https://github.com/tipitaka2500/tipitaka2500.github.io/issues/1), [dg-node#73](https://github.com/dhammagift/dg-node/issues/73); полный разбор: [mso-typos.md](https://github.com/dhammagift/offline-data/blob/main/dhammagift/root/build/compare/mso-typos.md).

| | что | где |
|---|---|---|
| ✅ | `ānāmi` → `jānāmi` (8 мест), `yoveti` → `yo vedi`, `kharapattasannitaṁ` → `kharapattasannibhaṁ` | [an1.439:1.3](pathname:///ru/an1.394-574?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [iti99:6.1](pathname:///ru/iti99?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [ja526:41.2](pathname:///ru/ja526?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ➖ | пропущено отрицание `na` | [mn94:3.6](pathname:///ru/mn94?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [pli-tv-kd2:21.1.1](pathname:///ru/pli-tv-kd2?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ➖ | пропущена часть фразы (`pāṇātipātaṁ pahāya`, `so rūpe` …), 9 мест | [an10.217:20.2](pathname:///ru/an10.217?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [sn22.149:1.7](pathname:///ru/sn22.149?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ➖ | лишнее слово, которого нет в других изданиях, 15 мест | [dn9:33.26](pathname:///ru/dn9?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [dn29:30.4](pathname:///ru/dn29?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ➖ | долгота гласной и написание (`dussilyaṁ`, `thinamiddha` …), 150 чтений | [an10.75:9.4](pathname:///ru/an10.75?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [mn10:36.6](pathname:///ru/mn10?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ❗ | на сайте реконструкции нет нескольких отрывков Паттханы | [patthana3.3:1.1](pathname:///ru/patthana3.3?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |

### Buddha Jayanti (BJT)

Сообщено: [tipitaka.lk#154](https://github.com/pathnirvana/tipitaka.lk/issues/154), [dg-node#72](https://github.com/dhammagift/dg-node/issues/72).

| | что | где |
|---|---|---|
| 📨 | слова склеены кавычкой, 4 места |  |
| ➖ | две сутты там, где в MS одна | [sn37.5:1.1](pathname:///ru/sn37.5?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [sn37.15:1.1](pathname:///ru/sn37.15?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |

### Chaṭṭha Saṅgāyana (VRI)

| | что | где |
|---|---|---|
| ✅ | названия правил Патимоккхи и разделов склеивались с текстом | [pli-tv-bu-pm:1.1](pathname:///ru/pli-tv-bu-pm?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ❗ | почти вся книга в первой строке | [ya7.2.1:1.1](pathname:///ru/ya7.2.1?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |

### Siam Rath 1927 (SR)

| | что | где |
|---|---|---|
| ✅ | нет Патимоккхи: показана Патимоккха Махамакута, её вступление целиком в первой строке | [pli-tv-bu-pm:1.1](pathname:///ru/pli-tv-bu-pm?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |

### PTS

| | что | где |
|---|---|---|
| ✅ | начало фразы было оторвано перед пропущенным отрывком, 38 мест | [dn22:18.27](pathname:///ru/dn22?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ➖ | нет строк-концовок и заголовков; Джатака только стихи; нет Нетти и Петакопадесы |  |

### Все издания

| | что | где |
|---|---|---|
| ✅ | строки не на месте возвращены на свои: 577 строк в 73 текстах, ещё 150 строк в 11 текстах, где повторённый абзац сдвигал выравнивание | [sn35.229:1.1](pathname:///ru/sn35.229?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1), [an4.102:3.2](pathname:///ru/an4.102?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1) |
| ❗ | осталось 2772 места, где слово стоит не в своей строке; разбираем по плану, 2 прохода в неделю |  |

Подробнее, со всеми местами: [editions-problems.md](https://github.com/dhammagift/offline-data/blob/main/dhammagift/root/build/compare/editions-problems.md).
## Нашли ошибку?

Пришлите ссылку на строку (**✦ → Ссылка**) и что не так:
[GitHub](https://github.com/dhammagift/offline-data/issues), [Telegram](https://t.me/dhamma_gift) или
[e-mail](mailto:agiftofdhamma@gmail.com).
