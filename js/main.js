// Intersection Observer for animations
const observer = new IntersectionObserver(entries =>
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
);

// Cookie banner functions
function showCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        setTimeout(() => banner.classList.add('show'), 1000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieBanner').classList.remove('show');
    if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'granted'
        });
    }
    trackEvent('cookie_consent', 'accepted', 'user_action');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.getElementById('cookieBanner').classList.remove('show');
    if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
            analytics_storage: 'denied',
            ad_storage: 'denied'
        });
    }
    trackEvent('cookie_consent', 'declined', 'user_action');
}

// Event tracking
function trackEvent(action, category, label = '') {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Analytics setup - moved from inline script
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Service Worker registration - moved from inline script
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                // Service Worker registered successfully
            }, function(err) {
                // Service Worker registration failed
            });
    });
}

// Analytics loader - moved from inline script
function loadAnalytics() {
    // Google Analytics 4 - lightweight implementation
    var ga4Script = document.createElement('script');
    ga4Script.async = true;
    ga4Script.src = 'https://www.googletagmanager.com/gtag/js?id=G-59JXX36JM2';
    document.head.appendChild(ga4Script);

    ga4Script.onload = function() {
        gtag('js', new Date());
        gtag('config', 'G-59JXX36JM2', {
            'anonymize_ip': true,
            'allow_google_signals': false,
            'send_page_view': true
        });
    };
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cookie banner
    showCookieBanner();

    // Observe elements for animations
    document.querySelectorAll('.recommendation-card, .case-study-slider').forEach(el => observer.observe(el));

    // Track contact clicks
    document.querySelectorAll('a[href="contact.html"], .cta-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('contact_click', 'engagement', this.textContent.trim());
        });
    });

    // Add event listeners for language switcher - replace onclick handlers
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (typeof changeLanguage === 'function') {
                changeLanguage(lang);
            }
        });
    });

    // Add event listeners for cookie buttons - replace onclick handlers
    const acceptBtn = document.querySelector('.cookie-btn.accept');
    const declineBtn = document.querySelector('.cookie-btn.decline');

    if (acceptBtn) {
        acceptBtn.addEventListener('click', acceptCookies);
    }
    if (declineBtn) {
        declineBtn.addEventListener('click', declineCookies);
    }

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll >= 50 && maxScroll < 75) {
                trackEvent('scroll_50', 'engagement', '50% page viewed');
            } else if (maxScroll >= 100) {
                trackEvent('scroll_100', 'engagement', 'Full page viewed');
            }
        }
    });
});

// Performance optimization - moved from inline script
window.addEventListener('load', function() {
    // Initialize background animation after page load
    if (typeof initBackgroundAnimation === 'function') {
        requestAnimationFrame(initBackgroundAnimation);
    }

    // Lazy load any remaining non-critical resources
    const lazyElements = document.querySelectorAll('[data-lazy]');
    if (lazyElements.length > 0 && 'IntersectionObserver' in window) {
        const lazyObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.src = element.dataset.lazy;
                    element.classList.remove('lazy');
                    lazyObserver.unobserve(element);
                }
            });
        });
        lazyElements.forEach(function(element) {
            lazyObserver.observe(element);
        });
    }

    // Load analytics after critical content is visible (faster but still non-blocking)
    setTimeout(function() {
        loadAnalytics();
    }, 1000);
});