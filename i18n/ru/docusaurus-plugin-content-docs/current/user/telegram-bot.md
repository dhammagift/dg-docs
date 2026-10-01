---
slug: /telegram-bot
sidebar_position: 16
---

import InlineSutta from '@site/static/img/telegram/inline-sutta.png';
import MessageSutta from '@site/static/img/telegram/message-sutta.png';
import InlineUposatha from '@site/static/img/telegram/inline-uposatha.png';
import MessageUposatha from '@site/static/img/telegram/message-uposatha.png';

# Telegram-бот

<div style={{textAlign: 'center', margin: '1em 0'}}>
  <a href="https://t.me/dgift_bot"><img src="/assets/img/buttons/telegram-cta.png" alt="Открыть @dgift_bot в Telegram" style={{maxWidth: '220px'}} /></a>
</div>

Это один и тот же бот под двумя именами — [@Dhammagift_bot](https://t.me/dhammagift_bot)
и его короткая форма [@Dgift_bot](https://t.me/dgift_bot) — функциональность
одинаковая. Работает он двумя способами:

- **в любом чате или группе, без отдельного чата с ним** — как инлайн-бот:
  наберите `@dgift_bot` прямо в поле ввода и продолжайте печатать;
- **в своём чате** — пришлите ему слово или номер текста либо используйте команду.

## В любом чате (инлайн)

Наберите `@dgift_bot`, а дальше слово на пали (`kacchapa`), номер текста (`mn10`,
`sn56.11`) или транслитерацию Вельтхуиса (`.t .d .n ~n aa ii uu` → `ṭ ḍ ṇ ñ ā ī ū`,
поэтому `satipa.t.thaana` работает так же, как `satipaṭṭhāna`). Telegram отвечает:

- `✏️ Отправить: <текст>` — основной результат: этот текст со ссылками на сайт и
  словарь;
- слова из словаря, похожие на набранное, — выберите нужное, и в сообщении будет
  правильное написание с диакритикой.

<img src={InlineSutta} alt="@dgift_bot sn56.11 в поле ввода: Отправить: sn56.11, sn56.11 Dhammacakkappavattanasutta, sn56.111-113 Devamanussanirayādisutta" style={{maxWidth: '100%', borderRadius: 10}} />

Над списком есть кнопка — `🔎 Открыть Dhamma.gift Ru: sn56.11` — она открывает
Dhamma.gift мини-приложением с уже выполненным поиском.

Выбранный результат уходит в чат сообщением бота: текст, ссылки и кнопки под
сообщением.

<img src={MessageSutta} alt="Отправленное сообщение: sn56.11 со ссылками Dhamma.gift и Словарь и кнопками Язык Ru/En, Словарь, Читать на Dhamma.gift Ru" style={{maxWidth: '100%', borderRadius: 10}} />

- переключатель языка (`Язык Ru/En`) — то же сообщение на другом языке;
- `📘 Словарь` — слово в словарях;
- `Читать на 🔎 Dhamma.gift Ru` — текст на сайте.

Лишнее слово ссылку не ломает: `mn10 metta` всё равно открывает `mn10`.

## В своём чате с ботом

Пришлите боту слово или номер текста — получите то же сообщение, что и выше.
Команды:

| Команда | Что делает |
| --- | --- |
| `/start` | приветствие и переключатель языка интерфейса |
| `/extra` | ссылки на мини-приложения: поиск, чтение, словарь |
| `/uposatha` | дни Упосатхи на ближайшие 30 дней |
| `/help` | справка (в работе) |

Мини-приложения — тот же сайт в окне Telegram:

- [поиск](http://t.me/dgift_bot/find),
- [чтение](http://t.me/dgift_bot/read),
- [словарь](http://t.me/dgift_bot/dict) —
  у английского бота тот же набор по адресам `t.me/dhammagift_bot/…`.

Рядом с полем ввода есть ещё кнопка меню (`DG ru` / `DG en`): она открывает
dhamma.gift мини-приложением на выбранном языке.

## Язык

Бот отвечает на языке, выбранном для пользователя: `/start` предлагает
переключить, и под каждым сообщением есть кнопка языка (`Язык Ru/En` /
`Lang En/Ru`). Выбор запоминается и влияет на ссылки: русский интерфейс ведёт на
`dhamma.gift/ru` и `dict.dhamma.gift/ru`.

## Дни Упосатхи

`/uposatha` — ближайшие 30 дней так, как их считают сутты: 8-й, 14-й и 15-й
лунный день каждой половины месяца, шесть дней в месяц. Без города это список
для Бодхгаи, где день идёт с 18:00 до 18:00.

`/uposatha Алматы` — те же дни, но с настоящими временами Солнца для города:
когда день начинается (закат), рассвет, полдень и когда заканчивается
(следующий закат). Город запоминается, поэтому `/uposatha` без города
продолжает показывать его; `/uposatha reset` — забыть. Город ищется в
локальном справочнике всех городов крупнее ~15 000 человек (34 тысячи
городов, опечатки прощаются), для остальных — геокодер Open-Meteo.

В любом чате: `@dgift_bot упосатха` или `@dgift_bot упосатха Алматы`.

<img src={InlineUposatha} alt="@dgift_bot uposatha bodh gaya в поле ввода: Uposatha days, next 30 days — Bodh Gaya, Bihar, India" style={{maxWidth: '100%', borderRadius: 10}} />

Даты одинаковы для всех — луна одна, — а местными остаются только времена
Солнца. Список заканчивается строкой `Время: начало · рассвет · полдень ·
конец`, а под сообщением две кнопки: переключатель Ru/En и ссылка на полный
календарь [dhamma.gift/uposatha-calendar](https://dhamma.gift/uposatha-calendar).

<img src={MessageUposatha} alt="Отправленное сообщение: Uposatha by the suttas for the next 30 days (Bodh Gaya, Bihar, India) с шестью днями и временами, строка Times: begin · dawn · noon · end и кнопки Lang En/Ru и Uposatha calendar" style={{maxWidth: '100%', borderRadius: 10}} />
