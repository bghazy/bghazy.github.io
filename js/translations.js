// Multilingual translations loader for the website
const translations = {};

// Available languages
const availableLanguages = ['en', 'fr', 'ar', 'es'];

// Function to load translation file
async function loadTranslation(lang) {
    try {
        const response = await fetch(`./translations/${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const translationData = await response.json();
        translations[lang] = translationData;
        return translationData;
    } catch (error) {
        console.error(`Error loading translation for ${lang}:`, error);
        // Fallback to English if available
        if (lang !== 'en' && translations.en) {
            console.warn(`Falling back to English translations`);
            return translations.en;
        }
        return null;
    }
}

// Function to load all translations
async function loadAllTranslations() {
    try {
        const promises = availableLanguages.map(lang => loadTranslation(lang));
        await Promise.all(promises);
        console.log('All translations loaded successfully');
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Function to get translation for current language
function getTranslation(key, lang = getCurrentLanguage()) {
    if (!translations[lang]) {
        console.warn(`No translations found for language: ${lang}`);
        // Fallback to English
        lang = 'en';
    }

    if (!translations[lang]) {
        console.error('No translations available');
        return key; // Return the key itself as fallback
    }

    return translations[lang][key] || key;
}

// Function to get current language (you may need to adapt this based on your language detection logic)
function getCurrentLanguage() {
    // Check if language is stored in localStorage
    const storedLang = localStorage.getItem('preferred-language');
    if (storedLang && availableLanguages.includes(storedLang)) {
        return storedLang;
    }

    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0]; // Get language code (e.g., 'en' from 'en-US')

    if (availableLanguages.includes(langCode)) {
        return langCode;
    }

    // Default to English
    return 'en';
}

// Function to change language
function changeLanguage(lang) {
    if (!availableLanguages.includes(lang)) {
        console.error(`Unsupported language: ${lang}`);
        return;
    }

    localStorage.setItem('preferred-language', lang);

    // If translation is not loaded yet, load it
    if (!translations[lang]) {
        loadTranslation(lang).then(() => {
            updatePageTranslations(lang);
        });
    } else {
        updatePageTranslations(lang);
    }
}

// Function to update page translations (you'll need to implement this based on your DOM structure)
function updatePageTranslations(lang) {
    // This function should update all elements with translation keys
    // Example implementation:
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = getTranslation(key, lang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Emit custom event for other components that might need to update
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    await loadAllTranslations();
    const currentLang = getCurrentLanguage();
    updatePageTranslations(currentLang);
});

// Export for global access
window.translations = translations;
window.getTranslation = getTranslation;
window.changeLanguage = changeLanguage;
window.getCurrentLanguage = getCurrentLanguage;