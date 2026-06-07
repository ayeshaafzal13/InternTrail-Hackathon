# Implementation Plan: Internship Listing Page

## Overview

Build the InternTrail static single-page app across three files — `index.html`, `style.css`, and `script.js` — using vanilla HTML, CSS, and JavaScript. The implementation follows a data → render → event flow: first lay the HTML shell and CSS design tokens, then wire up the data layer, then build the renderers, and finally add interactivity and accessibility.

## Tasks

- [-] 1. Create `index.html` page shell
  - Create `index.html` with `<!DOCTYPE html>`, `lang="en"`, and `<meta charset>` / `<meta name="viewport">` tags
  - Add `<link rel="stylesheet" href="style.css">` and `<script src="script.js" defer></script>`
  - Write the semantic skeleton: `<header>`, `<nav id="filter-bar">`, `<main>` containing `<div id="card-grid">` and `<dialog id="modal">`, and `<footer>`
  - Place the "InternTrail" `<h1>` and tagline `<p>` inside `<header>`
  - Add the three filter `<button>` elements inside `<nav>` with `data-filter="all|Remote|Onsite"` and `aria-pressed` attributes; set "All Internships" as active (`filter-btn--active`, `aria-pressed="true"`) and the other two as inactive
  - Add `aria-label="Filter internships by type"` to the `<nav>`
  - Leave `<div id="card-grid">` and `<dialog id="modal">` empty — they will be populated by JS
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 5.1, 5.2, 9.1, 9.2, 10.1_

- [x] 2. Build CSS design tokens and base layout in `style.css`
  - [x] 2.1 Define `:root` CSS custom properties
    - Declare all colour tokens (primary accent, badge colours for Remote/Onsite, background, surface, text, muted text, border), font-size tokens (base, lg, sm), and spacing/gap tokens in `:root`
    - No hardcoded colour or size values outside `:root`
    - _Requirements: 10.3, 4.1, 4.2, 7.6_

  - [x] 2.2 Style header, nav filter bar, and footer
    - Style `<header>` to full viewport width, centred text, using `var()` tokens
    - Style `<nav>` / `.filter-bar` as a Flexbox row with wrapping; ensure each `.filter-btn` has `min-height: 44px`
    - Style `.filter-btn--active` distinctly (background / colour change)
    - Style `<footer>`
    - _Requirements: 1.3, 5.1, 8.2, 8.3_

  - [x] 2.3 Build responsive Card_Grid with CSS Grid
    - Default (mobile): single-column `grid-template-columns: 1fr`
    - `@media (min-width: 600px)`: two-column grid
    - `@media (min-width: 1024px)`: three-column grid
    - _Requirements: 3.3, 3.4, 3.5, 8.1, 8.4, 8.5, 8.6_

  - [x] 2.4 Style `.card` component and Type_Badge
    - Style `.card` (`<article>`) with Flexbox column layout, surface background, border-radius, shadow
    - Style `.card-header`, `.card-title`, `.card-company`, `.card-description`, `.card-meta`, `.card-actions` using `var()` tokens
    - Style `.type-badge--remote` with green background meeting 4.5:1 contrast ratio against badge text
    - Style `.type-badge--onsite` with blue background meeting 4.5:1 contrast ratio against badge text
    - _Requirements: 3.2, 4.1, 4.2, 4.3, 9.5_

  - [x] 2.5 Style buttons, apply link, and empty state
    - Style `.btn--primary` (primary accent colour from `:root`) and `.btn--secondary`
    - Style `.apply-btn` as visually distinct, labelled "Apply Now"
    - Style `.empty-state` paragraph
    - _Requirements: 7.6, 3.6, 5.6_

  - [x] 2.6 Style `<dialog>` Detail Modal
    - Style `#modal` as a centred overlay with backdrop; hidden when closed, visible and in tab-order when open
    - Style `.modal-close` button, `#modal-title`, `.modal-section` headings, `.modal-meta`
    - Ensure modal is scrollable on small viewports
    - _Requirements: 6.11, 9.2_

- [x] 3. Implement the data layer in `script.js`
  - [x] 3.1 Write the `internships` array with all 8 required entries
    - Open `script.js` with `// === DATA ===` section comment
    - Define `const internships = [...]` with exactly 8 objects covering: Frontend Dev (Remote), Backend Dev (Onsite), UI/UX Design (Remote), Data/Analytics (Onsite), Marketing (Remote), Content Writing (Onsite), Full Stack (Remote), DevOps/Cloud (Onsite)
    - Each object must include all 12 required fields: `id`, `title`, `company`, `type`, `stipend`, `duration`, `location`, `applyUrl`, `description`, `companyDescription`, `responsibilities`, `eligibility`
    - Enforce: `id` sequential from 1; `stipend` starts with `₹`; `applyUrl` starts with `https://`; Remote → `location: null`; Onsite → `location` is a non-empty string
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8_

  - [ ]* 3.2 Write property test for data schema invariant (Property 1)
    - **Property 1: Data schema invariant**
    - **Validates: Requirements 2.3, 2.5, 2.6, 2.7, 2.8**
    - For every entry in `internships`: `id` is a unique positive integer sequential from 1; `type` is exactly `"Remote"` or `"Onsite"`; `stipend` starts with `₹`; `applyUrl` starts with `https://`; Remote → `location === null`; Onsite → `location` is a non-empty string; all other string/array fields are non-empty

