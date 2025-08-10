// Tema claro/oscuro
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '🌞';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
});

// Carga inicial
if (localStorage.getItem('theme') === 'dark') {
  setTheme('dark');
}

// Scroll top button
const scrollTopBtn = document.querySelector('.scroll-top-btn');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reveal on scroll (simple)
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Formulario simple (solo validación de ejemplo)
const form = document.getElementById('contactForm');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!email || !message) {
    feedback.textContent = 'Por favor completá todos los campos.';
    feedback.style.color = 'var(--color-yellow)';
    return;
  }
  // Aquí podrías integrar con API o servicio de email
  feedback.style.color = 'lightgreen';
  feedback.textContent = '¡Mensaje enviado con éxito! Gracias por contactarme.';
  form.reset();
  setTimeout(() => {
    feedback.textContent = '';
    feedback.style.color = 'var(--color-yellow)';
  }, 6000);
});
