import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import rates from '../../invoices/rates.json';
import { amount, ServiceRates } from '../components/service-rates';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';
import { ContactSection } from '../components/contact-section';
import { pageMetadata } from '../data/page-metadata';
import { siteConfig } from '../data/site';

export const metadata = pageMetadata('Services & rates', 'Motion design, video editing, and website development services by Moses Onerhime. Starting fees, scopes, and downloadable general invoices.', '/services');

function startingFee(items: Array<{ ngn: number | null; usd: number | null }>, currency: 'ngn' | 'usd') {
  const values = items.flatMap((item) => item[currency] === null ? [] : [item[currency]]);
  return amount(Math.min(...values), undefined, currency === 'ngn' ? 'NGN' : 'USD');
}

function Downloads({ discipline, currencies }: { discipline: string; currencies: string[] }) {
  return <div className="rate-downloads">{currencies.map((currency) => <a key={currency} href={`/invoices/${discipline}/${currency}.pdf`} download><Download size={17} aria-hidden="true" /> {currency.toUpperCase()} guide & invoice template <span className="sr-only">for {discipline.replace('-', ' ')}, PDF</span></a>)}</div>;
}

export default function ServicesPage() {
  return <div className="site-shell"><a className="skip-link" href="#main">Skip to main content</a><SiteHeader /><main id="main">
    <header className="archive-heading services-heading section-pad" data-entrance="hero-copy"><h1>Good work.<br />Clear starting points.</h1><div><p>Motion from {startingFee(rates.motion.items, 'ngn')} / {startingFee(rates.motion.items, 'usd')}. Editing from {startingFee(rates.editing.items, 'ngn')} / {startingFee(rates.editing.items, 'usd')}. Websites from {startingFee(rates.web.items, 'ngn')}, with international builds quoted individually.</p><p className="service-quote-intro">Tell me what you need and I will put together a quote for the actual scope.</p><a className="button button-primary" href={`mailto:${siteConfig.email}?subject=Project%20quote`}>Request a quote <ArrowUpRight size={18} aria-hidden="true" /></a></div></header>
    <div className="services-body section-pad">
      <nav className="service-jump-links" aria-label="Service categories"><a href="#motion">Motion design</a><a href="#editing">Video editing</a><a href="#websites">Websites</a><a href="#other">Games, AI & software</a></nav>
      <p className="rates-context">{rates.currencyNote} Price guide updated 23 October 2026. These guides are not requests for payment.</p>
      <section id="motion" className="service-section" aria-labelledby="motion-rates-title" data-reveal="up"><div className="service-heading"><div><h2 id="motion-rates-title">Motion design</h2><p>{rates.motion.description}</p></div><Link href="/motion">See the motion work <ArrowUpRight size={17} aria-hidden="true" /></Link></div><ServiceRates items={rates.motion.items} /><div className="service-scope"><p><strong>Typical showcase quote:</strong> ₦250,000 / $750. One agreed format, creative direction, animation, sound design, and two revision rounds.</p><p>{rates.motion.excludes}</p><p><strong>Payment:</strong> {rates.motion.payment}</p></div><Downloads discipline="motion-design" currencies={['ngn', 'usd']} /></section>
      <section id="editing" className="service-section" aria-labelledby="editing-rates-title" data-reveal="up"><div className="service-heading"><div><h2 id="editing-rates-title">Video editing</h2><p>{rates.editing.description}</p></div><Link href="/work/collections/editing">See the editing work <ArrowUpRight size={17} aria-hidden="true" /></Link></div><p className="rate-basis">Indicative starting fees. These new packages are scoped per project, not historical invoice totals.</p><ServiceRates items={rates.editing.items} starting /><div className="service-scope"><p>{rates.editing.includes}</p><p><strong>Posting is separate.</strong> {rates.editing.posting}</p><p>{rates.editing.excludes}</p><p>{rates.editing.payment}</p></div><Downloads discipline="video-editing" currencies={['ngn', 'usd']} /></section>
      <section id="websites" className="service-section" aria-labelledby="web-rates-title" data-reveal="up"><div className="service-heading"><div><h2 id="web-rates-title">Website development</h2><p>Build fees start at ₦350,000. International projects are quoted individually.</p></div><Link href="/work/collections/websites">See the websites <ArrowUpRight size={17} aria-hidden="true" /></Link></div><ServiceRates items={rates.web.items.slice(0, 4)} international={false} starting /><details className="service-details"><summary>All website types and starting scopes</summary><ServiceRates items={rates.web.items.slice(4)} international={false} starting /></details><div className="service-scope"><p>{rates.web.includes}</p><p><strong>Provider costs are separate.</strong> {rates.web.excludes}</p><p><strong>Web payment:</strong> {rates.web.payment}</p><p>{rates.web.additions}</p></div><details className="service-details"><summary>Optional monthly website care</summary><p className="service-scope">Monthly care is separate from the one-off build fee.</p><ServiceRates items={rates.web.care} international={false} starting /><p className="service-scope">{rates.web.careTerms}</p></details><Downloads discipline="web-development" currencies={['ngn']} /></section>
      <section id="other" className="service-section other-services" aria-labelledby="other-services-title"><h2 id="other-services-title">Games, AI & custom software</h2><p>Gameplay systems, machine-learning work, and larger applications need a brief before a useful price. Send the problem, the current stage, and the parts you want me to handle.</p><Link href="/work">Explore the relevant projects <ArrowUpRight size={18} aria-hidden="true" /></Link></section>
    </div><ContactSection compact />
  </main><SiteFooter /></div>;
}
