# Filter Items

## Description

The page displays the contents of a `.json` file, then allows filtering by category. Filter transitions are effected via the `startViewTransition` API. Images are lazy-loaded using the `intersectionObserver` API.

This template has been cobbled together from a couple of online tutorials (see [Sources](#sources), below) then extended and customised.

## HTML

- HTML `template` is used to generate the individual items.

## JavaScript

- ES6 Modules (no transpilation to ES5)

1. `js/modules/observers/article-header-intersection-observer` shows/hides the 'Back to filters' when the article header is scrolled past.
2. `js/modules/observers/lazy-load-images-intersection-observer.js` lazy-loads images as they enter the viewport.
   if (!document.startViewTransition) {
3. `js/modules/items/items-filter.js` filters the items based on their category. Filter functions are wrapped in a `startViewTransition` function. (There is a fallback for non-supporting browsers, but note that e.g. Firefox will log `startViewTransition` as a type error -- without affecting the page display, however.)
4. `js/modules/items/items-display.js` outputs the `items.json` content into the HTML `template`.

- Additionally, `js/modules/theme-switcher.js` provides dark mode toggle functionality. The selected mode is saved to local storage.

## CSS

- `grid` used for page layout.
- `flexbox` used for page elements.
- Files are organised using `@import` to pull modules into `index.css`.
- Files are organised internally using CSS nesting.
- Dark theme option.

## Testing

Windows 10:

- Chrome
- Firefox
- Microsoft Edge

The page has been tested in both browser and device views.

## Related

- [Index of Git Pages](https://github.com/chrisnajman/git-pages-index/). A directory of all of my Git Pages websites built from this template.

## Sources

- [Awesome filtering animation with vanilla JS!](https://youtu.be/jZiZs8cZAKU?si=NLNAy0kLiczORjaW)
- [Image Lazy Loading Using Browser's Intersection Observer API by Roy (Codepen)](https://codepen.io/roypartha97/pen/abpKNJr)
