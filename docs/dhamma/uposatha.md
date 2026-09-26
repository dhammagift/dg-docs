---
slug: /uposatha
sidebar_position: 4
sidebar_label: Uposatha days
---

import SuttaBrowser from '@site/src/components/SuttaBrowser';
import SuttaLink from '@site/src/components/SuttaLink';
import PageTools from '@site/src/components/PageTools';
import UposathaCalendar from '@site/src/components/UposathaCalendar';

# Uposatha days

<PageTools />

According to the suttas, Uposatha is kept on the 14th, 15th and 8th days of the lunar half-month
(MN 83) — three in each half, six a month. Below are the coming Uposatha days with the exact
moments each lunar day begins and ends in your time zone. A lunar day changes when the Moon has
gained another 12° on the Sun, not at midnight, so it lasts 19–26 hours and usually spans two
calendar dates. The 15th day of the waxing half is the full moon, of the waning half the new moon.
The same calendar is available as a [page of its own](pathname:///uposatha-calendar), with a second
view: an ordinary month calendar with the Uposatha days marked, for planning your days.

<UposathaCalendar />

A day in the suttas is counted from the evening ("nights and days", AN 3.70), so the observance
begins on the evening before the date shown.

:::caution[Dates can differ by a day]
The moments come from an astronomical model, accurate to about a minute. Thai, Sri Lankan and
Burmese communities calculate their calendars by tradition and can differ from these dates by a
day; if you keep Uposatha with a particular community, follow its calendar. To cross-check, see
[Time and Date: Moon Phases](https://www.timeanddate.com/moon/phases/).
:::

## How the calendar works

**Two ways of counting.** By default the calendar counts as the suttas do (the switch "By the suttas" in
its menu): six days a month — the 14th, 15th and 8th lunar days of each half — and a day begins in the
evening. So an Uposatha is dated by the **evening it begins**: the observance runs from that evening
through the night, and ends the next evening. Switched off, the calendar shows the modern scheme: four days
a month — the dates of the new moon, the first quarter, the full moon and the last quarter — each on the
calendar date it falls on.

**What each line says.** *Begins* is the evening the Uposatha starts; *Observed* is the night and the day it
covers; *Lunar day* is the real lunar day at that evening, for checking. Real lunar days are numbered 1 to
30 through the month (the Moon gains 12° on the Sun each day); the suttas name the days by their number
within a half — so the 8th day of the waning half is the 23rd lunar day of the month, and the 14th of the
waning half is the 29th. The lunar day changes at an exact moment, not at midnight, and lasts 19 to 26
hours, so against the calendar dates a number sometimes appears twice or is skipped. The calendar reads
this from the real Moon and says so in a note under the date ("the 14th is skipped and kept with this
date", "the same lunar day as the day before"). The switch "Details" in the menu shortens every date to
one line.

**Place and time.** The moments are shown in your time zone. With your location (or a city chosen in the
menu) the evening is the real sunset and the sun's times are shown; without it the evening is taken at
18:00. The location is used only in your browser, rounded to about a kilometre, and is not sent anywhere.
When a location is set, the time zone and the hemisphere (which side of the moon is lit in the pictures) are
taken from it and the manual fields are hidden.

**Reminders.** Switch on "Remind me" and choose how long before the evening you want to be told (by default
a day) and for which days: by default the 8th and the 14th; the 15th can be added. The reminder for the
14th says that there are two Uposatha days, the 14th and the 15th. A web page can show notifications only while
it is open or running in the background of your device; for reminders that arrive with everything closed, add
the days to your phone's calendar (below). Reminders inside the Android and iOS apps are planned.

**Your own calendar.** In the menu, "Calendar":
- *Apple* opens the subscription in Apple Calendar (also other apps that accept a `webcal` link);
  *Google* opens the "add by URL" form in Google Calendar; *Copy link* gives the link for any other
  program. A subscription covers the coming year and renews itself, so the days are always current. Nothing
  is stored on our side — the link carries your choices (place, scheme, reminder time), so the same link
  gives the same calendar to whoever opens it. Apple Calendar keeps the alarms from the feed; Google
  Calendar ignores them for subscribed calendars and uses its own default notifications.
- *Download .ics file* adds the next 12 months once, with alarms, to any calendar. It does not update
  afterwards.

### Other moon tools

To cross-check the moments or watch the Moon in another form:

- Website: [Time and Date: Moon Phases](https://www.timeanddate.com/moon/phases/)
- Apps: [Daff Moon Phase](https://play.google.com/store/apps/details?id=com.dafftin.android.moon_phase) (Android) or [MOON](https://apps.apple.com/us/app/moon-current-moon-phase/id660036257) (iOS)
- For developers: [lunarphase-js](https://jasonsturges.com/lunarphase-js/); this calendar itself uses [astronomy-engine](https://github.com/cosinekitty/astronomy).

## Key suttas to start with

Each "Read →" opens the sutta at the passage in question and highlights it.

**AN 10.46** — skipping the uposathas is not allowed ("it is your loss and failure").
<SuttaLink index={0}>Read →</SuttaLink>

**MN 83** — one should observe the 14th, 15th, and 8th days. <SuttaLink index={1}>Read →</SuttaLink>

**MN 146** — the 14th of the waxing moon <SuttaLink index={2}>Read →</SuttaLink> and the 15th, the
full moon <SuttaLink index={3}>Read →</SuttaLink>.

**AN 3.37** — the 14th <SuttaLink index={4}>Read →</SuttaLink>, 15th <SuttaLink index={5}>Read →</SuttaLink>
and 8th <SuttaLink index={6}>Read →</SuttaLink> days compared with the visits of deities of
different ranks.

**AN 3.70** — the three kinds of Uposatha <SuttaLink index={7}>Read →</SuttaLink>: how it should
**not** be observed — the "cowherd's Uposatha" <SuttaLink index={8}>Read →</SuttaLink> and the
"Nigaṇṭha's Uposatha" <SuttaLink index={9}>Read →</SuttaLink> — and how the Noble One's Uposatha
should be observed <SuttaLink index={10}>Read →</SuttaLink>. The sutta says "nights and days" rather
than "days and nights" <SuttaLink index={11}>Read →</SuttaLink>; the Pali has the fixed expression
*ahoratta* ("day-night") in other contexts.

<SuttaBrowser items={[
  { label: 'AN 10.46', src: '/an10.46:1.5?lang=en' },
  { label: 'MN 83', src: '/mn83:3.3?lang=en' },
  { label: 'MN 146 · 14th', src: '/mn146:15.2?lang=en' },
  { label: 'MN 146 · 15th', src: '/mn146:27.2?lang=en' },
  { label: 'AN 3.37 · 14th', src: '/an3.37:1.3?lang=en' },
  { label: 'AN 3.37 · 15th', src: '/an3.37:1.5?lang=en' },
  { label: 'AN 3.37 · 8th', src: '/an3.37:1.1?lang=en' },
  { label: 'AN 3.70 · three kinds', src: '/an3.70:2.3?lang=en' },
  { label: 'AN 3.70 · cowherd', src: '/an3.70:2.4?lang=en' },
  { label: 'AN 3.70 · Nigaṇṭha', src: '/an3.70:3.1?lang=en' },
  { label: 'AN 3.70 · Noble One', src: '/an3.70:4.1?lang=en' },
  { label: 'AN 3.70 · nights and days', src: '/an3.70:19.3?lang=en' },
]} />
