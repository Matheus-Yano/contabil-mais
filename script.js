document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const leadForm = document.querySelector('#lead-form');

  if (menuToggle && navLinks) {
    const setMenuState = function (isOpen) {
      navLinks.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    };

    menuToggle.addEventListener('click', function () {
      setMenuState(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenuState(false); });
    });

    document.addEventListener('click', function (event) {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) setMenuState(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMenuState(false);
        menuToggle.focus();
      }
    });
  }

  if (leadForm) {
    leadForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(leadForm);
      const name = String(formData.get('name') || '').trim();
      const business = String(formData.get('business') || '').trim();
      const details = String(formData.get('message') || '').trim();
      const message = [
        'Olá! Gostaria de uma orientação inicial.',
        '',
        'Nome: ' + name,
        'Tipo de negócio: ' + business,
        'O que preciso resolver: ' + details
      ].join('\n');
      window.open('https://wa.me/5535991955613?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
    });
  }
});
