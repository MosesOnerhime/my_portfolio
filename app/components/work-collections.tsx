import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, FolderOpen } from 'lucide-react';
import { collectionCountLabel, collectionHref, workCollections } from '../data/collections';

export function WorkCollections({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel;
  return (
    <div className="collection-grid" data-reveal-group>
      {workCollections.map((collection) => (
        <Link className={`collection-folder collection-${collection.slug}`} href={collectionHref(collection)} key={collection.slug}>
          <span className="collection-tab"><FolderOpen size={17} aria-hidden="true" /> {collectionCountLabel(collection)}</span>
          <div className="collection-cover">
            <Image src={collection.image} alt={collection.imageAlt} fill sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1100px) 45vw, 440px" />
          </div>
          <div className="collection-copy">
            <Heading>{collection.title} <ArrowUpRight size={22} aria-hidden="true" /></Heading>
            <p>{collection.description}</p>
            <span className="collection-open">Open {collection.slug === 'motion' ? 'motion archive' : 'collection'}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
