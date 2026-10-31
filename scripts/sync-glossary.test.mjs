import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

import {
  buildGlossary,
  findHeaderRow,
  normalizeText,
  parseCsv,
  parseRefs,
  rationaleFor,
  resolveColumns,
  slugify,
  stripLink,
  validateGlossary,
} from './lib/glossary.mjs';

const FIXTURE = readFileSync(new URL('./fixtures/sheet-sample.csv', import.meta.url), 'utf8');

test('parseCsv keeps quoted commas and embedded newlines', () => {
  const rows = parseCsv('a,b\n"x, y","line1\nline2"\n');
  assert.deepEqual(rows, [
    ['a', 'b'],
    ['x, y', 'line1\nline2'],
  ]);
});

test('resolveColumns maps by header name, not position', () => {
  const rows = parseCsv(FIXTURE);
  const cols = resolveColumns(rows[0]);
  assert.equal(cols.pali, 1);
  assert.equal(cols.ru, 2);
  assert.equal(cols.en, 3);
  assert.equal(cols.link, 9);
  assert.equal(cols.dgNote, 15);
});

test('resolveColumns fails loudly when a required column is renamed', () => {
  assert.throws(
    () => resolveColumns(['№', 'Пали', 'Русский', 'Eng']),
    /required column\(s\) not found: Англ \/ English/,
  );
});

test('resolveColumns and findHeaderRow take the English headers too', () => {
  const header = ['№', 'Pali', 'Russian', 'English', '', 'Translation (EN, 4nt)', 'Explanation (EN, 4nt)', '',
    'Where the canon defines it (Katamā…? … idaṁ vuccati; Hatthipada)', 'First definition (link)', 'Pali of the definition',
    'Compounds with a definition', 'finddhamma patterns: Katam…? / … vuccati', 'Broader: Ko…, ayaṁ…, Kiñ…, ariyassa vinaye',
    'Vinaya (Vibhaṅgas)', 'DG explanation', 'Standard Russian rendering (unedited translations, auto)'];
  assert.equal(findHeaderRow([['title'], header]), 1);
  const cols = resolveColumns(header);
  assert.deepEqual([cols.pali, cols.ru, cols.en, cols.where, cols.link, cols.definition, cols.compounds, cols.patterns, cols.broader, cols.vinaya, cols.dgNote],
    [1, 2, 3, 8, 9, 10, 11, 12, 13, 14, 15]);
});

test('parseRefs splits lists and keeps (+N) as a separate token', () => {
  assert.deepEqual(parseRefs('an1.591-592 … (+15)'), ['an1.591-592', '(+15)']);
  assert.deepEqual(parseRefs('dn16, sn44.9\npli-tv-bu-vb-pc8'), [
    'dn16',
    'sn44.9',
    'pli-tv-bu-vb-pc8',
  ]);
});

test('stripLink keeps only the path for dhamma.gift', () => {
  assert.equal(stripLink('https://dhamma.gift/mn62:12.1'), '/mn62:12.1');
  assert.equal(stripLink('https://example.com/x'), 'https://example.com/x');
  assert.equal(stripLink('javascript:alert(1)'), '');
  assert.equal(stripLink(''), '');
});

test('slugify strips diacritics and takes the first variant', () => {
  assert.equal(slugify('dukkhaṁ ariyasaccaṁ'), 'dukkham-ariyasaccam');
  assert.equal(slugify('bhagavā (bhagavata)'), 'bhagava');
  assert.equal(slugify('deva, devatā'), 'deva');
});

test('rationaleFor links known terms to /rationale anchors', () => {
  assert.equal(rationaleFor('dukkha').ru, '/rationale#dukkha');
  assert.equal(rationaleFor('taṇhā').en, '/rationale#passages');
  assert.equal(rationaleFor('kāmupādāna'), null);
});

test('normalizeText is diacritics- and case-insensitive', () => {
  assert.equal(normalizeText('Taṇhā'), 'tanha');
  assert.equal(normalizeText('Ёлка'), 'елка');
});

test('buildGlossary filters headings, duplicates and empty rows', () => {
  const {terms, stats} = buildGlossary(FIXTURE);
  assert.equal(terms.length, 11);
  assert.equal(stats.en, 8);
  assert.equal(stats.canon, 2);
  assert.equal(stats.droppedEmpty, 1);
  assert.equal(stats.droppedDuplicate, 1);
  assert.equal(stats.withoutNumber, 4);
  assert.equal(stats.expandable, 7);
  const ids = terms.map((t) => t.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('buildGlossary keeps the canon definition exactly, with newlines', () => {
  const {terms} = buildGlossary(FIXTURE);
  const adhamma = terms.find((t) => t.pali === 'adhamma');
  assert.equal(adhamma.canon.link, '/an10.114:2.1');
  assert.equal(adhamma.canon.where[0], 'an10.114');
  assert.match(adhamma.canon.definition, /adhammo;\nsammādiṭṭhi/);
  assert.equal(adhamma.en, '');
  assert.equal(adhamma.rationale, undefined);
});

test('buildGlossary drops grammatical fragments that do not start with a letter', () => {
  const [header] = FIXTURE.split('\n');
  const csv = [header, `353,-viññeyyā,-распознаваемые${','.repeat(13)}`].join('\n');
  const {terms, stats} = buildGlossary(csv);
  assert.equal(terms.length, 0);
  assert.equal(stats.droppedNonTerm, 1);
});

test('buildGlossary finds the header below a blank first row', () => {
  assert.equal(buildGlossary(`\n${FIXTURE}`).terms.length, 11);
});

test('buildGlossary is deterministic', () => {
  assert.equal(
    JSON.stringify(buildGlossary(FIXTURE).terms),
    JSON.stringify(buildGlossary(FIXTURE).terms),
  );
});

test('validateGlossary rejects a collapsed sheet', () => {
  assert.throws(() => validateGlossary({terms: [], stats: {canon: 0}}), /no terms/);
  const small = new Array(10).fill({id: 'x', pali: 'x'});
  assert.throws(() => validateGlossary({terms: small, stats: {canon: 1}}), /only 10 terms/);
});
