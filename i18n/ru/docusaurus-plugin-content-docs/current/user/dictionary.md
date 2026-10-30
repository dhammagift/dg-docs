---
title: "Словарь Пали"
description: "Dict.Dhamma.Gift — словарная платформа: много словарей пали и санскрита на одной странице. В ридере клик по слову открывает статью прямо поверх текста, и без интернета."
slug: /dictionary
sidebar_position: 4
---

import AppFrame from '@site/src/components/AppFrame';
import PageTools from '@site/src/components/PageTools';
import SiteLink from '@site/src/components/SiteLink';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DictPlatformDropdown from '@site/static/img/help/dict-platform-dropdown.png';
import DictMenu from '@site/static/img/help/dict-menu.png';
import DictWordPage from '@site/static/img/help/dict-word-page.png';
import PopupLight from '@site/static/img/help/dict-popup-light.png';
import PopupDark from '@site/static/img/help/dict-popup-dark.png';

# Словарь

<a href="https://dict.dhamma.gift" className="dg-page-logo">
  <ThemedImage
    alt="Логотип Dict.Dhamma.Gift: pāḷi письмом брахми на зелёной черте"
    sources={{light: useBaseUrl('/img/dict-logo-light.svg'), dark: useBaseUrl('/img/dict-logo-dark.svg')}}
    style={{width: 88, display: 'block'}}
  />
</a>

