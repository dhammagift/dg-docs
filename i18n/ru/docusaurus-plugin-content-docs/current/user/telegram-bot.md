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
одинаковая. Работает он двумя способами: **в инлайне**, прямо в поле ввода любого
чата или группы, и **в своём чате**, где работает то же самое, плюс команды и
настройки.

## Инлайн

Наберите `@dgift_bot` в поле ввода любого чата, а дальше слово на пали
(`kacchapa`), номер текста (`mn10`, `sn56.11`) или транслитерацию Вельтхуиса
(`.t .d .n ~n aa ii uu` → `ṭ ḍ ṇ ñ ā ī ū`, поэтому `satipa.t.thaana` работает так
же, как `satipaṭṭhāna`). Telegram отвечает:

- `✏️ Отправить: <текст>` — основной результат: этот текст со ссылками на сайт и
  словарь;
- слова из словаря, похожие на набранное, — выберите нужное, и в сообщении будет
  правильное написание с диакритикой.

<img src={InlineSutta} alt="@dgift_bot sn56.11 в поле ввода: Отправить: sn56.11, sn56.11 Dhammacakkappavattanasutta, sn56.111-113 Devamanussanirayādisutta" style={{maxWidth: '100%', borderRadius: 10}} />

Над списком есть кнопка — `🔎 Открыть Dhamma.gift Ru: sn56.11` — она открывает
Dhamma.gift мини-приложением с уже выполненным поиском.

## Поиск и чтение

Выбранный результат уходит в чат сообщением бота: текст, ссылки и кнопки под
сообщением.

<img src={MessageSutta} alt="Отправленное сообщение: sn56.11 со ссылками Dhamma.gift и Словарь и кнопками Язык Ru/En, Словарь, Читать на Dhamma.gift Ru" style={{maxWidth: '100%', borderRadius: 10}} />

- `🔎 Dhamma.gift` — слово или текст в поиске сайта;
- `📘 Словарь` — слово в словарях (`dict.dhamma.gift`);
- `Читать на 🔎 Dhamma.gift Ru` — сам текст, в ридере.

Лишнее слово ссылку не ломает: `mn10 metta` всё равно открывает `mn10`.

Те же поиск и чтение — мини-приложения из `/extra`:
[поиск](http://t.me/dgift_bot/find),
[чтение](http://t.me/dgift_bot/read) и
[словарь](http://t.me/dgift_bot/dict).

## Дни Упосатхи

`/uposatha` в чате с ботом или `@dgift_bot упосатха` в любом чате — ближайшие
30 дней так, как их считают сутты: 8-й, 14-й и 15-й лунный день каждой половины
месяца, шесть дней в месяц. Без города это список для Бодхгаи, где день идёт
с 18:00 до 18:00.

`@dgift_bot упосатха Алматы` (или `/uposatha Алматы`) — те же дни, но с
настоящими временами Солнца для города: когда день начинается (закат), рассвет,
полдень и когда заканчивается (следующий закат). Город запоминается, поэтому
`/uposatha` без города продолжает показывать его; `/uposatha reset` — забыть.
Город ищется в локальном справочнике всех городов крупнее ~15 000 человек
(34 тысячи городов, опечатки прощаются), для остальных — геокодер Open-Meteo.

<img src={InlineUposatha} alt="@dgift_bot uposatha bodh gaya в поле ввода: Uposatha days, next 30 days — Bodh Gaya, Bihar, India" style={{maxWidth: '100%', borderRadius: 10}} />

Даты одинаковы для всех — луна одна, — а местными остаются только времена
Солнца. Список заканчивается строкой `Время: начало · рассвет · полдень ·
конец`, а под сообщением две кнопки: переключатель Ru/En и ссылка на полный
календарь [dhamma.gift/uposatha-calendar](https://dhamma.gift/uposatha-calendar).

<img src={MessageUposatha} alt="Отправленное сообщение: Uposatha by the suttas for the next 30 days (Bodh Gaya, Bihar, India) с шестью днями и временами, строка Times: begin · dawn · noon · end и кнопки Lang En/Ru и Uposatha calendar" style={{maxWidth: '100%', borderRadius: 10}} />

## В своём чате с ботом

Всё, что выше, работает и здесь — только без `@dgift_bot`: пришлите слово
(`saariputta`), номер текста (`mn10`) или `упосатха`, и получите то же сообщение
с теми же ссылками и кнопками. Сверх этого у бота есть команды и настройки.

| Команда | Что делает |
| --- | --- |
| `/start` | приветствие и язык интерфейса |
| `/extra` | ссылки на мини-приложения: поиск, чтение, словарь |
| `/uposatha` | дни Упосатхи на ближайшие 30 дней |
| `/help` | справка (в работе) |

### Настройки

- **Язык** — переключается через `/start` или кнопкой под любым сообщением
  (`Язык Ru/En` / `Lang En/Ru`). Выбор запоминается и влияет на ссылки: русский
  интерфейс ведёт на `dhamma.gift/ru` и `dict.dhamma.gift/ru`.
- **Город для списка Упосатхи** — `/uposatha <город>` запоминает его,
  `/uposatha reset` забывает, а пустая `/uposatha` продолжает его показывать.
- **Кнопка меню** рядом с полем ввода (`DG ru` / `DG en`) — открывает
  dhamma.gift мини-приложением на выбранном языке.
