import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>
        DeepThink Studio - Service City Pages
      </h1>
      
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#666' }}>
        Welcome to our dynamic service-city page system. Choose a service and city combination to see our specialized pages.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '10px' }}>
          <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>SEO Services</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/seo-salt-lake-city" style={{ color: '#333', textDecoration: 'none' }}>
                SEO Services in Salt Lake City
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/seo-denver" style={{ color: '#333', textDecoration: 'none' }}>
                SEO Services in Denver
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/seo-phoenix" style={{ color: '#333', textDecoration: 'none' }}>
                SEO Services in Phoenix
              </Link>
            </li>
          </ul>
        </div>

        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '10px' }}>
          <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>Web Design Services</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/web-design-salt-lake-city" style={{ color: '#333', textDecoration: 'none' }}>
                Web Design in Salt Lake City
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/web-design-denver" style={{ color: '#333', textDecoration: 'none' }}>
                Web Design in Denver
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/web-design-phoenix" style={{ color: '#333', textDecoration: 'none' }}>
                Web Design in Phoenix
              </Link>
            </li>
          </ul>
        </div>

        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '10px' }}>
          <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>PPC Marketing</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/ppc-salt-lake-city" style={{ color: '#333', textDecoration: 'none' }}>
                PPC Marketing in Salt Lake City
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/ppc-denver" style={{ color: '#333', textDecoration: 'none' }}>
                PPC Marketing in Denver
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/ppc-phoenix" style={{ color: '#333', textDecoration: 'none' }}>
                PPC Marketing in Phoenix
              </Link>
            </li>
          </ul>
        </div>

        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '10px' }}>
          <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>Email Marketing</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/email-marketing-salt-lake-city" style={{ color: '#333', textDecoration: 'none' }}>
                Email Marketing in Salt Lake City
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/email-marketing-denver" style={{ color: '#333', textDecoration: 'none' }}>
                Email Marketing in Denver
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/email-marketing-phoenix" style={{ color: '#333', textDecoration: 'none' }}>
                Email Marketing in Phoenix
              </Link>
            </li>
          </ul>
        </div>

        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '10px' }}>
          <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>Social Media Marketing</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/social-media-salt-lake-city" style={{ color: '#333', textDecoration: 'none' }}>
                Social Media Marketing in Salt Lake City
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/social-media-denver" style={{ color: '#333', textDecoration: 'none' }}>
                Social Media Marketing in Denver
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/social-media-phoenix" style={{ color: '#333', textDecoration: 'none' }}>
                Social Media Marketing in Phoenix
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
