import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Packages | Deepthink Studio',
  description:
    'Explore Deepthink Studio packages for logo design, website design, e-commerce, web portals, mobile applications, digital marketing, SEO, and video animation.',
  alternates: {
    canonical: 'https://deepthinkstudio.com/packages',
  },
};

const packages = [
  {
    id: 'logo-packages',
    title: 'Logo Design Packages',
    subtitle: 'Professional logo design solutions',
    packages: [
      {
        name: 'Basic Logo',
        price: '$99',
        features: ['2 Logo Concepts', '2 Revisions', 'PNG & JPG Files', '24-48 Hour Delivery']
      },
      {
        name: 'Professional Logo',
        price: '$199',
        features: ['5 Logo Concepts', 'Unlimited Revisions', 'All File Formats', 'Brand Guidelines', '48-72 Hour Delivery']
      },
      {
        name: 'Premium Logo',
        price: '$399',
        features: ['10 Logo Concepts', 'Unlimited Revisions', 'All File Formats', 'Complete Brand Package', 'Business Card Design', '72-96 Hour Delivery']
      }
    ]
  },
  {
    id: 'website-packages',
    title: 'Website Design Packages',
    subtitle: 'Complete website solutions',
    packages: [
      {
        name: 'Startup',
        price: '$245',
        features: ['3 Page Website', 'Custom Layout Design', 'Contact/Query Form', '3 Banner Designs', '5 Stock Photos', 'FREE Favicon Design', 'FREE Google Friendly Sitemap', 'Unlimited Revisions', 'Complete W3C Certified HTML']
      },
      {
        name: 'Professional',
        price: '$695',
        features: ['Up to 5 Unique Pages Website', 'CMS /Admin Panel Integration', '5+ Stock Photos & Banner Designs', 'FREE Social Media Integration', 'FREE Favicon Design', 'FREE Google Friendly Sitemap', 'Unlimited Revisions', 'Cross Browser Compatible', 'Complete W3C Certified HTML']
      },
      {
        name: 'Elite',
        price: '$995',
        features: ['Up to 10 Unique Pages Website', 'Custom Made, Interactive & Dynamic Design', 'Customized WordPress or PHP Development', 'Interactive Sliding Banners', 'Up to 10 Custom Made Banner Designs', '10 Stock Images', 'Unlimited Revisions']
      }
    ]
  },
  {
    id: 'ecommerce-packages',
    title: 'E-commerce Packages',
    subtitle: 'Online store solutions',
    packages: [
      {
        name: 'Basic Store',
        price: '$1,295',
        features: ['Up to 50 Products', 'Payment Gateway Integration', 'Shopping Cart', 'Product Management', 'Order Management', 'Basic SEO']
      },
      {
        name: 'Advanced Store',
        price: '$2,495',
        features: ['Up to 500 Products', 'Advanced Payment Options', 'Inventory Management', 'Customer Accounts', 'Advanced SEO', 'Analytics Integration']
      },
      {
        name: 'Enterprise Store',
        price: '$4,995',
        features: ['Unlimited Products', 'Multi-vendor Support', 'Advanced Analytics', 'Custom Integrations', 'Priority Support', 'Performance Optimization']
      }
    ]
  },
  {
    id: 'digital-packages',
    title: 'Digital Marketing Packages',
    subtitle: 'Comprehensive marketing solutions',
    packages: [
      {
        name: 'Starter',
        price: '$495/month',
        features: ['Social Media Management', 'Content Creation', 'Basic Analytics', 'Monthly Reporting']
      },
      {
        name: 'Growth',
        price: '$995/month',
        features: ['Social Media Management', 'Content Creation', 'Paid Advertising', 'Advanced Analytics', 'Monthly Reporting', 'Strategy Consultation']
      },
      {
        name: 'Enterprise',
        price: '$1,995/month',
        features: ['Full Digital Marketing Suite', 'Custom Campaigns', 'Advanced Analytics', 'Dedicated Account Manager', 'Priority Support', 'Custom Reporting']
      }
    ]
  }
];

export default function PackagesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="packages-hero" style={{ background: 'linear-gradient(to bottom, #18191a 0%, #e9ecef 100%)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>Service Packages</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Choose the perfect package for your business needs. All our packages include professional design, 
            responsive development, and ongoing support.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="packages-content" style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {packages.map((category) => (
            <div key={category.id} id={category.id} style={{ marginBottom: '4rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#18191a', marginBottom: '0.5rem' }}>
                  {category.title}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#666' }}>{category.subtitle}</p>
              </div>
              
              <div className="packages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {category.packages.map((pkg, index) => (
                  <div key={index} className="package-card" style={{ 
                    background: '#fff', 
                    borderRadius: '12px', 
                    padding: '2rem', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
                    border: '1px solid #e0e0e0',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative'
                  }}>
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '0.5rem' }}>
                        {pkg.name}
                      </h3>
                      <div style={{ fontSize: '2rem', fontWeight: 700, color: '#C6FF1A', marginBottom: '1rem' }}>
                        {pkg.price}
                      </div>
                    </div>
                    
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} style={{ 
                          padding: '0.5rem 0', 
                          borderBottom: '1px solid #f0f0f0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#C6FF1A', fontSize: '1.2rem' }}>✓</span>
                          <span style={{ color: '#333' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="package-btn" style={{
                      width: '100%',
                      background: '#C6FF1A',
                      color: '#18191a',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'background 0.3s ease'
                    }}>
                      Choose {pkg.name} <span>→</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="packages-cta" style={{ background: '#18191a', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Need a Custom Solution?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' }}>
            Don't see exactly what you need? We can create a custom package tailored to your specific requirements.
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
              Get Custom Quote
            </Link>
            <a href="tel:3853551138" style={{
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
              Call (385) 355-1138
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}