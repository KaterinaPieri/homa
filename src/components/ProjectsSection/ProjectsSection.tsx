import ProjectItem from '@/components/ProjectItem/ProjectItem';
import { PROJECTS, TOTAL_PROJECTS } from '@/data/projects';

type ProjectsSectionProps = {
  variant?: 'default' | 'bordered';
};

export default function ProjectsSection({ variant = 'default' }: ProjectsSectionProps) {
  const isBordered = variant === 'bordered';
  return (
    <section id="projects" className="projects_section">
      {isBordered && <div className="divider" />}
      <div className={isBordered ? 'header header_bordered' : 'header'}>
        <h2 className="title">projects ({TOTAL_PROJECTS})</h2>
        <div className="divider" />
      </div>
      <div className="grid">
        {PROJECTS.map((project) => (
          <ProjectItem
            key={project.code}
            code={project.code}
            name={project.name}
            location={project.location}
            year={project.year}
            image={project.image}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}
