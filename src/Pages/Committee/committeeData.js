/**
 * ISHQ 2027 — Organising committee roster.
 * ---------------------------------------------------------------
 * This is the ONLY file to edit when committee members change.
 * Committee.jsx renders it and needs no changes.
 *
 * SECTION SHAPE
 *   id      unique slug, lowercase-with-dashes (React key — keep unique)
 *   title   heading shown on the page
 *   color   accent for the heading, dot, avatars and count badge
 *   bg      chip background (always #F5F0E8)
 *   members array of strings — one per person
 *
 * MEMBER STRING FORMAT
 *   "Prefix Name, Designation, Institution, State"
 *                ^
 *                split happens at the FIRST comma:
 *                  before it -> bold name line
 *                  after it  -> grey designation line (commas kept as-is)
 *
 *   The prefix is stripped automatically, but ONLY these exact forms:
 *     "Prof. (Dr.) "   "Prof. Dr. "   "Prof. "   "Dr. "   "Mr. "   "Ms. "
 *   The trailing period is required — "Prof Bharati Mishra" (no period)
 *   renders with "Prof" still visible in the name.
 *
 *   A member with no comma renders as a name with no designation.
 *   "(Chair)" / "(Co-Chair)" may be appended, e.g.
 *     "Prof. (Dr.) Sukumar Mishra, Professor, IIT, Delhi, (Chair)"
 *
 * NOTES
 *   - The member count badge is calculated automatically — do not add one.
 *   - To add a section, copy any block, give it a NEW unique id, and use
 *     the next colour in the rotation: #A93122 -> #476E9E -> #1A3B5C
 *   - Order of sections here is the order shown on the page.
 */

// Accent palette (rotate through these for new sections)
export const COMMITTEE_COLORS = {
  habanero: "#A93122",
  asterBlue: "#476E9E",
  deadlyDepths: "#1A3B5C",
  chipBg: "#F5F0E8",
};

const committees = [
  {
    id: "chief-patron",
    title: "Chief Patrons",
    color: "#A93122",
    bg: "#F5F0E8",
    members: [
      "Prof. (Dr.) Mukti Kanta Mishra, President, CUTM, Odisha & AP",
      "Prof. (Dr.) D. N. Rao, Vice-President, CUTM, Odisha & AP",
      "Prof. (Dr.) Prasanta Kumar Mohanty, Vice-Chancellor, CUTM, AP",
    ],
  },
  {
    id: "patron",
    title: "Patrons",
    color: "#476E9E",
    bg: "#F5F0E8",
    members: [
      "Prof. (Dr.) K.V. Ravi Kumar, Registrar, CUTM, AP",
      "Prof. (Dr.) Pediredla Pallavi, Pro-Vice Chancellor, CUTM, AP"
    ],
  },
  {
    id: "honorary-general-chair",
    title: "Honorary General Chairs",
    color: "#1A3B5C",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "general-chair",
    title: "General Chairs",
    color: "#A93122",
    bg: "#F5F0E8",
     members: [],
  },
  {
    id: "Conference-Chair",
    title: "Conference Chair",
    color: "#476E9E",
    bg: "#F5F0E8",
     members: [],
  },
  {
    id: "convener",
    title: "Convener",
    color: "#1A3B5C",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "co-convener",
    title: "Co-Conveners",
    color: "#A93122",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "ieee-observer",
    title: "IEEE Observer Committee",
    color: "#476E9E",
    bg: "#F5F0E8",
      members: [],
  },
  {
    id: "steering",
    title: "Steering Committee",
    color: "#1A3B5C",
    bg: "#F5F0E8",
     members: [],
  },
  {
    id: "organising",
    title: "Organising Committee",
    color: "#A93122",
    bg: "#F5F0E8",
  members: [],
  },
  {
    id: "technical",
    title: "Technical Programme Committee",
    color: "#476E9E",
    bg: "#F5F0E8",
     members: [],
  },
  {
    id: "publication",
    title: "Publication Committee",
    color: "#1A3B5C",
    bg: "#F5F0E8",
   members: [],
  },
  {
    id: "international-advisory",
    title: "International Advisory Committee",
    color: "#A93122",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "national-advisory",
    title: "National Advisory Committee",
    color: "#476E9E",
    bg: "#F5F0E8",
     members: [],
  },
  {
    id: "finance",
    title: "Finance Committee",
    color: "#1A3B5C",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "publicity",
    title: "Publicity / IT Committee",
    color: "#476E9E",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "track",
    title: "Track (Session & Event) Committee",
    color: "#A93122",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "registration",
    title: "Registration Committee",
    color: "#476E9E",
    bg: "#F5F0E8",
  members: [],
  },
  {
    id: "souvenir",
    title: "Souvenir Committee",
    color: "#1A3B5C",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "conference-kit",
    title: "Conference Kit / Certificates / Memento",
    color: "#A93122",
    bg: "#F5F0E8",
      members: [],
  },
  {
    id: "venue",
    title: "Venue & Stage Monitoring Committee",
    color: "#476E9E",
    bg: "#F5F0E8",
   members: [],
  },
  {
    id: "accommodation",
    title: "Accommodation & Hospitality Committee",
    color: "#1A3B5C",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "transport",
    title: "Transport Committee",
    color: "#A93122",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "cultural",
    title: "Cultural Committee",
    color: "#476E9E",
    bg: "#F5F0E8",
   members: [],
  },
  {
    id: "snacks",
    title: "Snacks & Beverage Committee",
    color: "#1A3B5C",
    bg: "#F5F0E8",
     members: [],
  },
  {
    id: "ambience",
    title: "Ambience & Beautification Committee",
    color: "#A93122",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "volunteers",
    title: "Volunteers Committee",
    color: "#476E9E",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "medical",
    title: "Medical & Health Committee",
    color: "#1A3B5C",
    bg: "#F5F0E8",
    members: [],
  },
  {
    id: "sponsorship",
    title: "Sponsorship Committee",
    color: "#A93122",
    bg: "#F5F0E8",
    members: [],
  },
];

export default committees;
