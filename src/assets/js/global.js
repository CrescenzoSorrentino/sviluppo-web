/**
 * Global JavaScript
 * This file contains common functionality used across the site.
 */

document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu functionality
    initMobileMenu();
    
    // Theme toggle functionality
    initThemeToggle();
});

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const overlay = document.getElementById("menuOverlay");
    const closeBtn = document.getElementById("menuClose");

    if (toggle && overlay && closeBtn) {
        const firstLink = overlay.querySelector("a");
        const focusable = overlay.querySelectorAll("a, button");

        function trapFocus(e) {
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.key === "Tab") {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            } else if (e.key === "Escape") {
                closeMenu();
            }
        }

        function openMenu() {
            overlay.removeAttribute("hidden");
            requestAnimationFrame(() => overlay.classList.add("open"));
            toggle.setAttribute("aria-expanded", "true");
            firstLink && firstLink.focus();
            document.addEventListener("keydown", trapFocus);
        }

        function closeMenu() {
            overlay.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.focus();
            document.removeEventListener("keydown", trapFocus);
        }

        toggle.addEventListener("click", openMenu);
        closeBtn.addEventListener("click", closeMenu);

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                closeMenu();
            }
        });

        overlay.addEventListener("transitionend", () => {
            if (!overlay.classList.contains("open")) {
                overlay.setAttribute("hidden", "");
            }
        });
    }
}

/**
 * Initialize theme toggle functionality
 */
function initThemeToggle() {
    const html = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    const icon = toggle.querySelector('i');
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    // Function to update theme toggle button accessibility
    function updateThemeToggle(isDark) {
        if (icon) {
            icon.classList.toggle('fa-moon', !isDark);
            icon.classList.toggle('fa-sun', isDark);
        }
        toggle.setAttribute('aria-label', isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro');
    }

    const stored = localStorage.getItem('theme');
    let isDark = false;

    if (stored === 'dark') {
        html.classList.add('dark');
        isDark = true;
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#1c1c1e');
    } else if (stored === 'light') {
        html.classList.add('light');
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#0a84ff');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
        isDark = true;
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#1c1c1e');
    }

    // Set initial aria-label based on theme
    updateThemeToggle(isDark);

    toggle.addEventListener('click', () => {
        toggle.classList.add('rotating');
        let isDark = html.classList.contains('dark');

        // Toggle theme
        if (isDark) {
            html.classList.remove('dark');
            html.classList.add('light');
            isDark = false;
            if (metaThemeColor) metaThemeColor.setAttribute('content', '#0a84ff');
        } else {
            html.classList.remove('light');
            html.classList.add('dark');
            isDark = true;
            if (metaThemeColor) metaThemeColor.setAttribute('content', '#1c1c1e');
        }

        // Save preference and update accessibility
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeToggle(isDark);

        // Announce theme change to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('class', 'sr-only');
        announcement.textContent = isDark ? 'Tema scuro attivato' : 'Tema chiaro attivato';
        document.body.appendChild(announcement);

        // Remove announcement after it's been read
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 3000);
    });

    toggle.addEventListener('animationend', () => {
        toggle.classList.remove('rotating');
    });
}