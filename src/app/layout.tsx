import type { Metadata } from 'next';
import './globals.scss';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'HOMA Studio Architects',
  description: 'Creating spaces that are more than just structures.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
