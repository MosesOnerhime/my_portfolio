export type ProjectCategory = 'web' | 'product' | 'creative';
export type ProjectStatus = 'live' | 'in-development' | 'ongoing' | 'internship' | 'project';

export interface ProjectImage {
  src: string;
  alt: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  label: string;
  summary: string;
  description: string;
  role: string;
  year?: string;
  status: ProjectStatus;
  statusLabel: string;
  statusNote: string;
  category: ProjectCategory;
  tags: string[];
  highlights: string[];
  liveUrl?: string;
  liveLabel?: string;
  codeUrl?: string;
  image?: string;
  imageAlt?: string;
  gallery?: ProjectImage[];
  communityLinks?: ProjectLink[];
  visual: 'drixil' | 'glamour' | 'calvision' | 'beyond' | 'learning' | 'trading' | 'dental' | 'editing';
  featured?: boolean;
}

// The source order is the homepage priority order and is reused by case-study navigation.
export const projects: Project[] = [
  {
    slug: 'drixil-group',
    title: 'Drixil Group',
    label: 'Creative technology company',
    summary: 'The digital home of a creative technology company building games, original ideas, software, and media brands.',
    description: 'I designed and built the public website for Drixil Group. It introduces the company, explains what each division does, and gives future products a clear place to grow.',
    role: 'Founder, designer, and developer',
    year: '2026',
    status: 'live',
    statusLabel: 'Live',
    statusNote: 'The public Drixil Group website is live.',
    category: 'web',
    tags: ['React', 'TypeScript', 'Brand systems', 'Responsive UI'],
    highlights: [
      'Turned a growing company story into a focused website',
      'Created a visual system that can grow with new divisions and products',
      'Connected Drixil Group with Drixil Interactive and Beyond 90',
    ],
    liveUrl: 'https://drixil-group.vercel.app/',
    liveLabel: 'Visit live site',
    image: '/drixil/logo-silver-purple.png',
    imageAlt: 'Drixil Group silver and purple logo',
    visual: 'drixil',
    featured: true,
  },
  {
    slug: 'beyond-90',
    title: 'Beyond 90',
    label: 'Game and original IP',
    summary: 'A Roblox football game in development, built around broadcast-style presentation and fluid, responsive play.',
    description: 'Beyond 90 is the first active game from Drixil Interactive. I am developing its football systems and creative direction, with a broadcast camera intended to make each match feel like a televised game. Fluid controls and responsive mechanics are central to the experience I am building.',
    role: 'Game developer and creative director',
    status: 'in-development',
    statusLabel: 'In development',
    statusNote: 'Beyond 90 is currently in development. Its Drixil Interactive page places the game within the wider studio.',
    category: 'creative',
    tags: ['Roblox', 'Gameplay systems', 'Broadcast camera', 'Creative direction'],
    highlights: [
      'Designed the broadcast-camera presentation around the feel of a televised match',
      'Developing fluid, responsive football mechanics for Roblox',
      'Created the game identity and its visual direction',
    ],
    liveUrl: 'https://drixil-group.vercel.app/interactive',
    liveLabel: 'View game page',
    communityLinks: [
      {
        label: 'Roblox community',
        url: 'https://www.roblox.com/share/g/451345789',
      },
      {
        label: 'TikTok',
        url: 'https://www.tiktok.com/@beyond90.dev?is_from_webapp=1&sender_device=pc',
      },
      {
        label: 'Instagram',
        url: 'https://www.instagram.com/beyond90_studio/?__pwa=1',
      },
      {
        label: 'YouTube',
        url: 'https://youtube.com/@beyond90.studio?si=Mo7n4UFBoIQc0YUN',
      },
    ],
    image: '/beyond 90/thumbnail 3.png',
    imageAlt: 'Beyond 90 football pitch shown through a broadcast camera view',
    visual: 'beyond',
    featured: true,
  },
  {
    slug: 'furreal-aex',
    title: 'Furreal.aex',
    label: 'Video editing and motion',
    summary: 'Cinematic edits, motion graphics, sound design, and short-form visual stories.',
    description: 'Furreal.aex is where I share my editing and motion work. I turn raw footage into engaging short-form videos with careful pacing, sound, colour, and motion graphics.',
    role: 'Video editor and motion designer',
    status: 'ongoing',
    statusLabel: 'Ongoing',
    statusNote: 'This is an ongoing body of editing and motion work. The linked TikTok profile contains published examples.',
    category: 'creative',
    tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Sound design'],
    highlights: [
      'Create short-form edits designed for social platforms',
      'Handle colour, motion graphics, transitions, and sound',
      'Bring the Furreal.aex identity into video and motion work',
    ],
    liveUrl: 'https://www.tiktok.com/@furreal.aex',
    liveLabel: 'View creative work',
    gallery: [
      {
        src: '/furreal.aex/screenshots/tiktok-profile.webp',
        alt: 'Furreal.aex TikTok profile showing published short-form edits and motion work',
        label: 'TikTok',
      },
      {
        src: '/furreal.aex/screenshots/instagram-profile.webp',
        alt: 'Furreal.aex Instagram profile showing selected edits and motion projects',
        label: 'Instagram',
      },
      {
        src: '/furreal.aex/screenshots/youtube-channel.webp',
        alt: 'Furreal Productions YouTube channel showing a collection of published video edits',
        label: 'YouTube',
      },
    ],
    visual: 'editing',
    featured: true,
  },
  {
    slug: 'glamoursphair',
    title: 'GLAMOURSPHAIR',
    label: 'Luxury hair commerce',
    summary: 'An online store for premium wigs and hair extensions, built for customers in Abuja and beyond.',
    description: 'I built a complete shopping experience for GLAMOURSPHAIR. Customers can browse products, manage their cart, choose a delivery area, view prices in different currencies, pay securely, and confirm their order on WhatsApp.',
    role: 'Frontend and commerce developer',
    year: '2026',
    status: 'live',
    statusLabel: 'Live',
    statusNote: 'The GLAMOURSPHAIR storefront is live.',
    category: 'web',
    tags: ['React', 'Paystack', 'EmailJS', 'E-commerce'],
    highlights: [
      'Built the cart, delivery, and multi-currency shopping experience',
      'Connected secure card payments with Paystack',
      'Added email receipts and WhatsApp order confirmation',
    ],
    liveUrl: 'https://www.glamoursphairluxury.com/',
    liveLabel: 'Visit live site',
    image: '/glamoursphair/logo-hd.png',
    imageAlt: 'GLAMOURSPHAIR brand logo',
    visual: 'glamour',
    featured: true,
  },
  {
    slug: 'calvision',
    title: 'CalVision',
    label: 'Final-year AI project',
    summary: 'A deep learning nutrition tool that recognizes African dishes and estimates calories and macros from a meal photo.',
    description: 'I built CalVision as my final-year project to make food recognition more relevant to African meals. It uses deep learning with YOLO segmentation to identify foods in a meal image and estimate their portions. Users can review the results, correct detected items, view calories and macros, save meals, and follow their nutrition history.',
    role: 'Full-stack and AI developer',
    year: '2026',
    status: 'live',
    statusLabel: 'Live',
    statusNote: 'The CalVision web product is live.',
    category: 'product',
    tags: ['YOLO segmentation', 'Deep learning', 'African dishes', 'React'],
    highlights: [
      'Built the product as my final-year project with a focus on African dishes',
      'Used YOLO segmentation to identify food and estimate portions',
      'Built editable results, meal history, calorie totals, and macro views',
    ],
    liveUrl: 'https://calvision-two.vercel.app/',
    liveLabel: 'Visit live site',
    visual: 'calvision',
    featured: true,
  },
  {
    slug: 'ppfn-lms',
    title: 'PPFN Learning System',
    label: 'Healthcare education platform',
    summary: 'A learning platform for healthcare training, progress tracking, assessments, and certificates.',
    description: 'I worked on this platform during my internship at Caldoc Systems for the Planned Parenthood Federation of Nigeria. It brings learning materials, assessments, and progress tracking into one place for learners and administrators.',
    role: 'Full-stack developer at Caldoc Systems',
    status: 'internship',
    statusLabel: 'Internship work',
    statusNote: 'This work was completed during my internship at Caldoc Systems. The linked repository contains the available source.',
    category: 'product',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS S3'],
    highlights: [
      'Worked on course enrollment, assessments, and progress tracking',
      'Supported multiple roles for administrators, instructors, and learners',
      'Designed for mobile use and lower-bandwidth environments',
    ],
    codeUrl: 'https://github.com/MosesOnerhime/Caldoc-Systems-Internship',
    visual: 'learning',
  },
  {
    slug: 'convexity-trading',
    title: 'Stock Trading App',
    label: 'Financial product experience',
    summary: 'A mobile trading interface for market activity, portfolios, watchlists, and transaction history.',
    description: 'I built this project during my internship at Convexity Technologies. It gave me practical experience with the speed, clarity, and security expected from an investing product for Nigerian users.',
    role: 'Application developer at Convexity',
    status: 'internship',
    statusLabel: 'Internship work',
    statusNote: 'This work was completed during my internship at Convexity Technologies. The linked repository contains the available source.',
    category: 'product',
    tags: ['React Native', 'TypeScript', 'WebSocket', 'Node.js'],
    highlights: [
      'Worked with real-time market data and frequently updating interfaces',
      'Built portfolio, watchlist, and transaction-history experiences',
      'Applied secure product patterns to a financial workflow',
    ],
    codeUrl: 'https://github.com/MosesOnerhime/Convexity-Technologies-Internship',
    visual: 'trading',
  },
  {
    slug: 'dental-clinic',
    title: 'Dental Clinic App',
    label: 'Patient management mobile app',
    summary: 'A mobile workflow for patient appointments, treatment records, reminders, and clinic operations.',
    description: 'I built this mobile app to replace phone calls and paper records with a simpler experience for patients and dental practitioners.',
    role: 'Mobile application developer',
    status: 'project',
    statusLabel: 'Project',
    statusNote: 'This is a portfolio project. The linked GitHub repository contains the source.',
    category: 'product',
    tags: ['React Native', 'Firebase', 'Expo', 'TypeScript'],
    highlights: [
      'Designed appointment booking and practitioner schedule flows',
      'Structured patient history, treatment plans, and prescription records',
      'Explored reminders, payments, and secure healthcare data patterns',
    ],
    codeUrl: 'https://github.com/MosesOnerhime/Dental-Clinic-Mobile-App/tree/master',
    visual: 'dental',
  },
];

export const liveProjects = projects.filter((project) => project.status === 'live');

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
