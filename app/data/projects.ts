import { siteConfig } from './site';

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

export interface ProjectLinkGroup {
  label: string;
  links: ProjectLink[];
}

export interface Project {
  slug: string;
  title: string;
  label: string;
  summary: string;
  description: string;
  challenge?: string;
  approach?: string;
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
  mark?: string;
  gallery?: ProjectImage[];
  caseStudyGallery?: {
    title: string;
    description: string;
    images: ProjectImage[];
  };
  linkGroups?: ProjectLinkGroup[];
  visual: 'drixil' | 'glamour' | 'calvision' | 'beyond' | 'volleyball' | 'forge' | 'learning' | 'trading' | 'dental' | 'editing';
  featured?: boolean;
}

const drixilInteractiveLinks: ProjectLink[] = [
  { label: 'Roblox community', url: siteConfig.drixilInteractive.robloxCommunity },
  { label: 'Drixil Interactive on TikTok', url: siteConfig.drixilInteractive.tiktok },
  { label: 'Drixil Interactive on Instagram', url: siteConfig.drixilInteractive.instagram },
  { label: 'Drixil Interactive on YouTube', url: siteConfig.drixilInteractive.youtube },
  { label: 'Drixil Interactive on X', url: siteConfig.drixilInteractive.x },
];

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
    description: 'Beyond 90 is a competitive Roblox football game where each player controls one footballer for the match. I am building the gameplay systems, broadcast presentation, interface, progression, and wider creative direction under Drixil Interactive.',
    challenge: 'The game needs to feel like football rather than a generic Roblox ball game, while still working clearly on phone, keyboard and mouse, and gamepad. It also has to keep each player connected to one position and make team play readable through a broadcast camera.',
    approach: 'I split the experience across Lobby, Match, and Training places, with a shared build and a server-authoritative rules layer. The current systems cover passing, shooting, reception, defending, goalkeeping, set pieces, AI footballers, replays, progression, customization, and touch-first interface patterns.',
    role: 'Game developer and creative director',
    status: 'in-development',
    statusLabel: 'In development',
    statusNote: 'Beyond 90 remains in active development. Its Roblox page is public, and the current build continues to evolve across gameplay, presentation, interface, and cross-device testing.',
    category: 'creative',
    tags: ['Luau', 'Roblox', 'Server-authoritative gameplay', 'Broadcast camera', 'Cross-device UI'],
    highlights: [
      'Designed the broadcast-camera presentation, replay direction, set-piece visuals, and match interface',
      'Built football systems for passing, shooting, receiving, defending, goalkeeping, AI, and match rules',
      'Structured separate Lobby, Match, and Training places around one shared codebase',
      'Designed touch-first controls while supporting keyboard, mouse, and gamepad input',
    ],
    liveUrl: 'https://www.roblox.com/games/138362130200118/Beyond-90',
    liveLabel: 'Play on Roblox',
    linkGroups: [
      {
        label: 'Beyond 90 social',
        links: [
          { label: 'Beyond 90 on TikTok', url: 'https://www.tiktok.com/@beyond90.dev' },
          { label: 'Beyond 90 on Instagram', url: 'https://www.instagram.com/beyond90_studio/' },
          { label: 'Beyond 90 on YouTube', url: 'https://youtube.com/@beyond90.studio' },
        ],
      },
      { label: 'Drixil Interactive', links: drixilInteractiveLinks },
    ],
    image: '/beyond 90/thumbnail 3.png',
    imageAlt: 'Beyond 90 football pitch shown through a broadcast camera view',
    visual: 'beyond',
    featured: true,
  },
  {
    slug: 'volleyball-rally',
    title: 'Volleyball Rally',
    label: 'Roblox sports game',
    summary: 'A fast 3v3 volleyball game built around simple controls, expressive rallies, and cross-device play.',
    description: 'Volleyball Rally is an arcade indoor volleyball game from Drixil Interactive. I built its gameplay, presentation, interface, and multi-place structure around one clear idea: the game should be difficult because volleyball is difficult, not because the controls are confusing.',
    challenge: 'Volleyball has several techniques and timing decisions that can become overwhelming on a phone or controller. The challenge was to keep serving, passing, setting, spiking, blocking, and diving readable without flattening the skill and positioning that make a rally satisfying.',
    approach: 'I organized play around three intents: Control, Attack, and Hustle. Context turns those inputs into the right technique, while the camera handles aim. The server owns the match simulation and rules, AI athletes fill empty roster slots, and the same experience supports touch, keyboard and mouse, and gamepad.',
    role: 'Game developer, designer, and creative director',
    year: '2026',
    status: 'in-development',
    statusLabel: 'Playable build',
    statusNote: 'Volleyball Rally has a public Roblox game page and a playable build. Development is continuing across gameplay, environments, progression, presentation, and cross-device testing.',
    category: 'creative',
    tags: ['Luau', 'Roblox', '3v3 gameplay', 'Server authority', 'Touch controls'],
    highlights: [
      'Built a three-intent control system for passing, setting, spiking, blocking, serving, and diving',
      'Created server-authoritative match, ball-contact, scoring, matchmaking, and progression systems',
      'Designed the experience for touch first, with keyboard, mouse, and gamepad support',
      'Built AI athletes that fill open positions so a player can start a complete match without a full group',
    ],
    liveUrl: 'https://www.roblox.com/games/87714615725428/Volleyball-Rally',
    liveLabel: 'Play on Roblox',
    image: '/volleyball-rally/spike.webp',
    imageAlt: 'Promotional artwork of a Volleyball Rally player jumping to spike a blue and yellow ball',
    caseStudyGallery: {
      title: 'Volleyball Rally artwork',
      description: 'A few more thumbnails for the game, from a block at the net to a last-second dive. These are promotional illustrations, not gameplay screenshots.',
      images: [
        {
          src: '/volleyball-rally/block.webp',
          alt: 'A blue-team player rising above the net to block a red-team opponent in Volleyball Rally promotional artwork',
          label: 'At the net',
        },
        {
          src: '/volleyball-rally/team.webp',
          alt: 'Three blue-team Volleyball Rally players celebrating together on an indoor court',
          label: 'A point worth celebrating',
        },
        {
          src: '/volleyball-rally/dive.webp',
          alt: 'A Volleyball Rally player diving across the court to reach the ball while teammates and opponents watch',
          label: 'Keeping the rally alive',
        },
        {
          src: '/volleyball-rally/receive.webp',
          alt: 'A court-level first-person illustration of a Volleyball Rally player receiving the ball over the net',
          label: 'From the court',
        },
      ],
    },
    linkGroups: [{ label: 'Drixil Interactive', links: drixilInteractiveLinks }],
    visual: 'volleyball',
    featured: true,
  },
  {
    slug: 'forge',
    title: 'Forge',
    label: 'Fitness tracking product',
    summary: 'A mobile-first fitness PWA for workouts, nutrition, progress, private media, and fast set logging.',
    description: 'Forge is a private gym, nutrition, and physique tracker. I built it to make set logging feel immediate during a workout while keeping plans, food, measurements, photos, and reference media connected in one product.',
    challenge: 'A workout tracker has to stay quick while someone is training, protect private health and media data, and remain honest when the network drops. The core flow could not make a failed save look successful or bury the next set behind desktop-sized navigation.',
    approach: 'I built Forge as a mobile-first Next.js PWA with Supabase Auth, PostgreSQL Row Level Security, and private Storage. It includes a durable offline queue for workout sets, a rest timer that survives navigation and reloads, reusable routine templates, and signed access to private exercise images and videos.',
    role: 'Product designer and full-stack developer',
    year: '2026',
    status: 'live',
    statusLabel: 'Live',
    statusNote: 'Forge is deployed as a live web application. Account access is required for the private tracking experience, and development continues as more real-world flows are verified.',
    category: 'product',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PWA', 'Offline sync'],
    highlights: [
      'Built workout, nutrition, progress, journal, goals, settings, and routine-template flows',
      'Protected user data with owner-scoped PostgreSQL policies and private media storage',
      'Added queued offline set logging with clear waiting and retry states',
      'Designed and tested responsive workout flows for desktop and 390px mobile layouts',
    ],
    liveUrl: 'https://forge-runo.vercel.app/',
    liveLabel: 'Open live app',
    image: '/forge/dashboard.webp',
    imageAlt: 'Forge dashboard showing a training plan, nutrition summary, and workout logging interface',
    visual: 'forge',
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
        alt: 'Furreal.aex YouTube channel showing a collection of published video edits',
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
