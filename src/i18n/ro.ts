import type {
  BuildingCard,
  ContactRow,
  Dictionary,
  ExperienceEntry,
} from './types.ts'

/**
 * Romanian is not a translation of the English page — it is written for a
 * different reader. English addresses engineers; Romanian addresses
 * non-technical business owners, so the copy talks about outcomes (time back,
 * fewer mistakes) and avoids untranslated jargon.
 *
 * Two rules hold across every string below:
 *  - AI is the tool, never the offer. It appears only where a project's subject
 *    genuinely is AI, never on the selling surface (hero / about / contact).
 *  - Register is impersonal first person ("Ofer…", "Trec munca…") — never `tu`,
 *    never `dumneavoastră`.
 *
 * Diacritics are comma-below only: ș U+0219, ț U+021B.
 */

/**
 * The quiet cards stay quiet in Romanian too: no project name, no link and no
 * extra detail added. The rewrite deliberately *removes* specificity relative
 * to the English cards. See the guardrail JSDoc on `BuildingCard` in ./types.
 */
const buildingCards: BuildingCard[] = [
  {
    kind: 'named',
    index: '01',
    name: 'Flowy',
    href: 'https://github.com/sqaoss/flowy',
    tag: 'OPEN SOURCE · APACHE 2.0',
    description:
      'Unealtă de organizare a muncii pentru echipe care programează cu agenți AI. Partea de bază e publică și gratuită, serverul rămâne al meu — deschis cât să fie folosit, închis unde contează.',
  },
  {
    kind: 'quiet',
    index: '02',
    label: 'DOMENIU REGLEMENTAT',
    sentence:
      'O platformă la început de drum, într-un domeniu european cu reguli stricte (încă nelansată).',
  },
  {
    kind: 'quiet',
    index: '03',
    label: 'INFRASTRUCTURĂ PROPRIE',
    sentence:
      'Un sistem care ține mai mulți asistenți AI la lucru non-stop, pe serverele mele, comandat dintr-un chat.',
  },
  {
    kind: 'quiet',
    index: '04',
    label: 'ASISTENT DE FAMILIE',
    sentence:
      'Un asistent pentru familie, care ține evidența calendarului, a cheltuielilor și a treburilor casei.',
  },
]

/**
 * Same ranges as the English timeline — only the month abbreviations and
 * "Present" are translated. The SportyGroup/Circle and Hopin/Toptal overlaps
 * are intentional and must not be "corrected".
 *
 * Job titles stay in English on purpose: they are the titles actually held, and
 * they are what a Romanian reader recognises on a CV.
 *
 * The accomplishment lines drop tool names — a business owner gains nothing
 * from "TestCafe" or "accessibility-id" — but no achievement is invented,
 * inflated or removed. The 15→3 min figure is kept verbatim.
 */
const experienceEntries: ExperienceEntry[] = [
  {
    dates: 'Dec. 2025 – Prezent',
    role: 'Builder & Operator',
    accomplishment:
      'Construiesc și operez singur platforme și sisteme automate, de la prima discuție până la ce merge zi de zi.',
  },
  {
    dates: 'Iul. 2023 – Nov. 2025',
    role: 'Senior QA Automation Engineer',
    company: 'SportyGroup',
    accomplishment:
      'Am pus la punct un mod de lucru pentru inițiative tehnice între echipe și am condus depanarea testelor în toate sistemele de testare.',
  },
  {
    dates: 'Mai 2023 – Mar. 2024',
    role: 'Senior QA Automation Engineer',
    company: 'Circle.so',
    accomplishment:
      'Am construit de la zero testarea automată pentru aplicația de mobil; extinderea pe iOS a venit apoi aproape fără muncă în plus.',
  },
  {
    dates: 'Feb. 2017 – Feb. 2023',
    role: 'Senior QA Engineer / QA Lead',
    company: 'Toptal',
    accomplishment:
      'Am condus testarea pentru rescrierea interfeței principale; am scurtat rulările de teste 15→3 min și am dus testarea vizuală la nivel de companie.',
  },
  {
    dates: 'Feb. 2021 – Mai 2021',
    role: 'Senior QA Engineer',
    company: 'Hopin',
    accomplishment:
      'Coordonare de lansări în ritm de startup; am extins testarea automată și am învățat echipa cum să facă testele mai rapide.',
  },
  {
    dates: 'Apr. 2013 – Ian. 2017',
    role: 'Roluri QA anterioare',
    company: 'Gameloft · Ortnec · Rebelmouse · PitechPlus',
    accomplishment:
      'Am construit și am rulat testare automată pentru aplicații web, testare de încărcare și livrare automată a codului.',
  },
]

