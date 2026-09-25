import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// The calendar itself is a page of its own in dg-node (/uposatha-calendar: vanilla JS, astronomy-engine),
// usable from anywhere; the docs embed it so there is one implementation, not two. The page reports its
// height with postMessage (?embed=1 drops its own header), and gets the docs' language and theme.
export default function UposathaCalendar() {
  const locale = useDocusaurusContext().i18n.currentLocale === 'ru' ? 'ru' : 'en';
  const [theme, setTheme] = useState('light');
  const [height, setHeight] = useState(900);

  useEffect(() => {
    const root = document.documentElement;
    const readTheme = () => setTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
    readTheme();
    const observer = new MutationObserver(readTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    const onMessage = (e) => {
      if (e.data && typeof e.data.dgUposathaHeight === 'number') setHeight(e.data.dgUposathaHeight + 4);
    };
    window.addEventListener('message', onMessage);
    return () => { observer.disconnect(); window.removeEventListener('message', onMessage); };
  }, []);

  return (
    <>
      <iframe
        title={locale === 'ru' ? 'Календарь дней упосатхи' : 'Uposatha calendar'}
        src={`/uposatha-calendar?embed=1&lang=${locale}&theme=${theme}`}
        style={{ width: '100%', height, border: 0 }}
      />
      <p>
        <a href={`/uposatha-calendar?lang=${locale}`} target="_blank" rel="noopener noreferrer">
          {locale === 'ru' ? 'Открыть календарь отдельной страницей →' : 'Open the calendar as a page of its own →'}
        </a>
      </p>
    </>
  );
}