- [x] 4. Implement render functions in `script.js`
  - [x] 4.1 Implement `renderCards(filter)`
    - Add `// === RENDER FUNCTIONS ===` section comment
    - Define `function renderCards(filter)` that filters `internships` by `currentFilter`, then builds and injects one `<article class="card">` per entry into `#card-grid` using `innerHTML`
    - Each card must include: company, title, Type_Badge (with correct `type-badge--remote` / `type-badge--onsite` class and text), stipend, duration, "View Details" `<button>` with `data-id`, and Apply_Button `<a>` (omit if `applyUrl` is empty)
    - When the filtered array is empty, inject `<p class="empty-state">No internships match the current filter.</p>` instead
    - If `type` is neither `"Remote"` nor `"Onsite"`, omit the Type_Badge
    - _Requirements: 3.1, 3.2, 3.6, 4.3, 4.4, 5.3, 5.4, 5.5, 5.6, 7.2, 7.4, 7.5_

  - [ ]* 4.2 Write property test for Filter-all renders every entry (Property 2)
    - **Property 2: Filter all renders every entry**
    - **Validates: Requirements 3.1, 5.3**
    - For any array of N internship objects, `renderCards("all")` shall produce exactly N card elements in `#card-grid`

  - [ ]* 4.3 Write property test for Filter Remote shows only Remote cards (Property 3)
    - **Property 3: Filter Remote shows only Remote cards**
    - **Validates: Requirements 5.4**
    - For any mixed internship array, `renderCards("Remote")` shall render zero cards with `type === "Onsite"`

  - [ ]* 4.4 Write property test for Filter Onsite shows only Onsite cards (Property 4)
    - **Property 4: Filter Onsite shows only Onsite cards**
    - **Validates: Requirements 5.5**
    - For any mixed internship array, `renderCards("Onsite")` shall render zero cards with `type === "Remote"`

  - [ ]* 4.5 Write property test for filter partition sum (Property 5)
    - **Property 5: Filter partition — Remote + Onsite counts sum to All count**
    - **Validates: Requirements 5.3, 5.4, 5.5**
    - For any internship array, Remote card count + Onsite card count === All card count

  - [ ]* 4.6 Write property test for Type_Badge text matches entry type (Property 7)
    - **Property 7: Type badge text matches entry type**
    - **Validates: Requirements 4.3, 4.4**
    - For any entry with `type === "Remote"` or `"Onsite"`, the rendered badge text equals `type` exactly; for any invalid type value, no badge element is rendered

- [x] 5. Implement `openModal(id, triggerBtn)` and `closeModal()`
  - [x] 5.1 Implement `openModal` and `closeModal`
    - Declare `let lastFocusedCard = null` at module level
    - Implement `openModal(id, triggerBtn)`: find the entry by `id` (guard-exit if not found), build modal inner HTML (company, title, Type_Badge, About the Company, Responsibilities `<ul>`, Eligibility, Stipend, Duration, conditional Location, Apply_Button), set `lastFocusedCard = triggerBtn`, call `modal.showModal()`, then move focus to the close button
    - Implement `closeModal()`: call `modal.close()`, then `lastFocusedCard?.focus()`
    - Conditional location: render `<p><strong>Location:</strong> {location}</p>` only when `location` is a non-null, non-empty string
    - Omit Apply_Button if `applyUrl` is absent or empty; otherwise include `target="_blank" rel="noopener noreferrer"`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.8, 6.9, 6.10, 7.1, 7.3, 7.4, 7.5, 9.3_

  - [ ]* 5.2 Write property test for modal renders all required fields (Property 8)
    - **Property 8: Modal renders all required fields for any entry**
    - **Validates: Requirements 6.1, 6.2, 6.3, 6.4**
    - For any valid internship entry, modal HTML contains company, title, companyDescription, every responsibility string, eligibility, stipend, and duration; location appears iff non-null

  - [ ]* 5.3 Write property test for Apply_Button presence and attributes (Property 9)
    - **Property 9: Apply button presence and attributes**
    - **Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5**
    - For any entry: Apply_Button rendered on card and in modal iff `applyUrl` is non-empty; when rendered, `href === applyUrl`, `target="_blank"`, `rel="noopener noreferrer"`

