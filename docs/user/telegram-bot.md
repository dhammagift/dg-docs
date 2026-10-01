---
slug: /telegram-bot
sidebar_position: 16
---

import InlineSutta from '@site/static/img/telegram/inline-sutta.png';
import MessageSutta from '@site/static/img/telegram/message-sutta.png';
import InlineUposatha from '@site/static/img/telegram/inline-uposatha.png';
import MessageUposatha from '@site/static/img/telegram/message-uposatha.png';

# Telegram bot

<div style={{textAlign: 'center', margin: '1em 0'}}>
  <a href="https://t.me/dgift_bot"><img src="/assets/img/buttons/telegram-cta.png" alt="Open @dgift_bot on Telegram" style={{maxWidth: '220px'}} /></a>
</div>

It's the same bot under two names — [@Dhammagift_bot](https://t.me/dhammagift_bot)
and its short form [@Dgift_bot](https://t.me/dgift_bot) — same functionality,
either one works. It behaves in two ways:

- **in any chat or group, without opening a chat with it** — as an inline bot:
  type `@dgift_bot` right in the message box and keep typing;
- **in its own chat** — send it a word or a text number, or use a command.

## In any chat (inline)

Type `@dgift_bot` and then a Pali word (`kacchapa`), a text number (`mn10`,
`sn56.11`) or Velthuis transliteration (`.t .d .n ~n aa ii uu` → `ṭ ḍ ṇ ñ ā ī ū`,
so `satipa.t.thaana` works as well as `satipaṭṭhāna`). Telegram answers with:

- `✏️ Send: <text>` — the main result: that text with links to the site and the
  dictionary;
- dictionary words that match what you typed — pick one, and the message uses the
  proper spelling with diacritics.

<img src={InlineSutta} alt="@dgift_bot sn56.11 in the message box of a chat: Send: sn56.11, sn56.11 Dhammacakkappavattanasutta, sn56.111-113 Devamanussanirayādisutta" style={{maxWidth: '100%', borderRadius: 10}} />

Above the list there is a button — `🔎 Open Dhamma.gift En: sn56.11` — it opens
Dhamma.gift as a Mini App with the query already searched.

A picked result lands in the chat as a message of the bot, with the text, the
links and, under the message, the buttons:

<img src={MessageSutta} alt="The sent message: sn56.11 with the links Dhamma.gift and Dictionary, and the buttons Lang En/Ru, Dictionary, Read at Dhamma.gift En" style={{maxWidth: '100%', borderRadius: 10}} />

- the language switch (`Lang En/Ru`) — the same message in the other language;
- `📘 Dictionary` — the word in the dictionaries;
- `Read at 🔎 Dhamma.gift En` — the text on the site.

An extra word does not break the link: `mn10 metta` still opens `mn10`.

## In the bot's own chat

Send the bot a word or a text number — you get the same message as above.
The commands:

| Command | What it does |
| --- | --- |
| `/start` | the welcome message and the interface language switch |
| `/extra` | links to the Mini Apps: search, reading, dictionary |
| `/uposatha` | Uposatha days for the next 30 days |
| `/help` | help (in progress) |

The Mini Apps are the same site in a Telegram window:

- [search](http://t.me/dhammagift_bot/find),
- [reading](http://t.me/dhammagift_bot/read),
- [dictionary](http://t.me/dhammagift_bot/dict) —
  the Russian bot has the same set at `t.me/dgift_bot/…`.

Next to the message box there is also the Menu button (`DG en` / `DG ru`): it
opens dhamma.gift as a Mini App in the language you chose.

## Language

The bot answers in the language set for the user: `/start` offers the switch, and
every message has a language button under it (`Lang En/Ru` / `Язык Ru/En`). The
choice is remembered and affects the links too — the Russian interface leads to
`dhamma.gift/ru` and `dict.dhamma.gift/ru`.

## Uposatha days

`/uposatha` — the next 30 days as the suttas count them: the 8th, 14th and 15th
lunar day of each half-month, six days a month. Without a city the list is the one
for Bodh Gaya, where the day runs from 18:00 to 18:00.

`/uposatha Chiang Mai` — the same days with the real sun times of a city: when the
day begins (sunset), dawn, noon and when it ends (the next sunset). The city is
remembered, so the bare `/uposatha` keeps using it; `/uposatha reset` forgets it.
The city is looked up in a local gazetteer of every city above ~15 000 people
(34k of them, spelling mistakes tolerated), with the Open-Meteo geocoder for the
rest.

In any chat: `@dgift_bot uposatha`, or `@dgift_bot uposatha Chiang Mai`:

<img src={InlineUposatha} alt="@dgift_bot uposatha bodh gaya in the message box: Uposatha days, next 30 days — Bodh Gaya, Bihar, India" style={{maxWidth: '100%', borderRadius: 10}} />

The dates are the same for everybody — the moon is one — and only the sun times
are local. The list ends with `Times: begin · dawn · noon · end`, and two buttons
sit under the message: the Ru/En switch and the link to the full calendar at
[dhamma.gift/uposatha-calendar](https://dhamma.gift/uposatha-calendar).

<img src={MessageUposatha} alt="The sent Uposatha message: Uposatha by the suttas for the next 30 days (Bodh Gaya, Bihar, India) with six days and their times, the line Times: begin · dawn · noon · end, and the buttons Lang En/Ru and Uposatha calendar" style={{maxWidth: '100%', borderRadius: 10}} />
