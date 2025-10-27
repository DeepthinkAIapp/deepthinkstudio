import type { Metadata } from 'next';

const CANONICAL_URL = 'https://deepthinkstudio.com/resources/service-page-template';

export const metadata: Metadata = {
  title: 'Service Page Template | Deepthink Studio Internal Resource',
  description:
    'Reusable Deepthink Studio service-page blueprint containing full layout, content structure, and conversion copy guidance for new offerings.',
  alternates: {
    canonical: CANONICAL_URL,
  },
};

export default function ServicePageTemplate() {
  return (
    <main>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
          Service Page Template
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
          Reusable Deepthink Studio service-page blueprint containing full layout, content structure, and conversion copy guidance for new offerings.
        </p>
        
        <div style={{ 
          background: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '12px', 
          marginBottom: '2rem',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#18191a', marginBottom: '1rem' }}>
            Template Components
          </h2>
          <ul style={{ fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>
            <li>Hero section with compelling headline</li>
            <li>Service features and benefits</li>
            <li>Process overview</li>
            <li>Pricing plans</li>
            <li>FAQ section</li>
            <li>Call-to-action sections</li>
            <li>SEO-optimized structure</li>
          </ul>
        </div>

        <div style={{ 
          background: '#C6FF1A', 
          padding: '2rem', 
          borderRadius: '12px', 
          textAlign: 'center' 
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Ready to Create Service Pages?
          </h3>
          <p style={{ fontSize: '1rem', color: '#222', marginBottom: '1.5rem' }}>
            Use this template to create consistent, high-converting service pages that drive business growth.
          </p>
          <a href="/contact" style={{
            background: '#18191a',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1rem',
            display: 'inline-block'
          }}>
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}