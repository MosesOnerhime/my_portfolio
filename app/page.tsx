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
              I build software, websites, games, AI tools, and visual stories. My work brings development, data, design, and motion together.
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
              <p>I am a software, website, and game developer based in Nigeria. I also work in AI and data engineering, using machine and deep learning to build models for specific problems and useful products.</p>
              <p>I create under <strong>Drixil</strong> and edit video as Furreal.aex. Working across code, gameplay, animation, sound, interface design, data, and storytelling helps me bring a different perspective to every project.</p>
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

          <section className="current-work-list" aria-label="Projects currently in development">
            <article id="current-ai-work" className="current-work-feature" aria-labelledby="current-ai-work-title">
              <div className="current-work-heading">
                <div className="current-work-meta">
                  <p className="eyebrow">Current AI work</p>
                  <span>In development</span>
                </div>
                <h3 id="current-ai-work-title">An AI coding harness for building complete applications.</h3>
                <p>
                  I am currently working with Approovia Limited on an AI coding harness in the same broad category as Lovable and Cursor. It is being designed to turn a simple prompt into a tested, deployed application through a guided conversation about the product&apos;s requirements.
                </p>
              </div>

              <div className="current-work-details">
                <p>
                  For example, a hospital could ask it to create a hospital management system. The harness would ask which features and specifications are needed. If the user chooses to skip that process, it could instead work from information found in the hospital&apos;s website or documents.
                </p>
                <p>
                  From that information, the harness would define the business logic and specifications, then direct a coding agent to build the application. A structured set of Markdown files would guide the agent through consistent development practices, security considerations, and testing.
                </p>
                <ol className="current-work-flow" aria-label="Planned AI coding harness workflow">
                  <li><span>01</span><strong>Understand</strong><small>Start with a prompt, questions, or existing documents.</small></li>
                  <li><span>02</span><strong>Specify</strong><small>Turn the requirements into business logic and application specifications.</small></li>
                  <li><span>03</span><strong>Build and test</strong><small>Guide a coding agent with standardized Markdown processes.</small></li>
                  <li><span>04</span><strong>Deploy</strong><small>Release through Approovia&apos;s cloud service after testing.</small></li>
                </ol>
                <p className="current-work-note">
                  The cloud service is being developed from scratch on rented data-centre infrastructure. The harness will begin as a web application, with desktop and mobile versions planned for later.
                </p>
              </div>
            </article>

            <article id="current-safety-work" className="current-work-feature" aria-labelledby="current-safety-work-title">
              <div className="current-work-heading">
                <div className="current-work-meta">
                  <p className="eyebrow">Personal safety system</p>
                  <span>Concept in development</span>
                </div>
                <h3 id="current-safety-work-title">Connecting software, machine learning, and a discreet wearable.</h3>
                <p>
                  I am working on a software and hardware concept intended to support people in dangerous situations. The software would explore machine learning signals that could indicate potential harm in an environment, while a wearable such as a ring, necklace, or bracelet would give someone a manual way to trigger an alert.
                </p>
              </div>

              <div className="current-work-details">
                <p>
                  The planned alert flow would notify selected emergency contacts or emergency services and share the person&apos;s location. The tracker is intended to help locate someone during an emergency, including a kidnapping. These are planned capabilities, not a claim that the system is currently operational or a replacement for emergency services.
                </p>
                <ol className="current-work-flow" aria-label="Planned personal safety system workflow">
                  <li><span>01</span><strong>Monitor</strong><small>Explore environmental signals that may point to potential danger.</small></li>
                  <li><span>02</span><strong>Trigger</strong><small>Provide a discreet manual alert through a connected wearable.</small></li>
                  <li><span>03</span><strong>Notify</strong><small>Contact selected people or services when an alert is raised.</small></li>
                  <li><span>04</span><strong>Locate</strong><small>Share tracking information to support an emergency response.</small></li>
                </ol>
                <p className="current-work-note">
                  The final wearable form and operating model are still being explored. I am presenting this as work in development, not as an operational safety service.
                </p>
              </div>
            </article>
          </section>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
