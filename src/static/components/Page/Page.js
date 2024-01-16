!DOCTYPE_MODULO(`

// Add custom, one-off JavaScript here for Page files
function getLang() {
    if (navigator.languages != undefined) {
        for (const lang of navigator.languages) {
            if (lang.toLowerCase().includes('pt')) {
                return 'pt';
            }
        }
    }
    return 'en';
}


function prepareCallback() {
    // Get the current year on every render of the page
    const params = new window.URLSearchParams(window.location.search)
    const lang = params.get('lang') || getLang();
    return {
        lang,
        currentYear: (new Date()).getFullYear(),
    };
}

`)

