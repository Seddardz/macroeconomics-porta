export const NOW = new Date('2026-10-06');

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
    title: 'Introduction to Macroeconomics',
    desc: 'Scope of macroeconomics, aggregates, the circular flow and main schools of thought.',
    topic: 'Introduction',
    s: 'S1',
    date: '2026-09-14',
    url: 'https://archive.org/download/macroeconomics-course-syllabus/Macroeconomics%20Course%20Syllabus.pdf',
    imageUrl: '/assets/lecture-1.jpg'
  },
  {
    id: 2,
    ty: 'lecture',
    title: 'GDP and National Income',
    desc: 'How GDP is measured, nominal versus real GDP, deflator and national income accounting.',
    topic: 'GDP',
    s: 'S1',
    date: '2026-09-21',
    url: 'https://drive.google.com/file/d/1B_def456/view',
    imageUrl: '/assets/lecture-1.jpg'
  },
  {
    id: 3,
    ty: 'lecture',
    title: 'Inflation: Causes and Measurement',
    desc: 'Price indices, demand-pull and cost-push inflation, and the Phillips curve dynamic.',
    topic: 'Inflation',
    s: 'S1',
    date: '2026-10-02',
    url: 'https://drive.google.com/file/d/1C_ghi789/view',
    imageUrl: '/assets/lecture-1.jpg'
  },
  {
    id: 4,
    ty: 'lecture',
    title: 'Monetary Policy Fundamentals',
    desc: 'Money creation, central banking operations, policy rates, and monetary transmission channels.',
    topic: 'Monetary Policy',
    s: 'S2',
    date: '2026-02-10',
    url: 'https://drive.google.com/file/d/1D_jkl012/view',
    imageUrl: '/assets/lecture-1.jpg'
  },
  {
    id: 5,
    ty: 'lecture',
    title: 'Fiscal Policy & Public Debt',
    desc: 'Government spending, taxation principles, the Keynesian multiplier, and debt sustainability.',
    topic: 'Fiscal Policy',
    s: 'S2',
    date: '2026-02-24',
    url: 'https://drive.google.com/file/d/1E_mno345/view',
    imageUrl: '/assets/lecture-1.jpg'
  },

  // EXERCISES (5 Items)
  {
    id: 6,
    ty: 'exercise',
    title: 'Sheet 1 — Aggregates & Circular Flow',
    desc: 'Applied exercises on calculating flows, aggregates and mapping the circular flow of income.',
    topic: 'Introduction',
    s: 'S1',
    date: '2026-09-18',
    url: 'https://drive.google.com/file/d/2A_pqr678/view',
    imageUrl: '/assets/lecture-1.jpg'
  },
  {
    id: 7,
    ty: 'exercise',
    title: 'Sheet 2 — Computing Real GDP',
    desc: 'Practical problems on the three GDP approaches and converting nominal GDP to real GDP.',
    topic: 'GDP',
    s: 'S1',
    date: '2026-09-28',
    url: 'https://drive.google.com/file/d/2B_stu901/view',
    imageUrl: '/assets/lecture-1.jpg'
  },
  {
    id: 8,
    ty: 'exercise',
    title: 'Correction — GDP Sheet 2',
    desc: 'Detailed step-by-step solutions to Sheet 2 with methodology reminders for exam prep.',
    topic: 'GDP',
    s: 'S1',
    date: '2026-10-03',
    url: 'https://drive.google.com/file/d/2C_vwx234/view',
    imageUrl: '/assets/lecture-1.jpg'
  },
  {
    id: 9,
    ty: 'exercise',
    title: 'Case Study — IS-LM Equilibrium',
    desc: 'Advanced problem set calculating the equilibrium in goods and money markets using IS-LM.',
    topic: 'Monetary Policy',
    s: 'S2',
    date: '2026-03-02',
    url: 'https://drive.google.com/file/d/2D_yza567/view',
    imageUrl: '/assets/lecture-1.jpg'
  },
  {
    id: 10,
    ty: 'exercise',
    title: 'Revision — Fiscal Multipliers',
    desc: 'Revision sheet focusing on calculating different government multipliers and budget impacts.',
    topic: 'Fiscal Policy',
    s: 'S2',
    date: '2026-03-15',
    url: 'https://drive.google.com/file/d/2E_bcd890/view',
    imageUrl: '/assets/lecture-1.jpg'
  }
];

export const NEWS = [
  ['Oct 5, 2026', 'Midterm exam', 'Covers chapters 1 to 3. The exact date will be announced in class.', 1],
  ['Oct 2, 2026', 'New lecture published', 'The Inflation chapter is now available as a PDF.'],
  ['Sep 28, 2026', 'Tutorial session', 'Correction of sheet 2 on Tuesday, room B12.']
];