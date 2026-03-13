// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});

// Also observe children of data-animate parents
document.querySelectorAll('.service-card, .process-step').forEach(el => {
  observer.observe(el);
});

// Smooth nav scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.padding = 
    window.scrollY > 60 ? '0.9rem 4rem' : '1.4rem 4rem';
});
