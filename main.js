// JS para menú hamburguesa y toggle tema oscuro/claro
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.main-nav .hamburger');
  const navMenu = document.querySelector('.main-nav ul');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const scrollTopBtn = document.querySelector('.scroll-top-btn');

  // Menú hamburguesa móvil toggle
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Toggle con teclado (Enter o Espacio)
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navMenu.classList.toggle('show');
    }
  });

  // Guardar preferencia tema en localStorage
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.textContent = '☀️';
  }

  // Toggle tema
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeIcon.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // Scroll to top button visibility
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  // Scroll to top on click
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Reveal on scroll simple
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  function reveal() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', reveal);
  reveal(); // on load
});
