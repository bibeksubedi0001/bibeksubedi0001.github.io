(function () {
    "use strict";

    const paths = Object.freeze({
        "arrow-left": '<path d="M19 12H5m6-6-6 6 6 6"/>',
        "arrow-right": '<path d="M5 12h14m-6-6 6 6-6 6"/>',
        "arrow-up-right": '<path d="M7 17 17 7M7 7h10v10"/>',
        "chevron-right": '<path d="m9 5 7 7-7 7"/>',
        check: '<path d="m5 12 4 4L19 6"/>',
        close: '<path d="m6 6 12 12M6 18 18 6"/>',
        minus: '<path d="M5 12h14"/>',
        flag: '<path d="M5 21V3m0 1c5-3 9 3 14 0v10c-5 3-9-3-14 0"/>',
        bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
        grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
        building: '<path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6M9 10h6"/>',
        foundation: '<path d="M3 6h18M6 6v8h12V6M4 14h16v4H4zM2 22l3-4m3 4 3-4m3 4 3-4m3 4 3-4"/>',
        waves: '<path d="M3 7c3-4 6 4 9 0s6 4 9 0M3 12c3-4 6 4 9 0s6 4 9 0M3 17c3-4 6 4 9 0s6 4 9 0"/>',
        structure: '<path d="M3 19V7h18v12M3 7l6 12 6-12 6 12M3 19h18M3 4v3m18-3v3M1 21h4m14 0h4"/>',
        ruler: '<path d="m3 16 13-13 5 5L8 21zM13 6l2 2M10 9l2 2M7 12l2 2M4 15l2 2"/>',
        droplet: '<path d="M12 3C9 7 5 11 5 15a7 7 0 0 0 14 0c0-4-4-8-7-12zM9 15a3 3 0 0 0 3 3"/>',
        irrigation: '<path d="M12 21v-9M12 15C5 15 4 9 4 6c5 0 8 3 8 9zm0-4c0-5 3-7 8-7 0 5-3 7-8 7zM3 21h18"/>',
        turbine: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="m12 10 1-5 4 3-3 4m-2 2-1 5-4-3 3-4M10 12l-5-1 3-4 4 3m2 2 5 1-3 4-4-3"/>',
        road: '<path d="m7 3-4 18M17 3l4 18M12 3v3m0 4v4m0 4v3"/>',
        clipboard: '<path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3M8 11h8M8 16h5"/><rect x="9" y="2" width="6" height="4" rx="1"/>',
        library: '<path d="M4 4h4v16H4zm7 0h4v16h-4zm7 1 3 14M3 22h18"/>',
        lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>'
    });

    function svg(name) {
        if (!Object.hasOwn(paths, name)) return "";
        return `<svg class="ui-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]}</svg>`;
    }

    window.CEE_UI_ICONS = Object.freeze({ svg });
})();