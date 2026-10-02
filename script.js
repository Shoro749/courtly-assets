const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

if (menuToggle && mobileMenu) {
  const menuLabel = menuToggle.querySelector('.menu-label');

  const setMenuState = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Закрити меню' : 'Відкрити меню');
    mobileMenu.hidden = !isOpen;
    menuToggle.classList.toggle('is-open', isOpen);
    if (menuLabel) menuLabel.textContent = isOpen ? 'Закрити' : 'Меню';
  };

  menuToggle.addEventListener('click', () => {
    setMenuState(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuState(false);
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 64rem)').matches) setMenuState(false);
  });
}
