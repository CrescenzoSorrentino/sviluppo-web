document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    const icon = toggle.querySelector('i');
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
        html.classList.add('dark');
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#1c1c1e');
    } else if (stored === 'light') {
        html.classList.add('light');
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#0a84ff');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#1c1c1e');
    }

    if (html.classList.contains('dark')) {
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    toggle.addEventListener('click', () => {
        toggle.classList.add('rotating');
        let isDark = html.classList.contains('dark');
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
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (icon) {
            icon.classList.toggle('fa-moon', !isDark);
            icon.classList.toggle('fa-sun', isDark);
        }
    });

    toggle.addEventListener('animationend', () => {
        toggle.classList.remove('rotating');
    });
});
