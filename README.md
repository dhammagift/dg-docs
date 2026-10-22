# dg-docs — Dhamma.Gift reference portal

Docusaurus. This is where the content the reader sees on **dhamma.gift/docs/** (English)
and **dhamma.gift/ru/docs/** (Russian) is assembled. The content lives in `docs/` (EN) and
`i18n/ru/docusaurus-plugin-content-docs/current/` (RU); each page has its own `slug`,
which is the part of the URL after `/docs/`.

This is also where the Support URL and Privacy Policy URL for the app in the App Store and Google Play point,
and where legacy redirects from the old site live (`privacy.html` → `/docs/policies` and similar; the list is
in `dg-node/dg-fastify.js`).

## Local development

```bash
npm install          # there is no package-lock.json here, so npm ci will not work
npm run start        # EN, localhost:3000, live reload
npm run build        # what gets deployed to production (EN) → build/
npm run build:ru     # same for RU → build-ru/
```

## How changes reach production

Branches `dist` and `dist-preview` are **build artifacts, not history**. Nobody edits them
by hand: CI rewrites them with a single force-push commit every time.

```
   change in docs/ or i18n/
             │
             ├── push to preview ──► CI builds ──► dist-preview branch ──► test.dhamma.gift
             │                     (build.yml)
             │
             └── push to main ─────► CI builds ──► dist branch ─────────► dhamma.gift
                                   (build.yml)
```

The last step is on the server: in the checkout for `dg-node`, there is a folder `dg-docs/`, which is a clone of the `dist` branch,
and it is refreshed periodically via `git fetch && git reset --hard origin/dist`. Then
`dg-fastify` serves the generated HTML:

- `siteroot/docs` — symlink to `../dg-docs/build`, picked up by the root-site scanner → `/docs/`
- `/ru/docs` — explicit static mount to `dg-docs/build-ru` (`dg-fastify.js`, search for `build-ru`)

**The server does not build anything.** Two Docusaurus builds need roughly a gigabyte of memory, and the machine
has already crashed from running out of it, so the build lives in CI, and the server receives ready-made HTML.
Node is not needed on production for docs at all.

Nothing needs to be restarted: the static files are read from disk on the fly. The delay between a push to `main`
and the site update = CI build time (a few minutes) + the periodic `git pull` on the server.

## Glossary (`/glossary`)

Pages `/glossary` (EN) and `/ru/glossary` (RU) are not ordinary markdown: the table is generated from
a public Google Sheet, whose link is available on `/principles`.

```
Google Sheet (gid=0)
  → node scripts/sync-glossary.mjs
  → src/data/glossary.json (committed)
  → src/components/GlossaryTable.jsx
  → /docs/glossary, /ru/docs/glossary
```

- `npm run glossary` — regenerate `src/data/glossary.json` manually (Node 20+, internet needed).
- `npm test` — parser tests using fixture `scripts/fixtures/sheet-sample.csv`.
- `.github/workflows/glossary-sync.yml` — once a day at 00:17 UTC pulls the table, commits
  `src/data/glossary.json` **only if data changed** and triggers `build.yml` for `main`
  (and for `preview` if that branch was fast-forwarded). A push from `GITHUB_TOKEN` does not
  trigger the workflow, so the build is launched through `gh workflow run`.
- EN page uses only the “English” column (D). A blank translation cell means there is no
  English for that term; F/G, tab 4nt, and machine column H are not used.
- Generated data is an exception to the “preview first” rule: when `preview` has not been moved
  forward, the same commit gets sent to both `main` and `preview`, because the page validates itself.
  If `preview` already contains unpushed changes, only `main` is updated — the data will arrive with the next normal push to `preview`.
- **If columns are renamed or rearranged in the sheet** — the job fails with a message describing which
  headers it found, and the page stays on the previous version. Fix `COLUMN_SPECS` in
  `scripts/lib/glossary.mjs`, then run `npm run glossary && npm test`.

Manual run: Actions → “Glossary sync” → Run workflow. It always syncs `main`.

## Rules

1. **Preview first, then main.** Changes go to test.dhamma.gift first, where they are reviewed,
   and only then do they reach readers.
2. **`preview` must not lag behind `main`.** The model assumes `main` is fast-forwarded from `preview`.
   Pushing directly to `main` splits the branches, and fast-forward no longer works. If it already happened —
   `git checkout preview && git merge --ff-only main && git push origin preview`.
3. **Do not touch `dist` or `dist-preview` by hand.** Any change there will die with the next build.
4. **Shallow clones lie about branches.** `git clone --depth 1` does not show a common ancestor:
   `git log main..preview` may show a fake divergence, and `git merge` may say
   “refusing to merge unrelated histories”. Before untangling branches, run:
   `git fetch --depth=200 origin main preview`.

## Check that it reached production

```bash
git log --oneline -1 origin/main                 # what should be on production
git log --oneline -1 origin/dist                 # what CI built (the source commit is in the message)
git log --oneline origin/preview..origin/main    # empty = branches are in order
```

If the page did not update, check in this order: whether the build passed (Actions tab),
whether a new commit appeared in `dist`, and whether the server finished `git pull`.
```

Что ещё на русском я нашёл в других README:

- `dhammagift/dg-node/README.md` — mostly in Russian
- `dhammagift/dg-apps/docs/ios-review/README.md` — fully in Russian
- `dhammagift/dg-docs/README.md` — was also Russian (the original one you showed)

I also checked a bunch of other repos: most top-level README files are in English, but there are some Russian docs in nested folders and project notes (for example the iOS review docs under `dg-apps`).

If you want, I can also:
- make a clean English version of `dg-node/README.md`
- help you find all Russian README files across the whole `dhammagift` org
- prepare a “Russian → English” pass for the most important documentation files in one batch
