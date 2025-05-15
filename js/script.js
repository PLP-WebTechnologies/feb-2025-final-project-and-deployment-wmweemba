// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', document.body.dataset.theme);
    updateThemeIcon();
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.dataset.theme = savedTheme;
    updateThemeIcon();
}

function updateThemeIcon() {
    themeToggle.textContent = document.body.dataset.theme === 'dark' ? '☀️' : '🌓';
}

// Mobile Menu Toggle
hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
});

// Close menu when clicking on the close button
if (closeMenu) {
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('show');
    });
}

// Close menu when clicking on a link in the mobile menu
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });
});

// Form Validation (for contact page)
if (document.forms.contactForm) {
    const contactForm = document.forms.contactForm;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.elements.name.value.trim();
        const email = contactForm.elements.email.value.trim();
        const message = contactForm.elements.message.value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Form is valid - show a popup alert
        alert('Thank you for your message! We will get back to you soon.');
        
        // Clear the form
        contactForm.reset();
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('enter-site').addEventListener('click', function () {
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
});