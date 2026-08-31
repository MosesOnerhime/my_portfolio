import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { ContactSection } from '../../components/contact-section';
import { ProjectArtwork } from '../../components/project-artwork';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { getProject, projects } from '../../data/projects';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const title = `${project.title} Case Study`;
  const canonical = `/work/${project.slug}`;

  return {
    title,
    description: project.summary,
    alternates: { canonical },
    openGraph: {
      title: `${project.title} Case Study | Moses Onerhime`,
      description: project.summary,
      url: canonical,
      type: 'article',
      images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: `${project.title} case study by Moses Onerhime` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} Case Study | Moses Onerhime`,
      description: project.summary,
      images: [`${canonical}/opengraph-image`],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    creator: { '@type': 'Person', name: 'Moses Onerhime' },
    url: `https://moses-onerhime-portfolio.vercel.app/work/${project.slug}`,
    ...(project.liveUrl || project.codeUrl ? { sameAs: project.liveUrl ?? project.codeUrl } : {}),
  };

  return (
    <div id="top" className="site-shell case-shell">
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />

      <main id="main" className="case-main">
        <article>
          <header className="case-hero section-pad">
            <Link className="case-back" href="/#work"><ArrowLeft size={17} aria-hidden="true" /> All work</Link>
            <div className="case-hero-grid">
              <div>
                <p className="eyebrow">{project.label}</p>
                <h1>{project.title}</h1>
              </div>
              <div className="case-intro">
                <p>{project.summary}</p>
                <div className="case-actions">
                  {project.liveUrl && (
                    <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      {project.liveLabel ?? 'Visit project'} <ExternalLink size={17} aria-hidden="true" />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a className="button button-secondary" href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      View source <Github size={17} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </header>

          <div className="case-media-wrap section-pad">
            <div className={`case-media visual-${project.visual}`}>
              <ProjectArtwork project={project} priority sizes="(max-width: 760px) 100vw, (max-width: 1600px) 90vw, 1500px" />
              <span className={`status-badge status-${project.status}`}><i aria-hidden="true" /> {project.statusLabel}</span>
            </div>
          </div>

          <div className="case-content section-pad">
            <aside className="case-facts" aria-label="Project details">
              <dl>
                <div><dt>My role</dt><dd>{project.role}</dd></div>
                <div><dt>Status</dt><dd>{project.statusLabel}</dd></div>
                {project.year && <div><dt>Year</dt><dd>{project.year}</dd></div>}
                <div><dt>Area</dt><dd>{project.label}</dd></div>
              </dl>
            </aside>

            <div className="case-story">
              <section aria-labelledby="context-title">
                <p className="eyebrow">Context</p>
                <h2 id="context-title">What I worked on</h2>
                <p className="case-body-copy">{project.description}</p>
              </section>

              <section aria-labelledby="contribution-title">
                <p className="eyebrow">My contribution</p>
                <h2 id="contribution-title">What I was responsible for</h2>
                <ul className="case-contributions">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </section>

              <section aria-labelledby="tools-title">
                <p className="eyebrow">Tools and disciplines</p>
                <h2 id="tools-title">How the work was made</h2>
                <div className="case-tags" aria-label={`${project.title} technologies and disciplines`}>
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </section>

              <section aria-labelledby="status-title">
                <p className="eyebrow">Current status</p>
                <h2 id="status-title">Where the project stands</h2>
                <p className="case-body-copy">{project.statusNote}</p>
              </section>
            </div>
          </div>

          <nav className="next-project section-pad" aria-label="Continue to another case study">
            <p className="eyebrow">Next case study</p>
            <Link href={`/work/${nextProject.slug}`}>
              <span>{nextProject.title}</span><ArrowRight size={32} aria-hidden="true" />
            </Link>
          </nav>
        </article>

        <ContactSection compact />
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd).replace(/</g, '\\u003c') }} />
    </div>
  );
}
