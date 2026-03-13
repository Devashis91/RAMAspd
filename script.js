// Updated script.js with enhanced features

// Intersection Observer Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar Collapse
const navbarToggle = document.getElementById('navbarToggle');
navbarToggle.addEventListener('click', () => {
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('collapsed');
});

// Form Validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        let valid = true;
        const inputs = form.querySelectorAll('input[required]');
        inputs.forEach(input => {
            if(!input.value) {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        if(!valid) e.preventDefault();
    });
});

// Lazy Loading Images
const lazyLoadImages = document.querySelectorAll('img[data-src]');
const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            lazyLoadObserver.unobserve(img);
        }
    });
});

lazyLoadImages.forEach(img => {
    lazyLoadObserver.observe(img);
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
mobileMenuToggle.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
});

// Analytics Tracking
const trackButton = document.querySelectorAll('.track-button');
trackButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Button clicked: ${button.innerText}`);
        // Here you can integrate with analytics service
    });
});

// Theme Switching
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});

// Scroll Position Tracking
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    console.log(`Current scroll position: ${scrollPosition}`);
});

// Button Ripple Effect
const rippleButtons = document.querySelectorAll('.ripple');
rippleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        ripple.style.left = `${e.clientX - button.offsetLeft}px`;
        ripple.style.top = `${e.clientY - button.offsetTop}px`;
        button.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});

// Performance Optimizations
const optimizeFunction = () => {
    // Place optimization code here
};
optimizeFunction();
