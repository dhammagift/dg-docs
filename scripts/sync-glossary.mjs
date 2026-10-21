#!/usr/bin/env node
// Downloads the public translation glossary sheet and writes src/data/glossary.json.
//
// Usage: npm run glossary
//
// The file is committed (it is what the docs build imports), so this script is the only
// part that talks to Google. A daily GitHub workflow runs it and commits only when the
// generated JSON actually changed; if the fetch or the column layout breaks, the job fails
// and the live page keeps the previous snapshot.

import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {
  CSV_URL,
  GID,
  SHEET_ID,
  SHEET_URL,
  buildGlossary,
  validateGlossary,
} from './lib/glossary.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'src/data/glossary.json');

async function fetchCsv(url, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {'user-agent': 'dg-docs-glossary-sync/1.0 (+https://dhamma.gift/docs/)'},
        signal: AbortSignal.timeout(25000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
      const text = await res.text();
      // A private/deleted sheet answers 200 with a Google login page.
      if (!text.includes('Пали')) {
        throw new Error('response is not the glossary CSV (no «Пали» header) — is the sheet still public?');
      }
      return text;
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await new Promise((r) => setTimeout(r, attempt * 4000));
      }
    }
  }
  throw new Error(`could not fetch the glossary sheet: ${lastError?.message || lastError}`);
}

async function readPrevious() {
  try {
    return await readFile(OUT, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return '';
    throw error;
  }
}

async function main() {
  const csv = await fetchCsv(CSV_URL);
  const {terms, stats} = buildGlossary(csv);
  validateGlossary({terms, stats});

  const previousText = await readPrevious();
  let previous = null;
  if (previousText) {
    try {
      previous = JSON.parse(previousText);
    } catch {
      // A corrupted file is regenerated, not treated as a fatal error.
    }
  }

  // Compare only the data: a same-content run must not touch the file (no daily diff, no
  // build). updatedAt then keeps the date of the last real content change.
  const sameData = previous && JSON.stringify(previous.terms) === JSON.stringify(terms);
  const updatedAt = sameData && previous.updatedAt ? previous.updatedAt : new Date().toISOString().slice(0, 10);

  const output = {
    version: 1,
    updatedAt,
    source: {sheetId: SHEET_ID, gid: GID, url: SHEET_URL},
    terms,
  };
  const text = `${JSON.stringify(output, null, 2)}\n`;

  if (text === previousText) {
    console.log(`glossary: unchanged (${terms.length} terms)`);
    return;
  }

  await mkdir(dirname(OUT), {recursive: true});
  await writeFile(OUT, text, 'utf8');
  const delta = previous?.terms?.length ? terms.length - previous.terms.length : terms.length;
  console.log(
    `glossary: ${terms.length} terms (${delta >= 0 ? '+' : ''}${delta}), ` +
      `${stats.en} with EN, ${stats.canon} with canon definitions, ${stats.expandable} expandable, ` +
      `${stats.droppedEmpty} skipped rows, ${stats.droppedNonTerm} non-terms, ${stats.droppedDuplicate} duplicates`,
  );
  console.log(`glossary: wrote ${OUT}`);
}

main().catch((error) => {
  console.error(`glossary: ${error.message}`);
  process.exit(1);
});
