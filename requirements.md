# Requirements Document

## Introduction

InternTrail is a static, single-page internship listing site targeting university students and fresh graduates. The page surfaces fresher-friendly internship opportunities with filtering by work type (Remote / Onsite), a card-based grid layout, a detail modal for each listing, and direct apply links — all built with vanilla HTML, CSS, and JavaScript and no backend.

## Glossary

- **Page**: The single HTML document (`index.html`) that constitutes the entire InternTrail application.
- **Header**: The top section of the Page containing the brand name and tagline.
- **Filter_Bar**: The UI control containing the three filter buttons (All Internships, Remote Only, Onsite Only).
- **Filter_Button**: One of the three interactive buttons inside the Filter_Bar.
- **Card**: A visual block inside the Card_Grid that summarises one internship listing.
- **Card_Grid**: The responsive grid container that holds all visible Cards.
- **Type_Badge**: The coloured label on a Card indicating whether the internship is Remote or Onsite.
- **Detail_Modal**: The overlay dialog that shows full internship details when a Card is activated.
- **Apply_Button**: The button or link that navigates the user to the external application URL.
- **Internship**: A hardcoded data object in `script.js` representing one internship opportunity.
- **currentFilter**: The JavaScript variable tracking the currently active filter state (`"all"`, `"Remote"`, or `"Onsite"`).
- **Renderer**: The JavaScript function responsible for building and inserting Card HTML into the Card_Grid.

---

## Requirements

### Requirement 1: Page Header

**User Story:** As a student visiting InternTrail, I want to see a clear brand identity at the top of the page, so that I immediately know where I am and what the site is for.

#### Acceptance Criteria

1. THE Page SHALL display the text "InternTrail" as the primary heading inside the Header.
2. THE Page SHALL display the tagline "Follow the trail to your first internship" inside the Header, beneath the primary heading.
3. THE Header SHALL occupy the full width of the viewport and display without horizontal clipping or overflow at viewport widths of 320 px, 600 px, and 1024 px.
4. WHEN the Page first loads, THE Header SHALL be fully visible in the viewport without requiring any scrolling.

---

### Requirement 2: Internship Data

**User Story:** As a student, I want to see a curated list of internship opportunities, so that I can browse roles relevant to freshers.

#### Acceptance Criteria

1. THE Page SHALL load internship data from a hardcoded array named `internships` defined in `script.js`.
2. THE `internships` array SHALL contain at least 8 entries.
3. EACH entry in the `internships` array SHALL include the fields: `id` (positive integer), `title` (non-empty string), `company` (non-empty string), `type` (exactly `"Remote"` or `"Onsite"`), `stipend` (non-empty string), `duration` (non-empty string), `location` (string or null), `applyUrl` (non-empty string), `description` (non-empty string), `companyDescription` (non-empty string), `responsibilities` (non-empty array of strings), and `eligibility` (non-empty string).
4. THE `internships` array SHALL contain entries covering at least the following domains: Frontend Dev (Remote), Backend Dev (Onsite), UI/UX Design (Remote), Data/Analytics (Onsite), Marketing (Remote), Content Writing (Onsite), Full Stack (Remote), and DevOps/Cloud (Onsite).
5. WHEN an entry has `type` equal to `"Remote"`, THE entry's `location` field SHALL be `null`; WHEN an entry has `type` equal to `"Onsite"`, THE entry's `location` field SHALL be a non-empty string.
6. THE `id` field of each entry SHALL be a unique positive integer, assigned sequentially starting from 1.
7. THE `type` field of each entry SHALL be exactly the string `"Remote"` or the string `"Onsite"`.
8. THE `stipend` field of each entry SHALL begin with the `₹` symbol and end with either `/month` or a lump-sum qualifier; THE `applyUrl` field SHALL be a non-empty string beginning with `https://`.

---

### Requirement 3: Card Grid Display

**User Story:** As a student, I want to see internship listings displayed as cards in a grid, so that I can scan multiple opportunities at a glance.

#### Acceptance Criteria

