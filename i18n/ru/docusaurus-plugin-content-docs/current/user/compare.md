---
title: "Сравнение: Издания Пали Рядом"
description: "Любой текст Палийского канона сразу в шести изданиях с подсветкой отличий. Что мы исправили и как сообщить об ошибке."
slug: /compare
sidebar_position: 3
---

import CompareDiff from '@site/static/img/help/compare-diff.png';

# Сравнение: издания пали рядом

Любой текст можно читать сразу в шести изданиях пали, строка за строкой, с подсветкой отличий.

| Метка | Издание | Страна | Источник |
|---|---|---|---|
| **BJT** | Будда Джаянти | Шри-Ланка | [tipitaka.lk](https://tipitaka.lk) |
| **SR** | Сиам Рат 1927 | Таиланд | E-Tipitaka |
| **VRI** | Чаттха Сангаяна | Мьянма | [tipitaka.org](https://tipitaka.org) |
| **MS** | Махасангити (SuttaCentral) | Таиланд | [SuttaCentral](https://suttacentral.net) |
| **MS05** | Махасангити 2005, печатная | Таиланд | [tipitaka2500.github.io](https://tipitaka2500.github.io) |
| **PTS** | Pali Text Society | Великобритания | [GRETIL](https://gretil.sub.uni-goettingen.de/) |

## Как сравнивать

- **✦ → Сравнить** на любой строке открывает текст во всех изданиях, отличия уже включены.
- Издания выбираются в [Настройках](/settings) или в быстрых настройках ридера. В колонках (**Alt+C**) **−** / **+**
  убирают или добавляют колонку.
- Переключатель **Отличия** подсвечивает то, чего нет у большинства показанных изданий.

<img src={CompareDiff} alt="SN 56.11 в Махасангити, Будда Джаянти и Чаттха Сангаяне с включёнными отличиями" style={{maxWidth: 'min(720px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

Попробуйте: [sn56.11](pathname:///ru/sn56.11?mode=multi&editions=ms,bjt,my,th,mso,pts&diff=1).

## Что мы исправили

- **SuttaCentral (MS):** `aparimutto` → `parimutto` (sn35.19, sn35.20), `Idha, bhikkhave` → `Idhāvuso` (dn33) и другие
  ошибки против печатного издания —
  [dg-node#71](https://github.com/dhammagift/dg-node/issues/71), [sc-data#463](https://github.com/suttacentral/sc-data/issues/463).
- **Будда Джаянти:** слова, склеенные кавычкой —
  [dg-node#72](https://github.com/dhammagift/dg-node/issues/72), [tipitaka.lk#154](https://github.com/pathnirvana/tipitaka.lk/issues/154).
- **Махасангити 2005:** `ānāmi` → `jānāmi` (AN 1.439–446) и 278 чтений отправлены на проверку —
  [dg-node#73](https://github.com/dhammagift/dg-node/issues/73), [tipitaka2500#1](https://github.com/tipitaka2500/tipitaka2500.github.io/issues/1).
- **Строки не на месте:** 577 строк в 73 текстах возвращены на свои места (sn35.229, sn24.5 и другие).

## Нашли ошибку?

Пришлите ссылку на строку (**✦ → Ссылка**) и что не так:
[GitHub](https://github.com/dhammagift/offline-data/issues), [Telegram](https://t.me/dhamma_gift) или
[e-mail](mailto:agiftofdhamma@gmail.com).
