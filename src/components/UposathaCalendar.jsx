import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Body, Illumination, MoonPhase, SearchMoonPhase } from 'astronomy-engine';

// Uposatha days as the suttas count them (MN 83, AN 3.37): the 14th, 15th and 8th lunar days of each
// half-month, six a month. A lunar day is the tithi: the Moon gains 12 degrees on the Sun per lunar
// day, 30 to a month; days 1-15 are the waxing half, 1-15 again the waning half (the 15th of the
// waning half is the new moon day). A lunar day begins and ends at the exact moment the angle crosses
// a multiple of 12 — not at midnight — so it usually spans two civil dates and lasts 19-26 hours.
// The moments come from astronomy-engine (a real ephemeris, minute accuracy) and are shown in the
// reader's own time zone; the place does not matter, only the zone, so there is no geolocation prompt.
// The old lunar.html counted from one remembered new moon with a mean month and was off by up to
// ~17 hours.

// Moon emoji as in lunarphase-js (the reference): eight phases, and the lit side flips in the
// Southern Hemisphere (a waxing crescent 🌒 in the north looks like 🌘 in the south).
const PHASES_NORTH = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
const PHASES_SOUTH = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒'];
// Only the zones where the default would be wrong; anything else can be flipped by hand.
const SOUTHERN_ZONE = /^(Australia|Antarctica)\/|^Pacific\/(Auckland|Chatham|Fiji|Tongatapu|Apia|Noumea|Tahiti|Port_Moresby)|^Africa\/(Johannesburg|Maseru|Mbabane|Windhoek|Harare|Lusaka|Maputo)|^America\/(Sao_Paulo|Argentina|Buenos_Aires|Santiago|Lima|La_Paz|Asuncion|Montevideo)/;

// Which of the eight phases each Uposatha day shows: the 8th is a quarter, the 14th the last not-yet-full
// (or not-yet-new) shape, the 15th the full moon in the waxing half and the new moon in the waning one.
const DAY_PHASE = { true: { 8: 2, 14: 3, 15: 4 }, false: { 8: 6, 14: 7, 15: 0 } };
const UPOSATHA_DAYS = [8, 14, 15, 23, 29, 30]; // tithi numbers: 8th, 14th, 15th of the waxing half, then of the waning half
const MONTHS_SHOWN = 3; // this month and the next two, grouped under month headings
const DAY = 86400000;

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
    next: 'Uposatha days',
    ordinal: { 8: '8th', 14: '14th', 15: '15th' },
    dayOf: (ord, half) => `${ord} day of the ${half}`,
    moonNote: ['', 'full moon'],
    newNote: 'new moon',
    now: 'now',
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
    next: 'Дни упосатхи',
    ordinal: { 8: '8-й', 14: '14-й', 15: '15-й' },
    dayOf: (ord, half) => `${ord} день · ${half}`,
    moonNote: ['', 'полнолуние'],
    newNote: 'новолуние',
    now: 'сейчас',
    phases: ['Новолуние', 'Растущий серп', 'Первая четверть', 'Растущая Луна', 'Полнолуние', 'Убывающая Луна', 'Последняя четверть', 'Убывающий серп'],
    loading: 'Расчёт…',
  },
};

const TZ_KEY = 'dgUposathaTz';
const HEMI_KEY = 'dgUposathaHemisphere';

function localDay(date, tz) {
  return date.toLocaleDateString('en-CA', { timeZone: tz }); // yyyy-mm-dd, sortable
}

// Every 8th/14th/15th lunar day that has not ended yet, up to the end of the third month, with the
// exact moments it starts and ends. Walks the lunar months from the new moon before `now`.
function uposathaDays(now, tz) {
  const today = localDay(now, tz);
  const out = [];
  const months = new Set();
  let newMoon = SearchMoonPhase(0, new Date(now.getTime() - 32 * DAY), 34).date;
  for (let guard = 0; guard < 8; guard++) {
    for (const tithi of UPOSATHA_DAYS) {
      const start = SearchMoonPhase(((tithi - 1) * 12) % 360, newMoon, 32).date;
      const end = SearchMoonPhase((tithi * 12) % 360, start, 3).date;
      if (end < now) continue; // already over
      const month = localDay(start < now ? now : start, tz).slice(0, 7);
      months.add(month);
      if (months.size > MONTHS_SHOWN) return out;
      const waxing = tithi <= 15;
      out.push({ day: waxing ? tithi : tithi - 15, waxing, start, end, month });
    }
    newMoon = SearchMoonPhase(0, new Date(newMoon.getTime() + 20 * DAY), 15).date;
  }
  return out;
}

