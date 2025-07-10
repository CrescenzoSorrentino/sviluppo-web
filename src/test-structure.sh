#!/bin/bash

# Script per verificare la struttura del progetto BitCafé

echo "Verifica della struttura del progetto BitCafé..."

# Verifica delle directory principali
directories=(
  "assets"
  "assets/css"
  "assets/js"
  "assets/img"
  "assets/vendor"
  "assets/vendor/bootstrap"
  "assets/vendor/bootstrap/css"
  "assets/vendor/bootstrap/js"
  "pages"
  "includes"
)

for dir in "${directories[@]}"; do
  if [ -d "$dir" ]; then
    echo "✅ Directory $dir esiste"
  else
    echo "❌ Directory $dir non esiste"
  fi
done

# Verifica dei file principali
files=(
  "index.html"
  "chi-siamo.html"
  "contatti.html"
  "mappa.html"
  "robots.txt"
  "sitemap.xml"
  "README.md"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ File $file esiste"
  else
    echo "❌ File $file non esiste"
  fi
done

# Verifica dei file CSS
css_files=(
  "assets/css/layout.css"
  "assets/css/responsive.css"
  "assets/css/finder.css"
  "assets/css/related-content.css"
)

for file in "${css_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ File CSS $file esiste"
  else
    echo "❌ File CSS $file non esiste"
  fi
done

# Verifica dei file JS
js_files=(
  "assets/js/layout.js"
  "assets/js/finder.js"
  "assets/js/theme.js"
)

for file in "${js_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ File JS $file esiste"
  else
    echo "❌ File JS $file non esiste"
  fi
done

echo "Verifica completata!"