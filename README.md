# ISHQ 2027 — Official Conference Website

Official website for the **3rd International Conference on Sustainable, Intelligent Systems, Communication Hardware, and Quantum Technology (ISHQ - 2027)**.

Organized by **Centurion University of Technology and Management (CUTM)**, technically co-sponsored by **IEEE** and **APS**.

> Conference Record Number: **70328**
> Dates: **10–12 August 2027** | Mode: **Hybrid**

---

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool with HMR
- **React Router DOM v7** — Client-side routing
- **React Icons** — Icon library
- **Framer Motion** — Animations
- **React Hot Toast** — Notifications
- **React Helmet Async** — SEO meta tags

---

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/scope` | Scope of Conference |
| `/committee` | Organizing Committee |
| `/imp-dates` | Important Dates |
| `/paper-submission` | Paper Submission |
| `/registration` | Registration |
| `/program-schedule` | Program Schedule |
| `/accommodation` | Accommodation |
| `/place` | About the Place |
| `/sponsors` | Sponsors |
| `/contact` | Contact Us |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── Components/
│   ├── Navbar/
│   └── Footer/
├── Pages/
│   ├── Home/
│   ├── Scope/
│   ├── Committee/
│   ├── ImpDates/
│   ├── PaperSubmission/
│   ├── Registration/
│   ├── Program/
│   ├── Accommodation/
│   ├── Place/
│   ├── Sponsors/
│   ├── Contact/
│   └── NoFound/
├── App.jsx
└── main.jsx
```

---

## Color Scheme

| Name | Hex |
|---|---|
| Navy (Primary) | `#0B1E38` |
| Blue (Accent) | `#476E9E` |
| Cream (Background) | `#F5F0E8` |
| Orange (University) | `#E07B2A` |
| Dark Blue | `#1A3B5C` |

---

## Key Features

- Auto-rotating hero image slider with countdown timer
- Scrolling keynote speakers strip
- Animated scroll-reveal sections
- Responsive design (mobile + desktop)
- IEEE copyright details section
- Important dates with live status (upcoming / active / over)
- Registration fees table
- Sticky navbar with mobile hamburger menu
