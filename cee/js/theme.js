(function () {
    "use strict";

    const storageKey = "cee_nec_theme_v1";
    const root = document.documentElement;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const themeColor = document.querySelector('meta[name="theme-color"]');
    const lightColor = themeColor ? themeColor.content : "#f5f7fa";
    let preference = null;
    let storage = null;

    function validTheme(value) {
        return value === "dark" || value === "light" ? value : null;
    }

    try {
        storage = window.localStorage;
        preference = validTheme(storage.getItem(storageKey));
    } catch (_) {}

    function updateControls(theme) {
        document.querySelectorAll("[data-theme-toggle]").forEach(button => {
            const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
            button.setAttribute("aria-checked", String(theme === "dark"));
            button.title = label;
            if (window.CEE_UI_ICONS) {
                button.innerHTML = window.CEE_UI_ICONS.svg(theme === "dark" ? "sun" : "moon") +
                    `<span class="theme-toggle-tooltip" aria-hidden="true">${label}</span>`;
                button.hidden = false;
            }
        });
    }

    function applyTheme() {
        const theme = preference || (systemTheme.matches ? "dark" : "light");
        root.dataset.theme = theme;
        root.style.colorScheme = theme;
        if (themeColor) themeColor.content = theme === "dark" ? "#17191d" : lightColor;
        updateControls(theme);
        window.dispatchEvent(new CustomEvent("study:themechange", { detail: { theme } }));
    }

    applyTheme();

    document.addEventListener("DOMContentLoaded", () => updateControls(root.dataset.theme), { once: true });
    document.addEventListener("click", event => {
        const button = event.target.closest("[data-theme-toggle]");
        if (!button || button.disabled) return;
        preference = root.dataset.theme === "dark" ? "light" : "dark";
        try {
            if (storage) storage.setItem(storageKey, preference);
        } catch (_) {}
        applyTheme();
    });

    systemTheme.addEventListener("change", () => {
        if (!preference) applyTheme();
    });

    window.addEventListener("storage", event => {
        if (event.storageArea && event.storageArea !== storage) return;
        if (event.key !== storageKey && event.key !== null) return;
        preference = validTheme(event.newValue);
        applyTheme();
    });
})();