---
title: "6 изданий Пали рядом"
description: "Любая сутта построчно в 6 изданиях Пали: Махасангити, Буддха Джаянти (Шри-Ланка), Чаттха Сангаяна (Мьянма), Сиам Ратх (Таиланд), Махасангити 2005 и PTS, с подсветкой различий."
keywords: [Pali Canon editions, Tipitaka comparison, BJT, VRI, Chattha Sangayana, Siam Rath, PTS, Mahasangiti, издания Палийского канона, сравнение Типитаки]
slug: /compare
sidebar_position: 3
---

import CompareDiff from '@site/static/img/help/compare-diff.png';

# Сравнение: издания пали рядом

Любой текст можно читать сразу в шести изданиях пали, строка за строкой, с подсветкой отличий.

| Метка | Издание | Тип издания | Источник |
|---|---|---|---|
| **SR** | Siam Rath 1927 | национальное, Таиланд | E-Tipitaka |
| **BJT** | Buddha Jayanti (1957-1993) | национальное, Шри-Ланка | [Tipitaka.lk](https://tipitaka.lk) |
| **VRI** | Chaṭṭha Saṅgāyana (Шестой собор, 1954-1956) | национальное, Мьянма | [Tipitaka.org](https://tipitaka.org) |
| **MS05** | Mahāsaṅgīti 2005, печатная | производное: издание Шестого собора (Мьянма) латиницей | [Tipitaka2500.github.io](https://tipitaka2500.github.io) |
| **MS** | Mahāsaṅgīti | производное от MS05: сегменты и правки SuttaCentral | [SuttaCentral](https://suttacentral.net) |
| **PTS** | Pali Text Society (1880-е и позже) | критическое, европейское: по рукописям Шри-Ланки, Мьянмы, Таиланда | [GRETIL](https://gretil.sub.uni-goettingen.de/) |

Порядок колонок: сначала национальные издания, от меньшего числа поздних текстов в Khuddaka Nikāya к большему: Siam Rath не включает Milindapañha, Nettippakaraṇa и Peṭakopadesa, Buddha Jayanti включает два последних, Chaṭṭha Saṅgāyana все три. Затем Mahāsaṅgīti: печатная, потом её версия SuttaCentral (мьянманский текст) и последним PTS, критическое издание.

Национальных изданий три: SR, BJT, VRI. MS05 и MS производные от мьянманского, поэтому с VRI почти совпадают.

## Как сравнивать

- **✦ → Сравнить** на любой строке открывает текст во всех изданиях и всех переводах на ваших языках, отличия уже
  включены; ваши собственные настройки «Сравнить» не меняются.
- Режим ридера **«Сравнить»** (**Alt+Shift+2**) по умолчанию показывает все издания, перевод на основном языке и
  отличия. Что вы там поменяете (издания, строки или колонки, переводчиков, отличия), сохраняется.
- Издания выбираются в [Настройках](/settings) или в быстрых настройках ридера. В колонках (**Alt+C**) **−** / **+**
  убирают или добавляют колонку.
- Переключатель **Отличия** подсвечивает то, чего нет у большинства показанных изданий.

<img src={CompareDiff} alt="SN 56.11 в Mahāsaṅgīti, Buddha Jayanti и Chaṭṭha Saṅgāyana с включёнными отличиями" style={{maxWidth: 'min(720px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

Попробуйте: [sn56.11](https://dhamma.gift/sn56.11?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru).

## Проблемы изданий и что мы сделали

✅ исправлено у нас · 📨 сообщено изданию · ➖ оставлено как в издании, видно в отличиях · ❗ ещё не решено

### Siam Rath 1927 (SR)

| | что | где |
|---|---|---|
| ✅ | нет Патимоккхи: показана Патимоккха Махамакута, её вступление целиком в первой строке | [pli-tv-bu-pm:1.1](https://dhamma.gift/pli-tv-bu-pm?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |

### Buddha Jayanti (BJT)

Сообщено: [tipitaka.lk#154](https://github.com/pathnirvana/tipitaka.lk/issues/154), [dg-node#72](https://github.com/dhammagift/dg-node/issues/72).

| | что | где |
|---|---|---|
| 📨 | слова склеены кавычкой, 4 места |  |
| ➖ | две сутты там, где в MS одна | [sn37.5:1.1](https://dhamma.gift/sn37.5?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [sn37.15:1.1](https://dhamma.gift/sn37.15?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |

### Chaṭṭha Saṅgāyana (VRI)

| | что | где |
|---|---|---|
| ✅ | названия правил Патимоккхи и разделов склеивались с текстом | [pli-tv-bu-pm:1.1](https://dhamma.gift/pli-tv-bu-pm?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| ❗ | почти вся книга в первой строке | [ya7.2.1:1.1](https://dhamma.gift/ya7.2.1?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |

### Mahāsaṅgīti 2005, печатная (MS05)

Исправляем только явные опечатки: выпавшая или искажённая буква, одно место. Долготу гласных и привычное для издания написание оставляем. Сообщено: [tipitaka2500#1](https://github.com/tipitaka2500/tipitaka2500.github.io/issues/1), [dg-node#73](https://github.com/dhammagift/dg-node/issues/73); полный разбор: [mso-typos.md](https://github.com/dhammagift/offline-data/blob/main/dhammagift/root/build/compare/mso-typos.md).

| | что | где |
|---|---|---|
| ✅ | `ānāmi` → `jānāmi` (8 мест), `yoveti` → `yo vedi`, `kharapattasannitaṁ` → `kharapattasannibhaṁ` | [an1.439:1.3](https://dhamma.gift/an1.394-574?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [iti99:6.1](https://dhamma.gift/iti99?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [ja526:41.2](https://dhamma.gift/ja526?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| ➖ | пропущено отрицание `na` | [mn94:3.6](https://dhamma.gift/mn94?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [pli-tv-kd2:21.1.1](https://dhamma.gift/pli-tv-kd2?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| ➖ | пропущена часть фразы (`pāṇātipātaṁ pahāya`, `so rūpe` …), 9 мест | [an10.217:20.2](https://dhamma.gift/an10.217?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [sn22.149:1.7](https://dhamma.gift/sn22.149?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| ➖ | лишнее слово, которого нет в других изданиях, 15 мест | [dn9:33.26](https://dhamma.gift/dn9?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [dn29:30.4](https://dhamma.gift/dn29?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| ➖ | долгота гласной и написание (`dussilyaṁ`, `thinamiddha` …), 150 чтений | [an10.75:9.4](https://dhamma.gift/an10.75?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [mn10:36.6](https://dhamma.gift/mn10?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| ❗ | на сайте реконструкции нет нескольких отрывков Паттханы | [patthana3.3:1.1](https://dhamma.gift/patthana3.3?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |

### Mahāsaṅgīti (MS)

Ошибки версии SuttaCentral: внесены их правками, в печатном издании их нет. Сообщено: [sc-data#463](https://github.com/suttacentral/sc-data/issues/463), [dg-node#71](https://github.com/dhammagift/dg-node/issues/71).

| | что | где |
|---|---|---|
| 📨 | `aparimutto` вместо `parimutto`: смысл наоборот | [sn35.19:2.9](https://dhamma.gift/sn35.19?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [sn35.20:2.2](https://dhamma.gift/sn35.20?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| 📨 | `Idha, bhikkhave` вместо `Idhāvuso` | [dn33:1.11.85](https://dhamma.gift/dn33?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| 📨 | два сегмента в обратном порядке | [sn22.7:8.2](https://dhamma.gift/sn22.7?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| 📨 | пропущено `vā`; `ammukhāvinayena` вместо `sammukhāvinayena` | [pli-tv-bu-vb-ss13:2.8](https://dhamma.gift/pli-tv-bu-vb-ss13?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [pli-tv-pvr5:122.4](https://dhamma.gift/pli-tv-pvr5?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| 📨 | английская пометка «On Display: Title of Section Only» вместо пали | [sn48.137-146:1.1](https://dhamma.gift/sn48.137-146?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [sn50.67-76:1.1](https://dhamma.gift/sn50.67-76?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| 📨 | нет изложения четырёх истин, которое есть в печати | [mn10:44.3](https://dhamma.gift/mn10?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |

### PTS

| | что | где |
|---|---|---|
| ✅ | начало фразы было оторвано перед пропущенным отрывком, 38 мест | [dn22:18.27](https://dhamma.gift/dn22?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| ❗ | три воззрения изложены почти одинаковыми формулами: блок второго стоит на месте первого | [mn60:7.1](https://dhamma.gift/mn60?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| ➖ | нет строк-концовок и заголовков; Джатака только стихи; нет Нетти и Петакопадесы |  |

### Все издания

| | что | где |
|---|---|---|
| ✅ | строки не на месте возвращены на свои: 577 строк в 73 текстах, ещё 150 строк в 11 текстах, где повторённый абзац сдвигал выравнивание | [sn35.229:1.1](https://dhamma.gift/sn35.229?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru), [an4.102:3.2](https://dhamma.gift/an4.102?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1&lang=ru) |
| ❗ | осталось 1995 мест, где слово стоит не в своей строке (ещё 777 мест издание печатает отрывок дважды, это не ошибка); разбираем по плану, 2 прохода в неделю |  |

Подробнее, со всеми местами: [editions-problems.md](https://github.com/dhammagift/offline-data/blob/main/dhammagift/root/build/compare/editions-problems.md).
## Нашли ошибку?

Пришлите ссылку на строку (**✦ → Ссылка**) и что не так:
[GitHub](https://github.com/dhammagift/offline-data/issues), [Telegram](https://t.me/dhamma_gift) или
[e-mail](mailto:agiftofdhamma@gmail.com).
