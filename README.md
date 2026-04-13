# Septuple Platform — Frontend Design & API Integration Brief

## Overview

This document outlines what is expected from you as a developer/designer tasked with building the frontend for the **Septuple** platform. Reference screenshots of the existing platform have been provided for context — **do not copy the design directly**. You are expected to create your own original UI while ensuring full API integration with the backend.

---

## What Has Been Provided

The following reference screenshots are included alongside this document:

| Screenshot | Description |
|---|---|
| `Screenshot_2026-04-13_113446.png` | Reports & History page — table view of all past workflow analysis sessions |
| `screencapture-lovable-dev-...png` | Web Auditor page — full audit configuration form and results breakdown |
| `Screenshot_2026-04-13_112819.png` | Dashboard / Business Profiles page — profile listing with summary stats |
| `Screenshot_2026-04-13_112859.png` | Web Auditor configuration form (closer view) |

These screenshots are for **reference only** — to help you understand the features, data structures, and user flows. Do **not** replicate the visual style, layout, or color scheme.

---

## Your Responsibilities

### 1. Design — Create Your Own UI

- Design a **fresh, original interface** inspired by the functionality shown in the references.
- You may use any design system or component library of your choice (e.g., shadcn/ui, MUI, Ant Design, Tailwind, etc.).
- The design must cover the following pages/sections:
  - **Dashboard** — Summary stats (Active Profiles, Tokens Used, Total Analyses, Last Analysis, Profiles with Analysis) and a list of business profiles.
  - **Reports & History** — A searchable, filterable table of past reports with columns: Report ID, Report Name, Business Profile, URL, Type, Date, Status, Score, and Actions. Include Timeline and Grouped view toggles.
  - **Web Auditor** — A configuration form supporting:
    - Top Source selection (Google Business Profile / Enter URL Manually)
    - Profile selector with recent audit history summary
    - Business Overview text area
    - Website URL and Location fields
    - URL ignore list with match-type selector (Exact URL / All URLs under path)
    - A prominent "Run Webpage Audit" CTA
  - **Audit Results** — Score display (e.g., 53/100), metrics breakdown (Web & Mobile Performance, Search Understanding, Technical Hygiene), crawl statistics, issue counts, sitemap coverage, content completeness, and page-level highlights.

### 2. API Integration — Connect Properly

All data displayed in the UI must come from live API calls — no hardcoded or mocked data in production builds.

#### Key integration points:

- **Business Profiles API** — Fetch, create, and manage profiles. Display name, domain, location, status, last run, and token usage.
- **Reports API** — List all reports with filtering by status, type, and date range. Support delete (individual and bulk). Handle pagination.
- **Web Auditor API** — Submit audit configuration (profile, URL, business overview, ignored URLs) and trigger a new audit run. Poll or subscribe to run status (In Progress → Completed / Pending).
- **Audit Results API** — Fetch detailed results including scores, issues, crawl stats, sitemap data, and page-level highlights.
- **Authentication** — Respect the organization context (shown as "chosen organization name" in the header). Handle session, user identity, and fund balance display.

#### Status handling:
Your UI must correctly represent all report/run statuses:
- `In Progress` — Show a loading/progress indicator
- `Pending` — Show a "Ready for Action" prompt
- `Completed` — Show score and "View Report" CTA

---

## Things to Avoid

- Do **not** copy the existing UI — layout, colors, typography, or component styles.
- Do **not** hardcode data, dummy users, or placeholder API responses in production code.
- Do **not** ignore error states — handle API failures, empty states, and loading states gracefully.

---

## Deliverables Expected

1. **Source code** for all pages listed above (framework of your choice).
2. **API integration layer** — a clean service/client abstraction for all API calls.
3. **README** in your repo explaining how to run the project locally and any environment variables needed.
4. (Optional but appreciated) A brief **design rationale** explaining your UI/UX decisions.

---

## Questions?

If anything is unclear about the expected functionality, refer to the reference screenshots provided or reach out before starting. Do not make assumptions about API contracts — confirm endpoint specs before building.
