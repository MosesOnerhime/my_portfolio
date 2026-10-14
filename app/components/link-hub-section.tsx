import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { getProject } from '../data/projects';
import { siteConfig } from '../data/site';

type HubLink = {
  label: string;
  note: string;
  href: string;
  external?: boolean;
};

function projectLink(slug: string, note: string): HubLink {
  const project = getProject(slug);

  if (!project?.liveUrl) {
    throw new Error(`A live destination is required for the ${slug} link hub entry.`);
  }

  return {
    label: project.title,
    note,
    href: project.liveUrl,
    external: true,
  };
}

const linkGroups: Array<{ title: string; links: HubLink[] }> = [
  {
    title: 'Portfolio and products',
    links: [
      { label: 'Selected work', note: 'Browse every portfolio case study', href: '/#work' },
      projectLink('drixil-group', 'Drixil Group website'),
      projectLink('forge', 'Fitness tracking product'),
      projectLink('calvision', 'African food recognition and nutrition'),
      projectLink('glamoursphair', 'Luxury hair commerce website'),
    ],
  },
  {
    title: 'Games and Drixil Interactive',
    links: [
      projectLink('beyond-90', 'Play the football experience on Roblox'),
      projectLink('volleyball-rally', 'Play the volleyball experience on Roblox'),
      { label: 'Roblox community', note: 'Join Drixil Interactive on Roblox', href: siteConfig.drixilInteractive.robloxCommunity, external: true },
      { label: 'TikTok', note: '@drixil.interactive', href: siteConfig.drixilInteractive.tiktok, external: true },
      { label: 'Instagram', note: '@drixil.interactive', href: siteConfig.drixilInteractive.instagram, external: true },
      { label: 'YouTube', note: '@drixil.interactive', href: siteConfig.drixilInteractive.youtube, external: true },
      { label: 'X', note: '@drixil_inter', href: siteConfig.drixilInteractive.x, external: true },
    ],
  },
  {
    title: 'Motion and media',
    links: [
      { label: 'Motion archive', note: 'Product motion, animation, and visual experiments', href: '/motion' },
      { label: 'Furreal.aex case study', note: 'Editing and motion work', href: '/work/furreal-aex' },
      { label: 'TikTok', note: '@furreal.aex', href: siteConfig.socials.tiktok, external: true },
      { label: 'Instagram', note: '@furreal.aep', href: siteConfig.socials.instagram, external: true },
      { label: 'YouTube', note: '@furrealproductions', href: siteConfig.socials.youtube, external: true },
    ],
  },
  {
    title: 'Code, professional, and contact',
    links: [
      { label: 'GitHub', note: '@MosesOnerhime', href: siteConfig.socials.github, external: true },
      { label: 'LinkedIn', note: 'Moses Onerhime', href: siteConfig.socials.linkedin, external: true },
      { label: 'Email', note: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { label: 'WhatsApp', note: 'Send me a message', href: siteConfig.socials.whatsapp, external: true },
      { label: 'Telegram', note: '@mo_real26', href: siteConfig.socials.telegram, external: true },
    ],
  },
];

export function LinkHubSection() {
  return (
    <section id="links" className="link-hub-section section-pad" aria-labelledby="link-hub-title">
      <div className="link-hub-heading" data-reveal-group>
        <div>
          <p className="eyebrow">Explore and connect</p>
          <h1 id="link-hub-title">All my links,<br />in one place.</h1>
        </div>
        <div className="link-hub-intro">
          <p>Projects, games, motion work, professional profiles, and the easiest ways to reach me.</p>
          <p className="link-hub-discord"><span>Discord</span> {siteConfig.socials.discord}</p>
        </div>
      </div>

      <div className="link-hub-grid" data-reveal-group>
        {linkGroups.map((group) => (
          <section className="link-hub-group" aria-labelledby={`links-${group.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`} key={group.title}>
            <h3 id={`links-${group.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`}>{group.title}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={`${group.title}-${link.label}-${link.href}`}>
                  {!link.href.startsWith('/') ? (
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      aria-label={link.external ? `${link.label}: ${link.note} (opens in a new tab)` : undefined}
                    >
                      <span><strong>{link.label}</strong><small>{link.note}</small></span>
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <span><strong>{link.label}</strong><small>{link.note}</small></span>
                      <ArrowRight size={19} aria-hidden="true" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
