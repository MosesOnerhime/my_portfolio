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
  if (project.gallery?.length) {
    return (
      <div className="project-gallery" role="group" aria-label={`${project.title} published work across social platforms`}>
        {project.gallery.map((item, index) => (
          <figure className="project-gallery-item" key={item.src}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={priority && index === 0}
              sizes={index === 0 ? sizes : '(max-width: 760px) 50vw, (max-width: 1100px) 35vw, 26vw'}
              className="project-image project-gallery-image"
            />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    );
  }

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
