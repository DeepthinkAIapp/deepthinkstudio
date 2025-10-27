import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import blogPages from '../../../lib/blog-pages.json';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const blogPostsData = {
  'best-free-ui-design-tools-2025': {
    title: 'Best Free UI Design Tools 2025',
    excerpt: 'Discover the top free UI design tools that will help you create stunning user interfaces without breaking the bank.',
    content: `
      <p>In 2025, the landscape of UI design tools has evolved significantly, with many powerful free options available for designers of all skill levels. Whether you're a beginner just starting out or a seasoned professional looking to expand your toolkit, these free tools can help you create stunning user interfaces without the hefty price tag.</p>
      
      <h2>Top Free UI Design Tools</h2>
      
      <h3>1. Figma</h3>
      <p>Figma remains the gold standard for collaborative design, and its free tier is incredibly generous. You get access to most features including unlimited personal files, basic prototyping, and real-time collaboration with up to 2 editors.</p>
      
      <h3>2. Adobe XD</h3>
      <p>Adobe XD offers a robust free plan that includes unlimited prototypes and design specs. It's perfect for those already familiar with Adobe's ecosystem.</p>
      
      <h3>3. Sketch (Web Version)</h3>
      <p>Sketch's web version provides a streamlined experience for creating interfaces directly in your browser, making it accessible from any device.</p>
      
      <h2>Getting Started</h2>
      <p>When choosing a free UI design tool, consider your specific needs, team collaboration requirements, and learning curve. Most of these tools offer extensive documentation and community support to help you get started quickly.</p>
    `,
    category: 'Design Tools',
    readTime: '5 min read',
    publishDate: '2025-01-15',
    author: 'Deepthink Studio Team',
    image: '/images/blog-ui-tools.jpg',
    tags: ['UI Design', 'Free Tools', 'Design Software', '2025']
  },
  'how-to-handle-difficult-clients-as-a-freelance-web-designer-2025': {
    title: 'How to Handle Difficult Clients as a Freelance Web Designer 2025',
    excerpt: 'Learn proven strategies for managing challenging client relationships and maintaining your sanity as a freelance designer.',
    content: `
      <p>Dealing with difficult clients is an inevitable part of freelance web design. In 2025, with remote work becoming the norm and client expectations evolving, it's more important than ever to have strategies in place for managing challenging relationships.</p>
      
      <h2>Common Types of Difficult Clients</h2>
      
      <h3>The Scope Creep Client</h3>
      <p>This client continuously adds new requirements without adjusting the budget or timeline. They often say "it's just a small change" repeatedly.</p>
      
      <h3>The Micromanager</h3>
      <p>This client wants to be involved in every decision, often questioning your expertise and requesting constant updates.</p>
      
      <h3>The Budget-Conscious Perfectionist</h3>
      <p>This client wants premium results but is unwilling to pay for the time and effort required to achieve them.</p>
      
      <h2>Strategies for Success</h2>
      
      <h3>1. Set Clear Boundaries</h3>
      <p>Establish clear communication protocols, revision limits, and project scope from the beginning. Document everything in writing.</p>
      
      <h3>2. Maintain Professional Communication</h3>
      <p>Keep all communication professional and documented. Use project management tools to track requests and changes.</p>
      
      <h3>3. Know When to Walk Away</h3>
      <p>Sometimes the best solution is to politely decline future work with problematic clients. Your mental health and reputation are worth more than any single project.</p>
    `,
    category: 'Freelancing',
    readTime: '8 min read',
    publishDate: '2025-01-10',
    author: 'Deepthink Studio Team',
    image: '/images/blog-difficult-clients.jpg',
    tags: ['Freelancing', 'Client Management', 'Business', 'Web Design']
  },
  'how-to-start-freelance-web-design-2025': {
    title: 'How to Start Freelance Web Design 2025',
    excerpt: 'A comprehensive guide to launching your freelance web design career in 2025, from finding clients to pricing your services.',
    content: `
      <p>Starting a freelance web design business in 2025 offers incredible opportunities, but it also comes with unique challenges. The digital landscape has evolved, and so have the strategies for building a successful freelance practice.</p>
      
      <h2>Getting Started</h2>
      
      <h3>1. Build Your Skills</h3>
      <p>Master the essential tools and technologies: HTML, CSS, JavaScript, responsive design, and popular frameworks like React or Vue.js.</p>
      
      <h3>2. Create a Strong Portfolio</h3>
      <p>Your portfolio is your most important marketing tool. Include diverse projects that showcase your range and expertise.</p>
      
      <h3>3. Set Up Your Business</h3>
      <p>Register your business, set up proper invoicing, and establish clear contracts and pricing structures.</p>
      
      <h2>Finding Clients</h2>
      
      <h3>Online Platforms</h3>
      <p>Platforms like Upwork, Fiverr, and Toptal can be good starting points, but don't rely on them exclusively.</p>
      
      <h3>Networking</h3>
      <p>Attend industry events, join online communities, and leverage your existing network to find opportunities.</p>
      
      <h3>Content Marketing</h3>
      <p>Create valuable content through blogging, social media, and case studies to establish yourself as an expert.</p>
      
      <h2>Pricing Your Services</h2>
      <p>Research market rates, consider your experience level, and factor in all business expenses when setting your prices. Don't undervalue your work.</p>
    `,
    category: 'Freelancing',
    readTime: '12 min read',
    publishDate: '2025-01-05',
    author: 'Deepthink Studio Team',
    image: '/images/blog-start-freelancing.jpg',
    tags: ['Freelancing', 'Career', 'Web Design', 'Business']
  },
  'how-to-write-a-web-design-proposal-that-wins-clients-every-time-2025-guide-2025': {
    title: 'How to Write a Web Design Proposal That Wins Clients Every Time - 2025 Guide',
    excerpt: 'Master the art of writing compelling web design proposals that convert prospects into paying clients.',
    content: `
      <p>A well-crafted proposal is often the difference between winning and losing a client. In 2025, with increased competition and higher client expectations, your proposal needs to stand out while clearly communicating value.</p>
      
      <h2>Essential Elements of a Winning Proposal</h2>
      
      <h3>1. Executive Summary</h3>
      <p>Start with a compelling summary that addresses the client's main pain points and how you'll solve them.</p>
      
      <h3>2. Understanding of the Project</h3>
      <p>Demonstrate that you've thoroughly researched their business, industry, and specific needs.</p>
      
      <h3>3. Proposed Solution</h3>
      <p>Outline your approach, methodology, and the specific deliverables you'll provide.</p>
      
      <h3>4. Timeline and Milestones</h3>
      <p>Provide a clear project timeline with specific milestones and deliverables.</p>
      
      <h3>5. Investment and Payment Terms</h3>
      <p>Be transparent about pricing, payment schedules, and what's included.</p>
      
      <h2>Proposal Writing Tips</h2>
      
      <h3>Keep It Client-Focused</h3>
      <p>Focus on the client's goals and challenges, not just your capabilities.</p>
      
      <h3>Use Visual Elements</h3>
      <p>Include mockups, wireframes, or visual representations of your proposed solution.</p>
      
      <h3>Address Objections</h3>
      <p>Anticipate common concerns and address them proactively in your proposal.</p>
      
      <h3>Include Social Proof</h3>
      <p>Reference similar projects, client testimonials, and relevant case studies.</p>
    `,
    category: 'Business',
    readTime: '10 min read',
    publishDate: '2025-01-01',
    author: 'Deepthink Studio Team',
    image: '/images/blog-proposals.jpg',
    tags: ['Proposals', 'Business', 'Sales', 'Web Design']
  }
};

