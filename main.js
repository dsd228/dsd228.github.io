// Toggle modo oscuro/claro con persistencia localStorage
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    document.body.classList.remove('light');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
  localStorage.setItem('theme', theme);
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

// Detectar tema guardado o preferencia sistema al cargar
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
  }
});

// Mostrar botón subir al inicio solo si scrollea
const scrollBtn = document.querySelector('.scroll-top-btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
