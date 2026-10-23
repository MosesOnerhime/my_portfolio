import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Project, projects } from '../data/projects';
import { ProjectArtwork } from './project-artwork';

export function ProjectShowcase({ items = projects }: { items?: Project[] }) {
  return (
    <>
      <div className="project-grid" data-reveal-group="scale">
        {items.map((project, index) => (
          <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.slug}>
            <div className={`project-visual visual-${project.visual}`}>
              <ProjectArtwork project={project} />
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              <span className={`status-badge status-${project.status}`}>
                <i aria-hidden="true" /> {project.statusLabel}
              </span>
            </div>
            <div className="project-card-body">
              <div className="project-meta">
                <span>{project.label}</span>
                <span>{project.year ?? project.statusLabel}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tag-list" aria-label={`${project.title} technologies and disciplines`}>
                {project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-actions">
                <Link className="text-link" href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
                  Case study <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                {project.liveUrl && (
                  <a
                    className="project-destination"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.liveLabel ?? 'Visit project'}: ${project.title} (opens in a new tab)`}
                  >
                    <span>{project.liveLabel ?? 'Visit project'}</span>
                    <ExternalLink size={17} aria-hidden="true" />
                  </a>
                )}
                {!project.liveUrl && project.codeUrl && (
                  <a
                    className="project-destination"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source (opens in a new tab)`}
                  >
                    <span>View source</span>
                    <Github size={17} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
