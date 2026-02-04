// ========================================
// NAVIGATION & SCROLL EFFECTS
// ========================================

// Get elements
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.getElementById('scrollToTop');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// LANGUAGE SWITCHER
// ========================================

const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'lv';

// Загрузка сохраненного языка
const savedLang = localStorage.getItem('preferredLanguage');
if (savedLang) {
    currentLang = savedLang;
    switchLanguage(currentLang);
}

// Обработчики кнопок языка
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        currentLang = lang;
        
        // Обновляем активную кнопку
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Переключаем язык
        switchLanguage(lang);
        
        // Сохраняем выбор
        localStorage.setItem('preferredLanguage', lang);
    });
});

function switchLanguage(lang) {
    // Обновляем активную кнопку
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Находим все элементы с переводами
    const elements = document.querySelectorAll('[data-lv][data-en]');
    
    elements.forEach(element => {
        const lvText = element.getAttribute('data-lv');
        const enText = element.getAttribute('data-en');
        
        if (lang === 'lv') {
            element.textContent = lvText;
            // Для placeholder в textarea и input
            if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
                element.placeholder = lvText;
            }
        } else if (lang === 'en') {
            element.textContent = enText;
            // Для placeholder в textarea и input
            if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
                element.placeholder = enText;
            }
        }
    });
    
    // Обновляем lang атрибут HTML
    document.documentElement.lang = lang;
}

// ========================================
// FORM HANDLING
// ========================================

const contactForm = document.querySelector('.contact-form');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Обновляем текст кнопки в зависимости от языка
        submitBtn.textContent = currentLang === 'lv' ? 'Sūta...' : 'Sending...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                // Показываем сообщение об успехе
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                
                // Сбрасываем форму через 5 секунд
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    formSuccess.style.display = 'none';
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert(currentLang === 'lv' 
                ? 'Kļūda nosūtot formu. Lūdzu, mēģiniet vēlreiz.' 
                : 'Error submitting form. Please try again.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ========================================
// ANIMATIONS ON SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .service-card, .portfolio-item, .process-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ========================================
// PORTFOLIO HOVER EFFECTS
// ========================================

const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        if (overlay) {
            overlay.style.opacity = '1';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
        }
    });
});

// ========================================
// FLOATING ELEMENTS ANIMATION
// ========================================

const floatingElements = document.querySelectorAll('.float-element');

floatingElements.forEach((element, index) => {
    element.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
});

// ========================================
// TYPING EFFECT (Optional)
// ========================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ========================================
// COUNTER ANIMATION
// ========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Initialize counters when they come into view
const statNumbers = document.querySelectorAll('.stat-number');
let countersAnimated = false;

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            countersAnimated = true;
            statNumbers.forEach(stat => {
                const value = stat.textContent;
                if (!isNaN(value)) {
                    animateCounter(stat, parseInt(value));
                }
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    counterObserver.observe(heroStats);
}

// ========================================
// SMOOTH REVEAL ON LOAD
// ========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// PREVENT ANIMATION JUMPS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Remove preload class after a short delay
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 500);
});

// ========================================
// EMAIL LINK PROTECTION (Optional)
// ========================================

// Decode email to prevent spam bots
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Analytics or additional handling can go here
        console.log('Email link clicked');
    });
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c👋 Sveiki! / Hello!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInteresē, kā šī vietne darbojas? / Interested in how this site works?', 'font-size: 14px; color: #64748b;');
console.log('%cSazinieties ar mani! / Contact me!', 'font-size: 14px; color: #64748b;');
console.log('%c📧 chuchnikita@gmail.com', 'font-size: 14px; color: #6366f1;');
