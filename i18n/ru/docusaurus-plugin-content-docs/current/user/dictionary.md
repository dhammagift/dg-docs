---
slug: /dictionary
sidebar_position: 4
---

import AppFrame from '@site/src/components/AppFrame';
import PageTools from '@site/src/components/PageTools';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DictPlatformDropdown from '@site/static/img/help/dict-platform-dropdown.png';
import DictMenu from '@site/static/img/help/dict-menu.png';
import DictWordPage from '@site/static/img/help/dict-word-page.png';
import PopupLight from '@site/static/img/help/dict-popup-light.png';
import PopupDark from '@site/static/img/help/dict-popup-dark.png';

# Словарь

<a href="https://dict.dhamma.gift" className="dg-dict-logo">
  <ThemedImage
    alt="Логотип Dict.Dhamma.Gift: pāḷi письмом брахми на зелёной черте"
    sources={{light: useBaseUrl('/img/dict-logo-light.svg'), dark: useBaseUrl('/img/dict-logo-dark.svg')}}
    style={{width: 120, display: 'block'}}
  />
</a>

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
DPD, словари Gandhari и PTS, Buddhadust, Wisdom Library, санскритские словари и
определения из Сутт и Винаи в одном месте.

<AppFrame src="/dict/ru" title="Dict.Dhamma.Gift" height={550} />

### Страница слова

<img src={DictWordPage} alt="Страница слова dukkha: история слева, статья DPD, кнопки у слова" style={{maxWidth: '100%', display: 'block', margin: '0 auto 1.5rem'}} />

- **Слева** — избранное и история слов. Кнопка с часами в шапке скрывает и
  показывает эту колонку, на телефоне открывает список.
- **У слова** — ☆ в избранное (Alt+Q), 🔊 озвучить (Alt+R), скопировать слово
  и ссылку на него.
- **«Открыть на Dhamma.Gift»** — искать слово в текстах сайта (то же делает Alt+3).
- Двойной клик по любому слову в статье — тоже поиск.

### Меню ☰

<img src={DictMenu} alt="Меню словаря: найти на странице, компас, язык, тема, размер шрифта, настройки, справка" style={{maxWidth: 'min(330px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

- **Найти на странице** (Alt+F) — поиск по открытой статье, как на сайте.
- **Компас** (Alt+P) — быстрое окно Dhamma.Gift: избранное и история сайта,
  ключевые сутты, «Запоминание».
- **Вид** — язык интерфейса, светлая или тёмная тема, размер шрифта
  (Alt+− / Alt+= / Alt+0).
- **Настройки** (Alt+Shift+S) — всё остальное: шрифт с засечками, написание
  ниггахиты (ṃ/ṁ), какие разделы статьи раскрывать сразу, режим «по одному
  разделу за раз», символ сандхи (’), голос озвучки, ссылки на проекты,
  очистка истории и сброс настроек.
- **Справка** (Alt+H) — эта страница.

### Другие словари — Alt+S

Кнопка с книжкой в поле поиска (или Alt+S) открывает то же слово в других
словарях и ресурсах:

<img src={DictPlatformDropdown} alt="Меню «Искать это слово в другом словаре»" style={{maxWidth: 'min(520px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

- **Dhamma.Gift и DharmaMitra.org** — поиск по текстам и грамматический разбор.
- **Палийские словари** — PTS Dictionary, Cone (Gandhari.org), DPR Analysis,
  Critical Pali Dictionary (CPD).
- **Санскритские словари** — Monier-Williams и другие словари
  sanskrit-lexicon.uni-koeln.de, Glosbe Pāḷi-Sanskrit, Sanskrit Dictionary,
  LearnSanskrit.
- **Другие ресурсы** — WisdomLib, Google Custom Search, Aksharamukha
  (конвертер письма).

### Горячие клавиши словаря

| Клавиша | Действие |
|---|---|
| `/` | Активировать поле поиска |
| Alt+M | Меню |
| Alt+P или Alt+Y | Компас — быстрое окно Dhamma.Gift |
| Alt+F | Найти на странице |
| Alt+S | Искать слово в другом словаре |
| Alt+Shift+S | Настройки |
| Alt+H | Справка |
| Alt+Q | Слово в избранное |
| Alt+R | Озвучить слово |
| Alt+T | Переключить тему |
| Alt+− / Alt+= / Alt+0 | Мельче / крупнее / обычный размер шрифта |
| Alt+1 | Переключить язык интерфейса (En/Ru) |
| Alt+2 | Оглавление Dhamma.Gift |
| Alt+3 | Это слово в поиске Dhamma.Gift |

## Отдельный сайт и расширения для браузеров

Dict.Dhamma.Gift — отдельный сайт, его можно открывать напрямую:
[dict.dhamma.gift](https://dict.dhamma.gift). Всплывающий словарь DPD есть и
вне Dhamma.Gift — как [расширение для браузеров](/browser-extension) (Chrome,
Firefox, Edge, Opera) и как скрипт Tampermonkey
([установка](https://github.com/dhammagift/dictPlugin/blob/main/ExtentionMethod.md));
плагин можно встроить на любой сайт
([описание](https://github.com/dhammagift/dictPlugin?tab=readme-ov-file#dictplugin)).
