import type { Metadata } from 'next';
import { ArrowDown, ArrowUpRight, Clapperboard, Clock3, Layers3, Sparkles } from 'lucide-react';
import { ContactSection } from '../components/contact-section';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import { motionPlaceholders, motionWorks } from '../data/motion-works';
import { siteConfig } from '../data/site';

export const metadata: Metadata = {
  title: 'Motion Work',
  description: 'Motion design, product animation, editing, and visual experiments by Moses Onerhime.',
  alternates: { canonical: '/motion' },
  openGraph: {
    title: 'Motion work by Moses Onerhime',
    description: 'Product motion, animation, editing, and visual experiments by Moses Onerhime.',
    url: '/motion',
    siteName: 'Moses Onerhime Portfolio',
    locale: 'en_NG',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Motion work by Moses Onerhime' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motion work by Moses Onerhime',
    description: 'Product motion, animation, editing, and visual experiments.',
    images: ['/opengraph-image'],
  },
};

export default function MotionPage() {
  const featuredWork = motionWorks[0];

  return (
    <div className="site-shell motion-page">
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />

      <main id="main">
        <section className="motion-hero section-pad" aria-labelledby="motion-title">
          <div className="motion-hero-copy" data-entrance="hero-copy">
            <h1 id="motion-title">Motion work.</h1>
          </div>
          <div className="motion-hero-intro" data-reveal-group>
            <p>
              Product motion, animated interfaces, edits, and visual experiments. Here is the first piece, with more work on the way.
            </p>
            <a href="#featured-motion">Watch the first piece <ArrowDown size={18} aria-hidden="true" /></a>
          </div>
        </section>

        <section id="featured-motion" className="motion-feature section-pad" aria-labelledby={`${featuredWork.slug}-title`}>
          <div className="motion-stage" data-entrance="motion-media">
            <span className="motion-stage-index" aria-hidden="true">01</span>
            <video
              aria-label="Wizeup product promo by Moses Onerhime"
              controls
              playsInline
              preload="metadata"
              poster={featuredWork.posterSrc}
            >
              <source src={featuredWork.videoSrc} type="video/mp4" />
              Your browser does not support embedded video. You can still contact Moses for a copy of the work.
            </video>
          </div>

          <article className="motion-story" data-reveal-group>
            <div className="motion-story-heading">
              <p className="eyebrow">{featuredWork.label}</p>
              <h2 id={`${featuredWork.slug}-title`}>{featuredWork.title}</h2>
            </div>
            <p className="motion-story-copy">{featuredWork.description}</p>
            <dl className="motion-facts">
              <div>
                <dt><Clapperboard size={17} aria-hidden="true" /> Contribution</dt>
                <dd>{featuredWork.contribution}</dd>
              </div>
              <div>
                <dt><Clock3 size={17} aria-hidden="true" /> Format</dt>
                <dd>{featuredWork.format}</dd>
              </div>
              <div>
                <dt><Layers3 size={17} aria-hidden="true" /> Built with</dt>
                <dd>{featuredWork.tools.join(', ')}</dd>
              </div>
            </dl>
          </article>
        </section>

        <section className="motion-coming section-pad" aria-labelledby="motion-coming-title">
          <div className="motion-coming-heading" data-reveal-group>
            <p className="eyebrow">The archive is growing</p>
            <h2 id="motion-coming-title">More work will live here.</h2>
            <p>These spaces are intentionally waiting for the next pieces. Nothing here is presented as finished work before it exists.</p>
          </div>

          <div className="motion-placeholder-grid" data-reveal-group="scale">
            {motionPlaceholders.map((title, index) => (
              <article className="motion-placeholder" key={title}>
                <span>{String(index + 2).padStart(2, '0')}</span>
                <Sparkles size={22} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>Reserved for a future piece.</p>
                </div>
              </article>
            ))}
          </div>

          <a className="motion-inquiry" href={`mailto:${siteConfig.email}?subject=Motion%20design%20project`}>
            Have a motion brief? Let&apos;s talk <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </section>

        <ContactSection compact />
      </main>

      <SiteFooter />
    </div>
  );
}
