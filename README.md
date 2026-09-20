# dg-docs — справочный портал Dhamma.Gift

Docusaurus. Отсюда собирается то, что читатель видит на **dhamma.gift/docs/** (английский)
и **dhamma.gift/ru/docs/** (русский). Контент — в `docs/` (EN) и
`i18n/ru/docusaurus-plugin-content-docs/current/` (RU); у каждой страницы свой `slug`,
он и есть кусок URL после `/docs/`.

Сюда же ведут Support URL и Privacy Policy URL приложения в App Store и Google Play,
и легаси-редиректы старого сайта (`privacy.html` → `/docs/policies` и т.п., список —
в `dg-node/dg-fastify.js`).

## Локально

```bash
npm install          # package-lock.json тут нет, поэтому npm ci не сработает
npm run start        # EN, localhost:3000, с живой перезагрузкой
npm run build        # то, что уедет в прод (EN) → build/
npm run build:ru     # то же для RU → build-ru/
```

## Как правка попадает на прод

Ветки `dist` и `dist-preview` — **артефакты сборки, а не история**. Их никто не редактирует
руками: CI каждый раз перезаписывает их одним коммитом через force-push.

```
  правка в docs/ или i18n/
            │
            ├── push в preview ──► CI собирает ──► ветка dist-preview ──► test.dhamma.gift
            │                     (build.yml)
            │
            └── push в main ─────► CI собирает ──► ветка dist ─────────► dhamma.gift
                                  (build.yml)
```

Последний шаг — на сервере: в чекауте dg-node лежит папка `dg-docs/`, это клон ветки `dist`,
который обновляется периодическим `git fetch && git reset --hard origin/dist`. Дальше
dg-fastify раздаёт готовый HTML:

- `siteroot/docs` — симлинк на `../dg-docs/build`, подхватывается автосканом `siteroot/` → `/docs/`
- `/ru/docs` — явный статик-маунт на `dg-docs/build-ru` (`dg-fastify.js`, искать `build-ru`)

**Сервер ничего не собирает.** Две сборки Docusaurus просят около гигабайта памяти, а машина
уже падала от её нехватки — поэтому сборка живёт в CI, а на сервер приезжает готовый HTML.
Node на проде для доков не нужен вовсе.

Перезапускать ничего не надо: статика читается с диска на лету. Задержка между пушем в `main`
и обновлением сайта = сборка в CI (пара минут) + период `git pull` на сервере.

## Правила

1. **Сначала `preview`, потом `main`.** Правка едет на test.dhamma.gift, там её смотрят,
   и только потом она попадает к читателям.
2. **`preview` не должен отставать от `main`.** Модель рассчитана на то, что `main`
   фаст-форвардится из `preview`. Пуш напрямую в `main` разводит ветки, и фаст-форвард
   перестаёт работать. Если так уже случилось — догнать preview:
   `git checkout preview && git merge --ff-only main && git push origin preview`.
3. **`dist` и `dist-preview` руками не трогать.** Любая правка там умрёт при следующей сборке.
4. **Шаллоу-клон врёт про ветки.** `git clone --depth 1` не видит общего предка: `git log
   main..preview` покажет выдуманное расхождение, а `git merge` ответит «refusing to merge
   unrelated histories». Перед разбором веток — `git fetch --depth=200 origin main preview`.

## Проверить, что доехало

```bash
git log --oneline -1 origin/main                 # что должно быть на проде
git log --oneline -1 origin/dist                 # что собрал CI (в сообщении — исходный commit)
git log --oneline origin/preview..origin/main    # пусто = ветки в порядке
```

Страница не обновилась — смотреть в этом порядке: прошла ли сборка (вкладка Actions),
появился ли новый коммит в `dist`, успел ли сервер сделать `git pull`.
