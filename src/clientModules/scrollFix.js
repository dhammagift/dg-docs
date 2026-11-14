// Fixes: reloading (or revisiting) a docs page that was previously scrolled down (e.g. after
// clicking one of sutta.md's "Читать →" links, which scrolls to the shared reader) lands back
// at that same scroll offset instead of the top — the browser's own scroll restoration
// (`history.scrollRestoration`, default `'auto'`) remembers the last offset for this history
// entry and reapplies it on reload. Reproduced directly: click a "Читать →" link (scrolls to
// ~3400px), reload the page — it comes back at ~3400px instead of 0.
//
// `manual` opts the page out of that automatic restoration for future loads; if the browser
// already restored a stale offset before this module runs, undo it once here too — but only
// when the URL has no hash, so a legitimate deep link to a heading (`#some-heading`) still
// works normally.
//
// Only on that page (/sutta, en and ru): everywhere else a reload must keep the reader where they were, as browsers do
// (f3-ultra 2026-11-14: /ru/docs/policies scrolled to y 2730, Reload -> back at the top).
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history && /\/docs\/sutta\/?$/.test(window.location.pathname)) {
  window.history.scrollRestoration = 'manual';
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
}
