# InternTrail — Coding Standards

## General

- No frameworks, no libraries, no build tools — vanilla HTML, CSS, and JS only
- All code lives in three files: `index.html`, `style.css`, `script.js`
- Use semantic HTML elements (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`)
- Keep code readable and well-commented for student/fresher contributors

## HTML

- Use `<!DOCTYPE html>` and `lang="en"` on the root element
- All images must have descriptive `alt` attributes
- Buttons must have meaningful text or `aria-label`
- External links must use `target="_blank" rel="noopener noreferrer"`
- Use `id` for unique elements, `class` for reusable ones

## CSS

- Use CSS custom properties (variables) for colors, font sizes, and spacing
- Define variables in `:root`
- Mobile-first approach — base styles for small screens, media queries for larger
- Use CSS Grid for the card layout
- Use Flexbox for navbar, filter bar, and card internals
- Breakpoints:
  - Mobile: default (< 600px)
  - Tablet: `min-width: 600px` — 2-column grid
  - Desktop: `min-width: 1024px` — 3-column grid
- Class naming: lowercase, hyphen-separated (e.g., `.card-title`, `.filter-btn--active`)

## JavaScript

- Use `const` and `let`, never `var`
- Internship data is a hardcoded array of objects in `script.js`
- Separate concerns: data, render functions, and event listeners should be clearly separated
- Use `addEventListener` — no inline `onclick` in HTML
- DOM manipulation via `innerHTML` or `createElement` — keep it simple
- Filter state tracked in a single variable (e.g., `currentFilter`)
- Modal open/close managed with a CSS class toggle (e.g., `.modal--open`)

## Accessibility

- Focus management when modal opens (move focus to modal, return on close)
- Modal must be closeable via the Escape key
- Filter buttons use `aria-pressed` to indicate active state
- Sufficient color contrast for text on card backgrounds
