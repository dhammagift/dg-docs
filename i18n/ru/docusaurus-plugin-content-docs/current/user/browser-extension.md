---
title: "Браузерное Расширение: Словарь Пали на Любом Сайте"
description: "Выделите или кликните слово на любом сайте, чтобы увидеть статью DPD, PTS и других словарей пали и санскрита, и искать по суттам."
slug: /browser-extension
sidebar_position: 15
---

import ExtensionMock from '@site/src/components/ExtensionMock';

# Браузерное расширение

Поиск по суттам и всплывающий словарь Dict.Dhamma.Gift — DPD, PTS,
Gandhari, санскритские словари и другие — на любом сайте: выделите слово
или фразу (или просто кликните по слову), и расширение покажет словарную
статью на месте, без перехода на другой сайт.

В настройках расширения выбирается, где открывать результат: Side Panel
(боковая панель, по умолчанию), New Window, Popup, Compact, Dharmamitra,
GoldenDict-NG, DictTango App, MDict (macOS) или свой адрес (Custom URL). Там
же задаётся язык по умолчанию: English или Русский.

Правый клик по выделенной фразе — поиск по текстам Dhamma.gift или полный
грамматический разбор через DharmaMitra. Правый клик по значку расширения на
панели браузера открывает быстрые ссылки на Dhamma.gift, Dict.Dhamma.Gift,
Aksharamukha и DharmaMitra. Включается и выключается кликом по значку или
сочетанием клавиш: по умолчанию `Ctrl+Shift+X` (на Mac — `Control+Shift+X`). В Firefox `Ctrl+Shift+Y` (`Cmd+Shift+Y` на Mac)
открывает боковую панель. Сочетания можно поменять в настройках браузера.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', margin: '1rem 0'}}>
  <a href="https://chromewebstore.google.com/detail/dhammagift-search-and-wor/dnnogjdcmhbiobpnkhdbfnfjnjlikabd"><img src="/assets/img/buttons/chrome-cta.png" alt="Chrome Web Store" style={{maxWidth: '180px'}} /></a>
  <a href="https://addons.mozilla.org/en-US/firefox/addon/dhamma-gift/"><img src="/assets/img/buttons/firefox-cta.png" alt="Firefox Add-ons" style={{maxWidth: '180px'}} /></a>
  <a href="https://microsoftedge.microsoft.com/addons/detail/dhammagift-search-and-wo/aokegkhdaijkikbdocanadeghllhfmhj"><img src="/assets/img/buttons/edge-cta.png" alt="Microsoft Edge Store" style={{maxWidth: '180px'}} /></a>
  <a href="https://chromewebstore.google.com/detail/dhammagift-search-and-wor/dnnogjdcmhbiobpnkhdbfnfjnjlikabd"><img src="/assets/img/buttons/opera-cta.png" alt="Opera: установка из Chrome Web Store" style={{maxWidth: '180px'}} /></a>
</div>

Отдельной страницы в каталоге Opera нет: в Opera расширение ставится из
Chrome Web Store (кнопка Opera выше ведёт туда).

Скрипт для Tampermonkey (подходит и для Safari — там расширений нет, но
скрипт работает так же): [инструкция по установке](https://github.com/dhammagift/dictPlugin/blob/main/ExtentionMethod.md).
Плагин всплывающего словаря можно встроить на любой сайт — [описание здесь](https://github.com/dhammagift/dictPlugin?tab=readme-ov-file#dictplugin).

<ExtensionMock />

:::note[Мокап вместо скриншота]
Попап выше — не настоящий скриншот расширения (расширение нельзя встроить
как `<iframe>`, как остальные примеры в этом разделе документации), а
мокап, собранный из реальных цветов и вида интерфейса самого расширения
(`dictPlugin/.../content.js`: фон `#E1EBED`/`#07021D`, `border-radius:
8px`, красная кнопка закрытия `rgba(206,5,32,...)`). Настоящий скриншот
можно добавить взамен в любой момент.
:::
