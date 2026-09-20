---
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

**Web & Android Apps**
- <SiteLink to="/">Dhamma.Gift PWA</SiteLink> — installable Progressive Web App.
- Dhamma.Gift for Android — [APK on GitHub](https://github.com/dhammagift/dg-app-full/releases/latest) (works offline).
- [Dict.Dhamma.Gift PWA](https://dict.dhamma.gift) — specialized dictionary PWA.
- Dict.Dhamma.Gift for Android — available on [Google Play](https://play.google.com/store/apps/details?id=gift.dhamma.pali).

**Browser Extensions**
- [Chrome Extension](https://chromewebstore.google.com/detail/dhammagift-search-and-wor/dnnogjdcmhbiobpnkhdbfnfjnjlikabd)
- [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/dhamma-gift/)
- [Microsoft Edge Add-on](https://microsoftedge.microsoft.com/addons/detail/dhammagift-search-and-wo/aokegkhdaijkikbdocanadeghllhfmhj)

### Cloud Synchronization (Optional)

This is an **opt-in feature** available on the website and within the PWA and Android
applications, used solely to synchronize your settings, favorites, and
history across multiple devices.

- **Infrastructure** — data is stored in **Google Firebase** (a third-party
  cloud database).
- **Authentication methods**:
  - *Anonymous passphrase* — if you use a secret passphrase, it is hashed
    locally on your device (SHA-256) before transmission. Only the
    anonymous identifier is stored; your original passphrase never reaches
    the database.
  - *Google Account* — we use your email address solely for session
    identification. The email is stored as a hashed entry to protect your
    privacy.
- **Data storage** — only your bookmarks (favorites), search history, and
  interface preferences are saved. This data is accessible only to you
  upon successful authentication.
- **Data deletion** — you may permanently delete all your cloud data at
  any time using the "Delete Cloud Data" button in the Sync menu.

### Data Processing

Our products process only the minimal technical data required for core
functionality:

- **Search** — only search queries, text references, or selected
  dictionary terms are transmitted.
- **Synchronization** — when enabled, we process session metadata (OS type
  and browser) to help you manage your active devices.
- **Technical logs** — standard request metadata (IP address, User-Agent)
  is collected by web servers for security purposes and DDoS protection.

### Information We Do Not Collect

- Personal identification (except the email address used during Google
  Login).
- Telegram user IDs or private chat histories.
- Browsing history outside of our specific services.
- Persistent tracking identifiers (beyond the scope of a user-initiated
  sync session).

### Data Transmission

Data is transmitted exclusively to our core services or trusted
infrastructure:

- <SiteLink to="/">dhamma.gift</SiteLink> / [dict.dhamma.gift](https://dict.dhamma.gift/)
  — for search and reader functionality.
- [dpdict.net](https://dpdict.net/) — for comprehensive Pali dictionary
  results.
- **Google Firebase** — solely to provide the optional cloud
  synchronization service.

We do not share, sell, or transmit user data to any third parties for
marketing or advertising purposes.

### Data Retention

- **Without synchronization** — search queries and history are not stored
  on our servers; all data remains local to your browser's `localStorage`.
- **With synchronization** — favorites, settings, and history are stored
  in the Google Cloud database until deleted by the user.
- **Offline library** — the full text database (about 200 MB to download,
  about 590 MB on the device) is downloaded from dhamma.gift and kept on
  your device only. On the website and in the PWA the download starts only
  with your consent. In the Android app it starts automatically on Wi-Fi and
  can be cancelled; on mobile data the app asks first. It contains texts
  only and no data about you. In offline mode, searching and reading texts
  run on the device without requests to our server. Database updates are
  offered at most once every two weeks. You can remove the database with the
  "Delete" button in the offline library settings.
- **Logs** — technical server logs are retained for a maximum of 30 days.

### Updates to This Policy

This Privacy Policy may be updated periodically. Your continued use of the
Services after such changes constitutes your acceptance of the revised
policy.

For inquiries regarding your privacy, please contact us at
[agiftofdhamma@gmail.com](mailto:agiftofdhamma@gmail.com).

*Last updated: September 2026.*

## Terms

The Pali root text, its traditional commentarial material, and translations
served here come from [SuttaCentral](https://suttacentral.net/) (Bilara
data) and the Dhamma.gift project's own curated translations, under their
respective licenses. Dhamma.gift adds no restrictions of its own beyond
those already carried by the source material.
