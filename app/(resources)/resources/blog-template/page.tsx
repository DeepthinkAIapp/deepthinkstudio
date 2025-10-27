import type { Metadata } from 'next';

const CANONICAL_URL = 'https://deepthinkstudio.com/resources/blog-template';

export const metadata: Metadata = {
  title: 'Blog Article Template | Deepthink Studio Internal Resource',
  description:
    'Standardised Deepthink Studio blog template with SEO-ready structure, CTA placements, and responsive formatting for rapid content production.',
  alternates: {
    canonical: CANONICAL_URL,
  },
};

export default function BlogTemplatePage() {
  return (
    <main>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
          Blog Article Template
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
          Standardised Deepthink Studio blog template with SEO-ready structure, CTA placements, and responsive formatting for rapid content production.
        </p>
        
        <div style={{ 
          background: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '12px', 
          marginBottom: '2rem',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#18191a', marginBottom: '1rem' }}>
            Template Structure
          </h2>
          <ul style={{ fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>
            <li>SEO-optimized title and meta description</li>
            <li>Structured content with proper headings</li>
            <li>Call-to-action sections</li>
            <li>Responsive design elements</li>
            <li>Social sharing integration</li>
            <li>Related articles section</li>
          </ul>
        </div>

        <div style={{ 
          background: '#C6FF1A', 
          padding: '2rem', 
          borderRadius: '12px', 
          textAlign: 'center' 
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Ready to Create Content?
          </h3>
          <p style={{ fontSize: '1rem', color: '#222', marginBottom: '1.5rem' }}>
            Use this template to create consistent, high-quality blog content that drives engagement and conversions.
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