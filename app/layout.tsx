import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import ContactModal from './components/ContactModal';
import MarketingFooter from './components/MarketingFooter';
import MarketingHeader from './components/MarketingHeader';

export const metadata: Metadata = {
  title: 'DeepThink Studio - Web Design & Digital Marketing',
  description: 'Professional web design, development, and digital marketing services. SEO, PPC, Email Marketing, and Social Media solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="site-body">
        <ContactModal />
        <div className="site-shell">
          <MarketingHeader />
          <div className="site-main">{children}</div>
          <MarketingFooter />
        </div>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y7QRMN2TMY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y7QRMN2TMY');
          `}
        </Script>
        <canvas
          id="tracer-canvas"
          style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}
        />
      </body>
    </html>
  );
}