function dayEmoji(d, south) {
  return (south ? PHASES_SOUTH : PHASES_NORTH)[DAY_PHASE[d.waxing][d.day]];
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
  const angle = MoonPhase(now);
  const phaseIndex = Math.floor(((angle + 22.5) % 360) / 45);
  const tithi = Math.floor(angle / 12) + 1; // 1..30
  const waxingNow = tithi <= 15;
  const lunarDay = waxingNow ? tithi : tithi - 15;
  const dayEnds = SearchMoonPhase((tithi * 12) % 360, now, 3);
  const isUposatha = [8, 14, 15].includes(lunarDay);
  const percent = Math.round(Illumination(Body.Moon, now).phase_fraction * 100);
  const emoji = south ? PHASES_SOUTH : PHASES_NORTH;

  const dateFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const stampFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  const zoneFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, timeZoneName: 'short' });
  const zoneName = (zoneFmt.formatToParts(now).find((p) => p.type === 'timeZoneName') || {}).value || '';
  const endFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, weekday: 'short', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
  const monthFmt = new Intl.DateTimeFormat(locale, { timeZone: tz, month: 'long', year: 'numeric' });
  const relFmt = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const todayMs = Date.parse(localDay(now, tz));

  const days = uposathaDays(now, tz);
  const groups = [];
  days.forEach((d) => {
    const last = groups[groups.length - 1];
    if (last && last.month === d.month) last.days.push(d); else groups.push({ month: d.month, days: [d] });
  });

  function pickZone(e) {
    setTz(e.target.value);
    try { localStorage.setItem(TZ_KEY, e.target.value); } catch (err) { /* private mode */ }
  }
  function pickHemisphere(e) {
    setSouth(e.target.value === 'south');
    try { localStorage.setItem(HEMI_KEY, e.target.value); } catch (err) { /* private mode */ }
  }

  return (
    <div style={{ border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, padding: '12px 16px', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
        <span style={{ fontSize: '3rem', lineHeight: 1 }} aria-hidden="true">{emoji[phaseIndex]}</span>
        <div>
          <strong>{t.today}:</strong> {dateFmt.format(now)}
          <br />
          <span style={{ opacity: 0.85 }}>{t.phases[phaseIndex]}, {percent}% {t.illuminated}</span>
          <br />
          <strong>{t.lunarDay} {lunarDay}</strong> {t.of15}, {t.halves[waxingNow ? 0 : 1]}
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
          <h4 style={{ margin: '14px 0 4px', textTransform: 'capitalize' }}>{monthFmt.format(g.days[0].start < now ? now : g.days[0].start)}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {g.days.map((d) => {
              const ongoing = d.start <= now;
              const away = Math.round((Date.parse(localDay(d.start, tz)) - todayMs) / DAY);
              const note = d.day === 15 ? (d.waxing ? t.moonNote[1] : t.newNote) : '';
              return (
                <li
                  key={d.start.toISOString()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '8px 10px',
                    borderRadius: 6,
                    background: d === days[0] ? 'var(--ifm-color-emphasis-200)' : 'transparent',
                  }}
                >
                  <span style={{ fontSize: '2.2rem', lineHeight: 1 }} aria-hidden="true">{dayEmoji(d, south)}</span>
                  <span style={{ flex: 1 }}>
                    <strong>{t.dayOf(t.ordinal[d.day], t.halves[d.waxing ? 0 : 1])}</strong>
                    {note ? <span style={{ opacity: 0.75 }}> · {note}</span> : null}
                    <br />
                    <span style={{ fontSize: '0.9em', opacity: 0.85 }}>
                      {stampFmt.format(d.start)} – {stampFmt.format(d.end)} {zoneName}
                    </span>
                  </span>
                  <span style={{ opacity: 0.75, whiteSpace: 'nowrap' }}>{ongoing ? t.now : relFmt.format(away, 'day')}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
