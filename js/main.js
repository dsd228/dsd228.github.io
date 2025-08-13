// js/main.js
// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
const navLinks = document.querySelectorAll('.nav a');

// Check for saved theme preference or use prefers-color-scheme
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply saved theme or system preference
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  body.classList.add('dark-mode');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Skip if it's an external link
    if (href === '#' || href.startsWith('#!')) {
      return;
    }

    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add active class to clicked link
    this.classList.add('active');

    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Set active link based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const scrollPos = window.pageYOffset + 150;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-in, .animate-slide');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 300;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = '1';
      if (element.classList.contains('animate-slide')) {
        element.style.transform = 'translateX(0)';
      } else {
        element.style.transform = 'translateY(0)';
      }
    }
  });
};

// Set initial state for animate-in elements
document.querySelectorAll('.animate-in').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
});

document.querySelectorAll('.animate-slide').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateX(-60px)';
  el.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
});

// Initial check
animateOnScroll();

// Check on scroll
window.addEventListener('scroll', animateOnScroll);

// Intersection Observer for more advanced animations (optional)
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        if (entry.target.classList.contains('animate-slide')) {
          entry.target.style.transform = 'translateX(0)';
        } else {
          entry.target.style.transform = 'translateY(0)';
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -200px 0px' });

  document.querySelectorAll('.animate-in, .animate-slide').forEach(el => {
    observer.observe(el);
  });
}

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.skip-to-content').blur();
  }
});

// Add dynamic GitHub stats
document.addEventListener('DOMContentLoaded', function() {
  // Update GitHub stats dynamically
  const githubStats = document.querySelector('.github-stats .value');
  if (githubStats) {
    // This would normally be fetched from GitHub API
    // For now, we'll use the static value
    githubStats.textContent = 'C+';
  }
});
