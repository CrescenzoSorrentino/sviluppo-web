document.addEventListener('DOMContentLoaded', () => {
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
});
