# InternTrail — Core Features

## 1. Internship Cards

Each card displays:
- **Title** — the internship role name
- **Company** — name of the hiring company
- **Type** — Remote or Onsite (shown as a badge/tag)
- **Stipend** — monthly or total stipend amount
- **Duration** — e.g., 2 months, 3 months, 6 months

Cards are displayed in a responsive grid layout.

## 2. Filter Buttons

Three filter options at the top of the listing:
- **All** — shows every internship
- **Remote Only** — filters to remote internships
- **Onsite Only** — filters to onsite internships

Only one filter is active at a time. The active filter button should have a distinct visual style.

## 3. Card Detail View

Clicking a card opens a detail view (modal or expanded section) showing:
- Full company description
- Role responsibilities or description
- Location (if onsite)
- Eligibility / who should apply
- Stipend and duration (repeated for clarity)

## 4. Apply Button

Each internship has an **Apply** button that:
- Opens an external link in a new tab (`target="_blank"`)
- Is clearly visible on the card and/or detail view
- Uses `rel="noopener noreferrer"` for security

## 5. Responsive Design

The layout must work on:
- Desktop (3-column grid)
- Tablet (2-column grid)
- Mobile (single column, stacked cards)
