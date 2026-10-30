---
title: "Голосовой API: Text to Speech"
description: "Наш бесплатный TTS для пали, русского и английского: те же нейроголоса, что на сайте, из браузера или с сервера, без ключа и регистрации."

---

# Голосовой API (TTS)

Голос Dhamma.Gift — открытый сервис синтеза речи: тот же, что читает в плеере сайта и в словаре.
Обращаться к нему можно из браузера или с сервера — без ключа и без регистрации.

**Адрес:** `https://api.dhamma.gift` · CORS открыт · лимит 60 запросов в минуту с одного IP.

## Прочитать фразу

`POST /api/tts/pali` с JSON:

| Поле | Значение |
|---|---|
| `text` | текст, до 2000 символов. Пали в IAST (`Evaṁ me sutaṁ`), перевод на английском или русском |
| `voice` | голос (ниже); по умолчанию `pratham` |
| `rate` | скорость, 0.25–3; `1` — собственный темп голоса (сайт читает пали на 0.875) |

Ответ — `{"audioContent": "<MP3 в base64>"}`, в том же виде, что у Google Text-to-Speech, так что
плеер, написанный для Google, проигрывает его как есть. MP3, моно, 22 кГц, ~40 кбит/с; повторные
запросы отдаются из кэша.

```bash
curl -s https://api.dhamma.gift/api/tts/pali -H 'content-type: application/json' \
  -d '{"text":"Evaṁ me sutaṁ.","voice":"pratham","rate":0.875}' \
  | python3 -c 'import json,sys,base64; open("evam.mp3","wb").write(base64.b64decode(json.load(sys.stdin)["audioContent"]))'
```

```js
const r = await fetch('https://api.dhamma.gift/api/tts/pali', {
  method: 'POST', headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ text: 'Evaṁ me sutaṁ.', voice: 'pratham', rate: 0.875 })
});
new Audio('data:audio/mp3;base64,' + (await r.json()).audioContent).play();
```

## Голоса

| `voice` | Язык | Что это |
|---|---|---|
| `pratham` | пали | «Pratham»: нейроголос Piper + наши правила произношения пали (IAST → звуки, ударение, долгие гласные). По умолчанию |
| `dg` | пали | «o Dhamma.Gift»: голос, обученный на настоящем чтении пали. Бета |
| `priyamvada` | пали | «Priyamvada»: женский голос Piper с теми же правилами |
| `miles`, `alan`, `kathleen` | английский | голоса Piper. `miles` в меню называется «Yojanāni» (по умолчанию): обучен на чтении Майлса, чтеца DG. Слова пали и сокращения (Ven., SN 56.11) читаются правильно |
| `puriso`, `dgru`, `irina` | русский | голоса Piper. `puriso` (по умолчанию) — мужской голос M1 из Supertonic, перенесённый в Piper; `dgru` — «o Dhamma.Gift», бета. Пали латиницей читается по-палийски, русские слова с правильными ударениями |

`GET /api/tts/dg-voices` отдаёт список `{"voices": [{"id", "lang", "label"}]}` в порядке меню (первый голос языка — по умолчанию); `GET /api/tts/health` показывает, что
сервис работает и какая версия правил произношения в нём. `GET /api/tts/offline/pali-ipa.json` отдаёт
правила, движок и модели голосов, которые DG скачивает, чтобы читать на устройстве без интернета.

Как читается пали: звучит каждая буква, знаки препинания дают паузы, `…pe…` читается как «peyyāla».

## Весь текст одним MP3

`POST /api/tts/memo` — строки читаются одна за другой с паузами любой длины между ними (у Google не
больше 10 секунд); так сохраняет файл страница Memo.

| Поле | Значение |
|---|---|
| `segments` | строки, до 200 и до 20 000 символов всего |
| `voice`, `rate` | как выше |
| `delay` | пауза между строками, секунд, до 3600 |
| `end_delay` | пауза в конце, секунд, до 3600 |
| `sound` | `gong.mp3` или `tick.mp3` в конце, или пусто |

Ответ — сам MP3 (`audio/mpeg`): сама речь не дольше 30 минут, весь файл вместе с паузами не дольше 180.
Такой запрос считается за десять в минутном лимите.

## Лицензии

- Код сервиса и правила пали: [github.com/dhammagift/pali-tts](https://github.com/dhammagift/pali-tts).
- `pratham`: веса MIT ([rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices)), записи
  AI4Bharat IndicVoices (CC BY 4.0).
- `dg`, `dgru`: CC BY-NC-SA 4.0, только некоммерческое использование.
- `priyamvada`, `alan`, `kathleen`, `irina`: [rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices),
  у каждого своя лицензия.

## Что ещё по этому адресу

Тот же адрес отдаёт [MCP-сервер](./mcp.md) (`/mcp`) и [API](https://dhamma.gift/api-docs/) сайта (`/api/…`) —
те же тексты и та же база, что на dhamma.gift.
