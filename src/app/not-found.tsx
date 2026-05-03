import type { Metadata } from 'next';
import NotFoundSection from '@/components/NotFoundSection/NotFoundSection';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Not found — HOMA Studio Architects',
  description: 'The page you\'re looking for has been moved, renamed, or never existed.',
};

export default function NotFound() {
  return (
    <>
      <NotFoundSection />
      <Footer />
    </>
  );
}
