import Image from 'next/image';
import { Project } from '../data/projects';

export function ProjectArtwork({
  project,
  priority = false,
  sizes = '(max-width: 760px) 100vw, (max-width: 1100px) 70vw, 52vw',
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt ?? ''}
        fill
        priority={priority}
        sizes={sizes}
        className="project-image"
      />
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
