import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { collectionCountLabel, collectionProjects, getCollection, workCollections } from '../../../data/collections';
import { CurrentWork } from '../../../components/current-work';
import { pageMetadata } from '../../../data/page-metadata';
import { ProjectShowcase } from '../../../components/project-showcase';
import { SiteHeader } from '../../../components/site-header';
import { SiteFooter } from '../../../components/site-footer';
import { ContactSection } from '../../../components/contact-section';

type Props = { params: Promise<{ collection: string }> };
export function generateStaticParams() { return workCollections.map((item) => ({ collection: item.slug })); }
export async function generateMetadata({ params }: Props) {
  const item = getCollection((await params).collection);
  return item ? pageMetadata(item.title, item.description, `/work/collections/${item.slug}`) : {};
}
export default async function CollectionPage({ params }: Props) {
  const collection = getCollection((await params).collection);
  if (!collection) notFound();
  if (collection.slug === 'motion') redirect('/motion');
  return <div className="site-shell"><a className="skip-link" href="#main">Skip to main content</a><SiteHeader /><main id="main"><header className="archive-heading section-pad" data-entrance="hero-copy"><Link className="case-back" href="/work"><ArrowLeft size={17} aria-hidden="true" /> All collections</Link><h1>{collection.title}.</h1><p>{collection.description}</p><span className="archive-count">{collectionCountLabel(collection)}</span></header><section className="work-section section-pad collection-index" aria-label={`${collection.title} projects`}><h2 className="sr-only">Projects in {collection.title}</h2><ProjectShowcase items={collectionProjects(collection)} /></section>{collection.slug === 'software-ai' && <CurrentWork />}<ContactSection compact /></main><SiteFooter /></div>;
}
