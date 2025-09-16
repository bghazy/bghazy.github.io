// Multilingual translations loader
const translations = {};
const availableLanguages = ['en', 'fr', 'ar', 'es'];
let currentLang = null;

// Load translation file
async function loadTranslation(lang) {
    if (translations[lang]) return translations[lang]; // Return cached

    try {
        const response = await fetch(`./translations/${lang}.json`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        translations[lang] = data;
        return data;
    } catch (error) {
        console.error(`Failed to load ${lang} translations:`, error);
        return lang !== 'en' ? await loadTranslation('en') : null; // Fallback to English
    }
}

// Get current language
function getCurrentLanguage() {
    if (currentLang) return currentLang;

    // Check localStorage
    const stored = localStorage.getItem('preferred-language');
    if (stored && availableLanguages.includes(stored)) {
        currentLang = stored;
        return stored;
    }

    // Check browser language
    const browser = navigator.language.split('-')[0];
    if (availableLanguages.includes(browser)) {
        currentLang = browser;
        return browser;
    }

    // Default to English
    currentLang = 'en';
    return 'en';
}

// Get translation
function getTranslation(key, lang = getCurrentLanguage()) {
    const langData = translations[lang];
    return langData && langData[key] ? langData[key] : key;
}

// Change language
function changeLanguage(lang) {
    if (!availableLanguages.includes(lang)) {
        console.error(`Unsupported language: ${lang}`);
        return;
    }

    currentLang = lang;
    localStorage.setItem('preferred-language', lang);

    loadTranslation(lang).then(() => updatePageTranslations(lang));
}

// Update page translations
function updatePageTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = getTranslation(key, lang);
    });

    document.documentElement.lang = lang;
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    const lang = getCurrentLanguage();
    await loadTranslation(lang);
    updatePageTranslations(lang);
});

// Export functions
window.getTranslation = getTranslation;
window.changeLanguage = changeLanguage;
window.getCurrentLanguage = getCurrentLanguage;