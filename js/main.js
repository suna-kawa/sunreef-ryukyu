document.addEventListener('DOMContentLoaded', function () {
  // AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }

  // Property tabs
  document.querySelectorAll('.prop-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      const target = tab.dataset.tab;

      document.querySelectorAll('.prop-tab').forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });

      document.querySelectorAll('.prop-panel').forEach(function (p) {
        p.classList.add('is-hidden');
      });

      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      const panel = document.getElementById('panel-' + target);
      if (panel) panel.classList.remove('is-hidden');
    });
  });
});