<div style={{display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', margin: '1rem 0'}}>
  <a href="https://apps.apple.com/app/dict-dhamma-gift/id6816639947"><img src="/assets/img/buttons/appstore-cta.png" alt="Скачать Dict.Dhamma.Gift в App Store" style={{maxWidth: '200px'}} /></a>
  <SiteLink to="/apps?app=dict"><img src="/assets/img/buttons/google-play-cta.png" alt="Скачать Dict.Dhamma.Gift в Google Play" style={{maxWidth: '200px'}} /></SiteLink>
  <a href="https://apps.microsoft.com/detail/9P3B7HLRXXGC"><img src="/assets/img/buttons/msstore-cta.png" alt="Скачать Dict.Dhamma.Gift из Microsoft Store" style={{maxWidth: '200px'}} /></a>
</div>

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

Режимы в списке: встроенный DPD, Dict.DG во всплывающем окне, в новом окне
или в мини-версии, DharmaMitra.org, только поиск и внешние приложения
(DPD Android, DictTango Android, Mdict iOS, GoldenDict-NG Desktop). **Alt+B**
переключает режим.

Режим **встроенный DPD** работает полностью офлайн: данные словаря
загружаются один раз (скриптом, на английском или русском), и дальше
каждый лукап идёт локально в браузере — без обращения к dict.dhamma.gift
или куда-либо ещё. Это меньшая, однословарная альтернатива полной
платформе Dict.Dhamma.Gift ниже, для чтения без интернета или при плохой
связи.

Если слова нет во встроенном DPD, вместо статьи появятся две ссылки:
**Искать на Dhamma.gift** и **Искать в полной версии Dict.Dhamma.Gift**.

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

Тот же словарь есть на сайте — [dhamma.gift/dict](https://dhamma.gift/dict),
и там он работает без интернета. Если дописать слово к адресу, откроется его
страница: [dhamma.gift/dict/dukkha](https://dhamma.gift/dict/dukkha).

### Страница слова

<img src={DictWordPage} alt="Страница слова dukkha: история слева, статья DPD, кнопки у слова" style={{maxWidth: '100%', display: 'block', margin: '0 auto 1.5rem'}} />

- **Слева** — избранное и история слов. Кнопка с часами в шапке скрывает и
  показывает эту колонку, на телефоне открывает список.
- **У слова** — ☆ в избранное (Alt+Q), 🔊 озвучить (Alt+R), скопировать слово
  и ссылку на него.
- **«Открыть на Dhamma.Gift»** — искать слово в текстах сайта (то же делает Alt+3).
- Двойной клик по любому слову в статье — тоже поиск.
- Блоки словарей можно переставлять выше и ниже (↑/↓). В блоке санскритских
  словарей +/− раскрывает или сворачивает их все.

### Меню ☰

<img src={DictMenu} alt="Меню словаря: найти на странице, компас, язык, тема, размер шрифта" style={{maxWidth: 'min(330px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

Меню (Alt+M) — одна панель:

- **Найти на странице** (Alt+F) — поиск по открытой статье, как на сайте.
- **Вид** — язык интерфейса, светлая или тёмная тема, размер шрифта
  (Alt+− / Alt+= / Alt+0), шрифт без засечек или с засечками, написание
  ниггахиты (ṃ/ṁ).
- **Что раскрывать сразу** — какие разделы статьи открыты с самого начала
  (грамматика, примеры, сводка) и режим «по одному разделу за раз».
- **Текст и звук** — символ сандхи (’), голос озвучки, ссылки на проекты.
- **Данные** — офлайн-словарь, очистка истории и избранного, сброс настроек.

Справка (?, Alt+H) и «Поделиться» — значки в шапке меню. На dhamma.gift/dict
в меню есть ещё **Компас** (Alt+P) — быстрое окно Dhamma.Gift с избранным и
историей сайта, ключевыми суттами и «Запоминанием».

### Офлайн мини-словарь

В **Меню → Данные** кнопка **скачать** сохраняет небольшой набор
данных DPD (~5,8 МБ) прямо в браузере. После скачивания он работает как
автоматический fallback: если живой лукап не может достучаться до
сервера, страница покажет краткую статью из скачанных данных вместо
этого — отдельно включать «офлайн-режим» не нужно, он просто срабатывает
по необходимости. После скачивания кнопка превращается в **удалить** —
освободить место обратно.

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
| Alt+M или Alt+Shift+S | Меню |
| Alt+P или Alt+Y | Компас — быстрое окно Dhamma.Gift (только на dhamma.gift/dict) |
| Alt+F | Найти на странице |
| Alt+S | Искать слово в другом словаре |
| Alt+H | Справка |
| Alt+Q | Слово в избранное |
| Alt+R | Озвучить слово |
| Alt+T | Переключить тему |
| Alt+− / Alt+= / Alt+0 | Мельче / крупнее / обычный размер шрифта |
| Alt+1 | Переключить язык интерфейса (En/Ru) — или клик по «Pāḷi → Ru/En» рядом с логотипом |
| Alt+2 | Оглавление Dhamma.Gift |
| Alt+3 | Это слово в поиске Dhamma.Gift |

## Приложение Dict.Dhamma.Gift

У приложения для телефонов есть свои возможности:

- **Выделите слово в любом приложении** (Android) — Dict.Dhamma.Gift есть в
  меню выделенного текста рядом с «Копировать» (или под ⋮) и открывает слово.
- **Поделиться** — отправьте слово или ссылку в Dict.Dhamma.Gift. На iPhone и
  iPad статья открывается прямо в окне «Поделиться».
- **Буквы пали над клавиатурой** — ā ī ū ṁ ṅ ñ ṭ ḍ ṇ ḷ и кнопка «Вставить»;
  «…» открывает второй ряд для санскрита. Ряд можно выключить в меню.
- **Недавние слова на значке** — долгое нажатие на значок приложения
  открывает одно из последних слов.
- **Быстрый запуск** — плитка в быстрых настройках Android и кнопка в Пункте
  управления на iOS 18 и новее.

## Отдельный сайт и расширения для браузеров

Dict.Dhamma.Gift — отдельный сайт, его можно открывать напрямую:
[dict.dhamma.gift](https://dict.dhamma.gift). Он работает и вне
Dhamma.Gift — как [расширение для браузеров](/browser-extension) (Chrome,
Firefox, Edge, Opera), по умолчанию в боковой панели. Всплывающий словарь DPD
есть как скрипт Tampermonkey
([установка](https://github.com/dhammagift/dictPlugin/blob/main/ExtentionMethod.md));
плагин можно встроить на любой сайт
([описание](https://github.com/dhammagift/dictPlugin?tab=readme-ov-file#dictplugin)).
