import Image from 'next/image';
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Clapperboard,
  Code2,
  Gamepad2,
  Globe2,
  Workflow,
} from 'lucide-react';
import { ContactSection } from './components/contact-section';
import { ProjectShowcase } from './components/project-showcase';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import { liveProjects, projects } from './data/projects';
import { siteConfig } from './data/site';

const capabilities = [
  {
    icon: Code2,
    number: '01',
    title: 'Software development',
    copy: 'I build practical web, mobile, frontend, and backend software around clear user needs and reliable workflows.',
    skills: 'Frontend, backend, mobile, software architecture',
  },
  {
    icon: Globe2,
    number: '02',
    title: 'Website development',
    copy: 'I design and build responsive websites with clear structure, strong visual identity, and thoughtful user experiences.',
    skills: 'React, Next.js, TypeScript, Node.js',
  },
  {
    icon: Gamepad2,
    number: '03',
    title: 'Game development',
    copy: 'I code game mechanics and work across animation, 3D modelling, sound effects, and UI/UX to shape complete game experiences.',
    skills: 'Game mechanics, animation, 3D modelling, SFX, UI/UX',
  },
  {
    icon: BrainCircuit,
    number: '04',
    title: 'AI and data engineering',
    copy: 'I use machine and deep learning to understand how AI systems work and build models for specific problems.',
    skills: 'Machine learning, deep learning, model development, data',
  },
  {
    icon: Clapperboard,
    number: '05',
    title: 'Video editing',
    copy: 'I turn raw footage into focused visual stories through pacing, colour, motion graphics, transitions, and sound.',
    skills: 'Premiere Pro, After Effects, DaVinci Resolve, sound design',
  },
  {
    icon: Workflow,
    number: '06',
    title: 'DevOps, currently learning',
    copy: 'I am learning the foundations of deployment, automation, and infrastructure so I can support products beyond development.',
    skills: 'Currently learning delivery workflows and infrastructure fundamentals',
  },
];

export default function Home() {
  const selectedWorkCount = String(projects.length).padStart(2, '0');
  const liveLaunchCount = String(liveProjects.length).padStart(2, '0');
  const disciplineCount = String(capabilities.length).padStart(2, '0');

  return (
    <div id="top" className="site-shell">
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />

      <main id="main">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {siteConfig.availability}</p>
            <h1 id="hero-title">Moses<span>Onerhime.</span></h1>
            <p className="hero-intro">
              I am into game developement, AI and data engineering, software and website developement, and video editing. I build practical products, interactive experiences, intelligent systems, and visual stories.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} aria-hidden="true" /></a>
              <a className="button button-secondary" href={`mailto:${siteConfig.email}`}>Email me <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
            <dl className="hero-stats">
              <div><dt>{selectedWorkCount}</dt><dd>Selected works</dd></div>
              <div><dt>{liveLaunchCount}</dt><dd>Live launches</dd></div>
              <div><dt>{disciplineCount}</dt><dd>Main disciplines</dd></div>
            </dl>
          </div>

          <div className="hero-art" aria-label="Selected work from Drixil Group and Beyond 90">
            <div className="hero-orbit" aria-hidden="true" />
            <div className="hero-image-card hero-image-main">
              <Image src="/beyond 90/icon v1.0.png" alt="Beyond 90 game icon" fill priority sizes="(max-width: 850px) 88vw, 42vw" />
            </div>
            <div className="hero-image-card hero-image-logo">
              <Image src="/drixil/logo-silver-purple.png" alt="Drixil Group logo" fill sizes="180px" />
            </div>
            <p className="hero-note">Code · Games · Design · Motion</p>
          </div>
        </section>

        <section id="work" className="work-section section-pad" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work across code and creativity</p>
              <h2 id="work-title">A few projects<br />I am proud of.</h2>
            </div>
            <p>This collection includes websites, AI tools, games, mobile apps, and creative work that I have built so far.</p>
          </div>
          <ProjectShowcase />
        </section>

        <section id="about" className="about-section section-pad" aria-labelledby="about-title">
          <div className="about-kicker">
            <p className="eyebrow">About Moses</p>
            <span className="about-number" aria-hidden="true">MO</span>
          </div>
          <div className="about-copy">
            <h2 id="about-title">I build software, websites, games, AI systems, and visual stories.</h2>
            <div className="about-columns">
              <p>I am a software, website, and game developer based in Nigeria. I also work in AI and data engineering, using machine and deep learning to build models for specific problems.</p>
              <p>I create under <strong>Drixil</strong> and edit video as Furreal.aex. Working across code, game art, sound, interface design, data, and storytelling helps me bring a different perspective to every project.</p>
            </div>
            <div className="about-links">
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="https://drixil-group.vercel.app/" target="_blank" rel="noopener noreferrer">Drixil Group <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer">Furreal.aex <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="capabilities" className="capabilities-section section-pad" aria-labelledby="capabilities-title">
          <div className="section-heading compact">
            <div><p className="eyebrow">What I do</p><h2 id="capabilities-title">What I enjoy<br />working on.</h2></div>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, number, title, copy, skills }) => (
              <article className="capability-card" key={number}>
                <div className="capability-top"><span>{number}</span><Icon size={24} aria-hidden="true" /></div>
                <h3>{title}</h3><p>{copy}</p><small>{skills}</small>
              </article>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
