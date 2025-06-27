document.addEventListener("DOMContentLoaded", () => {
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
});
