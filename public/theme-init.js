// Runs before first paint: applies the saved theme, or the OS preference, to avoid a flash.
(function () {
  var dark = true;
  try {
    var saved = localStorage.getItem('theme');
    dark = saved ? saved === 'dark' : !window.matchMedia('(prefers-color-scheme: light)').matches;
  } catch (e) {
    // Storage blocked: fall back to dark.
  }
  document.documentElement.classList.toggle('dark', dark);
})();
