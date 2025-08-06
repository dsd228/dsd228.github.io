// Theme toggle persistente
const btn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
if(localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
  icon.textContent = '🌞';
}
btn.onclick = function() {
  document.body.classList.toggle('light-theme');
  if(document.body.classList.contains('light-theme')){
    icon.textContent = '🌞';
    localStorage.setItem('theme', 'light');
  } else {
    icon.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
};

// Botón flotante "Subir ↑"
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 320) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animaciones de entrada con IntersectionObserver (para .reveal-on-scroll)
const revealEls = document.querySelectorAll('.reveal-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Animaciones on-scroll para retrocompatibilidad con .animate-on-scroll
document.addEventListener('DOMContentLoaded', () => {
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.13 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer2.observe(el));
});

// Validación en vivo del formulario de contacto
const emailField = document.getElementById('email');
const msgField = document.getElementById('message');
const feedback = document.getElementById('formFeedback');
const contactForm = document.getElementById('contactForm');

function validateForm() {
  let msg = '';
  if (!emailField.value) {
    msg = 'El correo es obligatorio.';
  } else if (!emailField.validity.valid) {
    msg = 'El correo no es válido.';
  } else if (!msgField.value.trim()) {
    msg = 'El mensaje es obligatorio.';
  }
  feedback.textContent = msg;
  return msg === '';
}

if(emailField && msgField && feedback && contactForm){
  emailField.addEventListener('input', validateForm);
  msgField.addEventListener('input', validateForm);

  contactForm.addEventListener('submit', function(e) {
    if (!validateForm()) {
      e.preventDefault();
    }
  });
}

// Scroll suave para navegaciones con ancla (retrocompatibilidad para navegadores viejos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});