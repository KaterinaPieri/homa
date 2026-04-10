import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar/Sidebar';
import StudioSection from '@/components/StudioSection/StudioSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Studio — HOMA Studio Architects',
  description: 'Inspired by the Greek word χώμα • soil, our designs are deeply connected to the earth.',
};

export default function StudioPage() {
  return (
    <div className="page">
      <main className="main_content">
        <StudioSection />
        <ProjectsSection variant="bordered" />
        <Footer />
      </main>
      <Sidebar pageType="project" pageLabel="STUDIO" />
    </div>
  );
}
