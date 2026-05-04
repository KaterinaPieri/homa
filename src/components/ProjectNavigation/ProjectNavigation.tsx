import Link from 'next/link';
import ArrowDownMd from '@/assets/arrow_down_md.svg';
import { PROJECTS, getProjectSlug } from '@/data/projects';

type ProjectNavigationProps = {
  currentSlug: string;
};

export default function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const index = PROJECTS.findIndex((p) => getProjectSlug(p.name) === currentSlug);
  if (index === -1) return null;

  const total = PROJECTS.length;
  const prev = PROJECTS[(index - 1 + total) % total];
  const next = PROJECTS[(index + 1) % total];

  return (
    <nav className="project_navigation" aria-label="Project navigation">
      <Link className="pn_link pn_prev" href={prev.href}>
        <span className="pn_label">{prev.code} * {prev.name}</span>
        <span className="pn_action">
          <span className="pn_arrow pn_arrow_left"><ArrowDownMd /></span>
          <span className="pn_text">previous project</span>
        </span>
      </Link>
      <Link className="pn_link pn_next" href={next.href}>
        <span className="pn_label">{next.code} * {next.name}</span>
        <span className="pn_action">
          <span className="pn_text">next project</span>
          <span className="pn_arrow"><ArrowDownMd /></span>
        </span>
      </Link>
    </nav>
  );
}
