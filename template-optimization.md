# Template for HTML Optimization

This template provides the necessary search/replace patterns to optimize all HTML files in the project.

## For Root HTML Files (index.html, chi-siamo.html, contatti.html, mappa.html)

### 1. Head Section Optimization
```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[PAGE_TITLE] – BitCafé</title>
  <meta name="description" content="[PAGE_DESCRIPTION]">
  <link rel="icon" href="assets/img/favicon.ico">
  <meta property="og:title" content="[PAGE_TITLE] – BitCafé">
  <meta property="og:description" content="[PAGE_DESCRIPTION]">
  <meta property="og:type" content="website">
  <meta property="og:image" content="assets/img/social.png">
  <meta property="og:url" content="https://bitcafe.it/[PAGE_URL].html">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[PAGE_TITLE] – BitCafé">
  <meta name="twitter:description" content="[PAGE_DESCRIPTION]">
  <meta name="twitter:image" content="assets/img/social.png">
  <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin>
  <link rel="stylesheet" href="assets/css/layout.css?v=1.4">
  <script defer src="assets/js/layout.js"></script>
  <script defer src="assets/js/theme.js"></script>
  <meta http-equiv="Cache-Control" content="max-age=86400">
</head>
```

### 2. Menu Toggle Button Optimization
```html
<button id="menuToggle" class="mobile-only" aria-label="Apri menu" aria-controls="menuOverlay" aria-expanded="false">
  <i class="fa-solid fa-bars"></i>
</button>
```

### 3. Menu Close Button Optimization
```html
<button id="menuClose" aria-label="Chiudi menu">
  <i class="fa-solid fa-xmark"></i>
</button>
```

### 4. Remove Duplicate Scripts
Remove these lines from the bottom of the body:
```html
<script defer src="assets/js/layout.js"></script>
<script defer src="assets/js/theme.js"></script>
```

## For HTML Files in Subdirectories (html/, css/, js/)

### 1. Head Section Optimization
```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[PAGE_TITLE] – BitCafé</title>
  <meta name="description" content="[PAGE_DESCRIPTION]">
  <link rel="icon" href="../assets/img/favicon.ico">
  <meta property="og:title" content="[PAGE_TITLE] – BitCafé">
  <meta property="og:description" content="[PAGE_DESCRIPTION]">
  <meta property="og:type" content="article">
  <meta property="og:image" content="../assets/img/social.png">
  <meta property="og:url" content="https://bitcafe.it/[DIRECTORY]/[PAGE_URL].html">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[PAGE_TITLE] – BitCafé">
  <meta name="twitter:description" content="[PAGE_DESCRIPTION]">
  <meta name="twitter:image" content="../assets/img/social.png">
  <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin>
  <link rel="stylesheet" href="../assets/css/layout.css?v=1.4">
  <script defer src="../assets/js/layout.js"></script>
  <script defer src="../assets/js/theme.js"></script>
  <meta http-equiv="Cache-Control" content="max-age=86400">
</head>
```

### 2. Remove Duplicate Scripts
Remove these lines from the bottom of the body:
```html
<script defer src="../assets/js/layout.js"></script>
<script defer src="../assets/js/theme.js"></script>
```

## General Optimization Guidelines

1. Remove trailing slashes from self-closing tags (e.g., `<meta charset="UTF-8" />` → `<meta charset="UTF-8">`)
2. Ensure consistent indentation (2 spaces)
3. Use Font Awesome icons consistently for menu buttons
4. Add appropriate Open Graph and Twitter meta tags
5. Add favicon
6. Add cache control hints
7. Move deferred scripts to the head section
8. Remove duplicate scripts from the bottom of the body