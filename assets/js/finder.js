document.addEventListener("DOMContentLoaded", () => {
    const data = {
        HTML: {
            "Struttura e semantica": [
                "Struttura base di un documento",
                "Tag semantici",
                "Header, main e footer",
                "SEO on-page",
                "Accessibilità"
            ],
            "Form e input": [
                "Form accessibili",
                "Tipi di input HTML5",
                "Validazione lato client",
                "Etichette e aria-label",
                "Usabilità nei form"
            ],
            "Multimedia e tabelle": [
                "Immagini responsive",
                "Video embedding",
                "Tabelle accessibili"
            ]
        },
        CSS: {
            "Fondamentali di layout": [
                "Box model",
                "Flexbox",
                "Grid layout",
                "Responsive design",
                "Media query"
            ],
            "Aspetto visivo": [
                "Colori e variabili CSS",
                "Tipografia e font",
                "Spacing e misure",
                "Stati hover / focus / active"
            ],
            "Effetti e animazioni": [
                "Transition",
                "Animation",
                "Keyframes",
                "Dark mode"
            ]
        },
        JavaScript: {
            "Base del linguaggio": [
                "Variabili e tipi",
                "Operatori e condizioni",
                "Cicli e array",
                "Funzioni e scope",
                "Manipolazione DOM"
            ],
            "Interazioni moderne": [
                "Eventi",
                "Form dinamici",
                "Fetch API",
                "Async / await",
                "LocalStorage"
            ]
        }
    };

    const col1 = document.getElementById("col1");
    const col2 = document.getElementById("col2");
    const col3 = document.getElementById("col3");
    const pathDisplay = document.getElementById("finderPath");
    const searchInput = document.getElementById("finderSearch");
    const searchResults = document.getElementById("searchResults");
    const finderColumns = document.querySelector(".finder-columns");

    function renderColumn(col, items, isLink = false) {
        col.classList.add("fade-in");
        setTimeout(() => col.classList.remove("fade-in"), 300);
        col.innerHTML = "";

        items.forEach(item => {
            const li = document.createElement("li");
            li.classList.add("finder-item");

            const icon = document.createElement("i");
            icon.className = isLink ? "fa-regular fa-file" : "fa-regular fa-folder";

            if (isLink) {
                const slug = item.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                const a = document.createElement("a");
                a.href = `html/${slug}.html`;
                a.textContent = item;
                li.appendChild(icon);
                li.appendChild(a);
            } else {
                li.appendChild(icon);
                li.appendChild(document.createTextNode(item));
            }

            col.appendChild(li);
        });
    }

    function updatePath(level1 = "", level2 = "", level3 = "") {
        const parts = [level1, level2, level3].filter(Boolean);
        pathDisplay.textContent = parts.length > 0 ? parts.join(" / ") : "Seleziona una categoria...";
    }

    function initFinder() {
        renderColumn(col1, Object.keys(data));
        updatePath();
        finderColumns.classList.add("show");

        col1.addEventListener("click", e => {
            const li = e.target.closest("li");
            if (!li) return;
            col1.querySelectorAll("li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");

            const selected = li.textContent.trim();
            const sub = data[selected] ? Object.keys(data[selected]) : [];

            renderColumn(col2, sub);
            col3.innerHTML = "";
            updatePath(selected);
            col2.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        col2.addEventListener("click", e => {
            const li = e.target.closest("li");
            if (!li) return;
            col2.querySelectorAll("li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");

            const parent = col1.querySelector(".active");
            if (!parent) return;

            const parentKey = parent.textContent.trim();
            const subKey = li.textContent.trim();
            const details = (data[parentKey] && data[parentKey][subKey]) || [];

            renderColumn(col3, details, true);
            updatePath(parentKey, subKey);
            col3.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        col3.addEventListener("click", e => {
            const li = e.target.closest("li");
            if (!li) return;
            col3.querySelectorAll("li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");

            const level1 = col1.querySelector(".active")?.textContent.trim() || "";
            const level2 = col2.querySelector(".active")?.textContent.trim() || "";
            const level3 = li.textContent.trim();

            updatePath(level1, level2, level3);
        });
    }

    initFinder();

    // ----------------------------
    // Ricerca dinamica
    // ----------------------------
    const allArticles = Object.entries(data)
        .flatMap(([macro, sub]) =>
            Object.entries(sub).flatMap(([micro, items]) =>
                items.map(title => ({
                    title,
                    href: "html/" + title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") + ".html"
                }))
            )
        );

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();

        if (query === "") {
            // Mostra le colonne
            searchResults.classList.remove("show");
            finderColumns.classList.add("show");
            searchResults.innerHTML = "";
            pathDisplay.textContent = "Seleziona una categoria...";
            return;
        }

        // Mostra risultati
        finderColumns.classList.remove("show");
        searchResults.classList.add("show");
        searchResults.innerHTML = "";

        const filtered = allArticles.filter(item =>
            item.title.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = `<p>Nessun file trovato per "<strong>${query}</strong>"</p>`;
            return;
        }

        filtered.forEach(item => {
            const div = document.createElement("div");
            div.className = "search-item";

            const icon = document.createElement("i");
            icon.className = "fa-regular fa-file";

            const link = document.createElement("a");
            link.href = item.href;
            link.textContent = item.title;

            div.appendChild(icon);
            div.appendChild(link);
            searchResults.appendChild(div);
        });
    });
});
