import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Body, Illumination, MoonPhase, NextMoonQuarter, SearchMoonQuarter } from 'astronomy-engine';

// The Uposatha days as exact moments of the lunar phases (astronomy-engine: a real ephemeris,
// minute accuracy), shown as dates in the reader's own time zone. The old lunar.html counted from
// one remembered new moon with a mean month length and was off by up to ~17 hours, which is enough
// to land on the wrong date. Only the time zone matters for a date, not the place, so there is no
// geolocation prompt: the browser's zone is the default and any zone can be picked.

const TEXT = {
  en: {
    tz: 'Time zone',
    today: 'Today',
    illuminated: 'illuminated',
    next: 'Next Uposatha days',
    events: ['New moon', 'First quarter', 'Full moon', 'Last quarter'],
    days: ['14th or 15th day', '8th day', '15th day', '8th day'],
    phases: ['New moon', 'Waxing crescent', 'First quarter', 'Waxing gibbous', 'Full moon', 'Waning gibbous', 'Last quarter', 'Waning crescent'],
    loading: 'Calculating…',
  },
  ru: {
    tz: 'Часовой пояс',
    today: 'Сегодня',
    illuminated: 'освещено',
    next: 'Ближайшие дни упосатхи',
    events: ['Новолуние', 'Первая четверть', 'Полнолуние', 'Последняя четверть'],
    days: ['14-й или 15-й день', '8-й день', '15-й день', '8-й день'],
    phases: ['Новолуние', 'Растущий серп', 'Первая четверть', 'Растущая Луна', 'Полнолуние', 'Убывающая Луна', 'Последняя четверть', 'Убывающий серп'],
    loading: 'Расчёт…',
  },
};

const TZ_KEY = 'dgUposathaTz';
const EVENT_COUNT = 8;

function localDay(date, tz) {
  return date.toLocaleDateString('en-CA', { timeZone: tz }); // yyyy-mm-dd, sortable
}

// The next EVENT_COUNT quarter moments whose date in `tz` is today or later.
function upcoming(now, tz) {
  const today = localDay(now, tz);
  const out = [];
  let q = SearchMoonQuarter(new Date(now.getTime() - 36 * 3600 * 1000));
  while (out.length < EVENT_COUNT) {
    const date = q.time.date;
    if (localDay(date, tz) >= today) out.push({ quarter: q.quarter, date });
    q = NextMoonQuarter(q);
  }
  return out;
}

export default function UposathaCalendar() {
  const locale = useDocusaurusContext().i18n.currentLocale === 'ru' ? 'ru' : 'en';
  const t = TEXT[locale];
  const [tz, setTz] = useState(null); // null until mounted: dates depend on the reader's clock and zone
  const [zones, setZones] = useState([]);

  useEffect(() => {
    const detected = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    let saved = null;
    try { saved = localStorage.getItem(TZ_KEY); } catch (e) { /* private mode */ }
    const all = typeof Intl.supportedValuesOf === 'function' ? Intl.supportedValuesOf('timeZone') : [];
    setZones(all.includes(detected) ? all : [detected, ...all]);
    setTz(saved || detected);
  }, []);

  if (!tz) return <p>{t.loading}</p>;

  const now = new Date();
  const angle = MoonPhase(now);
  const phaseName = t.phases[Math.floor(((angle + 22.5) % 360) / 45)];
  const percent = Math.round(Illumination(Body.Moon, now).phase_fraction * 100);
  const dateFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const timeFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
  const events = upcoming(now, tz);

  function pick(e) {
    setTz(e.target.value);
    try { localStorage.setItem(TZ_KEY, e.target.value); } catch (err) { /* private mode */ }
  }

  return (
    <div style={{ border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, padding: '12px 16px', marginBottom: '1rem' }}>
      <p style={{ margin: '0 0 8px' }}>
        <strong>{t.today}:</strong> {dateFmt.format(now)} — {phaseName}, {percent}% {t.illuminated}
      </p>
      <label style={{ display: 'block', marginBottom: 12 }}>
        {t.tz}:{' '}
        <select value={tz} onChange={pick} style={{ maxWidth: '100%' }}>
          {zones.map((z) => <option key={z} value={z}>{z}</option>)}
        </select>
      </label>
      <strong>{t.next}</strong>
      <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0' }}>
        {events.map((ev, i) => (
          <li
            key={ev.date.toISOString()}
            style={{
              padding: '6px 0',
              borderTop: i ? '1px solid var(--ifm-color-emphasis-200)' : 'none',
              fontWeight: i === 0 ? 600 : 400,
            }}
          >
            {dateFmt.format(ev.date)} <span style={{ opacity: 0.7 }}>· {timeFmt.format(ev.date)}</span>
            <br />
            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>{t.events[ev.quarter]} · {t.days[ev.quarter]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