- [x] 6. Checkpoint — render pipeline working
  - Call `renderCards("all")` on page load and verify all 8 cards appear in the browser. Open the modal for at least one card and confirm all fields populate correctly. Ensure all tests pass; ask the user if questions arise.

- [x] 7. Implement event listeners in `script.js`
  - [x] 7.1 Wire up filter bar click delegation
    - Add `// === EVENT LISTENERS ===` section comment
    - Add a delegated `click` listener on `#filter-bar`; when the clicked target is a `.filter-btn`, read `dataset.filter`, set `currentFilter`, remove `filter-btn--active` and set `aria-pressed="false"` on all buttons, add `filter-btn--active` and set `aria-pressed="true"` on the clicked button, then call `renderCards(currentFilter)`
    - _Requirements: 5.2, 5.3, 5.4, 5.5, 5.7, 5.8, 5.9, 10.2_

  - [ ]* 7.2 Write property test for active filter button exclusivity (Property 6)
    - **Property 6: Active filter button exclusivity**
    - **Validates: Requirements 5.7, 5.8, 5.9**
    - For any sequence of filter button activations, exactly one button shall have `filter-btn--active` and `aria-pressed="true"` after each click

  - [x] 7.3 Wire up "View Details" card button and modal close button
    - Add a delegated `click` listener on `#card-grid`; when the clicked target is a `.view-details-btn`, call `openModal(Number(target.dataset.id), target)`
    - Add a `click` listener on the modal close button (`.modal-close`) that calls `closeModal()`
    - _Requirements: 3.7, 6.1, 6.9, 6.10_

  - [x] 7.4 Implement Escape key handler and focus trap
    - Add a `keydown` listener on `document`; when `key === "Escape"` and the modal is open, call `closeModal()`
    - Implement a focus trap: add a `keydown` listener on `#modal` that intercepts `Tab` and `Shift+Tab`, collects all focusable elements inside the modal via `querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')`, and wraps focus at the first/last boundary
    - _Requirements: 6.6, 6.7, 9.6, 9.8_

  - [ ]* 7.5 Write property test for focus trap inside open modal (Property 10)
    - **Property 10: Focus trap inside open modal**
    - **Validates: Requirements 6.6, 9.8**
    - For any sequence of Tab / Shift+Tab keypresses while the modal is open, focus shall remain confined to elements inside `<dialog>` and shall not reach any element outside it

  - [ ]* 7.6 Write property test for modal visibility state consistency (Property 11)
    - **Property 11: Modal visibility state consistency**
    - **Validates: Requirements 6.11**
    - For any open/close cycle: when open the modal is visible and in the tab order; when closed it is hidden and removed from the tab order

- [x] 8. Initial page load wiring and `script.js` section order
  - Ensure `script.js` sections appear in order: `// === DATA ===`, `// === RENDER FUNCTIONS ===`, `// === EVENT LISTENERS ===`
  - At the end of the file, call `renderCards("all")` so the page displays all cards on first load
  - Verify `let currentFilter = "all"` is declared at module level (not inside a function)
  - _Requirements: 5.2, 10.2, 10.4_

- [x] 9. Final checkpoint — full integration
  - Open the page in a browser at 320 px, 600 px, and 1024 px viewport widths and confirm 1/2/3 column layouts respectively
  - Verify filter buttons switch correctly and `aria-pressed` updates
  - Verify modal opens, fields are correct, Escape closes it, and focus returns to the trigger card
  - Verify Apply_Button opens `applyUrl` in a new tab with `noopener noreferrer`
  - Ensure all automated tests pass; ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- The `// === DATA ===` / `// === RENDER FUNCTIONS ===` / `// === EVENT LISTENERS ===` comment headings in `script.js` are a hard requirement (Requirement 10.2)
- All colours and sizes must be defined as CSS custom properties in `:root` — no hardcoded values elsewhere (Requirement 10.3)
- Property tests (P1–P11) validate the pure logic layers; UI/responsive checks are manual
- Use `fast-check` (CDN) or a minimal Jest + jest-fast-check harness for property tests; tag each with `// Feature: internship-listing-page, Property {N}: {property_text}`

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["2.1"] },
    { "id": 1, "tasks": ["2.2", "2.3", "2.4", "2.5", "2.6", "3.1"] },
    { "id": 2, "tasks": ["3.2", "4.1"] },
    { "id": 3, "tasks": ["4.2", "4.3", "4.4", "4.5", "4.6", "5.1"] },
    { "id": 4, "tasks": ["5.2", "5.3", "7.1"] },
    { "id": 5, "tasks": ["7.2", "7.3"] },
    { "id": 6, "tasks": ["7.4"] },
    { "id": 7, "tasks": ["7.5", "7.6"] }
  ]
}
```
