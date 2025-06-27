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
    const columns = [col1, col2, col3];

    let selectedMacro = "";
    let selectedMicro = "";
    let selectedArticle = "";

    function highlightActive(col, value) {
        col.querySelectorAll("li").forEach(li => {
            li.classList.toggle("active", li.textContent.trim() === value);
        });
    }

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
        const pieces = [];
        if (level1) pieces.push(`<span data-level="1">${level1}</span>`);
        if (level2) pieces.push(`<span data-level="2">${level2}</span>`);
        if (level3) pieces.push(`<span data-level="3">${level3}</span>`);
        pathDisplay.innerHTML = pieces.length > 0 ? pieces.join(" / ") : "Seleziona una categoria...";
    }

    function initFinder() {
        renderColumn(col1, Object.keys(data));
        updatePath();
        finderColumns.classList.add("show");

        columns.forEach(col => {
            col.addEventListener("keydown", e => {
                const items = Array.from(col.querySelectorAll("li"));
                if (items.length === 0) return;

                let active = col.querySelector("li.active") || items[0];
                let index = items.indexOf(active);

                if (["ArrowDown", "ArrowUp"].includes(e.key)) {
                    e.preventDefault();
                    if (e.key === "ArrowDown") index = Math.min(index + 1, items.length - 1);
                    if (e.key === "ArrowUp") index = Math.max(index - 1, 0);
                    items.forEach(li => li.classList.remove("active"));
                    items[index].classList.add("active");
                } else if (e.key === "ArrowRight" || e.key === "Enter") {
                    e.preventDefault();
                    items[index].dispatchEvent(new MouseEvent("click", { bubbles: true }));
                    const next = columns[columns.indexOf(col) + 1];
                    next && next.focus();
                } else if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    const prev = columns[columns.indexOf(col) - 1];
                    prev && prev.focus();
                }
            });
        });

        col1.addEventListener("click", e => {
            const li = e.target.closest("li");
            if (!li) return;
            col1.querySelectorAll("li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");

            selectedMacro = li.textContent.trim();
            selectedMicro = "";
            selectedArticle = "";
            const sub = data[selectedMacro] ? Object.keys(data[selectedMacro]) : [];

            renderColumn(col2, sub);
            col3.innerHTML = "";
            updatePath(selectedMacro);
            if (window.innerWidth <= 768) {
                col2.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            }
        });

        col2.addEventListener("click", e => {
            const li = e.target.closest("li");
            if (!li) return;
            col2.querySelectorAll("li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");

            const parent = col1.querySelector(".active");
            if (!parent) return;

            selectedMacro = parent.textContent.trim();
            selectedMicro = li.textContent.trim();
            selectedArticle = "";
            const details = (data[selectedMacro] && data[selectedMacro][selectedMicro]) || [];

            renderColumn(col3, details, true);
            updatePath(selectedMacro, selectedMicro);
            if (window.innerWidth <= 768) {
                col3.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            }
        });

        col3.addEventListener("click", e => {
            const li = e.target.closest("li");
            if (!li) return;
            col3.querySelectorAll("li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");

            selectedMacro = col1.querySelector(".active")?.textContent.trim() || "";
            selectedMicro = col2.querySelector(".active")?.textContent.trim() || "";
            selectedArticle = li.textContent.trim();

            updatePath(selectedMacro, selectedMicro, selectedArticle);
        });
    }

    initFinder();

    pathDisplay.addEventListener("click", e => {
        const span = e.target.closest("span[data-level]");
        if (!span) return;
        const level = parseInt(span.dataset.level, 10);

        if (level === 1 && selectedMacro) {
            selectedMicro = "";
            selectedArticle = "";
            highlightActive(col1, selectedMacro);
            renderColumn(col2, Object.keys(data[selectedMacro]));
            col3.innerHTML = "";
            updatePath(selectedMacro);
            if (window.innerWidth <= 768) {
                col2.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            }
        } else if (level === 2 && selectedMacro && selectedMicro) {
            selectedArticle = "";
            highlightActive(col1, selectedMacro);
            renderColumn(col2, Object.keys(data[selectedMacro]));
            highlightActive(col2, selectedMicro);
            col3.innerHTML = "";
            updatePath(selectedMacro, selectedMicro);
            if (window.innerWidth <= 768) {
                col3.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            }
        }
    });

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

    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && searchResults.classList.contains("show")) {
            searchInput.value = "";
            searchResults.classList.remove("show");
            finderColumns.classList.add("show");
            searchResults.innerHTML = "";
            pathDisplay.innerHTML = "Seleziona una categoria...";
        }
    });

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();

        if (query === "") {
            // Mostra le colonne
            searchResults.classList.remove("show");
            finderColumns.classList.add("show");
            searchResults.innerHTML = "";
            pathDisplay.innerHTML = "Seleziona una categoria...";
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
