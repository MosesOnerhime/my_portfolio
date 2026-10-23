import { WorkCollections } from '../components/work-collections';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';
import { ContactSection } from '../components/contact-section';
import { pageMetadata } from '../data/page-metadata';

export const metadata = pageMetadata('Work collections', 'Explore games, websites, software and AI, motion design, and video editing by Moses Onerhime.', '/work');

export default function WorkPage() {
  return <div className="site-shell"><a className="skip-link" href="#main">Skip to main content</a><SiteHeader /><main id="main"><header className="archive-heading section-pad" data-entrance="hero-copy"><h1>My work,<br />by discipline.</h1><p>A place for everything I build. Open a collection to take a closer look.</p></header><section className="work-section section-pad collection-index" aria-label="Work collections"><WorkCollections headingLevel="h2" /></section><ContactSection compact /></main><SiteFooter /></div>;
}
