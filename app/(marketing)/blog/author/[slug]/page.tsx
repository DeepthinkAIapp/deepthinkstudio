import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface BlogAuthorPageProps {
  params: {
    slug: string;
  };
}

const authors = {
  'jeremy-lafaver': {
    name: 'Jeremy LaFaver',
    title: 'Founder & Lead Designer',
    bio: 'Jeremy is the founder of Deepthink Studio with over 10 years of experience in web design and digital marketing. He specializes in creating user-centered designs that drive business growth.',
    image: '/images/jeremy-lafaver.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/jeremy-lafaver',
      twitter: 'https://twitter.com/jeremy_lafaver',
      email: 'jeremy@deepthinkstudio.com'
    },
    articles: [
      {
        slug: 'best-free-ui-design-tools-2025',
        title: 'Best Free UI Design Tools 2025',
        publishDate: '2025-01-15',
        readTime: '5 min read'
      },
      {
        slug: 'how-to-handle-difficult-clients-as-a-freelance-web-designer-2025',
        title: 'How to Handle Difficult Clients as a Freelance Web Designer 2025',
        publishDate: '2025-01-10',
        readTime: '8 min read'
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogAuthorPageProps): Promise<Metadata> {
  const author = authors[params.slug as keyof typeof authors];
  
  if (!author) {
    return {
      title: 'Author Not Found',
    };
  }

  return {
    title: `${author.name} | Deepthink Studio Blog`,
    description: author.bio,
    alternates: {
      canonical: `https://deepthinkstudio.com/blog/author/${params.slug}`,
    },
  };
}

export default function BlogAuthorPage({ params }: BlogAuthorPageProps) {
  const author = authors[params.slug as keyof typeof authors];
  
  if (!author) {
    return (
      <main>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Author Not Found
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
            The author you're looking for doesn't exist.
          </p>
          <Link href="/blog" style={{
            background: '#C6FF1A',
            color: '#18191a',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700
          }}>
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Author Header */}
      <section className="author-hero" style={{ 
        background: 'linear-gradient(to bottom, #18191a 0%, #e9ecef 100%)', 
        padding: '4rem 0', 
        textAlign: 'center' 
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ 
            background: '#fff', 
            borderRadius: '12px', 
            padding: '3rem 2rem', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <Image 
              src={author.image} 
              alt={author.name}
              width={120}
              height={120}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <h1 style={{ fontSize: '2.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#18191a', marginBottom: '0.5rem' }}>
                {author.name}
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#C6FF1A', fontWeight: 600, marginBottom: '1rem' }}>
                {author.title}
              </p>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.6, maxWidth: '600px' }}>
                {author.bio}
              </p>
            </div>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" style={{
                background: '#0077b5',
                color: '#fff',
                padding: '0.5rem',
                borderRadius: '50%',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" style={{
                background: '#1da1f2',
                color: '#fff',
                padding: '0.5rem',
                borderRadius: '50%',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href={`mailto:${author.social.email}`} style={{
                background: '#C6FF1A',
                color: '#18191a',
                padding: '0.5rem',
                borderRadius: '50%',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Author Articles */}
      <section className="author-articles" style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#18191a', marginBottom: '2rem', textAlign: 'center' }}>
            Articles by {author.name}
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {author.articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article style={{
                  background: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: '1px solid #e0e0e0'
                }}>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#18191a', marginBottom: '0.8rem', lineHeight: 1.3 }}>
                      {article.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem', color: '#999' }}>
                      <span>{article.readTime}</span>
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="author-cta" style={{ background: '#18191a', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Work with {author.name}
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' }}>
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
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
            <a href={`mailto:${author.social.email}`} style={{
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
              Email {author.name.split(' ')[0]}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}