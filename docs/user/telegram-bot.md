---
title: "Telegram Bot"
description: "@Dhammagift_bot: search and read the Suttas inline in any chat, or in its own chat, with the Uposatha days for your city."
slug: /telegram-bot
sidebar_position: 16
---

import SiteLink from '@site/src/components/SiteLink';

import InlineSutta from '@site/static/img/telegram/inline-sutta.png';
import MessageSutta from '@site/static/img/telegram/message-sutta.png';
import InlineUposatha from '@site/static/img/telegram/inline-uposatha.png';
import MessageUposatha from '@site/static/img/telegram/message-uposatha.png';
import InlineMeaning from '@site/static/img/telegram/inline-meaning.webp';

# Telegram bot

<div style={{textAlign: 'center', margin: '1em 0'}}>
  <a href="https://t.me/dgift_bot"><img src="/assets/img/buttons/telegram-cta.png" alt="Open @dgift_bot on Telegram" style={{maxWidth: '220px'}} /></a>
</div>

It's the same bot under two names — [@Dhammagift_bot](https://t.me/dhammagift_bot)
and its short form [@Dgift_bot](https://t.me/dgift_bot) — same functionality,
either one works. It works in two ways: **inline**, right in the message box of
any chat or group, and **in its own chat**, where the same things work plus the
commands and the settings.

## Inline

Type `@dgift_bot` in the message box of any chat and then a Pali word
(`kacchapa`), a text number (`mn10`, `sn56.11`) or Velthuis transliteration
(`.t .d .n ~n aa ii uu` → `ṭ ḍ ṇ ñ ā ī ū`, so `satipa.t.thaana` works as well as
`satipaṭṭhāna`). Telegram answers with:

- `✏️ Send: <text>` — the main result: that text with links to the site and the
  dictionary;
- dictionary words that match what you typed — pick one, and the message uses the
  proper spelling with diacritics.

<img src={InlineSutta} alt="@dgift_bot sn56.11 in the message box of a chat: Send: sn56.11, sn56.11 Dhammacakkappavattanasutta, sn56.111-113 Devamanussanirayādisutta" style={{maxWidth: '100%', borderRadius: 10}} />

<p style={{fontSize: '0.85em', opacity: 0.75, marginTop: '0.3em'}}>In the frame: what is typed in the message box of <b>any chat or group</b>, not in the bot's own chat.</p>

If the word is in the built-in mini dictionary (the Pāli–English one, with a
Russian translation for the Russian interface), its short meaning is shown in
the list under the word, and in the sent message — between the word and the
links:

> **kacchapa** — *masc.* tortoise; turtle; lit. drinking marsh


<img src={InlineMeaning} alt="@dgift_bot adhiccasamuppann in the message box: the list shows adhiccasamuppannā with its meaning, and above it the sent message with the meaning between the word and the links" style={{maxWidth: '100%', borderRadius: 10}} />

A form is traced back to its dictionary word (`kacchapā` → **kacchapa**),
up to four words are shown with `…` if there are more (the list is not
exhaustive), the part of speech is in italics, and when there is no Russian
translation of a word the English one is shown. Machine-translated Russian
entries are marked `[пер. ИИ]`.

Above the list there is a button — `🔎 Open Dhamma.gift En: sn56.11` — it opens
Dhamma.gift as a Mini App with the query already searched.

## Search and read

A picked result lands in the chat as a message of the bot: the text, the links
and, under the message, the buttons.

<img src={MessageSutta} alt="The sent message: sn56.11 with the links Dhamma.gift and Dictionary, and the buttons Lang En/Ru, Dictionary, Read at Dhamma.gift En" style={{maxWidth: '100%', borderRadius: 10}} />

- `🔎 Dhamma.gift` — the word or the text in the site's search;
- `📘 Dictionary` — the word in the dictionaries (`dict.dhamma.gift`); its short
  meaning from the mini dictionary is already in the message, above the links;
- `Read at 🔎 Dhamma.gift En` — the text itself, in the reader.

An extra word does not break the link: `mn10 metta` still opens `mn10`.

The same search and reader are the Mini Apps behind `/extra`:
[search](http://t.me/dhammagift_bot/find),
[reading](http://t.me/dhammagift_bot/read),
[dictionary](http://t.me/dhammagift_bot/dict) and
[Memo](http://t.me/dhammagift_bot/memo).

## Uposatha days

`/uposatha` in the bot's chat, or `@dgift_bot uposatha` in any chat — the next 30
days as the suttas count them: the 8th, 14th and 15th lunar day of each half-month,
six days a month. Without a city the list is the one for Bodh Gaya, where the day
runs from 18:00 to 18:00.

`@dgift_bot uposatha Chiang Mai` (or `/uposatha Chiang Mai`) — the same days with
the real sun times of a city: when the day begins (sunset), dawn, noon and when it
ends (the next sunset). The city is remembered, so the bare command keeps using it;
`/uposatha reset` forgets it. The city is looked up in a local gazetteer of every
city above ~15 000 people (34k of them, spelling mistakes tolerated), with the
Open-Meteo geocoder for the rest.

<img src={InlineUposatha} alt="@dgift_bot uposatha bodh gaya in the message box: Uposatha days, next 30 days — Bodh Gaya, Bihar, India" style={{maxWidth: '100%', borderRadius: 10}} />

<p style={{fontSize: '0.85em', opacity: 0.75, marginTop: '0.3em'}}>In the frame: what is typed in the message box of <b>any chat or group</b>, not in the bot's own chat.</p>

The dates are the same for everybody — the moon is one — and only the sun times
are local. The list ends with `Times: begin · dawn · noon · end`, and two buttons
sit under the message: the Ru/En switch and the link to the full calendar at
[dhamma.gift/uposatha-calendar](https://dhamma.gift/uposatha-calendar).

<img src={MessageUposatha} alt="The sent Uposatha message: Uposatha by the suttas for the next 30 days (Bodh Gaya, Bihar, India) with six days and their times, the line Times: begin · dawn · noon · end, and the buttons Lang En/Ru and Uposatha calendar" style={{maxWidth: '100%', borderRadius: 10}} />

How to read these days is on the [Uposatha days](/uposatha) page. The same calendar is an app with widgets,
*Uposatha by the Suttas*: [App Store](https://apps.apple.com/app/uposatha-by-the-suttas/id6816601259) · <SiteLink to="/apps?app=uposatha">Google Play</SiteLink> · [Microsoft Store](https://apps.microsoft.com/detail/9NMD1L6H52ZN).

## In the bot's chat

Everything above works here too — just without `@dgift_bot`: send a word
(`saariputta`), a text number (`mn10`) or `uposatha`, and you get the same message
with the same links and buttons. On top of that, the bot has commands and settings.

| Command | What it does |
| --- | --- |
| `/start` | the welcome message and the interface language |
| `/language` | choose the interface language (English / Русский) |
| `/extra` | links to the Mini Apps: search, reading, dictionary, and the 🛞 Memo button (in the bot's own chat) |
| `/docs` | the link to this documentation |
| `/uposatha` | Uposatha days for the next 30 days |

### Settings

- **Language** — `/language` (two buttons, the current one is checked) sets it; `/start` toggles it, and so does the button under any message
  (`Lang En/Ru` / `Язык Ru/En`). The choice is remembered and affects the links:
  the Russian interface leads to `dhamma.gift/ru` and `dict.dhamma.gift/ru`.
- **The city for the Uposatha list** — `/uposatha <city>` remembers it,
  `/uposatha reset` forgets it, and the empty `/uposatha` keeps showing it.
- **The Menu button** next to the message box (`DG en` / `DG ru`) — opens
  dhamma.gift as a Mini App in the language you chose.
