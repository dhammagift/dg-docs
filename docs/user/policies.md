---
title: "Privacy Policy & Terms"
description: "Dhamma.Gift keeps users anonymous: searching and reading Pali texts never requires revealing who you are."
slug: /policies
sidebar_position: 3
---

import SiteLink from '@site/src/components/SiteLink';

# Privacy Policy & Terms

## Privacy

We are committed to the principle of **maximum user anonymity**. The
Dhamma.gift project is designed to ensure that searching for and reading
Pali texts does not require users to reveal their personal identity.

### Products Covered

**Telegram Services**
- Telegram Bots: [@Dhammagift_bot](https://t.me/dhammagift_bot) (main bot
  for sutta search and Pali dictionary lookups), [@Dgift_bot](https://t.me/dgift_bot)
  (shortname alias).
- Telegram Mini Apps: [Search](http://t.me/dhammagift_bot/find),
  [Reader](http://t.me/dhammagift_bot/read), [Dictionary](http://t.me/dhammagift_bot/dict).

**Apps** (each one: PWA, Android, iOS and Windows)
- **Dhamma.Gift** — <SiteLink to="/">PWA</SiteLink> · <SiteLink to="/apps?app=dg">Android</SiteLink> · [iOS](https://apps.apple.com/app/dhamma-gift/id6813706217) · [Windows](https://apps.microsoft.com/detail/9NK892G5P5GT)
- **Dict.Dhamma.Gift** — [PWA](https://dict.dhamma.gift) · <SiteLink to="/apps?app=dict">Android</SiteLink> · [iOS](https://apps.apple.com/app/dict-dhamma-gift/id6816639947) · [Windows](https://apps.microsoft.com/detail/9P3B7HLRXXGC)
- **Uposatha** (Uposatha calendar; "Uposatha by the Suttas" on the App Store and Microsoft Store) — <SiteLink to="/uposatha-calendar">PWA</SiteLink> · <SiteLink to="/apps?app=uposatha">Android</SiteLink> · [iOS](https://apps.apple.com/app/uposatha-by-the-suttas/id6816601259) · [Windows](https://apps.microsoft.com/detail/9NMD1L6H52ZN)

The apps work online and offline. Throughout this policy an iOS app behaves exactly as the Android one does.

**Browser Extensions**
- [Chrome Extension](https://chromewebstore.google.com/detail/dhammagift-search-and-wor/dnnogjdcmhbiobpnkhdbfnfjnjlikabd)
- [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/dhamma-gift/)
- [Microsoft Edge Add-on](https://microsoftedge.microsoft.com/addons/detail/dhammagift-search-and-wo/aokegkhdaijkikbdocanadeghllhfmhj)

### Cloud Synchronization (Optional)

This is an **opt-in feature** available on the website and within the PWA and the
Android and iOS applications, used solely to synchronize your history,
favorites, reading progress, subscriptions, and settings across multiple devices.

- **Infrastructure** — data is stored in **Google Firebase** (a third-party
  cloud database).
- **Authentication methods**:
  - *Anonymous passphrase* — if you use a secret passphrase, it is hashed
    locally on your device (SHA-256) before transmission. Only the
    anonymous identifier is stored; your original passphrase never reaches
    the database.
  - *Google Account* — we use your email address solely for session
    identification. Firebase Authentication (Google) keeps the email as your
    provider gives it, so you can see which account you are signed in with.
  - *Sign in with Apple* — as with Google: we receive your Apple user
    identifier and the email address Apple provides (if you choose "Hide My
    Email", this is a private relay address created by Apple) and use them
    solely for session identification.
- **Data storage** — only your bookmarks (favorites, including quotes saved for memorization in Meditate & Memorize), search history,
  reading progress in texts, Daily Reading subscriptions with their read marks, and your settings (including the text on the Memo page) are saved. This data is accessible only to you
  upon successful authentication.
- **Data deletion** — you may permanently delete all your cloud data at
  any time using the "Delete account & cloud data" button in the Sync menu.

### Data Processing

Our products process only the minimal technical data required for core
functionality:

- **Search** — only search queries, text references, or selected
  dictionary terms are transmitted. Like every request, they appear in the
  web server's access logs with your IP address for 14 days.
- **Synchronization** — when enabled, we keep a list of your signed-in
  devices (device model, OS, browser and the full user agent) to help you
  manage them.
- **Uposatha calendar (Uposatha app)** — the place you share (rounded to
  about a kilometre) and your settings stay on your device; the sun and moon
  times are calculated on the device, and reminders are set on the device
  itself. The downloaded .ics file is also made on your device. Two things
  do reach dhamma.gift:
  - the calendar page asks for its app manifest with your time zone and
    interface language in the address;
  - if you subscribe to the calendar (Apple Calendar, Google Calendar or a
    copied link), the feed address contains your place rounded to about
    1 km, your time zone and your reminder settings. Your calendar app
    fetches this address from dhamma.gift; if you subscribe in Google
    Calendar, Google's servers fetch it and Google sees the address too.
  We do not store these: the feed is computed on request and kept in memory
  for at most an hour, and the address appears only in the standard server
  logs (see Logs below).
- **Technical logs** — standard request metadata (IP address, User-Agent)
  is collected by web servers for security purposes and DDoS protection.

### Information We Do Not Collect

- Personal identification (except the email address used during Google
  or Apple Login).
- Telegram user IDs or private chat histories.
- Browsing history outside of our specific services.
- Persistent tracking identifiers (beyond the scope of a user-initiated
  sync session).

### Data Transmission

Our own services:

- <SiteLink to="/">dhamma.gift</SiteLink> / [dict.dhamma.gift](https://dict.dhamma.gift/)
  — for search and reader functionality.
- **api.dhamma.gift** (and its reserve api2.dhamma.gift) — the DG voices:
  it receives the text being read aloud. It also serves the MCP server and
  the API.
- **files.dhamma.gift** — MP3 files of the texts.
- **s.dhamma.gift** — other Pali editions side by side.
- **Google Firebase** — solely to provide the optional cloud
  synchronization service, and only if you sign in.

External services:

- [dpdict.net](https://dpdict.net/) — the Digital Pāḷi Dictionary, for
  dictionary entries our own bundled dictionary does not cover. Only the
  single Pāḷi word being looked up is sent, with no account, identifier or
  other context attached. Some of these lookups are made by our server on
  your behalf; others your browser or the app makes directly, in which case
  dpdict.net also sees your IP address as it would on any website you visit.
  This is their service, under their own privacy policy, not ours.
- [sanskrit-lexicon.uni-koeln.de](https://www.sanskrit-lexicon.uni-koeln.de/)
  — the Cologne Sanskrit dictionaries. Dict.Dhamma.Gift sends the word
  being looked up to show Sanskrit entries. Your browser makes the request,
  so they also see your IP address.
- Other dictionaries in Dict.Dhamma.Gift — Sutta-Vinaya Definitions and
  Similes (tripitaka-mcp.com), Gandhari Dictionaries (gandhari.org), PTS
  Dictionary (dsal.uchicago.edu) and Wisdom Library (wisdomlib.org). Their
  sections are collapsed by default. When you open one, your browser loads
  that site's page with the word being looked up.
- **Google Fonts** (fonts.googleapis.com, fonts.gstatic.com) — fonts on
  some pages, such as Settings and Hatthipada. Your browser loads them, so Google sees
  your IP address.
- **cdnjs.cloudflare.com** — a charting script loaded on the Hatthipada
  page.
- **AI search** — only when an exact search finds nothing and AI search is
  turned on: the query text is sent to a language model (Groq, Google Gemini
  or DeepSeek) and to [tripitaka-mcp.com](https://tripitaka-mcp.com) to find
  passages by meaning. Our server sends it; your IP address is not passed on.
- **Google Cloud Text-to-Speech** — only when you choose a Google voice:
  it receives the text being read. On the website your browser sends it
  to Google directly (with the site's trial key or your own API key), so
  Google also sees your IP address. In the apps, with the trial key the text
  goes through our server, which forwards it without identifiers; with your
  own key the app sends it to Google directly.

We do not share, sell, or transmit user data to any third parties for
marketing or advertising purposes.

### Data Retention

- **Without synchronization** — your history, favorites and settings are not
  stored on our servers; they remain local to your browser's `localStorage`.
  Search queries appear only in the server logs (see below).
- **With synchronization** — history, favorites, reading progress, subscriptions, and settings are stored
  in the Google Cloud database until deleted by the user.
- **Offline library** — the full text database (about 200 MB to download,
  about 590 MB on the device) is downloaded from dhamma.gift and kept on
  your device only. On the website and in the PWA the download starts only
  with your consent. The Android and iOS apps always ask before the
  download, on Wi-Fi too, and name its size; if you say no, the app
  remembers and does not ask again, and you can still download it in
  Settings → Offline library. It contains texts
  only and no data about you. In offline mode, searching and reading texts
  run on the device without requests to our server. Database updates are
  offered at most once every two weeks. You can remove the database with the
  "Delete" button in the offline library settings.
- **Logs** — server logs (requests with IP addresses, search queries included) are kept for 14 days, then deleted.

### Updates to This Policy

This Privacy Policy may be updated periodically. Your continued use of the
Services after such changes constitutes your acceptance of the revised
policy.

For inquiries regarding your privacy, please contact us at
[agiftofdhamma@gmail.com](mailto:agiftofdhamma@gmail.com).

*Last updated: October 2026.*

## Terms

Three cases, and the difference matters.

### Public domain — SuttaCentral

All materials from [SuttaCentral](https://suttacentral.net/) (Bilara data) —
the Pali root texts and the translations — are dedicated to the public domain under
[CC0](https://creativecommons.org/public-domain/cc0/). You may use, copy and
adapt them freely, including commercially, with no permission needed. This
includes the Thai translation of the Bhikkhunī Pātimokkha by **Jayasāro
Bhikkhu**. See [SuttaCentral licensing](https://suttacentral.net/licensing).

### Other Pali editions: each under its own license

Besides the Mahāsaṅgīti Pali text from SuttaCentral, Dhamma.gift uses other
editions of the Pali Canon, cut into the same segments. Search covers the
Mahāsaṅgīti text together with the variant readings collated from the other
editions (BJT, VRI, Siam Rath, PTS); s.dhamma.gift shows the BJT, CST and
Thai editions side by side. Each edition keeps the license of its source:

- **Buddha Jayanti Tipiṭaka** (Sri Lanka), from
  [tipitaka.lk](https://github.com/pathnirvana/tipitaka.lk):
  [CC BY-ND 4.0](https://github.com/pathnirvana/tipitaka.lk/blob/master/LICENSE.md),
  attribution tipitaka.lk. We do not correct this text: errors are reported to
  tipitaka.lk.
- **Chaṭṭha Saṅgāyana Tipiṭaka**, from the
  [Vipassana Research Institute](https://github.com/VipassanaTech/tipitaka-xml)
  (tipitaka.org): free for non-commercial use, attribution VRI.
- **Syāmaraṭṭha Tipiṭaka** (Siam Rath, 1927), from
  [E-Tipitaka](https://github.com/ssutee/e-tipitaka-pc): no license stated by
  the source; attribution E-Tipitaka (Sutee Sudprasert).
- **Mahāsaṅgīti Tipiṭaka as printed** (World Tipiṭaka Edition, Dhamma Society,
  2005), from [tipitaka2500.github.io](https://tipitaka2500.github.io):
  [CC0](https://creativecommons.org/public-domain/cc0/) as published there;
  attribution World Tipiṭaka Project, Dhamma Society.
- **Pali Text Society editions**, as input by the Dhammakaya Foundation, from
  [GRETIL](https://gretil.sub.uni-goettingen.de/):
  [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), © Pali Text
  Society and Dhammakaya Foundation. What is made from them stays CC BY-SA 4.0.

Each variant reading carries the license of the edition it comes from.
Details, file by file:
[LICENSE.md](https://github.com/dhammagift/offline-data/blob/main/dhammagift/LICENSE.md).

### Everything else — free, non-commercial use only

Materials created by the Dhamma.gift project are distributed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

All other texts are published here with the permission of their authors and
publishers, for **free, non-commercial use only**; the rights remain with
them:

- English translations by **Ṭhānissaro Bhikkhu** — see
  [dhammatalks.org](https://www.dhammatalks.org/);
- Russian translations by **A. Ya. Syrkin**, **V. N. Toporov** and the other
  translators credited on each text;
- edited versions of those Russian translations, prepared by the project;
- materials from **[TheBuddhasWords.net](https://thebuddhaswords.net/)**.

Thai translations by **Mahachula** and **Siam Rath** (from
[E-Tipitaka](https://github.com/ssutee/e-tipitaka-pc), which states no
licence) and by **Phra Naratharo** are shown as credited on each text, for free,
non-commercial use; the rights remain with their translators and publishers.

For any use beyond free, personal, non-commercial reading, please contact the
copyright holders. The Dhamma.gift website and applications are offered free
of charge, and Dhamma.gift adds no restrictions of its own beyond those
already carried by the source material.
