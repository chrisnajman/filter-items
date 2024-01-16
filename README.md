# Filter Items

## Description

The page displays the contents of a `.json` file and allows filtering by category. Filter transitions are implemented using the `startViewTransition` API, while images are lazily loaded through the `intersectionObserver` API.

This template has been assembled from a combination of online tutorials (see [Sources](#sources) section) and has been extended and customized.

## HTML

- The HTML uses the `template` tag to generate individual items.

## JavaScript

ES6 Modules are used without transpilation to ES5.

- `js/modules/items/items-filter.js` - Filters items based on their category, wrapped in a `startViewTransition` function. _Note_: There is a fallback for non-supporting browsers; however, Firefox may log `startViewTransition` as a type error without affecting the page display.
- `js/modules/observers/lazy-load-images-intersection-observer.js` - Lazy-loads images upon entering the viewport.
- `js/modules/items/items-display.js` - Outputs content from items.json into the HTML template.
- `js/modules/observers/article-header-intersection-observer` - Handles the visibility of 'Back to filters' when scrolling past the article header.
- Additionally, `js/modules/theme-switcher.js` provides functionality for toggling dark mode, saving the selected mode to local storage.

## CSS

- grid is used for page layout, while flexbox is used for page elements.
- File organization is done using @import to pull modules into index.css.
- CSS nesting is used for internal file organization.
- Dark theme option is available.

## WAVE Web Accessibility Evaluation Tools Report

- [Automated accessibility analysis results](https://wave.webaim.org/report#/https://wave.webaim.org/report#/https://chrisnajman.github.io/filter-items/)

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

The page has been tested in both browser and device views.

## Related

- [Index of Git Pages](https://github.com/chrisnajman/git-pages-index/). A directory of all of my Git Pages websites built from this template.

## Sources

- [Awesome filtering animation with vanilla JS!](https://youtu.be/jZiZs8cZAKU?si=NLNAy0kLiczORjaW)
- [Image Lazy Loading Using Browser's Intersection Observer API by Roy (Codepen)](https://codepen.io/roypartha97/pen/abpKNJr)
- A directory containing all my Git Pages websites built from this template.
