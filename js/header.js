(function () {
  var header = document.getElementById('header');
  var burger = document.getElementById('header-burger');
  var menuWrap = document.getElementById('header-menu-wrap');
  var overlay = document.getElementById('header-overlay');

  function openMenu() {
    if (!header) return;
    header.classList.add('header--open');
    document.body.classList.add('menu-open');
    if (burger) burger.setAttribute('aria-expanded', 'true');
    if (burger) burger.setAttribute('aria-label', 'Закрыть меню');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!header) return;
    header.classList.remove('header--open');
    document.body.classList.remove('menu-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    if (burger) burger.setAttribute('aria-label', 'Открыть меню');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (header && header.classList.contains('header--open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (burger) {
    burger.addEventListener('click', toggleMenu);
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  if (menuWrap) {
    menuWrap.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) closeMenu();
  });
})();
