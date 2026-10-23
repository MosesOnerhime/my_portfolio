import { projects } from './projects';
import { motionWorks } from './motion-works';
import { currentWork } from './current-work';

export const workCollections = [
  { slug: 'games', title: 'Game development', description: 'Football, volleyball, and the systems that make them feel good to play.', image: '/volleyball-rally/spike.webp', imageAlt: 'Volleyball Rally promotional artwork', projectSlugs: ['beyond-90', 'volleyball-rally'] },
  { slug: 'websites', title: 'Website development', description: 'Company websites, publishing tools, and online stores.', image: '/drixil/logo-silver-purple.png', imageAlt: 'Drixil Group identity', projectSlugs: ['drixil-group', 'glamoursphair', 'bti-hadi-place'] },
  { slug: 'software-ai', title: 'Software & AI', description: 'Useful apps, African food recognition, and real product workflows.', image: '/forge/dashboard.webp', imageAlt: 'Forge workout and nutrition dashboard', projectSlugs: ['forge', 'calvision', 'ppfn-lms', 'convexity-trading', 'dental-clinic'] },
  { slug: 'motion', title: 'Motion design', description: 'Product films, animated interfaces, and stories told through movement.', image: '/motion/approovia-workspace-v3-poster.webp', imageAlt: 'Frame from the narrated Approovia Workspace Manager film', projectSlugs: [] },
  { slug: 'editing', title: 'Video editing', description: 'Furreal.aex: pacing, colour, sound, and short-form visual stories.', image: '/furreal.aex/screenshots/tiktok-profile.webp', imageAlt: 'Published Furreal.aex editing work on TikTok', projectSlugs: ['furreal-aex'] },
] as const;

export type WorkCollection = typeof workCollections[number];
export function getCollection(slug: string) { return workCollections.find((item) => item.slug === slug); }
export function collectionHref(collection: WorkCollection) { return collection.slug === 'motion' ? '/motion' : `/work/collections/${collection.slug}`; }
export function collectionProjects(collection: WorkCollection) { return projects.filter((project) => (collection.projectSlugs as readonly string[]).includes(project.slug)); }
export function collectionCount(collection: WorkCollection) { return collection.slug === 'motion' ? motionWorks.length : collectionProjects(collection).length + (collection.slug === 'software-ai' ? currentWork.length : 0); }
export function collectionCountLabel(collection: WorkCollection) { return collection.slug === 'software-ai' ? `${collectionProjects(collection).length} projects + ${currentWork.length} in progress` : `${collectionCount(collection)} ${collection.slug === 'motion' ? 'films' : collection.slug === 'editing' ? 'collection' : 'projects'}`; }
export function projectCollection(slug: string) { return workCollections.find((collection) => (collection.projectSlugs as readonly string[]).includes(slug)); }
export const totalWorkCount = workCollections.reduce((count, collection) => count + collectionCount(collection), 0);
