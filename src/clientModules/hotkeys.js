// The main app's Alt shortcuts that make sense in the docs, done the way the app does them
// (public/overrides/js/settings.js, themeswitch.js): the docs do not load settings.js. Same
// physical-key check by event.code. Alt+P/Alt+Y live in quickModal.js.
//   Alt+T: the theme toggle, a click on the docs' own colour-mode button (like the app's Alt+T)
//   Alt+R: read aloud: play/pause when the player is on, else open it (pages with Listen, PageTools)
if (typeof document !== 'undefined') {
  document.addEventListener('keydown', function (e) {
    if (!e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.code === 'KeyT') {
      var toggle = document.querySelector('[class*="colorModeToggle"] button');
      if (!toggle) return;
      e.preventDefault();
      toggle.click();
    } else if (e.code === 'KeyR') {
      var playing = !!(window.ttsAPI && window.ttsAPI.getState().speaking);  // voice.js's own export
      var target = playing ? document.querySelector('.play-main-button') : document.querySelector('.voice-link');
      if (!target) return;
      e.preventDefault();
      target.click();
    }
  });
}
