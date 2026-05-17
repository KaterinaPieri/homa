import type { Metadata } from "next";
import Cursor from "@/components/Cursor/Cursor";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.scss";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "HOMA Studio Architects",
  description: "Creating spaces that are more than just structures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('homa_splash_shown')){document.documentElement.classList.add('splash-skipped')}else{sessionStorage.setItem('homa_splash_shown','1')}}catch(e){}`,
          }}
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G0L6RNEL9Z"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-G0L6RNEL9Z');`,
          }}
        />
      </head>
      <body>
        <LoadingScreen />
        <Cursor />
        <div className="page">
          <main className="main_content">{children}</main>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
