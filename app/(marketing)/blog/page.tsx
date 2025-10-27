import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import blogPages from '../../lib/blog-pages.json';

export const metadata: Metadata = {
  title: 'Blog | Deepthink Studio - Web Design & Development Insights',
  description:
    'Read Deepthink Studio articles on web design, development, digital marketing, and growth strategies for ambitious brands.',
  alternates: {
    canonical: 'https://deepthinkstudio.com/blog',
  },
};

const blogPosts = [
  {
    slug: 'best-free-ui-design-tools-2025',
    title: 'Best Free UI Design Tools 2025',
    excerpt: 'Discover the top free UI design tools that will help you create stunning user interfaces without breaking the bank.',
    category: 'Design Tools',
    readTime: '5 min read',
    publishDate: '2025-01-15',
    image: '/images/blog-ui-tools.jpg'
  },
  {
    slug: 'how-to-handle-difficult-clients-as-a-freelance-web-designer-2025',
    title: 'How to Handle Difficult Clients as a Freelance Web Designer 2025',
    excerpt: 'Learn proven strategies for managing challenging client relationships and maintaining your sanity as a freelance designer.',
    category: 'Freelancing',
    readTime: '8 min read',
    publishDate: '2025-01-10',
    image: '/images/blog-difficult-clients.jpg'
  },
  {
    slug: 'how-to-start-freelance-web-design-2025',
    title: 'How to Start Freelance Web Design 2025',
    excerpt: 'A comprehensive guide to launching your freelance web design career in 2025, from finding clients to pricing your services.',
    category: 'Freelancing',
    readTime: '12 min read',
    publishDate: '2025-01-05',
    image: '/images/blog-start-freelancing.jpg'
  },
  {
    slug: 'how-to-write-a-web-design-proposal-that-wins-clients-every-time-2025-guide-2025',
    title: 'How to Write a Web Design Proposal That Wins Clients Every Time - 2025 Guide',
    excerpt: 'Master the art of writing compelling web design proposals that convert prospects into paying clients.',
    category: 'Business',
    readTime: '10 min read',
    publishDate: '2025-01-01',
    image: '/images/blog-proposals.jpg'
  }
];

const categories = ['All', 'Design Tools', 'Freelancing', 'Business', 'Development', 'Marketing'];

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="blog-hero" style={{ 
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
            Deepthink Studio Blog
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Insights, tips, and strategies for web design, development, and digital marketing. 
            Stay updated with the latest trends and best practices in the industry.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content" style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Category Filter */}
          <div className="blog-filters" style={{ textAlign: 'center', marginBottom: '3rem' }}>
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

          {/* Featured Post */}
          <div className="featured-post" style={{ marginBottom: '4rem' }}>
            <div style={{ 
              background: '#f8f9fa', 
              borderRadius: '12px', 
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              alignItems: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.9rem', color: '#C6FF1A', fontWeight: 600, marginBottom: '0.5rem' }}>
                  FEATURED ARTICLE
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {blogPosts[0].title}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {blogPosts[0].excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#999' }}>{blogPosts[0].category}</span>
                  <span style={{ fontSize: '0.9rem', color: '#999' }}>•</span>
                  <span style={{ fontSize: '0.9rem', color: '#999' }}>{blogPosts[0].readTime}</span>
                  <span style={{ fontSize: '0.9rem', color: '#999' }}>•</span>
                  <span style={{ fontSize: '0.9rem', color: '#999' }}>{new Date(blogPosts[0].publishDate).toLocaleDateString()}</span>
                </div>
                <Link href={`/blog/${blogPosts[0].slug}`} style={{
                  background: '#C6FF1A',
                  color: '#18191a',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  display: 'inline-block',
                  transition: 'background 0.3s ease'
                }}>
                  Read Full Article →
                </Link>
              </div>
              <div style={{ position: 'relative', height: '300px' }}>
                <Image 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {blogPosts.slice(1).map((post) => (
              <article key={post.slug} className="blog-card" style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative'
              }}>
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.9rem', color: '#C6FF1A', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {post.category}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#18191a', marginBottom: '0.8rem', lineHeight: 1.3 }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem', lineHeight: 1.5 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem', color: '#999' }}>
                    <span>{post.readTime}</span>
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-signup" style={{ 
            background: 'linear-gradient(135deg, #C6FF1A 0%, #7be900 100%)', 
            borderRadius: '12px', 
            padding: '3rem 2rem', 
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
              Stay Updated
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Get the latest web design tips, industry insights, and exclusive content delivered to your inbox.
            </p>
            <form style={{ display: 'flex', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                style={{
                  flex: 1,
                  padding: '0.8rem 1rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <button 
                type="submit"
                style={{
                  background: '#18191a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.8rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta" style={{ background: '#18191a', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Ready to Work Together?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' }}>
            Let's turn your ideas into amazing digital experiences. Contact us today to discuss your project.
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
              View Our Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}