(function () {
  var ROOT = window.SITE_ROOT || './';

  /* ===== HEADER HTML ===== */
  var HEADER_HTML = [
    '<header class="site-header">',
    '  <div class="nav-bar" id="nav-bar">',
    '    <div class="container">',
    '      <div class="nav-bar__inner">',

    '        <a href="{{ROOT}}" class="nav-logo" aria-label="サンリーフ琉球 ホームへ">',
    '          <div class="nav-logo__mark" aria-hidden="true">',
    '            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">',
    '              <circle cx="12" cy="12" r="4"/>',
    '              <line x1="12" y1="2" x2="12" y2="5"/>',
    '              <line x1="12" y1="19" x2="12" y2="22"/>',
    '              <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>',
    '              <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>',
    '              <line x1="2" y1="12" x2="5" y2="12"/>',
    '              <line x1="19" y1="12" x2="22" y2="12"/>',
    '              <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>',
    '              <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>',
    '            </svg>',
    '          </div>',
    '          <div class="nav-logo__text">',
    '            <span class="nav-logo__name">サンリーフ琉球</span>',
    '            <span class="nav-logo__sub">SUN REEF RYUKYU</span>',
    '          </div>',
    '        </a>',

    '        <nav class="nav-links" aria-label="メインナビゲーション">',
    '          <ul class="nav-links__list">',
    '            <li class="nav-links__item"><a href="{{ROOT}}rent/" data-page="rent">借りたい</a></li>',
    '            <li class="nav-links__item"><a href="{{ROOT}}sale/" data-page="sale">買いたい</a></li>',
    '            <li class="nav-links__item"><a href="{{ROOT}}services/" data-page="services">売りたい</a></li>',
    '            <li class="nav-links__item"><a href="{{ROOT}}company/" data-page="company">会社概要</a></li>',
    '          </ul>',
    '        </nav>',

    '        <div class="nav-extras">',
    '          <a href="https://instagram.com/" target="_blank" rel="noopener" class="nav-extras__instagram" aria-label="Instagram">',
    '            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    '          </a>',
    '          <div class="nav-extras__phone">',
    '            <a href="tel:098-XXX-XXXX" class="nav-extras__phone-num">',
    '              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
    '              098-XXX-XXXX',
    '            </a>',
    '            <span class="nav-extras__hours">9:00〜18:00（日・祝定休）</span>',
    '          </div>',
    '        </div>',

    '        <a href="{{ROOT}}contact/" class="btn btn--primary nav-cta">お問い合わせ</a>',

    '        <button class="hamburger" id="hamburger-btn" aria-label="メニューを開く" aria-expanded="false">',
    '          <span class="hamburger__line"></span>',
    '          <span class="hamburger__line"></span>',
    '          <span class="hamburger__line"></span>',
    '        </button>',

    '      </div>',
    '    </div>',
    '  </div>',

    '  <nav class="mobile-nav" id="mobile-nav" aria-label="モバイルナビゲーション" aria-hidden="true">',
    '    <ul class="mobile-nav__list">',
    '      <li><a href="{{ROOT}}rent/" class="mobile-nav__link" data-page="rent">借りたい<span class="mobile-nav__link-arrow">›</span></a></li>',
    '      <li><a href="{{ROOT}}sale/" class="mobile-nav__link" data-page="sale">買いたい<span class="mobile-nav__link-arrow">›</span></a></li>',
    '      <li><a href="{{ROOT}}services/" class="mobile-nav__link" data-page="services">売りたい<span class="mobile-nav__link-arrow">›</span></a></li>',
    '      <li><a href="{{ROOT}}company/" class="mobile-nav__link" data-page="company">会社概要<span class="mobile-nav__link-arrow">›</span></a></li>',
    '    </ul>',
    '    <div class="mobile-nav__footer">',
    '      <a href="tel:098-XXX-XXXX" class="mobile-nav__phone">098-XXX-XXXX</a>',
    '      <p class="mobile-nav__hours">9:00〜18:00（日曜・祝日定休）</p>',
    '      <a href="{{ROOT}}contact/" class="btn btn--primary mobile-nav__cta">お問い合わせ</a>',
    '    </div>',
    '  </nav>',
    '</header>'
  ].join('\n');

  /* ===== FOOTER HTML ===== */
  var FOOTER_HTML = [
    '<footer class="site-footer">',
    '  <div class="footer__top">',
    '    <div class="container">',
    '      <div class="footer__grid">',

    '        <div class="footer-brand">',
    '          <div class="footer-brand__logo">',
    '            <div class="footer-brand__mark" aria-hidden="true">',
    '              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></svg>',
    '            </div>',
    '            <span class="footer-brand__name">サンリーフ琉球</span>',
    '          </div>',
    '          <p class="footer-brand__catch">太陽の恵みと珊瑚礁の海に抱かれた<br>沖縄での理想の住まい探しをサポートします。</p>',
    '          <p class="footer-brand__license">沖縄県知事免許（○○）第○○○○○○号</p>',
    '          <p class="footer-brand__member">（公社）沖縄県宅地建物取引業協会 会員</p>',
    '        </div>',

    '        <div class="footer-info">',
    '          <p class="footer-info__title">Access</p>',
    '          <dl class="footer-info__list">',
    '            <div class="footer-info__item">',
    '              <dt class="footer-info__label">',
    '                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    '                所在地',
    '              </dt>',
    '              <dd class="footer-info__value">〒900-0000 沖縄県○○市○○○-○○○</dd>',
    '            </div>',
    '            <div class="footer-info__item">',
    '              <dt class="footer-info__label">',
    '                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
    '                電話番号',
    '              </dt>',
    '              <dd class="footer-info__value"><a href="tel:098-XXX-XXXX">098-XXX-XXXX</a></dd>',
    '            </div>',
    '            <div class="footer-info__item">',
    '              <dt class="footer-info__label">',
    '                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    '                営業時間',
    '              </dt>',
    '              <dd class="footer-info__value">9:00〜18:00（日曜・祝日定休）</dd>',
    '            </div>',
    '          </dl>',
    '        </div>',

    '        <nav class="footer-nav" aria-label="フッターナビゲーション">',
    '          <p class="footer-nav__title">Menu</p>',
    '          <ul class="footer-nav__list">',
    '            <li><a href="{{ROOT}}">ホーム</a></li>',
    '            <li><a href="{{ROOT}}rent/">借りたい</a></li>',
    '            <li><a href="{{ROOT}}sale/">買いたい</a></li>',
    '            <li><a href="{{ROOT}}services/">売りたい</a></li>',
    '            <li><a href="{{ROOT}}company/">会社概要</a></li>',
    '            <li><a href="{{ROOT}}news/">お知らせ</a></li>',
    '            <li><a href="{{ROOT}}contact/">お問い合わせ</a></li>',
    '          </ul>',
    '        </nav>',

    '      </div>',
    '    </div>',
    '  </div>',
    '  <div class="footer__bottom">',
    '    <div class="container">',
    '      <div class="footer__bottom-inner">',
    '        <p class="footer__copy">&copy; 2025 株式会社サンリーフ琉球 All Rights Reserved.</p>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</footer>',

    '<button class="page-top" id="page-top-btn" aria-label="ページトップへ戻る">',
    '  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>',
    '</button>'
  ].join('\n');

  /* ===== INJECT ===== */
  function inject(id, html) {
    var el = document.getElementById(id);
    if (!el) return;
    var div = document.createElement('div');
    div.innerHTML = html.replace(/\{\{ROOT\}\}/g, ROOT);
    while (div.firstChild) {
      el.parentNode.insertBefore(div.firstChild, el);
    }
    el.parentNode.removeChild(el);
  }

  inject('header-placeholder', HEADER_HTML);
  inject('footer-placeholder', FOOTER_HTML);

  /* ===== ACTIVE NAV ===== */
  var currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll('[data-page="' + currentPage + '"]').forEach(function (el) {
      el.classList.add('is-active');
    });
  }

  /* ===== SCROLL SHADOW ===== */
  var navBar = document.getElementById('nav-bar');
  if (navBar) {
    window.addEventListener('scroll', function () {
      navBar.classList.toggle('is-scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ===== HAMBURGER ===== */
  var btn = document.getElementById('hamburger-btn');
  var mobileNav = document.getElementById('mobile-nav');

  if (btn && mobileNav) {
    function openMenu() {
      btn.classList.add('is-open');
      mobileNav.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      mobileNav.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      btn.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', function () {
      btn.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    mobileNav.querySelectorAll('.mobile-nav__link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ===== PAGE TOP BUTTON ===== */
  var pageTopBtn = document.getElementById('page-top-btn');
  if (pageTopBtn) {
    window.addEventListener('scroll', function () {
      pageTopBtn.classList.toggle('is-visible', window.scrollY > 400);
    }, { passive: true });

    pageTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
