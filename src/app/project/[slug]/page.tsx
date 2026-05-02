import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer/Footer';
import ProjectSections from '@/components/ProjectSections/ProjectSections';
import { PROJECT_PAGES } from '@/data/projects';

type Params = { slug: string };

export function generateStaticParams() {
  return Object.keys(PROJECT_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECT_PAGES[slug];
  if (!project) return { title: 'Project — HOMA Studio Architects' };
  return {
    title: `${project.name} — HOMA Studio Architects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = PROJECT_PAGES[slug];
  if (!project) notFound();

  return (
    <>
      <ProjectSections sections={project.sections} />
      <Footer fullWidth />
    </>
  );
}
