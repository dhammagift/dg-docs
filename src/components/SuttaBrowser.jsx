import React, { useState, useRef, useEffect } from 'react';

// Single shared live reader for all suttas cited in sutta.md. Selection happens two ways:
// (1) inline "Читать →" links next to each principle's own citation in the prose
// (SuttaLink.jsx, dispatches a 'dg:selectSutta' event this listens for), and (2) the compact
// <select> below, for jumping around without scrolling back up. There is deliberately no
// second full list of the same citations here any more — that repeated the exact same
// label+description already given inline above each one (owner: "получается два раза одно
// и то же").
export default function SuttaBrowser({ items, height = 550 }) {
  const [active, setActive] = useState(0);
  // Starts false (matches server-rendered output) and is corrected client-side, same pattern
  // as PageTools.jsx's isRu — avoids a hydration mismatch from reading window at render time.
  const [isRu, setIsRu] = useState(false);
  const current = items[active];
  const frameRef = useRef(null);

  useEffect(() => {
    setIsRu(window.location.pathname.startsWith('/ru/'));
  }, []);

  // The prose above can be much taller than the viewport (mobile especially) — without this,
  // picking a sutta leaves the reader below the fold, out of sight, so nothing visibly
  // happens from the reader's perspective.
  function select(i) {
    setActive(i);
    if (frameRef.current) {
      frameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  useEffect(() => {
    function handleExternalSelect(e) {
      const i = e.detail && e.detail.index;
      if (typeof i === 'number' && items[i]) select(i);
    }
    window.addEventListener('dg:selectSutta', handleExternalSelect);
    return () => window.removeEventListener('dg:selectSutta', handleExternalSelect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div
      id="sutta-reader"
      style={{
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          padding: '8px 14px',
          borderBottom: '1px solid var(--ifm-color-emphasis-300)',
        }}
      >
        <span>
          {isRu ? 'Сейчас открыто:' : 'Now open:'} <strong>{current.label}</strong>
        </span>
        <a
          className="dg-appframe__bar-link"
          href={current.src}
          target="_blank"
          rel="noopener noreferrer"
          title={isRu ? 'Открыть в новом окне' : 'Open in a new window'}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          <span>{isRu ? 'Открыть в новом окне' : 'Open in a new window'}</span>
        </a>
        <select
          value={active}
          onChange={(e) => select(Number(e.target.value))}
          style={{ maxWidth: '45%' }}
        >
          {items.map((item, i) => (
            <option key={item.src} value={i}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <iframe
        ref={frameRef}
        key={current.src}
        src={current.src}
        title={current.label}
        loading="lazy"
        style={{ width: '100%', height, border: 'none', display: 'block' }}
      />
    </div>
  );
}
