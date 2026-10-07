export const NOW = new Date('2026-10-06');

// University shown in the hero beacon (its Facebook page)
export const UNIVERSITY = {
  name: 'University Centre of Maghnia',
  href: 'https://web.facebook.com/centre.univ.maghnia', // TODO: real page URL
  icon: 'https://thesvg.org/icons/facebook/default.svg',
};

// Icons for the two document types (badge on the cover + hero buttons)
export const TYPE_ICON = {
  lecture: 'https://thesvg.org/icons/bookstack/default.svg',
  exercise: 'https://thesvg.org/icons/format-json-online/default.svg',
};

// Animated SVG on the right of the hero. File: /public/assets/cum.svg
export const ART_SRC = '/assets/cum.svg';

// Professor's portrait. Put the file in /public/assets/prof.jpg
export const PROF_PHOTO = '/assets/prof.jpg';

// Blurred photo behind the hero. Put the file in /public/assets/hero-bg.jpg
export const HERO_BG = '/assets/hero-bg.jpg';

// Icons under the professor's name. Replace the href values with the real profiles.
export const PROFILE_LINKS = [
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=2AyjyKUAAAAJ&hl=en/', // TODO: real profile URL
    icon: 'https://thesvg.org/icons/google-scholar/default.svg',
  },
  {
    name: 'Scopus',
    href: 'https://www.scopus.com/authid/detail.uri?authorId=57209245561', // TODO: real author URL
    icon: 'https://thesvg.org/icons/scopus/default.svg',
  },
  {
    name: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Abderrahim-Chibi', // TODO: real profile URL
    icon: 'https://thesvg.org/icons/researchgate/default.svg',
  },
];

export type CourseItem = {
  id: number;
  ty: 'lecture' | 'exercise';
  title: string;
  desc: string;
  topic: string;
  s: 'S1' | 'S2';
  date: string;
  url: string;
  imageUrl: string;
};

export const courseData: CourseItem[] = [
  // LECTURES (5 Items)
  {
    id: 1,
    ty: 'lecture',
    title: 'Macroeconomics Course Syllabus',
    desc: 'The course syllabus provides an overview of the topics, schedule, and assessment methods for the macroeconomics course.',
    topic: 'Introduction',
    s: 'S1',
    date: '2026-10-04',
    url: 'https://archive.org/download/macroeconomics-course-syllabus/Macroeconomics%20Course%20Syllabus.pdf',
    imageUrl: '/assets/iloveimg-resized/Macroeconomics_Course_Syllabus.jpg'
  },
  {
    id: 2,
    ty: 'lecture',
    title: 'Chapter 1 : Basic Concepts of Macroeconomic Analysis.',
    desc: 'An introduction to economics covering scarcity, resource allocation, economic choices, opportunity cost, and the production possibilities curve.',
    topic: 'GDP',
    s: 'S1',
    date: '2026-10-05',
    url: 'https://archive.org/download/macroeconomics-course-syllabus/Basic%20Concepts%20of%20Macroeconomic%20Analysis%20%28part%201%29.pdf',
    imageUrl: '/assets/iloveimg-resized/Basic_Concepts.jpg'
  },
  // {
  //   id: 3,
  //   ty: 'lecture',
  //   title: 'Inflation: Causes and Measurement',
  //   desc: 'Price indices, demand-pull and cost-push inflation, and the Phillips curve dynamic.',
  //   topic: 'Inflation',
  //   s: 'S1',
  //   date: '2026-10-02',
  //   url: 'https://drive.google.com/file/d/1C_ghi789/view',
  //   imageUrl: '/assets/lecture-1.jpg'
  // },
  // {
  //   id: 4,
  //   ty: 'lecture',
  //   title: 'Monetary Policy Fundamentals',
  //   desc: 'Money creation, central banking operations, policy rates, and monetary transmission channels.',
  //   topic: 'Monetary Policy',
  //   s: 'S2',
  //   date: '2026-02-10',
  //   url: 'https://drive.google.com/file/d/1D_jkl012/view',
  //   imageUrl: '/assets/lecture-1.jpg'
  // },
  // {
  //   id: 5,
  //   ty: 'lecture',
  //   title: 'Fiscal Policy & Public Debt',
  //   desc: 'Government spending, taxation principles, the Keynesian multiplier, and debt sustainability.',
  //   topic: 'Fiscal Policy',
  //   s: 'S2',
  //   date: '2026-02-24',
  //   url: 'https://drive.google.com/file/d/1E_mno345/view',
  //   imageUrl: '/assets/lecture-1.jpg'
  // },

  // EXERCISES (5 Items)
  {
    id: 3,
    ty: 'exercise',
    title: 'Problem set -1-',
    desc: 'Chapter 1 : Basic Concepts of Macroeconomic Analysis.',
    topic: 'Introduction',
    s: 'S1',
    date: '2026-10-10',
    url: 'https://archive.org/download/macroeconomics-course-syllabus/TD%201%20english%20version.pdf',
    imageUrl: '/assets/iloveimg-resized/td01.jpg'
  },
  // {
  //   id: 7,
  //   ty: 'exercise',
  //   title: 'Sheet 2 — Computing Real GDP',
  //   desc: 'Practical problems on the three GDP approaches and converting nominal GDP to real GDP.',
  //   topic: 'GDP',
  //   s: 'S1',
  //   date: '2026-09-28',
  //   url: 'https://drive.google.com/file/d/2B_stu901/view',
  //   imageUrl: '/assets/lecture-1.jpg'
  // },
  // {
  //   id: 8,
  //   ty: 'exercise',
  //   title: 'Correction — GDP Sheet 2',
  //   desc: 'Detailed step-by-step solutions to Sheet 2 with methodology reminders for exam prep.',
  //   topic: 'GDP',
  //   s: 'S1',
  //   date: '2026-10-03',
  //   url: 'https://drive.google.com/file/d/2C_vwx234/view',
  //   imageUrl: '/assets/lecture-1.jpg'
  // },
  // {
  //   id: 9,
  //   ty: 'exercise',
  //   title: 'Case Study — IS-LM Equilibrium',
  //   desc: 'Advanced problem set calculating the equilibrium in goods and money markets using IS-LM.',
  //   topic: 'Monetary Policy',
  //   s: 'S2',
  //   date: '2026-03-02',
  //   url: 'https://drive.google.com/file/d/2D_yza567/view',
  //   imageUrl: '/assets/lecture-1.jpg'
  // },
  // {
  //   id: 10,
  //   ty: 'exercise',
  //   title: 'Revision — Fiscal Multipliers',
  //   desc: 'Revision sheet focusing on calculating different government multipliers and budget impacts.',
  //   topic: 'Fiscal Policy',
  //   s: 'S2',
  //   date: '2026-03-15',
  //   url: 'https://drive.google.com/file/d/2E_bcd890/view',
  //   imageUrl: '/assets/lecture-1.jpg'
  // }
];

export const NEWS = [
  ['Oct 5, 2026', 'Midterm exam', 'Covers chapters 1 to 3. The exact date will be announced in class.', 1],
  ['Oct 2, 2026', 'New lecture published', 'The Inflation chapter is now available as a PDF.'],
  ['Sep 28, 2026', 'Tutorial session', 'Correction of sheet 2 on Tuesday, room B12.']
];