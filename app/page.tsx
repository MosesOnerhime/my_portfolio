import Image from 'next/image';
import Link from 'next/link';
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
import { WorkCollections } from './components/work-collections';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import { liveProjects } from './data/projects';
import { totalWorkCount } from './data/collections';
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
    copy: 'I build game mechanics and gameplay systems, then shape the wider experience through animation, 3D modelling, sound effects, UI/UX, and creative direction.',
    skills: 'Gameplay systems, animation, 3D modelling, SFX, UI/UX',
  },
  {
    icon: BrainCircuit,
    number: '04',
    title: 'AI and data engineering',
    copy: 'I work with data, machine learning, and deep learning to understand AI systems, build models for specific problems, and connect them to useful products.',
    skills: 'Data preparation, machine learning, deep learning, model integration',
  },
  {
    icon: Clapperboard,
    number: '05',
    title: 'Motion design and video editing',
    copy: 'I design motion and turn raw footage into focused visual stories through pacing, animation, colour, transitions, and sound.',
    skills: 'After Effects, Premiere Pro, DaVinci Resolve, motion graphics, sound design',
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
  const selectedWorkCount = String(totalWorkCount).padStart(2, '0');
  const liveLaunchCount = String(liveProjects.length).padStart(2, '0');
  const disciplineCount = String(capabilities.length).padStart(2, '0');

  return (
    <div id="top" className="site-shell">
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />

      <main id="main">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy" data-entrance="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {siteConfig.availability}</p>
            <h1 id="hero-title">Moses<span>Onerhime.</span></h1>
            <p className="hero-intro">
              I am a software and game developer, AI engineer, and motion designer building useful products, interactive experiences, and visual stories.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} aria-hidden="true" /></a>
              <a className="button button-secondary" href={`mailto:${siteConfig.email}`}>Email me <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
            <dl className="hero-stats">
              <div><dt>{selectedWorkCount}</dt><dd>Selected works</dd></div>
              <div><dt>{liveLaunchCount}</dt><dd>Live projects</dd></div>
              <div><dt>{disciplineCount}</dt><dd>Main disciplines</dd></div>
            </dl>
          </div>

          <div className="hero-art" aria-label="Selected work from Drixil Group and Beyond 90" data-entrance="hero-art">
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
          <div className="section-heading" data-reveal-group>
            <div>
              <h2 id="work-title">My work,<br />by discipline.</h2>
            </div>
            <p>Choose a folder to see the projects, the process, and what I worked on.</p>
          </div>
          <WorkCollections />
          <div className="work-services-link"><p>Have something you want to make?</p><Link href="/services">Services & starting rates <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </section>

        <section id="about" className="about-section section-pad" aria-labelledby="about-title">
          <div className="about-kicker" data-reveal="up">
            <p className="eyebrow">About Moses</p>
            <span className="about-number" aria-hidden="true">MO</span>
          </div>
          <div className="about-copy" data-reveal-group>
            <h2 id="about-title">I build software, games, AI systems, motion, and visual stories.</h2>
            <div className="about-columns">
              <p>I am a software, website, and game developer based in Nigeria. I also work in AI and data engineering, using machine and deep learning to build models for specific problems and useful products.</p>
              <p>I am also a motion designer and video editor. I create games under <strong>Drixil Interactive</strong> and publish editing and motion work as Furreal.aex. Working across code, gameplay, animation, sound, interface design, data, and storytelling helps me bring a different perspective to every project.</p>
            </div>
            <div className="about-vision">
              <p className="eyebrow">A direction I care about</p>
              <p>I want to use games and interactive experiences to express, preserve, and teach African culture and history. <em>Ghost of Tsushima</em> inspires me because culture shapes its environments, stories, music, clothing, architecture, language, and player experience. I want to bring that kind of cultural grounding to African stories.</p>
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
          <div className="section-heading compact" data-reveal-group>
            <div><p className="eyebrow">What I do</p><h2 id="capabilities-title">What I enjoy<br />working on.</h2></div>
          </div>
          <div className="capability-grid" data-reveal-group="scale">
            {capabilities.map(({ icon: Icon, number, title, copy, skills }) => (
              <article className="capability-card" key={number}>
                <div className="capability-top"><span>{number}</span><Icon size={24} aria-hidden="true" /></div>
                <h3>{title}</h3><p>{copy}</p><small>{skills}</small>
              </article>
            ))}
          </div>

          <div className="capabilities-more"><Link href="/work/collections/software-ai#in-progress">See what I am working on now <ArrowUpRight size={18} aria-hidden="true" /></Link><Link href="/services">Services & rates <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
