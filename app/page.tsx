import Image from 'next/image';
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  Gamepad2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  MessageSquare,
  Music2,
  Play,
  Send,
  Youtube,
} from 'lucide-react';
import { ProjectShowcase } from './components/project-showcase';
import { SiteHeader } from './components/site-header';

const capabilities = [
  {
    icon: Code2,
    number: '01',
    title: 'Product development',
    copy: 'Responsive web and mobile products built around real user journeys, reliable frontends, and clear interfaces.',
    skills: 'React · Next.js · TypeScript · Node.js',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Experience design',
    copy: 'Visual systems that give products a distinct point of view without sacrificing usability or performance.',
    skills: 'UI/UX · Prototyping · Design systems',
  },
  {
    icon: Play,
    number: '03',
    title: 'Creative direction',
    copy: 'Brand worlds, motion, edits, and launch visuals that turn an idea into something people can feel.',
    skills: 'Premiere Pro · After Effects · Branding',
  },
  {
    icon: Gamepad2,
    number: '04',
    title: 'Game development',
    copy: 'Interactive worlds, gameplay systems, and original ideas made for players to enjoy together.',
    skills: 'Roblox · Luau · Game systems · World building',
  },
];

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />

      <main id="main">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for select projects</p>
            <h1 id="hero-title">Moses<span>Onerhime.</span></h1>
            <p className="hero-intro">
              I am a full-stack developer, game developer, and creative director. I build useful products, interactive experiences, and visual stories.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} /></a>
              <a className="button button-secondary" href="mailto:mosesonerhime11@gmail.com">Email me <ArrowUpRight size={18} /></a>
            </div>
            <dl className="hero-stats">
              <div><dt>08</dt><dd>Selected works</dd></div>
              <div><dt>03</dt><dd>Live launches</dd></div>
              <div><dt>04</dt><dd>Main disciplines</dd></div>
            </dl>
          </div>

          <div className="hero-art" aria-label="Selected work from Furreal Productions and Beyond 90">
            <div className="hero-orbit" aria-hidden="true" />
            <div className="hero-image-card hero-image-main">
              <Image src="/beyond 90/icon v1.0.png" alt="Beyond 90 game icon" fill priority sizes="(max-width: 850px) 88vw, 42vw" />
            </div>
            <div className="hero-image-card hero-image-logo">
              <Image src="/furreal productions/logo_03.jpeg" alt="Furreal Productions logo" fill sizes="180px" />
            </div>
            <p className="hero-note">Code · Games · Design · Motion</p>
          </div>
        </section>

        <section id="work" className="work-section section-pad" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work · 2024 to 2026</p>
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
            <h2 id="about-title">I build websites, apps, games, and creative work.</h2>
            <div className="about-columns">
              <p>I am a full-stack and game developer based in Nigeria. I like taking an idea from its first sketch to a finished product that people can actually use and enjoy.</p>
              <p>I also create under <strong>Furreal</strong>, where I work on games, original ideas, motion, and media. Working across code and storytelling helps me bring a different perspective to every project.</p>
            </div>
            <div className="about-links">
              <a href="https://github.com/MosesOnerhime" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a>
              <a href="https://www.linkedin.com/in/moses-onerhime-1438ba301/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
              <a href="https://furreal-productions.vercel.app/" target="_blank" rel="noopener noreferrer">Furreal Productions <ArrowUpRight size={16} /></a>
              <a href="https://www.tiktok.com/@furreal.aex" target="_blank" rel="noopener noreferrer">Furreal.aex <ArrowUpRight size={16} /></a>
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
                <div className="capability-top"><span>{number}</span><Icon size={24} /></div>
                <h3>{title}</h3><p>{copy}</p><small>{skills}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
          <p className="eyebrow">Have something in mind?</p>
          <h2 id="contact-title">Let&apos;s work together.</h2>
          <p className="contact-copy">If you have a project in mind or simply want to say hello, send me a message. I would be happy to hear from you.</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:mosesonerhime11@gmail.com?subject=Project%20inquiry">Start a conversation <Mail size={18} /></a>
            <a className="button button-outline-light" href="https://wa.me/2348142962222?text=Hi%20Moses%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">WhatsApp <MessageCircle size={18} /></a>
          </div>
          <div className="contact-details" aria-label="More ways to contact me">
            <span><MessageSquare size={16} /> Discord: furreal.aep</span>
            <a href="https://t.me/mo_real26" target="_blank" rel="noopener noreferrer"><Send size={16} /> Telegram: @mo_real26</a>
            <span><MessageCircle size={16} /> WhatsApp: 08142962222</span>
          </div>
        </section>
      </main>

      <footer className="site-footer section-pad">
        <div>
          <a className="brand-mark footer-brand" href="#top" aria-label="Runo.dev, back to top"><span>Runo</span><span className="brand-dot" aria-hidden="true" /><span>dev</span></a>
          <p>Full-stack developer, game developer, and creative director.</p>
        </div>
        <div className="social-links" aria-label="Social profiles">
          <a href="https://www.tiktok.com/@furreal.aex" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><Music2 size={19} /></a>
          <a href="https://github.com/MosesOnerhime" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /></a>
          <a href="https://www.linkedin.com/in/moses-onerhime-1438ba301/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
          <a href="https://www.instagram.com/furreal.aep" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={19} /></a>
          <a href="https://www.youtube.com/@furrealproductions" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={19} /></a>
          <a href="https://wa.me/2348142962222" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={19} /></a>
          <a href="https://t.me/mo_real26" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><Send size={19} /></a>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} Moses Onerhime · Built with intent.</p>
      </footer>
    </div>
  );
}
