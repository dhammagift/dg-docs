// Runs after both builds (build/ = /docs/, build-ru/ = /ru/docs/). Each build only knows its own locale, so:
// - every page that exists in both gets the other language's hreflang link, and x-default names the English page;
// - the search page (a tool, not a document) gets a real robots meta: the search plugin writes
//   <meta property="robots">, which search engines ignore, so the page was indexable (2026-10-30 audit).
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://dhamma.gift';
const BUILDS = { en: ['build', '/docs/'], ru: ['build-ru', '/ru/docs/'] };

function pages(dir) {
    const out = [];
    for (const e of fs.readdirSync(dir, { withFileTypes: true, recursive: true })) {
        if (e.isFile() && e.name === 'index.html') out.push(path.relative(dir, path.join(e.parentPath ?? e.path, e.name)));
    }
    return out;
}

const rel = { en: new Set(pages(BUILDS.en[0])), ru: new Set(pages(BUILDS.ru[0])) };
const url = (lang, r) => SITE + BUILDS[lang][1] + r.replace(/index\.html$/, '');
let linked = 0, noindexed = 0;

for (const [lang, [dir]] of Object.entries(BUILDS)) {
    for (const r of rel[lang]) {
        const file = path.join(dir, r);
        let html = fs.readFileSync(file, 'utf8');
        const before = html;
        // Docusaurus emits hreflang=<own> and hreflang=x-default, both to this page: replace them with the full set.
        if (rel.en.has(r) && rel.ru.has(r)) {
            html = html.replace(/<link[^>]*rel=["']?alternate["']?[^>]*hreflang=["']?(?:en|ru|x-default)["']?[^>]*>/g, '');
            const links = [['en', url('en', r)], ['ru', url('ru', r)], ['x-default', url('en', r)]]
                .map(([h, u]) => `<link rel="alternate" href="${u}" hreflang="${h}">`).join('');
            html = html.replace('</head>', links + '</head>');
            linked++;
        }
        if (/^search\/index\.html$/.test(r)) {
            html = html.replace(/<meta([^>]*?)property=["']?robots["']?/g, '<meta$1name="robots"');
            if (!/name=["']?robots/.test(html)) html = html.replace('</head>', '<meta name="robots" content="noindex, follow"></head>');
            noindexed++;
        }
        if (html !== before) fs.writeFileSync(file, html);
    }
}
if (!noindexed) throw new Error('seo-postbuild: no search page found to noindex');
console.log(`seo-postbuild: hreflang pairs on ${linked} pages, noindex on ${noindexed} search page(s)`);
