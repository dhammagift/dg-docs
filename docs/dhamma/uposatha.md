---
slug: /uposatha
sidebar_position: 4
sidebar_label: Uposatha days
---

import PageTools from '@site/src/components/PageTools';
import UposathaCalendar from '@site/src/components/UposathaCalendar';

# Uposatha days

<PageTools />

The calendar shows the Uposatha days as the suttas count them — the 14th, 15th and 8th lunar days of each half-month, six a
month — with the exact moments in your time zone and place. It is a [page of its own](pathname:///uposatha-calendar), part of
the app; below is the same calendar. This page explains how to read it and what its settings do. The suttas themselves are on
the calendar page (the slideshow "From the suttas" and its "Show all" list).

<UposathaCalendar />

## Reading the calendar

**Two views.** "Uposatha days" is a list by months and weeks; "Calendar" is an ordinary month with the days marked. The card
"Today" above them gives the Moon now: its phase, the lit part, its age since the new moon, and the lunar day with the moments it
began and ends.

**Dates.** A day in the suttas begins in the evening ("night and day", AN 3.70), so an Uposatha is dated by the **evening it
begins** and lasts through the night and the next day. In the month calendar the evening date has a ring; the next date, the
day of that Uposatha, has a dashed ring. When the 14th and the 15th follow each other, the three dates read 14 · 14–15 · 15:
on the middle one the 14th is still going in the day and the 15th begins in the evening. The 15th is filled; the 8th and the
14th are rings.

**The lines of a date.** *Begins* — the evening; *Observed* — the night and the day it covers; *Lunar day* — the real lunar
day of that Uposatha, for checking. Real lunar days are numbered 1 to 30 through the month (the Moon gains 12° on the Sun each
day); the suttas name the days by their number within a half, so the 8th day of the waning half is the 23rd of the month and
the 14th of the waning half the 29th. A lunar day changes at an exact moment, not at midnight, and lasts 19 to 26 hours, so
against the calendar dates a number sometimes appears twice or is skipped; the calendar reads this from the real Moon and says
so in a note under the date. The lunar day is read at the dawn that follows the evening, because the daytime of the Uposatha
lies there.

**The full and the new moon** are moments and often fall on the next date; they are marked on the date they really fall on, with
the time.

**Dates can differ by a day.** The moments come from an astronomical model, accurate to about a minute. Thai, Sri Lankan and
Burmese communities calculate their calendars by tradition and can differ from these dates by a day; if you keep the Uposatha
with a particular community, follow its calendar.

## Settings

Open the menu ☰ → the block "Uposatha". The link "change" under the card "Today" and "Set a place" by the heading "Structure of
the night and day" lead straight to the place.

**Time zone and hemisphere.** The moments are shown in your time zone; the hemisphere decides which side of the Moon is lit in
the pictures. When a place is set, both are taken from it and the manual fields are hidden.

**Place.** With your location (or a city typed in the field) the evening is the real sunset and the sun's times are shown;
without it the evening is taken at 18:00 and the day parts at 06:00 – 18:00, marked with an asterisk. The location is used only
in your browser, rounded to about a kilometre, and is not sent anywhere.

**Week starts on.** Monday or Sunday; until you choose, Monday in Russian and Sunday in English.

**By the suttas.** On — the Uposatha as in the suttas, six days a month, counted from the evening. Off — the modern scheme: four
days a month, the dates of the new moon, the first quarter, the full moon and the last quarter (the label turns burgundy so
that it is not mistaken).

**Details.** Off — every date in one short line.

**Reminders.** Switch on "Remind me", choose when — from "when it begins" up to two days before — and for which days: by default
the 8th and the 14th; the 15th can be added. The reminder for the 14th says that there are two Uposatha days, the 14th and the
15th. A web page can show notifications only while it is open or running in the background of your device; for reminders that
arrive with everything closed, add the days to your phone's calendar. Reminders inside the Android and iOS apps are planned.

**Your own calendar.** The button "Add to calendar" (and the same row in the menu) opens the options:
- *Apple* opens the subscription in Apple Calendar (also other apps that accept a `webcal` link); *Google* opens the "add by URL"
  form in Google Calendar; *Copy link* gives the link for any other program. A subscription covers the coming year and renews
  itself. Nothing is stored on our side — the link carries your choices (place, scheme, reminder time), so the same link gives
  the same calendar to whoever opens it. Apple Calendar keeps the alarms from the feed; Google Calendar ignores them for
  subscribed calendars and uses its own default notifications.
- *Download .ics file* adds the next 12 months once, with alarms, to any calendar. It does not update afterwards.

**Share** copies the link to the page or opens the share sheet of your device.

## Structure of the night and day

The suttas divide the day into three parts — *pubbaṇhasamaya* (morning), *majjhanhikasamaya* (midday) and *sāyanhasamaya*
(evening) — and the night into three parts — *paṭhama yāma*, *majjhima yāma* and *pacchima yāma* (MN 53; AN 8.9; Ud 1.1). The page
cuts the time from sunrise to sunset into three equal parts, and from sunset to sunrise likewise, for your place and today's date,
and marks the part that is going on now. This is conventional, for illustration: the suttas give no clock times, and the parts
are longer or shorter with the season.

What is written by each part — alms in the morning, seclusion at midday, meeting in the evening; walking and sitting, the lion's
posture, rising — is how the arahants and other monks of the suttas spend it (SN 28.1, MN 53): a picture from the suttas, not a
rule; a layperson is not required to do so. The word *majjhanhikasamaya* itself is in MN 79 ("the sun at midday"); SN 28.1 does
not use it, but describes that part of the day: after the meal, the day's meditation, coming out in the evening.

### Other moon tools

The beginning and the end of a lunar day and the phases of the Moon are astronomical data. To check them or to see them another way:

- Website: [Time and Date: Moon Phases](https://www.timeanddate.com/moon/phases/)
- Apps: [Daff Moon Phase](https://play.google.com/store/apps/details?id=com.dafftin.android.moon_phase) (Android) or [MOON](https://apps.apple.com/us/app/moon-current-moon-phase/id660036257) (iOS)
- For developers: [lunarphase-js](https://jasonsturges.com/lunarphase-js/); this calendar itself uses [astronomy-engine](https://github.com/cosinekitty/astronomy).
