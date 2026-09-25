import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Body, Illumination, MoonPhase, NextMoonQuarter, SearchMoonPhase, SearchMoonQuarter } from 'astronomy-engine';

// The lunar day is the tithi: the Moon gains 12 degrees on the Sun per lunar day, 30 to a month; days
// 1-15 are the waxing half, 1-15 again the waning half (the 15th of the waning half is the new moon day).
// It changes at the exact moment the angle crosses a multiple of 12, not at midnight.
// The Uposatha days as exact moments of the lunar phases (astronomy-engine: a real ephemeris,
// minute accuracy), shown as dates in the reader's own time zone. The old lunar.html counted from
// one remembered new moon with a mean month length and was off by up to ~17 hours, which is enough
// to land on the wrong date. Only the time zone matters for a date, not the place, so there is no
// geolocation prompt: the browser's zone is the default and any zone can be picked.

// Moon emoji as in lunarphase-js (the reference): eight phases, and the lit side flips in the
// Southern Hemisphere (a waxing crescent 🌒 in the north looks like 🌘 in the south).
const PHASES_NORTH = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
const PHASES_SOUTH = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒'];
const QUARTER_INDEX = [0, 2, 4, 6]; // new, first quarter, full, last quarter -> position in the eight phases
// Only the zones where the default would be wrong; anything else can be flipped by hand.
const SOUTHERN_ZONE = /^(Australia|Antarctica)\/|^Pacific\/(Auckland|Chatham|Fiji|Tongatapu|Apia|Noumea|Tahiti|Port_Moresby)|^Africa\/(Johannesburg|Maseru|Mbabane|Windhoek|Harare|Lusaka|Maputo)|^America\/(Sao_Paulo|Argentina|Buenos_Aires|Santiago|Lima|La_Paz|Asuncion|Montevideo)/;

const TEXT = {
  en: {
    tz: 'Time zone',
    hemisphere: 'Hemisphere',
    hemispheres: ['Northern', 'Southern'],
    today: 'Today',
    illuminated: 'illuminated',
    lunarDay: 'Lunar day',
    of15: 'of 15',
    halves: ['waxing half', 'waning half'],
    ends: 'until',
    uposatha: 'Uposatha day',
    next: 'Next Uposatha days',
    events: ['New moon', 'First quarter', 'Full moon', 'Last quarter'],
    days: ['14th or 15th day', '8th day', '15th day', '8th day'],
    phases: ['New moon', 'Waxing crescent', 'First quarter', 'Waxing gibbous', 'Full moon', 'Waning gibbous', 'Last quarter', 'Waning crescent'],
    loading: 'Calculating…',
  },
  ru: {
    tz: 'Часовой пояс',
    hemisphere: 'Полушарие',
    hemispheres: ['Северное', 'Южное'],
    today: 'Сегодня',
    illuminated: 'освещено',
    lunarDay: 'Лунный день',
    of15: 'из 15',
    halves: ['растущая половина', 'убывающая половина'],
    ends: 'до',
    uposatha: 'День упосатхи',
    next: 'Ближайшие дни упосатхи',
    events: ['Новолуние', 'Первая четверть', 'Полнолуние', 'Последняя четверть'],
    days: ['14-й или 15-й день', '8-й день', '15-й день', '8-й день'],
    phases: ['Новолуние', 'Растущий серп', 'Первая четверть', 'Растущая Луна', 'Полнолуние', 'Убывающая Луна', 'Последняя четверть', 'Убывающий серп'],
    loading: 'Расчёт…',
  },
};

const TZ_KEY = 'dgUposathaTz';
const HEMI_KEY = 'dgUposathaHemisphere';
const MONTHS_SHOWN = 3; // this month and the next two, grouped under month headings

function localDay(date, tz) {
  return date.toLocaleDateString('en-CA', { timeZone: tz }); // yyyy-mm-dd, sortable
}

// The quarter moments from today through the end of the third month, in `tz`.
function upcoming(now, tz) {
  const today = localDay(now, tz);
  const out = [];
  const months = new Set();
  let q = SearchMoonQuarter(new Date(now.getTime() - 36 * 3600 * 1000));
  for (;;) {
    const date = q.time.date;
    const day = localDay(date, tz);
    if (day >= today) {
      months.add(day.slice(0, 7));
      if (months.size > MONTHS_SHOWN) break;
      out.push({ quarter: q.quarter, date, month: day.slice(0, 7) });
    }
    q = NextMoonQuarter(q);
  }
  return out;
}

