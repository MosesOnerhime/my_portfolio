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
  visual: 'drixil' | 'glamour' | 'bti' | 'calvision' | 'beyond' | 'volleyball' | 'forge' | 'learning' | 'trading' | 'dental' | 'editing';
  featured?: boolean;
  cardNote?: string;
  results?: {
    asOf: string;
    highlights: { value: string; label: string }[];
    details: { heading: string; body: string }[];
  };
}

const drixilInteractiveLinks: ProjectLink[] = [
  { label: 'Roblox community', url: siteConfig.drixilInteractive.robloxCommunity },
  { label: 'Drixil Interactive on TikTok', url: siteConfig.drixilInteractive.tiktok },
  { label: 'Drixil Interactive on Instagram', url: siteConfig.drixilInteractive.instagram },
  { label: 'Drixil Interactive on YouTube', url: siteConfig.drixilInteractive.youtube },
  { label: 'Drixil Interactive on X', url: siteConfig.drixilInteractive.x },
];

// The source order is the homepage priority order and is reused by case-study navigation.
const btiProject: Project = {
    slug: 'bti-hadi-place',
    title: 'HADI Place / BTI',
    label: 'Website and publishing studio',
    summary: 'A beauty and wellness website with an owner-managed publishing studio, including BTI training and registration pages.',
    description: 'I built HADI Place\'s website and the studio behind it. The project started with a BTI training page and grew into an editable homepage with separate promotions, reusable layouts, and a registration page for each programme.',
    challenge: 'The owner needed to update the website and publish new promotions without asking a developer to redeploy it. Each programme also needed its own dates, venue, contact, and payment instructions, without carrying those details over from an unrelated event.',
    approach: 'I used Next.js and Supabase to separate private drafts, templates, and publication history from public pages. Admins can preview changes, publish a complete revision, and archive or restore a promotion. Database permissions protect editing, and revision checks prevent one editor from silently overwriting another.',
    role: 'Full-stack developer and designer',
    year: '2026',
    status: 'live',
    statusLabel: 'Live demo',
    statusNote: 'The public demonstration is available for client review. The website, promotion studio, and BTI pages are implemented. Custom-domain setup, production email verification, and final client handover remain separate work. Registration hands payment confirmation to the programme owner; the website does not verify payments automatically.',
    category: 'web',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Postgres RLS', 'Content management'],
    highlights: [
      'Designed and built the responsive HADI Place homepage, BTI programme page, and per-promotion registration flow',
      'Created an owner studio for editing content, uploading images, and reusing private templates',
      'Built draft, preview, publication history, and archive/restore flows with per-page revision checks',
      'Protected editing with authenticated admin membership and database-enforced permissions',
      'Kept event-specific dates, contacts, venue, and payment details separate when copying a promotion',
    ],
    liveUrl: 'https://hadispa.vercel.app/bti',
    liveLabel: 'Visit BTI demo',
    linkGroups: [{ label: 'Project website', links: [{ label: 'HADI Place homepage', url: 'https://hadispa.vercel.app/' }] }],
    image: '/bti/training.webp',
    imageAlt: 'Public BTI training page on the HADI Place website',
    caseStudyGallery: {
      title: 'The wider HADI Place website',
      description: 'The editable homepage introduces HADI Place and links to its published programmes. BTI remains a separate training page within the same website.',
      images: [{ src: '/bti/homepage.webp', alt: 'HADI Place public homepage with its beauty and wellness services', label: 'HADI Place homepage' }],
    },
    visual: 'bti',
  };

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
    summary: 'A Roblox football game in development, recreating the feel of EA FC with broadcast-style cameras, natural locomotion and fluid ball control.',
    description: 'Beyond 90 is recreating the feel of EA FC on Roblox: broadcast-style cameras, a library of 500+ animations, natural locomotion and fluid ball control. One player, one footballer.',
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
    summary: 'Authentic Roblox volleyball in 2v2, 3v3 and 6v6, for players who want real volleyball rather than arcade-heavy, superpower-style play.',
    description: 'Volleyball Rally is an authentic Roblox volleyball game from Drixil Interactive, built for 2v2, 3v3 and 6v6. It is aimed at players who want real volleyball rather than arcade-heavy, superpower-style play. Rotations, positions, setting lanes, quick attacks and blocks all matter. Smart bots coordinate, adapt when read, fill empty places and step aside when people join.',
    challenge: 'Volleyball has several techniques and timing decisions that can become overwhelming on a phone or controller. The challenge was to keep serving, passing, setting, spiking, blocking, and diving readable without flattening the skill and positioning that make a rally satisfying.',
    approach: 'The original controls use three intents: Control, Attack and Hustle. Position, aim and timing decide the touch, so one button can become a pass, set, spike, tip or dig depending on the moment. The game is phone-first, with swipe controls, gamepad and keyboard support. The server is authoritative, with prediction on the player’s device to help on slow connections. Other systems include Squad Control, where players control a whole team in an EA FC / 2K style, play styles, player cards, ranked play, replays, a TV-style spectator broadcast view and a voiced guided tutorial. I develop AI-first with Claude Code and Codex, using several agents in parallel. I use Blender, After Effects, Thrixel, Higgsfield and ElevenLabs for 3D, art and audio.',
    role: 'Game developer, designer, and creative director',
    year: '2026',
    status: 'in-development',
    statusLabel: 'Playable build',
    statusNote: 'Volleyball Rally has a public Roblox game page and a playable build. Development is continuing across gameplay, environments, progression, presentation, and cross-device testing.',
    category: 'creative',
    tags: ['Luau', 'Roblox Studio', 'VS Code', 'GitHub', 'Claude Code', 'Codex', 'Blender', 'After Effects', 'Thrixel', 'Higgsfield', 'ElevenLabs', '2v2, 3v3 and 6v6'],
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
    cardNote: '11,102 daily players on its best day, all from organic growth with no ads.',
    results: {
      asOf: 'As of 12 November 2026',
      highlights: [
        { value: '11,102', label: 'daily players on the best day (11 Nov 2026)' },
        { value: 'about 20x', label: 'the first month’s average in its first five weeks' },
        { value: '144K+', label: 'visits (12 Nov 2026)' },
        { value: 'Organic growth', label: 'no ads at all' },
      ],
      details: [
        { heading: 'Development and testing', body: 'Development started 7 Sep 2026. Public testing opened 9 Oct 2026.' },
        { heading: 'Daily players', body: 'The game averaged 537 daily players over its first month (9 Oct to 3 Nov), then 5,257 a day over 4 to 10 Nov (about 10x), and reached 11,102 on 11 Nov (about 20x the first month’s average).' },
        { heading: 'Concurrent players and visits', body: 'Peak concurrent players: 169 (11 Nov 2026). Visits: 144,000+ (12 Nov 2026).' },
        { heading: 'Roblox benchmark', body: 'Above Roblox’s top-10,000 benchmark for daily players since 8 Nov 2026. On 10 Nov: 7,869 against the benchmark’s 4,482. This is a benchmark comparison, not a ranking.' },
        { heading: 'Retention', body: 'Day-1 retention about 10.5% (4 to 10 Nov), above the median for Roblox’s Sports & Racing genre (genre benchmark, 50th to 90th percentile: 7.2% to 13.6%). Day-7 retention 3.18% on 3 Nov, above the Sports & Racing genre’s 90th percentile (2.93%).' },
        { heading: 'Devices and updates', body: '54% of players are on phones (4 to 10 Nov); also played on computers, tablets and consoles. 13 public updates in about two months.' },
        { heading: 'Biggest player countries', body: 'United States, Brazil, Philippines (9 Oct to 2 Nov).' },
        { heading: 'Why I held off on ads', body: 'Growth so far has been entirely organic, with no ads. “I want the game as close to perfect as I can get it before I put money behind a bigger audience, so the players I pay for stay.”' },
      ],
    },
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
  btiProject,
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
