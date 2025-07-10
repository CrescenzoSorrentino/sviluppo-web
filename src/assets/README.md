# BitCafé Assets Structure

Questa directory contiene tutti gli asset utilizzati nel progetto BitCafé, organizzati in una struttura ottimizzata per la manutenzione e lo sviluppo futuro.

## Struttura CSS

I file CSS sono stati organizzati in modo da separare gli stili globali, i componenti riutilizzabili e gli stili specifici per pagina:

### File CSS Globali

- **global.css**: Contiene tutti gli stili globali utilizzati in tutto il sito, tra cui:
  - Reset e stili di base
  - Variabili CSS
  - Tipografia
  - Classi di utilità
  - Stili di accessibilità
  - Pulsanti
  - Layout
  - Header e navigazione
  - Footer
  - Tabella dei contenuti
  - Media responsive
  - Stili responsive
  - Modalità scura

### File CSS per Componenti

- **components.css**: Contiene stili per componenti riutilizzabili in tutto il sito:
  - Sezione intro/hero
  - Articoli in evidenza
  - Newsletter
  - Adattamenti responsive per i componenti

### File CSS Specifici per Pagina

- **finder.css**: Stili specifici per il componente finder utilizzato nella homepage
- **mappa.css**: Stili specifici per la pagina mappa.html
- **related-content.css**: Stili per il componente di contenuti correlati

## Struttura JavaScript

I file JavaScript sono stati organizzati in modo simile, separando la funzionalità globale da quella specifica per pagina:

### File JS Globali

- **global.js**: Contiene funzionalità utilizzate in tutto il sito:
  - Gestione del menu mobile
  - Funzionalità di cambio tema (chiaro/scuro)

### File JS Specifici per Pagina

- **finder.js**: Funzionalità specifica per il componente finder nella homepage

## Linee Guida per la Manutenzione

### Aggiungere Nuovi Stili

1. **Stili globali**: Se lo stile sarà utilizzato in tutto il sito, aggiungerlo a `global.css`
2. **Componenti riutilizzabili**: Se lo stile è per un componente riutilizzabile, aggiungerlo a `components.css`
3. **Stili specifici per pagina**: Se lo stile è specifico per una pagina, creare un nuovo file CSS o aggiungerlo a un file esistente specifico per quella pagina

### Aggiungere Nuova Funzionalità JavaScript

1. **Funzionalità globale**: Se la funzionalità sarà utilizzata in tutto il sito, aggiungerla a `global.js`
2. **Funzionalità specifica per pagina**: Se la funzionalità è specifica per una pagina, creare un nuovo file JS o aggiungerlo a un file esistente specifico per quella pagina

### Aggiungere Nuove Pagine

Quando si aggiunge una nuova pagina:

1. Includere sempre `global.css` e `global.js`
2. Includere `components.css` se la pagina utilizza componenti comuni
3. Includere altri file CSS/JS specifici se necessario
4. Se la pagina richiede stili o funzionalità uniche, creare nuovi file CSS/JS specifici per quella pagina

## Vantaggi della Nuova Struttura

- **Migliore organizzazione**: File più piccoli e focalizzati su uno scopo specifico
- **Manutenzione più semplice**: Più facile trovare e modificare stili o funzionalità specifiche
- **Prestazioni migliori**: Possibilità di caricare solo i file necessari per ogni pagina
- **Sviluppo più agile**: Più facile lavorare su componenti o pagine specifiche senza influenzare il resto del sito
- **Scalabilità**: Struttura che supporta la crescita del progetto con nuove pagine e funzionalità