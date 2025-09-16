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