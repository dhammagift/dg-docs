---
title: Голосовой API (TTS)
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
| `pratham` | пали | нейроголос Piper + наши правила произношения пали (IAST → звуки, ударение, долгие гласные). Бета |
| `dg` | пали | «o Dhamma.Gift»: голос, обученный на настоящем чтении пали. Бета |
| `alan`, `norman`, `kathleen` | английский | голоса Piper; слова пали и сокращения (Ven., SN 56.11) читаются правильно |
| `ruslan`, `irina` | русский | голоса Piper; пали латиницей читается по-палийски |

`GET /api/tts/dg-voices` отдаёт список в виде `{голос: язык}`; `GET /api/tts/health` показывает, что
сервис работает и какая версия правил произношения в нём.

Как читается пали: звучит каждая буква, знаки препинания дают паузы, `…pe…` читается как «peyyāla».

## Весь текст одним MP3

`POST /api/tts/memo` — строки читаются одна за другой с паузами любой длины между ними (у Google не
больше 10 секунд); так сохраняет файл страница Memo.

| Поле | Значение |
|---|---|
| `segments` | строки, до 200 и до 20 000 символов всего |
| `voice`, `rate` | как выше |
| `delay` | пауза между строками, секунд, до 300 |
| `end_delay` | пауза в конце, секунд, до 600 |
| `sound` | `gong.mp3` или `tick.mp3` в конце, или пусто |

Ответ — сам MP3 (`audio/mpeg`), длиной не больше 45 минут. Такой запрос считается за десять в
минутном лимите.

## Лицензии

- Код сервиса и правила пали: [github.com/dhammagift/pali-tts](https://github.com/dhammagift/pali-tts).
- `pratham`: веса MIT ([rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices)), записи
  AI4Bharat IndicVoices (CC BY 4.0).
- `dg`: CC BY-NC-SA 4.0 — только некоммерческое использование.
- Английские и русские голоса: [rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices),
  у каждого своя лицензия.

## Что ещё по этому адресу

Тот же адрес отдаёт [MCP-сервер](./mcp) (`/mcp`) и [API](pathname:///api-docs/) сайта (`/api/…`) —
те же тексты и та же база, что на dhamma.gift.
