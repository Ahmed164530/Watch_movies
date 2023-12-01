document.querySelectorAll('.lang').forEach(lang => {
    lang.addEventListener('click', () => {
       let selectedLanguage = lang.id;
       document.documentElement.lang = selectedLanguage;
    });
   });