---
title: "Offline Library"
description: "The whole Canon on your device: one file with every text and a search index, so the site and the apps search and read with no internet."

---

# The offline database (offline library)

The site works without a network on top of one artifact: `dg.db.gz`, a gzipped SQLite database with
every text in every language and a trigram FTS index. The same file serves the website (as a PWA) and
the Android and iOS apps.

## Where everything lives

| What | Path | Served as |
|---|---|---|
| Corpus sources: the Pali text and the translations | `siteroot/data/suttacentral.net`, `siteroot/data/dhammagift` (symlinks) | — |
| Server database (built) | `dg.db` | used by `dg-fastify.js`: search, reader, API, MCP |
| **Offline library** | `siteroot/mobile-data/dg.db.gz` | `/mobile-data/dg.db.gz` |
| Its manifest | `siteroot/mobile-data/db-manifest.json` | `/mobile-data/db-manifest.json` |
| Web offline layer | `public/offline/*` (`app.js`, `db-worker.js`, `core-bundle.js`, `offline-status.js`, `offline-library-settings.js`, `platform.js`) | `/offline/*` |
| Shell cache (service worker) | `public/service-worker.js` | `/sw.js` |
| Dictionary (DPD, ~24 MB) | `public/overrides/js/standalone-dpd/*` | `/assets/js/standalone-dpd/*` |

The artifacts are never committed (hundreds of MB, rebuildable). `siteroot/mobile-data/` is a real
directory on every host: test and production each have their own.

## What the library is

A copy of the server's `dg.db` with every language, minus the rows of the translators in
`OFFLINE_EXCLUDED_TRANSLATORS` (`ai`, `bw`): those stay on the server, in neither the texts nor the
index. The copy is rebuilt from `dg.db` with the same schema and rowids and its own FTS index, not
cut down with `DELETE` + `VACUUM`. Its `build_id` is the hash of its own content.

Tables: `suttas`, `texts`, `html`, `fts` (FTS5, `tokenize='trigram remove_diacritics 1'`, external
content over `texts`), `vocab`, `meta`. About 217 MB gzipped and 613 MB on the device.

`db-manifest.json` is what clients read first:

```json
{ "schema_version": 1, "build_id": "71381ea7133d4182", "langs": "all", "fts": "trigram",
  "source": "dg.db", "built_at": "2026-10-11T22:39:58.752Z", "file_gz": "dg.db.gz",
  "bytes_gz": 216794065, "bytes": 613142528, "sha256": "…" }
```

`sha256` is the hash of the unpacked database. A client never reads `build_id` from the manifest
alone: the downloaded file carries its own `meta.build_id`, and a file that does not match the build
it was saved as is not opened.

## How it is built and published

The production box does not build the database; the build needs more memory than it has.

1. **CI** (`.github/workflows/build-db.yml`) builds `dg.db` on a GitHub runner and publishes the
   rolling `db-latest` release. It carries the server database (`dg.db.gz`, AI rows included) and
   the offline library (`app-dg.db.gz` + `app-db-manifest.json`), both made by `build-search-db.js
   --publish`.
2. **The server** installs the release with `scripts/pull-db.sh`. `--app` also puts the offline
   library into `siteroot/mobile-data/`. It checks the unpacked `sha256` first, moves the archive
   into place, and writes the manifest last, so a reader never sees a manifest for a file that is not
   there yet.

On a machine with enough memory the same steps run locally:

```bash
npm run build-search-db          # siteroot/data/* -> dg.db (the full corpus, FTS5 trigram)
npm run publish-offline-db       # build-search-db.js --publish: dg.db.gz + db-manifest.json into siteroot/mobile-data/
node build-search-db.js --publish --no-build   # publish the dg.db already there, without building again
```

`--out=<dir>` publishes into another directory. A new `build_id` in the manifest is what tells every
reader who already has the library that an update is available, so publishing is always a
deliberate step.

## How a client uses it

1. `distBase = window.DG_DIST_BASE || '/mobile-data'` (`public/offline/platform.js`).
2. Fetch `db-manifest.json`. The room needed (the database plus its archive) is checked before any
   download starts. A private (incognito) window is refused with a plain message: the storage probe
   fails there, or the quota is under ~300 MB. A normal window short of space is told how much is
   needed and how much is free.
3. Download `dg.db.gz` into a scratch file at the OPFS root (`dg-mobile.<build_id>.gz.partial`). An
   interrupted download continues with an HTTP `Range` request from the byte it stopped at (a later
   visit too), and a cancel deletes the scratch file.
4. Unpack the complete archive from disk with `DecompressionStream` into the SQLite pool
   (`opfs-sahpool`, named `dg-offline`) as `/dg-mobile.<build_id>.db`. The unpacked size must match
   `bytes`.
5. Verify: a cheap check gates the install (rows readable). The full `PRAGMA quick_check` runs in the
   background and can still invalidate the library.
6. A worker (`@sqlite.org/sqlite-wasm`) answers `/search`, `/api/text/:id`, `/api/nav/:id`; the site's
   own `fetch` is shimmed before any other script runs. It runs the same `core/search-core.js` as the
   server (`core-bundle.js`).
7. Updates: the page compares the open library's `build_id` with the manifest's and offers the new
   one. The new build downloads beside the old one, which keeps answering until the new file is
   proven; then the old file is removed.
8. The shell (HTML, JS, CSS, wasm, `core-bundle.js`) is cached by the service worker. The dictionary
   is cached by the page right after the library is adopted, because the service worker's install
   pass alone proved unreliable (see below).

Only one tab owns the OPFS pool (a single-writer resource). The tab in front takes it over, and a tab
without it can be served by the owner over a `BroadcastChannel`.

### In the apps

The apps fetch the same `dg.db.gz` with their own native downloaders, so a download survives the app
going to the background or the screen locking:

- **Android**: `DgDownloadService`, a foreground service with progress in a notification. The worker
  then imports the file from the app's storage, the same way as above.
- **iOS**: `DgDownloadPlugin.swift` (a background `URLSession`). The library is kept as a plain
  `dg.db` in the App Group container and read with native SQLite (`DgSharedLibrary.swift`), because
  the Share Extension, a separate process, searches the same file. The worker sends its queries
  there instead of to OPFS.

## Verifying

```bash
npm run test-offline           # end-to-end: install, offline search/reader/TOC, parity against dg.db and dg-fastify
npm run test-offline-parity    # the worker's core bundle vs core/search-core.js
npm run test-offline-resume    # truncated response -> Range resume
npm run test-offline-outage    # a real outage: pm2 dg-test stopped, nginx answering 503; search, language, a second tab, TOC, reader
```

`test-offline-outage` always restores the service. DevTools "offline" only makes requests reject; a
stopped server also answers 5xx, which is the case that used to break the shell. The pm2 processes
are `dg-test` and `dg-prod`.

## Gotchas worth remembering

- OPFS requires a secure context (HTTPS or localhost).
- The browser may evict storage; the page asks for persistent storage, and a missing library is a
  normal state the UI reports ("Settings → Offline library").
- A `5xx` must fall back to the cache, and a cache miss must **rethrow**. `respondWith(undefined)` is
  a TypeError in the page ("Failed to convert value to 'Response'") and a spinner that never stops.
- The service worker's install-time precache can silently miss entries (127 of ~145 in one measured
  run, with the server answering those files 200). Anything that must be there offline is cached from
  the page as well.
- Tab lifecycle: a page in the back/forward cache keeps its worker and the pool handles. So the worker
  is terminated on `pagehide` (never during a download), and the library is re-opened on
  `focus`/`visibilitychange`/`pageshow`.
