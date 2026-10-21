// Shared parsing/normalisation for the translation glossary page (/glossary).
//
// The source of truth is the public Google Sheet linked from /principles. Unlike the rest
// of docs/, this page is generated: scripts/sync-glossary.mjs downloads the sheet's CSV,
// builds src/data/glossary.json, and the daily workflow commits the result. Keeping this
// code dependency-free (and separate from the fetch step) makes it testable with node:test.
//
// Columns are mapped by HEADER NAME, never by position. The sheet is edited by hand and a
// column insertion/move would otherwise silently publish one translation under another
// term. When a required header disappears, resolveColumns() throws with the headers it did
// find, the sync job fails, and the live page keeps the last good snapshot.

export const SHEET_ID = '1s7n7ogJhdtSIweVO9aad63_k7lWrZgyPRUFg34AobMg';
export const GID = '0';
export const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit?gid=${GID}#gid=${GID}`;
// gviz (not /export?format=csv) is the stable public CSV endpoint: the header is the first
// row and cell values are not run through the sheet's display formatting.
export const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${GID}`;

// RFC 4180 parser. The sheet contains quoted commas and embedded newlines (Pali
// definitions), so splitting on commas/newlines would corrupt rows.
export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  const src = String(text ?? '');
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quoted) {
      if (c === '"') {
        if (src[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          quoted = false;
        }
      } else {
        field += c;
      }
      continue;
    }
    if (c === '"') {
      quoted = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (c === '\r') {
      // \r\n: let the following \n finish the row. A lone \r also ends it.
      if (src[i + 1] === '\n') continue;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

export function normHeader(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim().toLowerCase();
}

export function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/\p{M}+/gu, '')
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[’'`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Only the columns this page actually shows. F (4nt), H (machine English, shifted one row
// down) and the second tab are deliberately absent — see the plan/owner decision: EN is
// the «Англ» column (D) only.
const COLUMN_SPECS = [
  {key: 'num', label: '№', match: 'exact'},
  {key: 'pali', label: 'Пали', match: 'exact', required: true},
  {key: 'ru', label: 'Русский', match: 'exact', required: true},
  {key: 'en', label: 'Англ', match: 'exact', required: true},
  {key: 'where', label: 'Где канон определяет', match: 'prefix'},
  {key: 'link', label: 'Первое определение', match: 'prefix'},
  {key: 'definition', label: 'Пали определения', match: 'exact'},
  {key: 'compounds', label: 'Составные, у которых есть определение', match: 'prefix'},
  {key: 'patterns', label: 'По шаблонам finddhamma', match: 'prefix'},
  {key: 'broader', label: 'Шире', match: 'prefix'},
  {key: 'vinaya', label: 'Виная', match: 'prefix'},
  {key: 'dgNote', label: 'Пояснение DG', match: 'exact'},
];

export function resolveColumns(headerRow) {
  const headers = headerRow.map(normHeader);
  const cols = {};
  const missing = [];
  for (const spec of COLUMN_SPECS) {
    const index = headers.findIndex((h) => h && (spec.match === 'exact' ? h === spec.label.toLowerCase() : h.startsWith(spec.label.toLowerCase())));
    if (index >= 0) cols[spec.key] = index;
    else if (spec.required) missing.push(spec.label);
  }
  if (missing.length) {
    const found = headerRow
      .map((h, i) => (String(h ?? '').trim() ? `${i}: ${String(h).trim()}` : ''))
      .filter(Boolean)
      .join(' | ');
    throw new Error(`Glossary sheet: required column(s) not found: ${missing.join(', ')}. Headers found: ${found}`);
  }
  return cols;
}

export function findHeaderRow(rows) {
  const limit = Math.min(rows.length, 10);
  for (let i = 0; i < limit; i++) {
    const headers = rows[i].map(normHeader);
    if (headers.includes('пали') && headers.includes('русский')) return i;
  }
  throw new Error('Glossary sheet: header row not found (no «Пали»/«Русский» in the first 10 rows).');
}

function cell(row, index) {
  if (index == null) return '';
  return String(row[index] ?? '').trim();
}

// Reference lists are comma/newline separated. «(+15)» means the sheet itself truncated the
// list; keep it as a separate token so the UI can render it as muted text, not as a link.
export function parseRefs(value) {
  const refs = [];
  if (!value) return refs;
  for (const raw of String(value).split(/[\n,;]+/)) {
    let item = raw.trim();
    if (!item) continue;
    const more = item.match(/\(\+\d+\)/g) || [];
    item = item
      .replace(/\(\+\d+\)/g, '')
      .replace(/\s*….*$/u, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (item) refs.push(item);
    refs.push(...more);
  }
  return refs;
}

// The sheet stores absolute links to the live app (https://dhamma.gift/an10.114:2.1).
// The docs page must work on prod, test and any mirror, so only the path is kept.
export function stripLink(value) {
  const raw = String(value ?? '').trim();
  if (!raw) return '';
  try {
    const url = new URL(raw);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return '';
    if (/(^|\.)dhamma\.gift$/i.test(url.hostname)) {
      return `${url.pathname || '/'}${url.search || ''}${url.hash || ''}`;
    }
  } catch {
    // not a URL — keep as-is (the UI renders it as plain text unless it starts with /)
  }
  return raw;
}

// Anchor for #dukkha-style deep links: first Pali variant, diacritics stripped.
export function slugify(value) {
  const text = String(value ?? '');
  const first = text.split(/[,;(]/)[0].trim() || text.trim();
  const slug = normalizeText(first)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
  return slug || 'term';
}

// Terms already argued in /rationale. The anchors exist in both locale versions (#dukkha
// and #anta are English headings there too; #passages is an explicit <a id>).
export const RATIONALE = {
  dukkha: {en: '/rationale#dukkha', ru: '/rationale#dukkha'},
  anta: {en: '/rationale#anta', ru: '/rationale#anta'},
  tanha: {en: '/rationale#passages', ru: '/rationale#passages'},
  tasina: {en: '/rationale#passages', ru: '/rationale#passages'},
  kama: {en: '/rationale#passages', ru: '/rationale#passages'},
  kamma: {en: '/rationale#passages', ru: '/rationale#passages'},
  veramani: {en: '/rationale#passages', ru: '/rationale#passages'},
  pativirata: {en: '/rationale#passages', ru: '/rationale#passages'},
  vedana: {en: '/rationale#passages', ru: '/rationale#passages'},
  sukha: {en: '/rationale#passages', ru: '/rationale#passages'},
};

export function rationaleFor(pali) {
  const key = normalizeText(pali)
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!key) return null;
  if (RATIONALE[key]) return RATIONALE[key];
  // «dukkhā vedanā» -> «dukkha»; only at a word boundary, so «kāmupādāna» does not match «kāma».
  const words = key.split(' ');
  for (let n = words.length - 1; n >= 1; n--) {
    const prefix = words.slice(0, n).join(' ');
    if (RATIONALE[prefix]) return RATIONALE[prefix];
  }
  return null;
}

export function buildGlossary(csvText) {
  const rows = parseCsv(String(csvText ?? '').replace(/^\uFEFF/, ''));
  const headerIndex = findHeaderRow(rows);
  const cols = resolveColumns(rows[headerIndex]);

  const stats = {
    totalRows: 0,
    droppedEmpty: 0,
    droppedDuplicate: 0,
    droppedNonTerm: 0,
    ru: 0,
    en: 0,
    canon: 0,
    expandable: 0,
    withoutNumber: 0,
  };
  const terms = [];
  const seen = new Set();

  for (const row of rows.slice(headerIndex + 1)) {
    stats.totalRows++;
    const pali = cell(row, cols.pali);
    if (!pali) continue;
    // «-viññeyyā» and «...pe...» are grammatical fragments/placeholders, not glossary
    // entries; they would otherwise sit at the top of the table and add a "-" to the index.
    if (!/^\p{L}/u.test(pali)) {
      stats.droppedNonTerm++;
      continue;
    }
    const ru = cell(row, cols.ru);
    const en = cell(row, cols.en);
    // «Составные (черновик…)» is a section heading that ended up in the Pali column; rows
    // with neither translation are not terms.
    if (!ru && !en) {
      stats.droppedEmpty++;
      continue;
    }
    const duplicateKey = `${pali}\u0000${ru}\u0000${en}`;
    if (seen.has(duplicateKey)) {
      stats.droppedDuplicate++;
      continue;
    }
    seen.add(duplicateKey);

    const canon = {};
    const where = parseRefs(cell(row, cols.where));
    const compounds = parseRefs(cell(row, cols.compounds));
    const patterns = parseRefs(cell(row, cols.patterns));
    const broader = parseRefs(cell(row, cols.broader));
    const vinaya = parseRefs(cell(row, cols.vinaya));
    const definition = cell(row, cols.definition);
    const link = stripLink(cell(row, cols.link));
    if (where.length) canon.where = where;
    if (link) canon.link = link;
    if (definition) canon.definition = definition;
    if (compounds.length) canon.compounds = compounds;
    if (patterns.length) canon.patterns = patterns;
    if (broader.length) canon.broader = broader;
    if (vinaya.length) canon.vinaya = vinaya;

    const numRaw = cell(row, cols.num);
    const num = /^\d+$/.test(numRaw) ? Number(numRaw) : null;
    const dgNote = cell(row, cols.dgNote);
    const rationale = rationaleFor(pali);
    const term = {
      id: '',
      num,
      pali,
      ru,
      en,
      ...(Object.keys(canon).length ? {canon} : {}),
      ...(dgNote ? {dgNote} : {}),
      ...(rationale ? {rationale} : {}),
    };
    terms.push(term);

    if (ru) stats.ru++;
    if (en) stats.en++;
    if (definition) stats.canon++;
    if (!num) stats.withoutNumber++;
    if (definition || link || where.length || compounds.length || patterns.length || broader.length || vinaya.length || dgNote || rationale) {
      stats.expandable++;
    }
  }

  // Deterministic order BEFORE ids: adding a term must not renumber unrelated anchors.
  terms.sort((a, b) => {
    const an = normalizeText(a.pali);
    const bn = normalizeText(b.pali);
    return an.localeCompare(bn, 'en') || a.pali.localeCompare(b.pali, 'en');
  });

  const used = new Map();
  for (const term of terms) {
    const base = slugify(term.pali);
    const n = (used.get(base) || 0) + 1;
    used.set(base, n);
    term.id = n === 1 ? base : `${base}-${n}`;
  }

  return {terms, stats};
}

export function validateGlossary({terms, stats}) {
  if (!terms.length) throw new Error('Glossary: no terms parsed from the sheet.');
  if (terms.length < 100) {
    throw new Error(`Glossary: only ${terms.length} terms parsed — the sheet structure probably changed.`);
  }
  if (stats.canon < 1) {
    throw new Error('Glossary: no canon definitions parsed — the sheet structure probably changed.');
  }
  const ids = new Set();
  for (const term of terms) {
    if (!term.pali) throw new Error(`Glossary: a term has no Pali (id ${term.id}).`);
    if (ids.has(term.id)) throw new Error(`Glossary: duplicate anchor #${term.id}.`);
    ids.add(term.id);
  }
}
