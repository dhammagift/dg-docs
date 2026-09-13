---
slug: /dictionary
sidebar_position: 4
---

import AppFrame from '@site/src/components/AppFrame';
import PageTools from '@site/src/components/PageTools';
import ThemedImage from '@theme/ThemedImage';
import DictPlatformDropdown from '@site/static/img/help/dict-platform-dropdown.png';
import PopupLight from '@site/static/img/help/dict-popup-light.png';
import PopupDark from '@site/static/img/help/dict-popup-dark.png';

# Словарь

Словарь встроен в сайт: он всплывает по клику на палийское слово при чтении и
открывается во вкладке «Словарь» в [Быстром окне](/quickmodal). Встроенный
словарь — **DPD** (Digital Pāḷi Dictionary). Полная версия со всеми словарями —
отдельный сайт [dict.dhamma.gift](https://dict.dhamma.gift), о нём ниже.

## Попробуйте на этой странице

Словарь подключён прямо здесь: нажмите на палийское слово — *bhagavā*,
*dukkha*, *nibbāna*. Значок <PageTools inline termSelector="em" /> включает и
выключает словарь; на сайте то же делает **Alt+A**.

## Выберите режим словаря и попробуйте в ридере

Ниже настоящая страница ридера с открытыми быстрыми настройками. В блоке
«Словарь» выберите язык и режим, затем нажмите на любое палийское слово в
тексте. На сайте быстрые настройки открываются значком с ползунками в поле
поиска или **Alt+S**.

<AppFrame src="/ru/mn1?quick=1" title="Ридер MN 1 с быстрыми настройками" height={560} />

Режимы в списке: встроенный DPD, Dict.DG во всплывающем или новом окне
(компактный или полный), DharmaMitra.org, только поиск по суттам и внешние
приложения (DictTango, Mdict, GoldenDict-NG). **Alt+B** переключает режим.

### Мультивыбор: словосочетания и предложения

Клик открывает одно слово. Чтобы найти словосочетание или перевести целое
предложение, включите мультивыбор — значок выделения в панели ридера или
**Alt+J** — и выделите нужный кусок палийского текста. Через 3 секунды
выделенное само откроется в словаре выбранного режима. Для перевода и
разбора предложения удобен режим DharmaMitra.org или правый клик по кнопке
**DG** в окне словаря. Задержку (3 или 5 секунд) можно поменять в
[настройках](/settings), пункт «Мульти-селект».

## Окно словаря

<ThemedImage
  alt="Статья словаря для слова bhagavā с кнопками в правом верхнем углу"
  sources={{light: PopupLight, dark: PopupDark}}
  style={{maxWidth: '100%', width: 640, display: 'block', margin: '1rem auto'}}
/>

| Кнопка | Что делает |
|---|---|
| 🔍 | Ищет слово в текстах на Dhamma.Gift |
| **DG** | Открывает слово в полной версии словаря — dict.dhamma.gift |
| **DG** правой кнопкой мыши, колёсиком или долгим нажатием на телефоне | Открывает DharmaMitra — грамматический разбор и исследование слова |
| ✕ | Закрывает окно (Esc) |

Окно можно перетаскивать за заголовок и менять его размер за правый нижний угол.

## Полная версия: Dict.Dhamma.Gift

[Dict.Dhamma.Gift](https://dict.dhamma.gift) — не один словарь, а платформа:
собственная страница так и называется «Пали Мультисловарь», а её манифест
описывает её как «Pāḷi multi-dictionary combining DPD, Gandhari, PTS,
Sanskrit and Sutta-Vinaya definitions in one place». Кнопка 📘 рядом с полем
поиска открывает доступ сразу ко всем источникам — см. ниже.

<AppFrame src="/dict/ru" title="Dict.Dhamma.Gift" height={550} />

### Горячие клавиши словаря

| Клавиша | Действие |
|---|---|
| `/` | Активировать поле поиска |
| Alt+1 | Переключить язык интерфейса (En/Ru) |
| Alt+2 | Открыть Dhamma.Gift (без текущего слова) |
| Alt+3 | Открыть Dhamma.Gift с текущим запросом |
| Alt+T | Переключить тему |

Двойной клик по любому слову в статье — тоже поиск.

### Вся платформа сразу — кнопка 📘

<img src={DictPlatformDropdown} alt="Меню Dict.Dhamma.Gift со всеми подключёнными словарями" style={{maxWidth: 320, display: 'block', margin: '0 auto 1.5rem'}} />

- **Быстрые ссылки** — поиск через Dhamma.Gift, DharmaMitra.org.
- **Палийские словари** — PTS Dictionary, Cone (Gandhari.org), DPR Analysis,
  Critical Pali Dictionary (CPD).
- **Санскритские словари** — Monier-Williams и ещё три словаря с
  sanskrit-lexicon.uni-koeln.de (Śabda-sāgara, Apte, Macdonell), Glosbe
  Pāḷi-Sanskrit, Sanskrit Dictionary, LearnSanskrit.
- **Другие ресурсы** — WisdomLib, Google Custom Search, Aksharamukha
  (конвертер письма).

### Настройки отображения

В панели справа — размер шрифта, тёмная/светлая тема, засечки шрифта,
написание нигга̄хиты (ṃ/ṁ), сворачивание разделов грамматики/примеров/сводки
по умолчанию, режим «по одному разделу за раз» (аккордеон вместо всего
сразу), символ сандхи (’), озвучка мужским/женским голосом и показ/скрытие
ссылок на источники.

## Отдельный сайт и расширения для браузеров

Dict.Dhamma.Gift — отдельный сайт, его можно открывать напрямую:
[dict.dhamma.gift](https://dict.dhamma.gift). Всплывающий словарь DPD есть и
вне Dhamma.Gift — как [расширение для браузеров](/browser-extension) (Chrome,
Firefox, Edge, Opera) и как скрипт Tampermonkey
([установка](https://github.com/dhammagift/dictPlugin/blob/main/ExtentionMethod.md));
плагин можно встроить на любой сайт
([описание](https://github.com/dhammagift/dictPlugin?tab=readme-ov-file#dictplugin)).