export async function generateStaticParams() {
  return blogPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const postData = blogPostsData[params.slug as keyof typeof blogPostsData];
  
  if (!postData) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${postData.title} | Deepthink Studio Blog`,
    description: postData.excerpt,
    alternates: {
      canonical: `https://deepthinkstudio.com/blog/${params.slug}`,
    },
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      type: 'article',
      url: `https://deepthinkstudio.com/blog/${params.slug}`,
      images: [
        {
          url: postData.image,
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.excerpt,
      images: [postData.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const postData = blogPostsData[params.slug as keyof typeof blogPostsData];
  
  if (!postData) {
    notFound();
  }

  return (
    <main>
      {/* Article Header */}
      <article className="blog-post" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <header style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.9rem', color: '#C6FF1A', fontWeight: 600, marginBottom: '1rem' }}>
            {postData.category}
          </div>
          <h1 style={{ fontSize: '2.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#18191a', marginBottom: '1rem', lineHeight: 1.2 }}>
            {postData.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>
            {postData.excerpt}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #e0e0e0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Image src="/images/logo.png" alt="Author" width={40} height={40} style={{ borderRadius: '50%' }} />
              <span style={{ fontWeight: 600, color: '#333' }}>{postData.author}</span>
            </div>
            <span style={{ color: '#999' }}>•</span>
            <span style={{ color: '#999' }}>{new Date(postData.publishDate).toLocaleDateString()}</span>
            <span style={{ color: '#999' }}>•</span>
            <span style={{ color: '#999' }}>{postData.readTime}</span>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image 
              src={postData.image} 
              alt={postData.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="article-content" 
          style={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.7, 
            color: '#333',
            marginBottom: '3rem'
          }}
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />

        {/* Tags */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#333', marginBottom: '1rem' }}>Tags:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {postData.tags.map((tag) => (
              <span 
                key={tag}
                style={{
                  background: '#f0f0f0',
                  color: '#666',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 500
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '12px', 
          marginBottom: '3rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <Image src="/images/logo.png" alt="Author" width={80} height={80} style={{ borderRadius: '50%' }} />
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#18191a', marginBottom: '0.5rem' }}>
              {postData.author}
            </h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              A team of experienced web designers and developers passionate about creating exceptional digital experiences.
            </p>
            <Link href="/contact" style={{
              color: '#C6FF1A',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1.5rem' }}>
            Related Articles
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {Object.entries(blogPostsData)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, post]) => (
                <Link key={slug} href={`/blog/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ 
                    background: '#fff', 
                    borderRadius: '8px', 
                    padding: '1.5rem', 
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    border: '1px solid #e0e0e0'
                  }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#18191a', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {post.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
                      {post.excerpt.substring(0, 100)}...
                    </p>
                    <div style={{ fontSize: '0.8rem', color: '#999' }}>
                      {post.readTime} • {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ 
          background: 'linear-gradient(135deg, #C6FF1A 0%, #7be900 100%)', 
          borderRadius: '12px', 
          padding: '2rem', 
          textAlign: 'center' 
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Ready to Start Your Project?
          </h3>
          <p style={{ fontSize: '1rem', color: '#222', marginBottom: '1.5rem' }}>
            Let's work together to create something amazing for your business.
          </p>
          <Link href="/contact" style={{
            background: '#18191a',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1rem',
            display: 'inline-block'
          }}>
            Get Started Today
          </Link>
        </div>
      </article>
    </main>
  );
}