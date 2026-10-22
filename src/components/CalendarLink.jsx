import React from 'react';

// A link in the docs text that reveals a section of the calendar inside the
// live demo frame already on the page, instead of opening a new tab. The
// AppFrame iframe is same-origin, so we set its inner hash to scroll it in
// place (no reload, so language and theme are kept) and bring the frame into
// view. If the frame isn't on the page or can't be reached, `href` just opens
// the full calendar page as a normal link.
// ponytail: queries the single .dg-appframe iframe on the page; a page with
// several frames would need an explicit target.
export default function CalendarLink({hash, href, children}) {
  const onClick = (e) => {
    const frame = document.querySelector('.dg-appframe iframe');
    if (!frame || !frame.contentWindow) return; // let href open normally
    try {
      frame.contentWindow.location.hash = hash;
      e.preventDefault();
      frame.scrollIntoView({behavior: 'smooth', block: 'center'});
    } catch (err) {
      /* cross-origin or not ready: fall back to the href */
    }
  };
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
}
