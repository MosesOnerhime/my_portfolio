'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, X } from 'lucide-react';
import { Project, ProjectCategory, projects } from '../data/projects';

const filters: Array<{ value: 'all' | ProjectCategory; label: string }> = [
  { value: 'all', label: 'All work' },
  { value: 'web', label: 'Web' },
  { value: 'product', label: 'Products' },
  { value: 'creative', label: 'Creative' },
];

const priorityOrder = ['furreal-productions', 'beyond-90', 'furreal-aex', 'glamoursphair', 'calvision'];
const orderedProjects = [...projects].sort((first, second) => {
  const firstIndex = priorityOrder.indexOf(first.slug);
  const secondIndex = priorityOrder.indexOf(second.slug);
  return (firstIndex === -1 ? priorityOrder.length : firstIndex) - (secondIndex === -1 ? priorityOrder.length : secondIndex);
});

function ProjectArtwork({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt ?? ''}
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 40vw"
        className="project-image"
      />
    );
  }

  if (project.visual === 'glamour') {
    return (
      <div className="artwork-copy artwork-glamour" aria-hidden="true">
        <span>G</span><p>GLAMOUR<br />SPHAIR</p>
      </div>
    );
  }

  if (project.visual === 'calvision') {
    return (
      <div className="artwork-copy artwork-calvision" aria-hidden="true">
        <div className="macro-ring"><span>482</span><small>kcal</small></div>
        <div className="macro-bars"><i /><i /><i /></div>
      </div>
    );
  }

  const initials = project.title.split(' ').map((word) => word[0]).join('').slice(0, 3);
  return (
    <div className={`artwork-copy artwork-${project.visual}`} aria-hidden="true">
      <span>{initials}</span><p>{project.label}</p>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !modalRef.current) return;
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div ref={modalRef} className="project-modal" role="dialog" aria-modal="true" aria-labelledby={`project-title-${project.slug}`}>
        <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          <X size={22} />
        </button>
        <div className={`modal-visual visual-${project.visual}`}><ProjectArtwork project={project} /></div>
        <div className="modal-content">
          <p className="eyebrow">{project.label} · {project.year}</p>
          <h2 id={`project-title-${project.slug}`}>{project.title}</h2>
          <p className="modal-lead">{project.description}</p>
          <div className="modal-grid">
            <div><p className="detail-label">My role</p><p>{project.role}</p></div>
            <div><p className="detail-label">Built with</p><p>{project.tags.join(' · ')}</p></div>
          </div>
          <div className="modal-highlights">
            <p className="detail-label">Highlights</p>
            <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </div>
          <div className="modal-actions">
            {project.liveUrl && (
              <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit project <ExternalLink size={17} />
              </a>
            )}
            {project.codeUrl && (
              <a className="button button-secondary" href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                View code <Github size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = activeFilter === 'all' ? orderedProjects : orderedProjects.filter((project) => project.category === activeFilter);

  return (
    <>
      <div className="project-toolbar" aria-label="Filter projects">
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
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.slug}>
            <div className={`project-visual visual-${project.visual}`}>
              <ProjectArtwork project={project} />
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              {project.liveUrl && <span className="live-badge"><i /> Live</span>}
            </div>
            <div className="project-card-body">
              <div className="project-meta"><span>{project.label}</span><span>{project.year}</span></div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tag-list" aria-label="Technologies and disciplines">
                {project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-actions">
                <button className="text-link" type="button" onClick={() => setSelectedProject(project)}>
                  Case study <ArrowUpRight size={17} />
                </button>
                {project.liveUrl && (
                  <a className="icon-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live site`}>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
