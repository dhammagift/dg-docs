// A docs page opened inside a frame on the app's own pages (?embed=1, e.g. the Help section of /uposatha-calendar): only the article is
// shown - the navbar, the sidebar, the page's own table of contents and the footer are hidden (rules under .dg-embed in custom.css).
const apply = () => {
  if (typeof document === 'undefined') return;
  const embed = new URLSearchParams(window.location.search).get('embed') === '1';
  document.documentElement.classList.toggle('dg-embed', embed);
};
apply();
export function onRouteDidUpdate() { apply(); }
