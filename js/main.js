/* ============================================
   MAIN JAVASCRIPT - Navigation & Core Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDashboard();
    initializeHeroCarousel();
});

/**
 * Initialize the homepage featured-product carousel.
 */
function initializeHeroCarousel() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
    const dots = Array.from(carousel.querySelectorAll('.hero-dot'));
    const previousButton = carousel.querySelector('.hero-previous');
    const nextButton = carousel.querySelector('.hero-next');

    if (slides.length < 2 || dots.length !== slides.length || !previousButton || !nextButton) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let currentSlide = slides.findIndex(slide => !slide.hidden);
    let timerId;

    if (currentSlide < 0) currentSlide = 0;

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
            slide.hidden = slideIndex !== currentSlide;
        });
        dots.forEach((dot, dotIndex) => {
            if (dotIndex === currentSlide) {
                dot.setAttribute('aria-current', 'true');
            } else {
                dot.removeAttribute('aria-current');
            }
        });
    }

    function stopAutoplay() {
        window.clearInterval(timerId);
    }

    function startAutoplay() {
        stopAutoplay();
        if (!reducedMotion.matches && !document.hidden) {
            timerId = window.setInterval(() => showSlide(currentSlide + 1), 6000);
        }
    }

    previousButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        startAutoplay();
    });
    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        startAutoplay();
    });
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startAutoplay();
        });
    });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', event => {
        if (!carousel.contains(event.relatedTarget)) startAutoplay();
    });
    document.addEventListener('visibilitychange', startAutoplay);
    reducedMotion.addEventListener('change', startAutoplay);

    showSlide(currentSlide);
    startAutoplay();
}

/**
 * Initialize Navigation Menu Toggle
 */
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (!navToggle || !navMenu) return;

    // Toggle menu on mobile
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && this.classList.contains('dropdown-toggle')) {
                return;
            }

            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Handle dropdown menus on mobile
    const dropdownToggles = navMenu.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.matchMedia('(max-width: 768px)').matches) {
                e.preventDefault();
                const dropdown = this.closest('.dropdown');
                if (!dropdown) return;

                const isExpanded = dropdown.classList.toggle('active');
                this.setAttribute('aria-expanded', String(isExpanded));
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

/**
 * Initialize Dashboard Navigation
 */
function initializeDashboard() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.dashboard-section');

    if (menuItems.length === 0) return;

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the target section ID
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (!targetSection) return;

            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Remove active class from all sections
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked item and target section
            this.classList.add('active');
            targetSection.classList.add('active');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

/**
 * Filter Products (called from select change)
 */
function filterProducts() {
    // This function is called from catalog.js
    // Added here as placeholder for documentation
}

/**
 * Reset Filters
 */
function resetFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');

    if (categoryFilter) categoryFilter.value = '';
    if (priceFilter) {
        priceFilter.value = priceFilter.max;
        if (typeof updatePriceFilterLabel === 'function') updatePriceFilterLabel();
    }

    // Reload products
    if (typeof loadProducts === 'function') {
        loadProducts();
    }
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for dashboard menu items
        if (this.classList.contains('menu-item')) {
            return;
        }

        const target = document.querySelector(href);
        if (target && href !== '#') {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/**
 * Add active state to navbar links based on scroll position
 */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-lg)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-md)';
    }
});

/**
 * Utility: Show notification/alert
 */
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Utility: Format currency
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

/**
 * Utility: Debounce function
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Add slide in/out animations
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
