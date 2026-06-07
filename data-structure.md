# InternTrail — Data Structure

## Internship Data

All internship data is hardcoded in `script.js` as an array of objects named `internships`.

## Object Schema

```js
{
  id: 1,                          // unique number, used for modal lookup
  title: "Frontend Developer Intern",
  company: "TechCorp",
  type: "Remote",                 // "Remote" or "Onsite"
  stipend: "₹10,000/month",
  duration: "3 months",
  location: "Bangalore, India",   // omit or set null if Remote
  applyUrl: "https://example.com/apply",
  description: "Short role summary shown on the card (1-2 sentences).",
  companyDescription: "Full company bio shown in the detail modal.",
  responsibilities: [
    "Build and maintain UI components",
    "Collaborate with the design team",
    "Write clean, documented code"
  ],
  eligibility: "Open to students in their 2nd year or above, or fresh graduates.",
}
```

## Rules

- Always include at least 6–8 internship entries covering a mix of Remote and Onsite roles
- Cover a variety of domains: frontend, backend, design, marketing, data, content
- Stipend format: use the `₹` symbol and specify `/month` or `lump sum`
- `applyUrl` should be a real-looking placeholder (e.g., `https://careers.company.com/intern`) — never a broken link
- `id` values must be unique and sequential starting from 1
- `type` must be exactly `"Remote"` or `"Onsite"` — used by the filter logic

## Filter Logic

The filter reads the `type` field:

```js
// currentFilter is one of: "all", "Remote", "Onsite"
const filtered = internships.filter(i =>
  currentFilter === "all" ? true : i.type === currentFilter
);
```

## Sample Data (minimum required)

Provide at least one entry per category below:

| Domain       | Type   |
|--------------|--------|
| Frontend Dev | Remote |
| Backend Dev  | Onsite |
| UI/UX Design | Remote |
| Data/Analytics | Onsite |
| Marketing    | Remote |
| Content Writing | Onsite |
| Full Stack   | Remote |
| DevOps/Cloud | Onsite |
