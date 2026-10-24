(function () {
  const STORAGE_KEY = 'minx_preferred_lang';

  function setLanguage(lang) {
    if (lang !== 'vi' && lang !== 'en') lang = 'vi';
    document.body.classList.toggle('lang-en', lang === 'en');
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.setLang === lang);
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    let savedLang = 'vi';

    try {
      savedLang = localStorage.getItem(STORAGE_KEY) || 'vi';
    } catch (e) {}

    const initialLang = paramLang || savedLang;
    setLanguage(initialLang);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.setLang);
      });
    });
  });
})();
