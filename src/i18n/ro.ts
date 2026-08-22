import type {
  BuildingCard,
  ContactRow,
  Dictionary,
  ExperienceEntry,
} from './types'

/**
 * The quiet cards stay quiet in Romanian too: translated literally, with no
 * project name, no link and no extra detail added. See the guardrail JSDoc on
 * `BuildingCard` in ./types.
 */
const buildingCards: BuildingCard[] = [
  {
    kind: 'named',
    index: '01',
    name: 'Flowy',
    href: 'https://github.com/sqaoss/flowy',
    tag: 'OPEN SOURCE · APACHE 2.0',
    description:
      'Management de proiect pentru agenți AI de programare — un CLI open-source (Apache 2.0) cuplat cu un server SaaS cu sursă închisă. Licențiere împărțită, intenționat: deschisă pentru adopție, protejată acolo unde contează.',
  },
  {
    kind: 'quiet',
    index: '02',
    label: 'SAAS REGLEMENTAT',
    sentence:
      'Un SaaS multi-tenant aflat la început, într-o piață europeană reglementată (pre-lansare).',
  },
  {
    kind: 'quiet',
    index: '03',
    label: 'INFRASTRUCTURĂ DE AGENȚI',
    sentence:
      'Un orchestrator Claude multi-agent self-hosted, care rulează pe infrastructură personală, cuplat la Discord.',
  },
  {
    kind: 'quiet',
    index: '04',
    label: 'ȘEF DE CABINET AI',
    sentence:
      'Un bot AI de tip șef de cabinet pentru familie, care acoperă calendar, finanțe și contextul gospodăriei.',
  },
]

/**
 * Same ranges as the English timeline — only the month abbreviations and
 * "Present" are translated. The SportyGroup/Circle and Hopin/Toptal overlaps
 * are intentional and must not be "corrected".
 */
const experienceEntries: ExperienceEntry[] = [
  {
    dates: 'Dec. 2025 – Prezent',
    role: 'Builder & Operator',
    accomplishment:
      'Livrez cap-coadă SaaS multi-tenant și infrastructură multi-agent, cu Claude Code drept strat de execuție.',
  },
  {
    dates: 'Iul. 2023 – Nov. 2025',
    role: 'Senior QA Automation Engineer',
    company: 'SportyGroup',
    accomplishment:
      'Am construit un cadru de inițiative tehnice între echipe și am condus depanarea testelor asistată de AI în toate framework-urile QA.',
  },
  {
    dates: 'Mai 2023 – Mar. 2024',
    role: 'Senior QA Automation Engineer',
    company: 'Circle.so',
    accomplishment:
      'Am construit de la zero infrastructura de testare React Native; o strategie de localizare pe accessibility-id a făcut extinderea pe iOS aproape gratuită.',
  },
  {
    dates: 'Feb. 2017 – Feb. 2023',
    role: 'Senior QA Engineer / QA Lead',
    company: 'Toptal',
    accomplishment:
      'Am condus efortul QA pentru extragerea frontendului principal; am scurtat rulările de teste Picasso 15→3 min și am construit testare vizuală la nivel de companie.',
  },
  {
    dates: 'Feb. 2021 – Mai 2021',
    role: 'Senior QA Engineer',
    company: 'Hopin',
    accomplishment:
      'Coordonare de release candidates în ritm de startup; am extins framework-ul TestCafe și am instruit ingineri pe performanța testelor.',
  },
  {
    dates: 'Apr. 2013 – Ian. 2017',
    role: 'Roluri QA anterioare',
    company: 'Gameloft · Ortnec · Rebelmouse · PitechPlus',
    accomplishment:
      'Am construit și am rulat framework-uri E2E (Selenium / Capybara / Codeception), testare de încărcare și CI/CD pe Jenkins.',
  },
]

const contactRows: ContactRow[] = [
  {
    label: 'MAIL',
    value: 'alex.radulescu@pm.me',
    href: 'mailto:alex.radulescu@pm.me',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/separatio',
    href: 'https://linkedin.com/in/separatio',
    external: true,
  },
  {
    label: 'GITHUB',
    value: 'github.com/separatio',
    href: 'https://github.com/separatio',
    external: true,
  },
  {
    label: 'LOC',
    value: 'Oradea, România',
  },
]

export const ro: Dictionary = {
  dateLocale: 'ro-RO',

  nav: {
    about: 'DESPRE',
    building: 'CONSTRUIESC',
    experience: 'EXPERIENȚĂ',
    contact: 'CONTACT',
    writing: 'TEXTE',
    primaryLabel: 'Navigare principală',
    openMenu: 'Deschide meniul de navigare',
    closeMenu: 'Închide meniul de navigare',
  },

  langSwitch: {
    label: 'Limbă',
  },

  head: {
    title: 'Alex Rădulescu — Builder & Operator AI-First',
    description:
      'Alex Rădulescu — builder & operator AI-first. 12+ ani în calitate software, construiesc SaaS și infrastructură de agenți cu Claude Code.',
  },

  hero: {
    eyebrow: 'SQA & AUTOMATION SRL',
    headline: 'BUILDER & OPERATOR AI-FIRST',
    name: 'ALEX RĂDULESCU',
    meta: '12+ ani în calitate software · Construiesc SaaS + infrastructură de agenți cu Claude Code',
    tagline: 'Mai mult decât software.',
    downloadCv: 'Descarcă CV-ul',
    readWriting: 'Citește textele',
  },

  about: {
    eyebrow: 'DESPRE',
    body: 'Sunt builder și operator, cu 12+ ani în calitate software, și tratez calitatea ca prevenire a defectelor, nu ca execuție de teste — proiectez sisteme în care bugul nu ajunge niciodată în producție, nu doar îl prind după aceea. Astăzi construiesc și operez cap-coadă SaaS multi-tenant, orchestratoare multi-agent și unelte AI pentru familie, cu Claude Code drept strat de execuție. Merg cel mai bine acolo unde drumul nu e clar: inițiativă mare, asumare totală și înclinație spre livrare. Mai mult decât software — mă interesează sistemul în care trăiește software-ul.',
    principles: [
      'Calitatea ca prevenire a defectelor',
      'Inițiativă mare, asumare totală',
      'Productiv când drumul nu e clar',
    ],
  },

  building: {
    eyebrow: 'CE CONSTRUIESC',
    github: 'GITHUB ↗',
    cards: buildingCards,
  },

  experience: {
    eyebrow: 'EXPERIENȚĂ',
    downloadCv: 'Descarcă CV-ul',
    entries: experienceEntries,
  },

  contact: {
    eyebrow: 'CONTACT',
    rows: contactRows,
  },

  footer: {
    line: 'ALEX RĂDULESCU · MAI MULT DECÂT SOFTWARE · © 2026',
  },

  writing: {
    eyebrow: 'TEXTE',
    empty: 'Nimic publicat încă. Revino în curând.',
    englishNote: 'în engleză',
  },

  post: {
    notFoundTitle: 'Articol negăsit',
    noPostAt: 'Niciun articol la',
    noSlug: 'Niciun slug furnizat.',
    backToWriting: 'Înapoi la texte',
  },

  notFound: {
    message: 'Pagina asta nu există.',
    backHome: 'Înapoi acasă',
  },
}
