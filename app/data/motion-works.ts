export type MotionWork = {
  slug: string;
  title: string;
  label: string;
  description: string;
  contribution: string;
  format: string;
  tools: string[];
  videoSrc: string;
  posterSrc: string;
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
    videoSrc: '/motion/wizeup-promo.mp4',
    posterSrc: '/motion/wizeup-promo-poster.webp',
  },
];

export const motionPlaceholders = [
  'Brand and identity motion',
  'Interface and product motion',
  'Titles, edits, and visual experiments',
] as const;