1. WHEN the Page loads, THE Renderer SHALL render one Card for each entry in the `internships` array into the Card_Grid.
2. THE Card SHALL display the `company` value, `title` value, a Type_Badge showing exactly `"Remote"` or `"Onsite"`, the `stipend` value, the `duration` value, a "View Details" button, and an Apply_Button.
3. WHILE the viewport width is less than 600 px, THE Card_Grid SHALL display Cards in a single-column layout.
4. WHILE the viewport width is at least 600 px and less than 1024 px, THE Card_Grid SHALL display Cards in a two-column layout.
5. WHILE the viewport width is at least 1024 px, THE Card_Grid SHALL display Cards in a three-column layout.
6. IF the `internships` array contains zero entries, THE Card_Grid SHALL display a message indicating that no internships are available.
7. WHEN a user activates the "View Details" button on a Card, THE Detail_Modal SHALL open displaying the details for that Card's internship entry.

---

### Requirement 4: Type Badge

**User Story:** As a student, I want to visually distinguish Remote from Onsite internships on each card, so that I can quickly identify the work format without reading every detail.

#### Acceptance Criteria

1. WHEN a Card's `type` is `"Remote"`, THE Type_Badge on that Card SHALL be rendered with a green background colour that maintains a minimum 4.5:1 contrast ratio against the badge text colour.
2. WHEN a Card's `type` is `"Onsite"`, THE Type_Badge on that Card SHALL be rendered with a blue background colour that maintains a minimum 4.5:1 contrast ratio against the badge text colour.
3. THE Type_Badge SHALL display the text `"Remote"` or `"Onsite"` matching the entry's `type` value.
4. IF a Card's `type` is neither `"Remote"` nor `"Onsite"`, THE Type_Badge SHALL not be rendered for that Card.

---

### Requirement 5: Filter Bar

**User Story:** As a student, I want to filter internships by work type, so that I can focus on listings that match my preference for remote or onsite work.

#### Acceptance Criteria

1. THE Filter_Bar SHALL contain exactly three Filter_Buttons labelled "All Internships", "Remote Only", and "Onsite Only".
2. WHEN the Page loads, THE Filter_Bar SHALL have the "All Internships" Filter_Button set as the active button and `currentFilter` SHALL be `"all"`.
3. WHEN a user activates the "All Internships" Filter_Button, THE Renderer SHALL display all Cards in the Card_Grid and `currentFilter` SHALL be set to `"all"`.
4. WHEN a user activates the "Remote Only" Filter_Button, THE Renderer SHALL display only Cards whose `type` is `"Remote"` in the Card_Grid and `currentFilter` SHALL be set to `"Remote"`.
5. WHEN a user activates the "Onsite Only" Filter_Button, THE Renderer SHALL display only Cards whose `type` is `"Onsite"` in the Card_Grid and `currentFilter` SHALL be set to `"Onsite"`.
6. IF a Filter_Button is activated and no entries match the selected `type`, THE Card_Grid SHALL contain zero Cards and SHALL display a message indicating no internships match the current filter.
7. WHEN a Filter_Button is the active button, THE Filter_Button SHALL have the CSS class `filter-btn--active` applied and its `aria-pressed` attribute SHALL be `"true"`.
8. WHEN a Filter_Button is not the active button, THE Filter_Button SHALL not have the CSS class `filter-btn--active` and its `aria-pressed` attribute SHALL be `"false"`.
9. WHEN a user activates a Filter_Button, only one Filter_Button SHALL have the `filter-btn--active` class at any given time.

---

### Requirement 6: Detail Modal

**User Story:** As a student, I want to see full details about an internship in an overlay, so that I can evaluate the opportunity without leaving the page.

#### Acceptance Criteria

1. WHEN a user activates the "View Details" button on a Card, THE Detail_Modal SHALL open and display the full details for the corresponding internship entry.
2. THE Detail_Modal SHALL display the `company` value, `title` value, `companyDescription` value, all items in the `responsibilities` array, `eligibility` value, `stipend` value, and `duration` value.
3. IF a Detail_Modal entry has a non-null `location` value, THE Detail_Modal SHALL display that `location` value.
4. IF a Detail_Modal entry has a `location` value of `null`, THE Detail_Modal SHALL not display a location field.
5. WHEN the Detail_Modal opens, THE Page SHALL move keyboard focus to the close button inside the Detail_Modal.
6. WHILE the Detail_Modal is open, keyboard focus SHALL be confined within the Detail_Modal and SHALL not move to elements outside it.
7. WHILE the Detail_Modal is open, WHEN the user presses the Escape key, THE Detail_Modal SHALL close.
8. WHEN the Detail_Modal is closed, THE Page SHALL return keyboard focus to the "View Details" button on the Card that triggered the modal.
9. THE Detail_Modal SHALL contain a visible close button with an `aria-label` of `"Close modal"`.
10. WHEN the user activates the close button inside the Detail_Modal, THE Detail_Modal SHALL close.
11. WHEN the Detail_Modal is open it SHALL be visible in the viewport and included in the tab order; WHEN the Detail_Modal is closed it SHALL be hidden from view and removed from the tab order.