export default function UposathaCalendar() {
  const locale = useDocusaurusContext().i18n.currentLocale === 'ru' ? 'ru' : 'en';
  const t = TEXT[locale];
  const [tz, setTz] = useState(null); // null until mounted: dates depend on the reader's clock and zone
  const [zones, setZones] = useState([]);
  const [south, setSouth] = useState(false);

  useEffect(() => {
    const detected = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    let saved = null;
    try { saved = localStorage.getItem(TZ_KEY); } catch (e) { /* private mode */ }
    const all = typeof Intl.supportedValuesOf === 'function' ? Intl.supportedValuesOf('timeZone') : [];
    setZones(all.includes(detected) ? all : [detected, ...all]);
    const zone = saved || detected;
    let hemi = null;
    try { hemi = localStorage.getItem(HEMI_KEY); } catch (e) { /* private mode */ }
    setSouth(hemi ? hemi === 'south' : SOUTHERN_ZONE.test(zone));
    setTz(zone);
  }, []);

  if (!tz) return <p>{t.loading}</p>;

  const now = new Date();
  const emoji = south ? PHASES_SOUTH : PHASES_NORTH;
  const angle = MoonPhase(now);
  const phaseIndex = Math.floor(((angle + 22.5) % 360) / 45);
  const tithi = Math.floor(angle / 12) + 1; // 1..30
  const waxing = tithi <= 15;
  const lunarDay = waxing ? tithi : tithi - 15;
  const dayEnds = SearchMoonPhase((tithi * 12) % 360, now, 3);
  const isUposatha = [8, 14, 15].includes(lunarDay);
  const percent = Math.round(Illumination(Body.Moon, now).phase_fraction * 100);
  const dateFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const endFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, weekday: 'short', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
  const timeFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
  const relFmt = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const todayMs = Date.parse(localDay(now, tz));
  const events = upcoming(now, tz);
  const monthFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, month: 'long', year: 'numeric' });
  const groups = [];
  events.forEach((ev) => {
    const last = groups[groups.length - 1];
    if (last && last.month === ev.month) last.events.push(ev); else groups.push({ month: ev.month, events: [ev] });
  });

  function pickZone(e) {
    setTz(e.target.value);
    try { localStorage.setItem(TZ_KEY, e.target.value); } catch (err) { /* private mode */ }
  }
  function pickHemisphere(e) {
    setSouth(e.target.value === 'south');
    try { localStorage.setItem(HEMI_KEY, e.target.value); } catch (err) { /* private mode */ }
  }

  const box = { border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, padding: '12px 16px', marginBottom: '1rem' };
  return (
    <div style={box}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
        <span style={{ fontSize: '3rem', lineHeight: 1 }} aria-hidden="true">{emoji[phaseIndex]}</span>
        <div>
          <strong>{t.today}:</strong> {dateFmt.format(now)}
          <br />
          <span style={{ opacity: 0.85 }}>{t.phases[phaseIndex]}, {percent}% {t.illuminated}</span>
          <br />
          <strong>{t.lunarDay} {lunarDay}</strong> {t.of15}, {t.halves[waxing ? 0 : 1]}
          {dayEnds ? <span style={{ opacity: 0.75 }}> · {t.ends} {endFmt.format(dayEnds.date)}</span> : null}
          {isUposatha ? <span style={{ marginLeft: 8, padding: '1px 8px', borderRadius: 10, background: 'var(--ifm-color-primary)', color: '#fff', fontSize: '0.85em' }}>{t.uposatha}</span> : null}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', marginBottom: 12 }}>
        <label>
          {t.tz}:{' '}
          <select value={tz} onChange={pickZone} style={{ maxWidth: '100%' }}>
            {zones.map((z) => <option key={z} value={z}>{z}</option>)}
          </select>
        </label>
        <label>
          {t.hemisphere}:{' '}
          <select value={south ? 'south' : 'north'} onChange={pickHemisphere}>
            <option value="north">{t.hemispheres[0]}</option>
            <option value="south">{t.hemispheres[1]}</option>
          </select>
        </label>
      </div>
      <strong>{t.next}</strong>
      {groups.map((g) => (
        <div key={g.month}>
          <h4 style={{ margin: '14px 0 4px', textTransform: 'capitalize' }}>{monthFmt.format(g.events[0].date)}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {g.events.map((ev) => {
              const days = Math.round((Date.parse(localDay(ev.date, tz)) - todayMs) / 86400000);
              const isNext = ev === events[0];
              return (
                <li
                  key={ev.date.toISOString()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '8px 10px',
                    borderRadius: 6,
                    background: isNext ? 'var(--ifm-color-emphasis-200)' : 'transparent',
                  }}
                >
                  <span style={{ fontSize: '2.2rem', lineHeight: 1 }} aria-hidden="true">{emoji[QUARTER_INDEX[ev.quarter]]}</span>
                  <span style={{ flex: 1 }}>
                    <strong>{dateFmt.format(ev.date)}</strong> <span style={{ opacity: 0.7 }}>· {timeFmt.format(ev.date)}</span>
                    <br />
                    <span style={{ fontSize: '0.9em', opacity: 0.85 }}>{t.events[ev.quarter]} · {t.days[ev.quarter]}</span>
                  </span>
                  <span style={{ opacity: 0.75, whiteSpace: 'nowrap' }}>{relFmt.format(days, 'day')}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
