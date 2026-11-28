---
title: "Browser Extension: Pali Dictionary on Any Site"
description: "Select or click a word on any website to see it in the Pali dictionary by the Suttas and Vinaya: their own definition, then DPD, PTS and Sanskrit dictionaries. And search the Suttas."
slug: /browser-extension
sidebar_position: 15
---

import ExtensionMock from '@site/src/components/ExtensionMock';

# Browser extension

Search the Suttas and look words up in Dict.Dhamma.Gift — the dictionary by
the Suttas and the Vinaya, with DPD, PTS, Gandhari, Sanskrit dictionaries and
more beside it — on any website: select a
word or phrase (or just click on a word) and the extension shows the
dictionary entry right there, without leaving the page.

In the extension's settings, pick where the result opens: Side Panel (the
default; in Firefox the default is Popup, and Side Panel opens a window while
the sidebar is closed), New Window, Popup, Dharmamitra (New Window),
GoldenDict-NG, MDict (macOS) or a Custom URL (an https address). The
default language is set there too (English or Русский).

Right-click a selected phrase for either a Dhamma.gift text search or a
full grammar breakdown via DharmaMitra. Right-click the extension's icon in
the toolbar for quick links to Dhamma.gift, Dict.Dhamma.Gift, Aksharamukha
and DharmaMitra. Toggle the extension on/off by clicking its icon or with
`Alt+Shift+X` (`Option+Shift+X` on a Mac). To look up a selected word,
press `Alt+Shift+Z`, or copy it twice quickly: `Ctrl+C+C` (`⌘C C` on a
Mac); a checkbox in the settings turns the double copy off. In Firefox,
`Ctrl+Shift+Y` (`Cmd+Shift+Y` on a Mac) opens the sidebar. Shortcuts can
be changed in your browser's settings (**Change shortcuts** in the
extension's settings leads there).

Firefox Add-ons still has the earlier version 0.6.1. There Side Panel is
the default, the toggle is `Ctrl+Shift+X`, the list also has Compact and
DictTango App, and there is no `Alt+Shift+Z` or `Ctrl+C+C`.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', margin: '1rem 0'}}>
  <a href="https://chromewebstore.google.com/detail/dhammagift-search-and-wor/dnnogjdcmhbiobpnkhdbfnfjnjlikabd"><img src="/assets/img/buttons/chrome-cta.png" alt="Chrome Web Store" style={{maxWidth: '180px'}} /></a>
  <a href="https://addons.mozilla.org/en-US/firefox/addon/dhamma-gift/"><img src="/assets/img/buttons/firefox-cta.png" alt="Firefox Add-ons" style={{maxWidth: '180px'}} /></a>
  <a href="https://microsoftedge.microsoft.com/addons/detail/dhammagift-search-and-wo/aokegkhdaijkikbdocanadeghllhfmhj"><img src="/assets/img/buttons/edge-cta.png" alt="Microsoft Edge Add-ons" style={{maxWidth: '180px'}} /></a>
  <a href="https://chromewebstore.google.com/detail/dhammagift-search-and-wor/dnnogjdcmhbiobpnkhdbfnfjnjlikabd"><img src="/assets/img/buttons/opera-cta.png" alt="Opera: install from the Chrome Web Store" style={{maxWidth: '180px'}} /></a>
</div>

Opera has no listing of its own: install the extension from the Chrome
Web Store (the Opera button above leads there).

Tampermonkey script (also works on Safari: our Safari extension for macOS is
not published yet): [installation instructions](https://github.com/dhammagift/dictPlugin/blob/main/ExtentionMethod.md).
The pop-up dictionary plugin can be embedded on any website — [details here](https://github.com/dhammagift/dictPlugin?tab=readme-ov-file#dictplugin).

<ExtensionMock />

:::note[Mock-up, not a screenshot]
The pop-up above isn't a real screenshot of the extension (an extension
can't be embedded as an `<iframe>`, unlike the other examples in this
docs section) — it's a mock-up built from the extension's own real
colors and look (`dictPlugin/.../content.js`: background `#E1EBED`/
`#07021D`, `border-radius: 8px`, red close button
`rgba(206,5,32,...)`). A real screenshot can replace it at any time.
:::
