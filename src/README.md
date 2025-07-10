# BitCafé - Struttura del Progetto

Questo documento descrive la struttura ottimizzata del progetto BitCafé, una guida interattiva e moderna per imparare HTML5, CSS3, JavaScript e sviluppo web front-end.

## Struttura delle Directory

```
src/
├── assets/
│   ├── css/           # Fogli di stile personalizzati
│   ├── js/            # Script JavaScript personalizzati
│   ├── img/           # Immagini e risorse grafiche
│   └── vendor/        # Librerie di terze parti
│       ├── bootstrap/ # Framework Bootstrap
│       │   ├── css/   # CSS di Bootstrap
│       │   └── js/    # JavaScript di Bootstrap
├── pages/             # Pagine di contenuto (tutorial e articoli)
├── includes/          # Componenti HTML riutilizzabili (se necessario)
├── index.html         # Homepage
├── chi-siamo.html     # Pagina "Chi siamo"
├── contatti.html      # Pagina "Contatti"
├── mappa.html         # Mappa dei contenuti
├── robots.txt         # File per i crawler dei motori di ricerca
└── sitemap.xml        # Sitemap XML per SEO
```

## Descrizione delle Directory

- **assets/**: Contiene tutte le risorse statiche del sito
  - **css/**: Fogli di stile personalizzati (organizzati in globali, componenti e specifici per pagina)
  - **js/**: Script JavaScript personalizzati (organizzati in globali e specifici per pagina)
  - **img/**: Immagini e risorse grafiche
  - **vendor/**: Librerie di terze parti come Bootstrap
  - **README.md**: Documentazione dettagliata sulla struttura degli asset e linee guida per la manutenzione

- **pages/**: Contiene tutte le pagine di contenuto (tutorial e articoli)

- **includes/**: Directory per componenti HTML riutilizzabili (se necessario in futuro)

## Pagine Principali

- **index.html**: Homepage del sito
- **chi-siamo.html**: Informazioni sul team e la missione di BitCafé
- **contatti.html**: Pagina per contattare l'autore
- **mappa.html**: Mappa completa dei contenuti disponibili

## Vantaggi della Nuova Struttura

1. **Organizzazione Logica**: Separazione chiara tra pagine principali, contenuti e risorse
2. **Manutenibilità**: Facile trovare e modificare file specifici
3. **Scalabilità**: Struttura che supporta la crescita del progetto
4. **Best Practices**: Segue le convenzioni standard di sviluppo web
5. **Separazione delle Preoccupazioni**: Chiara distinzione tra codice personalizzato e librerie di terze parti
6. **Pulizia**: Tutti i file ridondanti sono stati rimossi, mantenendo solo quelli necessari
7. **CSS e JS Ottimizzati**: Organizzazione dei file CSS e JS in globali, componenti e specifici per pagina, migliorando la manutenibilità e le prestazioni
8. **Sviluppo Agile**: Struttura che facilita lo sviluppo parallelo su diverse parti del sito

Per maggiori dettagli sulla struttura ottimizzata di CSS e JS, consultare il [README nella directory assets](assets/README.md).

## Pulizia del Progetto

Durante la riorganizzazione, sono stati rimossi i seguenti elementi ridondanti:

- File HTML duplicati nella directory principale
- Directory `html/` (contenuto spostato in `pages/`)
- Directory `css/` e `js/` (contenuto spostato in `assets/vendor/bootstrap/`)
- Directory `assets/` nella root (contenuto spostato in `src/assets/`)
- Script di utilità temporanei non più necessari

Questa pulizia ha permesso di ottenere una struttura più snella e facile da mantenere.
