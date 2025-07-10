# CSS Structure Optimization

## Overview
This document explains the optimized CSS structure for the BitCafé project. The CSS has been reorganized to improve maintainability, reduce duplication, and ensure consistent styling across the site.

## File Structure
The CSS is now organized into four main files:

1. **base.css**
   - Reset styles
   - CSS variables
   - Typography
   - Base element styles
   - Accessibility styles
   - Responsive media styles
   - Dark mode styles
   - Utility classes

2. **layout.css**
   - Container styles
   - Header styles
   - Navigation styles
   - Mobile menu styles
   - Footer styles
   - Responsive breakpoints for layout

3. **components.css**
   - Button styles
   - Table of Contents styles
   - Intro/Hero section styles
   - Featured articles styles
   - Newsletter styles
   - Related content styles
   - Responsive adjustments for components

4. **pages.css**
   - Finder page styles
   - Mappa page styles
   - Article page styles
   - Responsive adjustments for specific pages

## Benefits of the New Structure

1. **Reduced Duplication**
   - Eliminated duplicate CSS variables, reset styles, and dark mode implementations
   - Consolidated common styles into appropriate files

2. **Improved Maintainability**
   - Clear separation of concerns
   - Logical organization makes it easier to find and update styles
   - Each file has a specific purpose

3. **Better Performance**
   - Reduced overall CSS size by eliminating duplications
   - More efficient CSS loading

4. **Consistent Styling**
   - All components now use the same variables and base styles
   - Dark mode implementation is consistent across all components

## Usage
Include these files in the following order:

```html
<link rel="stylesheet" href="assets/css/base.css">
<link rel="stylesheet" href="assets/css/layout.css">
<link rel="stylesheet" href="assets/css/components.css">
<link rel="stylesheet" href="assets/css/pages.css">
```

## Removed Files
The following CSS files have been removed as part of the optimization:

1. **global.css** - Content split between base.css and layout.css
2. **finder.css** - Content moved to pages.css
3. **articles.css** - Content moved to pages.css
4. **mappa.css** - Content moved to pages.css
5. **related-content.css** - Content moved to components.css

These files were removed because their content has been properly migrated to the new CSS structure, and they are no longer referenced in any HTML files.

## Future Improvements
Potential future improvements to the CSS structure:

1. Consider using CSS custom properties more extensively for theming
2. Implement a more modular approach for components
3. Add more comprehensive documentation for each component
4. Consider implementing a CSS methodology like BEM for more structured naming