/** More rows than the English list — `ContactRow[]` makes that type-safe. */
const contactRows: ContactRow[] = [
  {
    label: 'E-MAIL',
    value: 'alex.radulescu@pm.me',
    href: 'mailto:alex.radulescu@pm.me',
  },
  {
    label: 'TELEFON',
    value: '0774 537 441',
    href: 'tel:+40774537441',
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
    label: 'ORAȘ',
    value: 'Oradea, România',
  },
  {
    label: 'FIRMĂ',
    value: 'SQA & Automation SRL',
  },
]

export const ro: Dictionary = {
  dateLocale: 'ro-RO',

  nav: {
    about: 'DESPRE MINE',
    building: 'PROIECTE',
    experience: 'EXPERIENȚĂ',
    contact: 'CONTACT',
    writing: 'BLOG',
    primaryLabel: 'Navigare principală',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
  },

  langSwitch: {
    label: 'Limbă',
  },

  head: {
    title: 'Alex Rădulescu — automatizare pentru firme',
    description:
      'Alex Rădulescu — trec munca repetitivă din firmă pe un sistem care o face mai rapid și fără greșeli. 12+ ani în software.',
  },

  hero: {
    eyebrow: 'SQA & AUTOMATION SRL',
    headline: 'INGINER DE AUTOMATIZĂRI',
    name: 'Alex Rădulescu',
    meta: '12+ ani în software · Trec munca repetitivă din firmă pe un sistem care o face mai rapid și fără greșeli',
    tagline: 'Mai mult decât software.',
    downloadCv: 'Descarcă CV-ul (PDF)',
    readWriting: 'Citește blogul',
  },

  about: {
    eyebrow: 'DESPRE MINE',
    body: 'Am petrecut 12+ ani în software, verificând că lucrurile funcționează înainte să ajungă la oameni. Treaba mea n-a fost să găsesc greșeli, ci să construiesc sisteme în care greșeala nu mai apare. Acum fac același lucru pentru firme: iau munca repetitivă — rapoarte făcute de mână, date mutate dintr-un loc în altul, mesaje trimise unul câte unul — și o trec pe un sistem care o face mai rapid și fără greșeli. Nu ofer tehnologie, ofer timp recuperat și mai puține greșeli. Lucrez singur, de la prima discuție până la sistemul care merge zi de zi, așa că nu se pierde nimic pe drum. Mai mult decât software — mă interesează firma în care ajunge.',
    principles: [
      'Previn greșelile, nu le vânez',
      'Duc treaba până la capăt',
      'Mă descurc când nimic nu e clar',
    ],
  },

  building: {
    eyebrow: 'PROIECTE',
    github: 'GITHUB ↗',
    cards: buildingCards,
  },

  experience: {
    eyebrow: 'EXPERIENȚĂ',
    downloadCv: 'Descarcă CV-ul (PDF)',
    entries: experienceEntries,
  },

  contact: {
    eyebrow: 'HAI SĂ VORBIM',
    intro:
      'Dacă într-o firmă se face ceva de mână în fiecare săptămână, merită o discuție. Răspund la e-mail și la telefon.',
    rows: contactRows,
  },

  footer: {
    line: 'ALEX RĂDULESCU · MAI MULT DECÂT SOFTWARE · © 2026',
  },

  writing: {
    eyebrow: 'BLOG',
    empty: 'Nimic publicat încă. Revino în curând.',
    englishNote: 'în engleză',
  },

  post: {
    notFoundTitle: 'Articol negăsit',
    noPostAt: 'Niciun articol la',
    noSlug: 'Nu a fost indicat niciun articol.',
    backToWriting: 'Înapoi la blog',
  },

  notFound: {
    message: 'Pagina asta nu există.',
    backHome: 'Înapoi la pagina principală',
  },
}
