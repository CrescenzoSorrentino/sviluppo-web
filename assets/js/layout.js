document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const overlay = document.getElementById("menuOverlay");
    const closeBtn = document.getElementById("menuClose");

    // Mostra il menu su mobile
    if (toggle && overlay && closeBtn) {
        toggle.addEventListener("click", () => {
            overlay.removeAttribute("hidden");
            requestAnimationFrame(() => overlay.classList.add("open"));
        });

        closeBtn.addEventListener("click", () => {
            overlay.classList.remove("open");
        });

        // Chiudi cliccando fuori dal menu
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.classList.remove("open");
            }
        });

        overlay.addEventListener("transitionend", () => {
            if (!overlay.classList.contains("open")) {
                overlay.setAttribute("hidden", "");
            }
        });
    }
});
