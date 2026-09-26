import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AppFrame from './AppFrame';

// The calendar itself is a page of its own in dg-node (/uposatha-calendar: vanilla JS, astronomy-engine),
// usable from anywhere; the docs embed the real page as a live demo (all its parts, scrolling inside the frame),
// so there is one implementation, not two. The "open in a new window" pill of AppFrame leads to the same page.
// The page gets the docs' language and theme.
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
      src={`/uposatha-calendar?lang=${locale}&theme=${theme}`}
      openHref={`/uposatha-calendar?lang=${locale}`}
      title={locale === 'ru' ? 'Календарь дней упосатхи' : 'Uposatha calendar'}
      height={780}
    />
  );
}
