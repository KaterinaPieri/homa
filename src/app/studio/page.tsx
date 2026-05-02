import type { Metadata } from 'next';
import StudioSection from '@/components/StudioSection/StudioSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Studio — HOMA Studio Architects',
  description: 'Inspired by the Greek word χώμα • soil, our designs are deeply connected to the earth.',
};

export default function StudioPage() {
  return (
    <>
      <StudioSection />
      <ProjectsSection variant="bordered" />
      <Footer />
    </>
  );
}
