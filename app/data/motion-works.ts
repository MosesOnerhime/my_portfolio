export type MotionWork = {
  slug: string;
  title: string;
  label: string;
  description: string;
  contribution: string;
  format: string;
  tools: string[];
  orientation: 'portrait' | 'landscape';
  videoSrc: string;
  posterSrc: string;
  captionsSrc?: string;
};

export const motionWorks: MotionWork[] = [
  {
    slug: 'wizeup-promo',
    title: 'Wizeup Promo',
    label: 'Product motion · Vertical promo',
    description:
      'A 20-second product promo for Wizeup, made for Nigerian JAMB candidates. The piece turns app screens and redrawn interface components into a fast story about practice, streaks, XP, and progress.',
    contribution: 'Motion design, animation, editing, and sound design',
    format: '20 seconds · 9:16 · Sound effects',
    tools: ['HyperFrames', 'HTML/CSS', 'GSAP'],
    orientation: 'portrait',
    videoSrc: '/motion/wizeup-promo.mp4',
    posterSrc: '/motion/wizeup-promo-poster.webp',
  },
  {
    slug: 'approovia-workspace',
    title: 'Approovia Workspace Manager',
    label: 'Product motion · Software showcase',
    description:
      'A narrated showcase of Approovia Workspace Manager, moving from scattered work to one connected process. Animated product interfaces explain forms, approval workflows, memos, signatures, document filing, RAG search, and case files.',
    contribution: 'Motion design, animation, editing, and sound design',
    format: '91 seconds · 16:9 · Voiceover, music, and sound effects',
    tools: ['HyperFrames', 'HTML/CSS', 'GSAP'],
    orientation: 'landscape',
    videoSrc: '/motion/approovia-workspace-v3.mp4',
    posterSrc: '/motion/approovia-workspace-v3-poster.webp',
    captionsSrc: '/motion/approovia-workspace-v3.en.vtt',
  },
];

export const motionPlaceholders = [
  'Brand and identity motion',
  'Interface and product motion',
  'Titles, edits, and visual experiments',
] as const;
