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
      if (!/"?(Пали|Pali)"?,/.test(text)) {
        throw new Error('response is not the glossary CSV (no «Pali»/«Пали» header) — is the sheet still public?');
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

// Each term's dictionary forms (samudda: samuddo, samuddassa...): the inflected forms whose DPD headwords include the
// term, from the DPD index the reader ships (dg-node standalone-dpd/dpd_i2h.js). The Dictionary's DG card finds a term
// by any of them (owner 2026-11-14: «чтобы сразу в глоссарии были словарные формы»). If that file cannot be read, the
// terms keep the forms of the previous glossary.json.
const I2H_URL = 'https://raw.githubusercontent.com/dhammagift/dg-node/main/public/overrides/js/standalone-dpd/dpd_i2h.js';
const norm = (s) => String(s || '').trim().toLowerCase().replace(/ṃ/g, 'ṁ');

async function addForms(terms, previous) {
  let i2h;
  try {
    const res = await fetch(I2H_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    i2h = JSON.parse((await res.text()).replace(/^\s*(?:var|let|const)?\s*dpd_\w+\s*=\s*/, '').trim().replace(/;$/, ''));
  } catch (error) {
    console.warn(`glossary: forms not updated (${I2H_URL}: ${error.message})`);
    const old = new Map((previous?.terms || []).map((t) => [t.pali, t.forms]));
    for (const t of terms) if (old.get(t.pali)) t.forms = old.get(t.pali);
    return;
  }
  const byBase = new Map();
  for (const [form, headwords] of Object.entries(i2h)) {
    for (const hw of headwords) {
      if (hw.endsWith(' (DG)')) continue; // the glossary's own entries the dictionary job added
      const base = norm(hw.replace(/\s+\d+(\.\d+)?$/, ''));
      if (!byBase.has(base)) byBase.set(base, new Set());
      byBase.get(base).add(norm(form));
    }
  }
  for (const t of terms) {
    const forms = byBase.get(norm(t.pali));
    if (forms) t.forms = [...forms].sort();
  }
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
  await addForms(terms, previous);

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
