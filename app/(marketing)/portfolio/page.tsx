import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio | Deepthink Studio',
  description:
    'Browse Deepthink Studio portfolio to see branding, web design, e-commerce, and digital experiences crafted for clients across industries.',
  alternates: {
    canonical: 'https://deepthinkstudio.com/portfolio',
  },
};

const portfolioItems = [
  {
    id: 1,
    title: 'Vast Concepts',
    category: 'Corporate Website',
    image: '/images/99999.png',
    url: 'https://vastconceptsna.com/',
    description: 'Professional corporate website with modern design and seamless user experience.'
  },
  {
    id: 2,
    title: 'Website Design Showcase',
    category: 'Design Portfolio',
    image: '/images/2.jpg',
    url: '/packages#website-packages',
    internal: true,
    description: 'Showcasing our website design capabilities and creative solutions.'
  },
  {
    id: 3,
    title: 'Sports America Events',
    category: 'Event Management',
    image: '/images/sportsam.png',
    url: 'https://www.sportsamericaevents.com',
    description: 'Comprehensive event management platform with booking and scheduling features.'
  },
  {
    id: 4,
    title: 'Design Portfolio',
    category: 'Creative Design',
    image: '/images/4 (1).jpg',
    url: '/packages#website-packages',
    internal: true,
    description: 'Creative design solutions showcasing our artistic capabilities.'
  },
  {
    id: 5,
    title: 'Sports America Blog',
    category: 'Content Management',
    image: '/images/888.png',
    url: 'https://sportsamevents.com/blog',
    description: 'Dynamic blog platform with content management and user engagement features.'
  },
  {
    id: 6,
    title: 'Utah Prostate Cancer Run',
    category: 'Non-Profit',
    image: '/images/9999.png',
    url: 'https://www.utahprostatecancerrun.com/',
    description: 'Non-profit organization website with donation and event management capabilities.'
  },
  {
    id: 7,
    title: 'Cold Turkey Run',
    category: 'Event Website',
    image: '/images/Screenshot 2025-07-22 170303.png',
    url: 'https://www.coldturkeyrun.com/',
    description: 'Event-focused website with registration and information management.'
  },
  {
    id: 8,
    title: 'Design Showcase',
    category: 'Portfolio',
    image: '/images/6 (1).jpg',
    url: '/packages#website-packages',
    internal: true,
    description: 'Portfolio showcase highlighting our design expertise and client work.'
  }
];

const categories = ['All', 'Corporate Website', 'Design Portfolio', 'Event Management', 'Creative Design', 'Content Management', 'Non-Profit', 'Event Website', 'Portfolio'];

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="portfolio-hero" style={{ 
        background: 'linear-gradient(to bottom, #18191a 0%, #e9ecef 100%)', 
        padding: '4rem 0', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.18">
            <ellipse cx="960" cy="540" rx="900" ry="400" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="700" ry="300" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="500" ry="200" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="300" ry="100" stroke="#222" strokeWidth="2"/>
          </g>
        </svg>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Our Portfolio
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Take a look at our impressive portfolio of projects we've created up until now! 
            Showcasing our expertise in creating unique and impactful designs matched exclusively 
            to each client's vision and brand identity.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-content" style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Category Filter */}
          <div className="portfolio-filters" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  className="filter-btn"
                  style={{
                    background: category === 'All' ? '#C6FF1A' : 'transparent',
                    color: category === 'All' ? '#18191a' : '#666',
                    border: '2px solid #C6FF1A',
                    borderRadius: '25px',
                    padding: '0.5rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-item" style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative'
              }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={400} 
                    height={250} 
                    style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}>
                    <div style={{ textAlign: 'center', color: '#fff' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>{item.category}</p>
                      {item.internal ? (
                        <Link href={item.url} style={{
                          background: '#C6FF1A',
                          color: '#18191a',
                          padding: '0.5rem 1rem',
                          borderRadius: '5px',
                          textDecoration: 'none',
                          fontWeight: 600
                        }}>
                          View Details
                        </Link>
                      ) : (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" style={{
                          background: '#C6FF1A',
                          color: '#18191a',
                          padding: '0.5rem 1rem',
                          borderRadius: '5px',
                          textDecoration: 'none',
                          fontWeight: 600
                        }}>
                          Visit Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#18191a', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#C6FF1A', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {item.category}
                  </p>
                  <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta" style={{ background: '#18191a', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' }}>
            Let's create something amazing together. Contact us today to discuss your project requirements.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              background: '#C6FF1A',
              color: '#18191a',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.1rem',
              transition: 'background 0.3s ease'
            }}>
              Start Your Project
            </Link>
            <Link href="/packages" style={{
              background: 'transparent',
              color: '#C6FF1A',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.1rem',
              border: '2px solid #C6FF1A',
              transition: 'background 0.3s ease'
            }}>
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}