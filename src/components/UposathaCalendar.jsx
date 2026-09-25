import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AppFrame from './AppFrame';

// The calendar itself is a page of its own in dg-node (/uposatha-calendar: vanilla JS, astronomy-engine),
// usable from anywhere; the docs embed it so there is one implementation, not two. The embed is the bare
// ?embed=1 view (no header); the "open in a new window" pill of AppFrame leads to the full page. The page
// reports its height, and gets the docs' language and theme.
export default function UposathaCalendar() {
  const locale = useDocusaurusContext().i18n.currentLocale === 'ru' ? 'ru' : 'en';
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    const readTheme = () => setTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
    readTheme();
    const observer = new MutationObserver(readTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <AppFrame
      src={`/uposatha-calendar?embed=1&lang=${locale}&theme=${theme}`}
      openHref={`/uposatha-calendar?lang=${locale}`}
      title={locale === 'ru' ? 'Календарь дней упосатхи' : 'Uposatha calendar'}
      height={900}
      autoHeight
    />
  );
}
