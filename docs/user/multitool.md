---
title: "MultiTool: Dhamma and Pali Resources in One Place"
description: "Hand-picked links to the key Dhamma and Pali resources on the web: other editions of the Canon, dictionaries and AI tools, books and study materials. Add your own buttons."
slug: /multitool
sidebar_position: 6
---

import AppFrame from '@site/src/components/AppFrame';
import SiteLink from '@site/src/components/SiteLink';
import DrawerSettings from '@site/static/img/help/multitool-drawer-settings-en.png';
import EditList from '@site/static/img/help/multitool-edit-list-en.png';
import EditTile from '@site/static/img/help/multitool-edit-tile-en.png';

# MultiTool

:::tip[The buttons are yours to rearrange]
MultiTool supports customization: reordering buttons, adding your own
with your own icons, hiding the ones you don't need. Details in [Make it
your own](#make-it-your-own) below.
:::

MultiTool is the set of links on the <SiteLink to="/">Dhamma.gift</SiteLink>
home screen — a Dhamma multi-tool gathering links to key Pali and Dhamma
resources, study materials, and utilities: **Read Pāḷi**, **External**
(other Pali editions), **Subscriptions**, **AI & Dicts**, **Materials**,
**Tools**, **Favorites, history, subscriptions** and **Help**.

Some of what the tiles hold:

- **External** — **S.4nt.org** (also at s.dhamma.gift) shows the BJT,
  CST and Thai editions of the Pali text side by side.
- **Subscriptions** — a text a day, with reminders. Opens the
  Subscriptions tab of the [Quick Window](/quickmodal).
- **AI & Dicts** — **Google Custom Search** (`/cse`) runs your query over
  a set of Dhamma sites.
- **Materials** — **Hatthipada** (how the suttas define every word of the
  four noble truths), **Declensions** (a declension trainer) and
  **Patimokkha** (a Patimokkha trainer).
- **Tools** — **Old.Dhamma.Gift** (the previous version of the site),
  **Sutta Difference** (compare two suttas), **List Difference**, **Line
  to List**, **Blurbs** (build a JSON of sutta summaries), and the **Loop
  Timer**, **Repeat timer #2** and **Pomodoro** timers.

Know a site or app that belongs here? Tell us via
<SiteLink to="/#contacts">Contacts</SiteLink>.

<AppFrame src="/" title="Dhamma.gift home — tool tiles" height={550} />

## Make it your own

The set of tiles isn't fixed — open the burger menu (☰), all the way at
the bottom, under "Settings":

<img src={DrawerSettings} alt="'Add your own button' and 'Edit buttons' entries in the burger menu" style={{maxWidth: 'min(340px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

- **Add your own button** — your own link with fields for **Label** (up
  to 24 characters), **Address** (you can drop `{{q}}` into it — it gets
  replaced with whatever's currently in the search box), **Description**
  (optional, shown as a tooltip), and an **Icon** — pick one from the
  built-in set or type your own emoji:

  <img src={EditTile} alt="Button edit form: label, address, description, icon" style={{maxWidth: 'min(480px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />

- **Edit buttons** — a list of every tile (built-in and your own) with a
  visibility checkbox next to each: uncheck it and the tile disappears
  from the home screen, check it again and it comes back. Clicking a
  tile in this list opens it for editing — you can change the label,
  address, description and icon even on a built-in tile (after that it
  stops auto-updating along with the rest of the site; "Restore
  original" in the button's edit form undoes the edit and turns
  auto-updating back on):

  <img src={EditList} alt="List of tiles with visibility checkboxes" style={{maxWidth: 'min(480px, 100%)', display: 'block', margin: '0 auto 1.5rem'}} />
- **Tile order** — on the home screen itself, tiles can be dragged: with
  a mouse, just drag (a small initial movement starts the drag, so it
  doesn't interfere with a plain click); on a phone, press and hold for
  roughly a quarter-second, then drag (so it doesn't interfere with
  scrolling). The new order saves the moment you let go.
- **Reset buttons** — this option only shows up in the "Settings" menu
  when there's something to reset (something hidden, the order changed,
  or buttons of your own added). It brings back the original set and order of tiles; if you've
  added tiles of your own, those get deleted for good in the process (the
  app warns you and asks for confirmation first — there's no way to bring
  them back afterward).

Your own buttons, edits, custom emoji icons and the tile order are NOT
synced to the Cloud — they stay purely local to this particular browser.

## Your own picks inside a category

Each tile like "External", "AI & Dicts" or "Materials" opens a list of
links on that topic. Some of them already carry a gold star — the
project's own editorial pick. A long-press (on phones) or right-click (on
desktop) on any link in that list toggles a star for you personally, on
top of the editorial one — say, to remove a star from something you
don't care for, or mark your own favorite resource. These personal marks
are also stored only in this browser, not in the Cloud.

## Favorites, history, subscriptions

The **Favorites, history, subscriptions** tile ("The '4NT' window") on
the home screen opens the same window as the compass icon — the "☆ &
History" tab, where bookmarks and search history live. See the [Quick Window](/quickmodal) page for more.