---

### Requirement 7: Apply Button

**User Story:** As a student, I want a direct link to apply for an internship, so that I can submit my application without searching for the application page.

#### Acceptance Criteria

1. THE Detail_Modal SHALL contain an Apply_Button that navigates to the entry's `applyUrl` value.
2. THE Card SHALL also contain an Apply_Button that navigates to the entry's `applyUrl` value.
3. WHEN a user activates the Apply_Button, THE System SHALL open `applyUrl` in a new browser tab.
4. THE Apply_Button element SHALL include the attributes `target="_blank"` and `rel="noopener noreferrer"`.
5. IF an entry's `applyUrl` is absent or empty, THE Apply_Button for that entry SHALL not be rendered.
6. THE Apply_Button SHALL be visually distinct using the project's primary accent colour as defined in CSS custom properties and SHALL be clearly labelled "Apply Now".

---

### Requirement 8: Responsive Design

**User Story:** As a student on any device, I want the page to be usable on my screen size, so that I can browse internships from my phone, tablet, or laptop.

#### Acceptance Criteria

1. THE Page SHALL define base CSS styles targeting viewports narrower than 600 px, with additional `@media` rules that expand the layout at the 600 px and 1024 px breakpoints.
2. THE Header text SHALL not overflow or be clipped at any viewport width from 320 px and above.
3. THE Filter_Bar SHALL display all three Filter_Buttons without any button being hidden, truncated, or overlapping at viewport widths from 320 px and above; each button SHALL have a minimum tap-target height of 44 px.
4. WHILE the viewport width is less than 600 px, THE Card_Grid SHALL display Cards in a single-column layout.
5. WHILE the viewport width is at least 600 px and less than 1024 px, THE Card_Grid SHALL display Cards in a two-column layout.
6. WHILE the viewport width is at least 1024 px, THE Card_Grid SHALL display Cards in a three-column layout.

---

### Requirement 9: Accessibility

**User Story:** As a student using assistive technology, I want the page to be navigable with a keyboard and screen reader, so that I am not excluded from browsing internships.

#### Acceptance Criteria

1. THE Page SHALL use the following semantic HTML elements in the specified regions: `<header>` for the brand/tagline region, `<nav>` for the Filter_Bar, `<main>` for the Card_Grid and Detail_Modal region, `<article>` for each Card, and `<footer>` for any page-level footer content.
2. THE Detail_Modal SHALL be implemented as a `<dialog>` element or an element with `role="dialog"` and `aria-modal="true"`.
3. WHEN the Detail_Modal opens, THE Page SHALL set focus to the first focusable element inside the Detail_Modal (the close button).
4. THE Filter_Bar Filter_Buttons SHALL each include an `aria-pressed` attribute reflecting their active state.
5. THE Page SHALL maintain a minimum 4.5:1 contrast ratio for normal text and a minimum 3:1 contrast ratio for large text (18 pt or 14 pt bold) between text and its background on all Cards, Filter_Buttons, and Detail_Modal content.
6. WHEN the Detail_Modal is open and the user presses the Escape key, THE Detail_Modal SHALL close.
7. WHEN the Detail_Modal closes, THE Page SHALL return keyboard focus to the "View Details" button on the Card that triggered the modal.
8. WHILE the Detail_Modal is open, keyboard focus SHALL be confined within the Detail_Modal and SHALL not move to elements outside it.

---

### Requirement 10: Code Structure

**User Story:** As a student contributor, I want the codebase to be organised and readable, so that I can understand and extend the project easily.

#### Acceptance Criteria

1. THE Page SHALL be implemented across exactly three files: `index.html`, `style.css`, and `script.js`.
2. THE `script.js` file SHALL organise code into three clearly separated sections in the order: (1) data — the `internships` array, (2) render functions, and (3) event listeners; each section SHALL be introduced by a named comment heading (e.g., `// === DATA ===`).
3. THE `style.css` file SHALL define all colour, font-size, padding, margin, and gap values as CSS custom properties in the `:root` selector; no hardcoded colour or size values SHALL appear outside the `:root` block.
4. THE `script.js` file SHALL use only `const` and `let` declarations — no `var`.
5. THE Page SHALL not depend on any external JavaScript library, CSS framework, or build tool.
