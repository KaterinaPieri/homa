'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo/Logo';
import MenuItem from '@/components/MenuItem/MenuItem';
import ProjectInfoLabel from '../ProjectInfoLabel/ProjectInfoLabel';
import { PROJECT_PAGES, type ProjectMeta } from '@/data/projects';
import TextLink, { TextLinkProps } from '../TextLink/TextLink';

type NavItem = {
  label: string;
  href: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'projects', href: '/#projects',
    onClick: (e) => {
      e.preventDefault();
      scrollToElement('projects', { behavior: 'smooth' });
    },
   },
  { label: 'studio',   href: '/studio' },
  {
    label: 'contact',
    href: '#contact',
    onClick: (e) => {
      e.preventDefault();
      scrollToElement('contact', { behavior: 'smooth', block: 'end' });
    },
  },
];

type SidebarConfig = {
  pageLabel: string;
  pageDescription?: string;
  pageDescriptionLink?: Pick<TextLinkProps, 'href' | 'text'>;
  projectDetails?: ProjectMeta;
};

function scrollToElement(id: string, options?: ScrollIntoViewOptions) {
  const element = document.getElementById(id);
  if (!element) return;
  if (options?.block === 'end') {
    const rect = element.getBoundingClientRect();
    const top = rect.bottom + window.scrollY - window.innerHeight;
    window.scrollTo({ top, behavior: options.behavior ?? 'auto' });
    return;
  }
  element.scrollIntoView(options);
}

function getSidebarConfig(pathname: string): SidebarConfig {
  const projectMatch = pathname.match(/^\/project\/(.+)$/);
  if (projectMatch) {
    const slug = projectMatch[1];
    const project = PROJECT_PAGES[slug];
    if (project) {
      return {
        pageLabel: project.name.toUpperCase(),
        pageDescription: project.description,
        projectDetails: project.meta,
      };
    }
    return { pageLabel: 'PROJECT' };
  }
  if (pathname === '/studio') {
    return { pageLabel: 'STUDIO' };
  }
  return { pageLabel: 'MENU', pageDescription: 'homa designs are deeply connected to the earth, embodying the harmony and grounding it provides', pageDescriptionLink: { href: '/studio', text: 'discover more' } };
}

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      setIsOpen(false);
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  const { pageLabel, pageDescription, projectDetails, pageDescriptionLink } = getSidebarConfig(pathname);

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar_header">
        <Link className="logo_section" href="/">
          <Logo />
          <img className="homa_mark" src="/mark-primary.svg" alt="Homa symbol" onClick={isOpen ? () => setIsOpen(false) : undefined}/>
        </Link>
        <button type="button" className="menu_label" onClick={() => setIsOpen(true)}>{pageLabel}</button>
      </div>
      {isOpen &&
        <nav className="main_menu" onClick={() => setIsOpen(false)}>
          {NAV_ITEMS.map((item) => (
            <MenuItem key={item.label} text={item.label} href={item.href} onClick={item.onClick} />
          ))}
        </nav>
      }
      {pageDescription &&
        <div className="page_description">
          <p className="description_text">
            {pageDescription}
          </p>
          { pageDescriptionLink && <TextLink {...pageDescriptionLink} arrow="up" size="lg"/>}
        </div>
      }
      {projectDetails &&
        <div className="sidebar_project_details">
          <ProjectInfoLabel label="Location" value={projectDetails.location} />
          <ProjectInfoLabel label="Typology" value={projectDetails.typology} />
          <ProjectInfoLabel label="Client" value={projectDetails.client} />
          <ProjectInfoLabel label="Budget" value={projectDetails.budget} />
          <ProjectInfoLabel label="Built-up Area" value={projectDetails.builtArea} />
          <ProjectInfoLabel label="Year" value={projectDetails.year} />
        </div>
      }
      <div className="sidebar_footer">
        <button type="button" onClick={() => setIsOpen(!isOpen)} className={`hamburger_wrapper ${isOpen ? 'close_icon' : 'hamburger_icon'}`}>
          <span className="line"/>
          <span className="line"/>
        </button>
      </div>
    </aside>
  );
}
