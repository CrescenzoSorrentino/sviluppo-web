#!/bin/bash

# Script to add responsive.css to all HTML files in the html directory

for file in html/*.html; do
  # Check if the file already contains responsive.css
  if ! grep -q "responsive.css" "$file"; then
    # Add responsive.css after layout.css
    sed -i '' 's|<link rel="stylesheet" href="../assets/css/layout.css?v=1.4" />|<link rel="stylesheet" href="../assets/css/layout.css?v=1.4" />\n  <link rel="stylesheet" href="../assets/css/responsive.css?v=1.0" />|g' "$file"
    echo "Updated $file"
  else
    echo "Skipping $file (already contains responsive.css)"
  fi
done

echo "All HTML files updated!"