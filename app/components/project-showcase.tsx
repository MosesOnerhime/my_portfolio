'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { ProjectCategory, projects } from '../data/projects';
import { ProjectArtwork } from './project-artwork';

const filters: Array<{ value: 'all' | ProjectCategory; label: string }> = [
  { value: 'all', label: 'All work' },
  { value: 'web', label: 'Web' },
  { value: 'product', label: 'Products' },
  { value: 'creative', label: 'Creative' },
];

export function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <div className="project-filter-row">
        <div className="project-toolbar" role="group" aria-label="Filter projects by type">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={activeFilter === filter.value ? 'active' : ''}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <p className="project-results" role="status" aria-live="polite">
          {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}
        </p>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
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
