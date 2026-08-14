export type ProjectCategory = 'web' | 'product' | 'creative';

export interface Project {
  slug: string;
  title: string;
  label: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  category: ProjectCategory;
  tags: string[];
  highlights: string[];
  liveUrl?: string;
  codeUrl?: string;
  image?: string;
  imageAlt?: string;
  visual: 'furreal' | 'glamour' | 'calvision' | 'beyond' | 'learning' | 'trading' | 'dental' | 'editing';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'furreal-productions',
    title: 'Furreal Productions',
    label: 'Creative technology company',
    summary: 'The digital home of a creative technology company building games, original ideas, software, and media brands.',
    description: 'I designed and built the public website for Furreal Productions. It introduces the company, explains what each division does, and gives future products a clear place to grow.',
    role: 'Founder, designer, and developer',
    year: '2026',
    category: 'web',
    tags: ['React', 'TypeScript', 'Brand systems', 'Responsive UI'],
    highlights: [
      'Turned a growing company story into a focused website',
      'Created a visual system that can grow with new divisions and products',
      'Connected Furreal Productions with Furreal Interactive and Beyond 90',
    ],
    liveUrl: 'https://furreal-productions.vercel.app/',
    image: '/furreal productions/logo_03.jpeg',
    imageAlt: 'Furreal Productions logo on a black background',
    visual: 'furreal',
    featured: true,
  },
  {
    slug: 'glamoursphair',
    title: 'GLAMOURSPHAIR',
    label: 'Luxury hair commerce',
    summary: 'An online store for premium wigs and hair extensions, built for customers in Abuja and beyond.',
    description: 'I built a complete shopping experience for GLAMOURSPHAIR. Customers can browse products, manage their cart, choose a delivery area, view prices in different currencies, pay securely, and confirm their order on WhatsApp.',
    role: 'Frontend & commerce developer',
    year: '2026',
    category: 'web',
    tags: ['React', 'Paystack', 'EmailJS', 'E-commerce'],
    highlights: [
      'Built the cart, delivery, and multi-currency shopping experience',
      'Connected secure card payments with Paystack',
      'Added email receipts and WhatsApp order confirmation',
    ],
    liveUrl: 'https://www.glamoursphairluxury.com/',
    image: '/glamoursphair/logo.png',
    imageAlt: 'GLAMOURSPHAIR brand logo',
    visual: 'glamour',
    featured: true,
  },
  {
    slug: 'calvision',
    title: 'CalVision',
    label: 'AI nutrition product',
    summary: 'A deep learning nutrition tool that recognizes African dishes and estimates calories and macros from a meal photo.',
    description: 'CalVision is tailored for African food. It uses YOLO segmentation to identify foods in a meal image and estimate their portions. Users can review the results, correct detected items, view calories and macros, save meals, and follow their nutrition history.',
    role: 'Full-stack product developer',
    year: '2026',
    category: 'product',
    tags: ['YOLO segmentation', 'Deep learning', 'African dishes', 'React'],
    highlights: [
      'Focused the food data and interface on African dishes',
      'Used YOLO segmentation to identify food and estimate portions',
      'Built editable results, meal history, calorie totals, and macro views',
    ],
    liveUrl: 'https://calvision-two.vercel.app/',
    visual: 'calvision',
    featured: true,
  },
  {
    slug: 'beyond-90',
    title: 'Beyond 90',
    label: 'Game and original IP',
    summary: 'A team football game in development for Roblox under Furreal Interactive.',
    description: 'Beyond 90 is the first active game from Furreal Interactive. I am developing the game and building its identity around competitive football that is more exciting when played with a team.',
    role: 'Game development and creative direction',
    year: 'In development',
    category: 'creative',
    tags: ['Roblox', 'Game design', 'Creative direction', 'Original IP'],
    highlights: [
      'Created the game identity and its visual direction',
      'Designed the match experience around team play and competition',
      'Connected the game to the wider Furreal Interactive brand',
    ],
    liveUrl: 'https://furreal-productions.vercel.app/interactive',
    image: '/beyond 90/thumbnail 3.png',
    imageAlt: 'Beyond 90 football pitch shown through a broadcast camera view',
    visual: 'beyond',
    featured: true,
  },
  {
    slug: 'ppfn-lms',
    title: 'PPFN Learning System',
    label: 'Healthcare education platform',
    summary: 'A learning platform for healthcare training, progress tracking, assessments, and certificates.',
    description: 'I worked on this platform during my internship at Caldoc Systems for the Planned Parenthood Federation of Nigeria. It brings learning materials, assessments, and progress tracking into one place for learners and administrators.',
    role: 'Full-stack developer · Caldoc Systems',
    year: 'Internship',
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
    role: 'Application developer · Convexity',
    year: 'Internship',
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
    year: 'Project',
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
  {
    slug: 'furreal-aex',
    title: 'Furreal.aex',
    label: 'Video editing and motion',
    summary: 'Cinematic edits, motion graphics, sound design, and short-form visual stories.',
    description: 'Furreal.aex is where I share my editing and motion work. I turn raw footage into engaging short-form videos with careful pacing, sound, colour, and motion graphics.',
    role: 'Video editor and motion designer',
    year: 'Ongoing',
    category: 'creative',
    tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Sound design'],
    highlights: [
      'Create short-form edits designed for social platforms',
      'Handle colour, motion graphics, transitions, and sound',
      'Bring the Furreal identity into video and motion work',
    ],
    liveUrl: 'https://www.tiktok.com/@furreal.aex',
    image: '/furreal.aex/profile picture.jpg',
    imageAlt: 'Furreal.aex profile artwork showing a hooded figure',
    visual: 'editing',
    featured: true,
  },
];
