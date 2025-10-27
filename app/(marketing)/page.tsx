import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Deepthink Studio | Creative Web Design Agency',
  description:
    'Deepthink Studio is a creative web design agency specializing in custom websites, e-commerce, and SEO optimization for businesses and brands.',
  alternates: {
    canonical: 'https://deepthinkstudio.com/',
  },
  openGraph: {
    title: 'Deepthink Studio | Creative Web Design Agency',
    description: 'Creative web design agency specializing in custom websites, e-commerce, and SEO optimization for businesses and brands.',
    type: 'website',
    url: 'https://deepthinkstudio.com/',
    images: [
      {
        url: 'https://deepthinkstudio.com/images/Black%20and%20White%20Modern%20Corporate%20Business%20Consulting%20%26%20Sales%20LinkedIn%20Banner.png',
        width: 1200,
        height: 630,
        alt: 'Deepthink Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepthink Studio | Creative Web Design Agency',
    description: 'Creative web design agency specializing in custom websites, e-commerce, and SEO optimization for businesses and brands.',
    images: ['https://deepthinkstudio.com/images/Black%20and%20White%20Modern%20Corporate%20Business%20Consulting%20%26%20Sales%20LinkedIn%20Banner.png'],
  },
};

export default function HomePage() {
  return (
    <>
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-top">How we</h2>
          <h1 className="hero-main">Develop<br/>Websites</h1>
          <p className="hero-desc">At Deepthink Studio, We craft custom websites fit to your needs, ensuring a seamless online presence that reflects your brand identity. Our team of experienced developers utilize cutting edge technologies to deliver responsive, user friendly, and visually appealing websites. Whether you need a simple landing page, an e-commerce platform, or a complex web application, we've got you covered.</p>
        </div>
      </section>

      {/* Help Section */}
      <section className="help-section">
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.18">
            <ellipse cx="960" cy="540" rx="900" ry="400" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="700" ry="300" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="500" ry="200" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="300" ry="100" stroke="#222" strokeWidth="2"/>
          </g>
        </svg>
        <div className="help-grid">
          <div className="help-bubble">
            <span>We can<br/>help you With</span>
          </div>
          <div className="help-card help-card-green">
            <div className="help-icon"> 
              <svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#222"/><path d="M24 12l8 8-8 8-8-8z" fill="#C6FF1A"/></svg>
            </div>
            <div className="help-title">1. Custom Design</div>
            <div className="help-desc">We'll create a website that matches your brand and goals.</div>
          </div>
          <div className="help-card">
            <div className="help-icon">
              <svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#C6FF1A"/><path d="M16 24h16M24 16v16" stroke="#222" strokeWidth="3"/></svg>
            </div>
            <div className="help-title">2. Technical Expertise</div>
            <div className="help-desc">Our team will handle all the technical details so you can focus on your business.</div>
          </div>
          <div className="help-card">
            <div className="help-icon">
              <svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#C6FF1A"/><circle cx="24" cy="24" r="8" fill="#222"/></svg>
            </div>
            <div className="help-title">3. Continuous Support</div>
            <div className="help-desc">From start to finish, we'll be there to support you and your website.</div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages-section">
        <div className="advantages-grid">
          <div className="advantages-bubble">
            <h2>Our advantages?</h2>
            <p>With years of experience, we know how to build outstanding websites tailored to your needs. We take the time to understand your goals and deliver a site that fits you perfectly—on time and with exceptional quality. Our team is always available to support you, and our transparent pricing ensures you receive excellent value for your investment.</p>
            <div className="advantages-img">
              <Image 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" 
                alt="Web design example" 
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className="advantages-stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-desc"><em>Websites Expertly Crafted and Launched by Our Team</em></div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-desc"><em>Years of Specialization in Web Design and Development</em></div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-desc"><em>Awards from leading Design Award Contests</em></div>
            </div>
            <div className="stat-item">
              <div className="stat-number">800%</div>
              <div className="stat-desc"><em>Surge of website traffic</em></div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-desc"><em>Unanimous Client Approval of Our Web Design Services.</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Include Section */}
      <section className="projects-include-section">
        <div className="projects-include-grid" style={{ position: 'relative', zIndex: 1 }}>
          <div className="projects-include-left">
            <h2>All Our Projects Include:</h2>
            <p>Every website development project at Deepthink Studio comes with a suite of features designed to ensure your online success.</p>
          </div>
          <div className="projects-include-right">
            <div className="features-grid">
              <div className="feature-card">
                <span className="feature-icon"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#C6FF1A"/><text x="16" y="22" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="#00464d">&lt;/&gt;</text></svg></span>
                <span className="feature-title">Custom Design*</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon"><svg width="32" height="32"><circle cx="16" cy="16" r="16" fill="#C6FF1A"/><circle cx="16" cy="16" r="10" fill="#00464d"/></svg></span>
                <span className="feature-title">Responsive Development</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#C6FF1A"/><path d="M8 24L24 8" stroke="#00464d" strokeWidth="3"/></svg></span>
                <span className="feature-title">User-Friendly Interface</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon"><svg width="32" height="32"><circle cx="16" cy="16" r="16" fill="#C6FF1A"/><circle cx="16" cy="16" r="6" fill="#00464d"/></svg></span>
                <span className="feature-title">SEO Optimization</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#C6FF1A"/><rect x="8" y="8" width="16" height="16" fill="#00464d"/></svg></span>
                <span className="feature-title">Performance Optimization</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon"><svg width="32" height="32"><circle cx="16" cy="16" r="16" fill="#C6FF1A"/><circle cx="16" cy="16" r="4" fill="#00464d"/></svg></span>
                <span className="feature-title">Content Management System (CMS)</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#C6FF1A"/><path d="M8 16h16" stroke="#00464d" strokeWidth="3"/></svg></span>
                <span className="feature-title">E-commerce Integration</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon"><svg width="32" height="32"><circle cx="16" cy="16" r="16" fill="#C6FF1A"/><rect x="10" y="10" width="12" height="12" fill="#00464d"/></svg></span>
                <span className="feature-title">Security Features</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#C6FF1A"/><circle cx="16" cy="16" r="6" fill="#00464d"/></svg></span>
                <span className="feature-title">Analytics and Reporting</span>
              </div>
            </div>
            <div className="additional-services">
              <div className="additional-title">Additional services:</div>
              <div className="additional-grid">
                <div className="additional-card">
                  <span className="feature-icon"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#00464d"/><text x="16" y="22" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="#C6FF1A">🛒</text></svg></span>
                  <span className="feature-title">E-commerce integration</span>
                </div>
                <div className="additional-card">
                  <span className="feature-icon"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#00464d"/><text x="16" y="22" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="#C6FF1A">💬</text></svg></span>
                  <span className="feature-title">Multilingual support</span>
                </div>
                <div className="additional-card">
                  <span className="feature-icon"><svg width="32" height="32"><rect width="32" height="32" rx="8" fill="#00464d"/><text x="16" y="22" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="#C6FF1A">🌐</text></svg></span>
                  <span className="feature-title">Hosting &amp; Domain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section" style={{ background: 'linear-gradient(to bottom, #18191a 0%, #e9ecef 100%)', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.18">
            <ellipse cx="960" cy="540" rx="900" ry="400" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="700" ry="300" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="500" ry="200" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="300" ry="100" stroke="#222" strokeWidth="2"/>
          </g>
        </svg>
        <div className="portfolio-container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="portfolio-title">Take a look at our impressive portfolio of<br/>projects we've created up until now !</h2>
          <div className="portfolio-subtitle">Showcasing our expertise in creating unique and impactful designs matched exclusively to each client's vision and brand identity.</div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <a href="https://vastconceptsna.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/99999.png" alt="Project 1" width={300} height={200} style={{ width: '100%', height: 'auto' }} />
              </a>
            </div>
            <div className="portfolio-item">
              <Link href="/packages#website-packages">
                <Image src="/images/2.jpg" alt="Project 2" width={300} height={200} style={{ width: '100%', height: 'auto' }} />
              </Link>
            </div>
            <div className="portfolio-item">
              <a href="https://www.sportsamericaevents.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/sportsam.png" alt="Project 3" width={300} height={200} style={{ width: '100%', height: 'auto' }} />
              </a>
            </div>
            <div className="portfolio-item">
              <Link href="/packages#website-packages">
                <Image src="/images/4 (1).jpg" alt="Project 4" width={300} height={200} style={{ width: '100%', height: 'auto' }} />
              </Link>
            </div>
            <div className="portfolio-item">
              <a href="https://sportsamevents.com/blog" target="_blank" rel="noopener noreferrer">
                <Image src="/images/888.png" alt="Project 5" width={300} height={200} style={{ width: '100%', height: 'auto' }} />
              </a>
            </div>
            <div className="portfolio-item">
              <a href="https://www.utahprostatecancerrun.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/9999.png" alt="Project 6" width={300} height={200} style={{ width: '100%', height: 'auto' }} />
              </a>
            </div>
            <div className="portfolio-item">
              <a href="https://www.coldturkeyrun.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/Screenshot 2025-07-22 170303.png" alt="Project 7" width={300} height={200} style={{ width: '100%', height: 'auto' }} />
              </a>
            </div>
            <div className="portfolio-item">
              <Link href="/packages#website-packages">
                <Image src="/images/6 (1).jpg" alt="Project 8" width={300} height={200} style={{ width: '100%', height: 'auto' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section" style={{ background: 'linear-gradient(to bottom, #18191a 0%, #e9ecef 100%)', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.18">
            <ellipse cx="960" cy="540" rx="900" ry="400" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="700" ry="300" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="500" ry="200" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="300" ry="100" stroke="#222" strokeWidth="2"/>
          </g>
        </svg>
        <div className="expertise-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="expertise-title">We are experts in</div>
          <div className="expertise-scroll-outer">
            <div className="expertise-scroll-inner">
              <div className="expertise-logos">
                <span className="expertise-logo" title="PHP">
                  <Image src="/images/php.png" alt="PHP" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="JavaScript">
                  <Image src="/images/js.png" alt="JavaScript" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="Web">
                  <Image src="/images/web.png" alt="Web" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="Mailchimp">
                  <Image src="/images/mailchimp.png" alt="Mailchimp" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="Shopify">
                  <Image src="/images/shopify.png" alt="Shopify" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="React">
                  <Image src="/images/library.png" alt="React" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="Wix">
                  <Image src="/images/wix.png" alt="Wix" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="WordPress">
                  <Image src="/images/wordpress.png" alt="WordPress" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="Support">
                  <Image src="/images/support.png" alt="Support" width={60} height={60} />
                </span>
              </div>
              {/* duplicate for seamless scroll */}
              <div className="expertise-logos">
                <span className="expertise-logo" title="JavaScript">
                  <Image src="/images/js.png" alt="JavaScript" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="Web">
                  <Image src="/images/web.png" alt="Web" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="Mailchimp">
                  <Image src="/images/mailchimp.png" alt="Mailchimp" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="Shopify">
                  <Image src="/images/shopify.png" alt="Shopify" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="React">
                  <Image src="/images/library.png" alt="React" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="Wix">
                  <Image src="/images/wix.png" alt="Wix" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="WordPress">
                  <Image src="/images/wordpress.png" alt="WordPress" width={60} height={60} />
                </span>
                <span className="expertise-logo" title="Support">
                  <Image src="/images/support.png" alt="Support" width={60} height={60} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section" style={{ background: 'linear-gradient(to bottom, #18191a 0%, #e9ecef 100%)', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.18">
            <ellipse cx="960" cy="540" rx="900" ry="400" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="700" ry="300" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="500" ry="200" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="300" ry="100" stroke="#222" strokeWidth="2"/>
          </g>
        </svg>
        <div className="packages-header" style={{ position: 'relative', zIndex: 1 }}>
          <h2>Choose<br/>your package</h2>
          <div className="packages-subtitle">Our plans are clear and open, no shocks or caps. Help is always here when you want it.</div>
        </div>
        <div className="packages-grid">
          {/* Row 1 */}
          <div className="package-card">
            <div className="package-title">Startup</div>
            <div className="package-sub">Launch with impact: Essential web solution</div>
            <div className="package-price">$ <span>245</span></div>
            <div className="package-features package-features-green">
              <ul>
                <li>3 Page Website</li>
                <li>Custom Layout Design</li>
                <li>Contact/Query Form</li>
                <li>3 Banner Designs</li>
                <li>5 Stock Photos</li>
                <li>FREE Favicon Design</li>
                <li>FREE Google Friendly Sitemap</li>
                <li>Unlimited Revisions</li>
                <li>Complete W3C Certified HTML</li>
              </ul>
            </div>
            <button className="package-btn">Start Project <span>→</span></button>
          </div>
          <div className="package-card">
            <div className="package-title">Professional</div>
            <div className="package-sub">Growth-focused web solutions for expanding businesses</div>
            <div className="package-price">$ <span>695</span></div>
            <div className="package-features package-features-teal">
              <ul>
                <li>Up to 5 Unique Pages Website</li>
                <li>CMS /Admin Panel Integration</li>
                <li>5+ Stock Photos & Banner Designs</li>
                <li>FREE Social Media Integration</li>
                <li>FREE Favicon Design</li>
                <li>FREE Google Friendly Sitemap</li>
                <li>Unlimited Revisions</li>
                <li>Cross Browser Compatible</li>
                <li>Complete W3C Certified HTML</li>
              </ul>
            </div>
            <button className="package-btn">Start Project <span>→</span></button>
          </div>
          <div className="package-card">
            <div className="package-title">Elite</div>
            <div className="package-sub">Launch with impact: Essential web solution</div>
            <div className="package-price">$ <span>995</span></div>
            <div className="package-features package-features-blue">
              <ul>
                <li>Up to 10 Unique Pages Website</li>
                <li>Custom Made, Interactive & Dynamic Design</li>
                <li>Customized WordPress or PHP Development</li>
                <li>Interactive Sliding Banners</li>
                <li>Up to 10 Custom Made Banner Designs</li>
                <li>10 Stock Images</li>
                <li>Unlimited Revisions</li>
              </ul>
            </div>
            <button className="package-btn">Start Project <span>→</span></button>
          </div>
          {/* Row 2 */}
          <div className="package-card">
            <div className="package-title">Silver</div>
            <div className="package-sub">Launch with impact: Essential web solution</div>
            <div className="package-price">$ <span>1595</span></div>
            <div className="package-features package-features-gold">
              <ul>
                <li>Up to 15 Unique Pages Website</li>
                <li>Custom Made, Interactive, Dynamic & High-End Design</li>
                <li>Customized WordPress or PHP Development</li>
                <li>Fully Mobile Responsive</li>
                <li>Interactive Sliding Banners</li>
                <li>Up to 15 Custom Made Banner Designs</li>
                <li>15 Stock Images</li>
              </ul>
            </div>
            <button className="package-btn">Start Project <span>→</span></button>
          </div>
          <div className="package-card">
            <div className="package-title">Business</div>
            <div className="package-sub">Launch with impact: Essential web solution</div>
            <div className="package-price">$ <span>2495</span></div>
            <div className="package-features package-features-orange">
              <ul>
                <li>25 Pages Website</li>
                <li>Custom Made, Interactive, Dynamic & High-End Design</li>
                <li>Customized WordPress or PHP Development</li>
                <li>Fully Mobile Responsive</li>
                <li>Interactive Sliding Banners</li>
                <li>Up to 15 Custom Made Banner Designs</li>
                <li>15 Stock Images</li>
              </ul>
            </div>
            <button className="package-btn">Start Project <span>→</span></button>
          </div>
          <div className="package-card">
            <div className="package-title">Platinum</div>
            <div className="package-sub">Launch with impact: Essential web solution</div>
            <div className="package-price">$ <span>4495</span></div>
            <div className="package-features package-features-red">
              <ul>
                <li>Unlimited Pages Website</li>
                <li>Custom Made, Interactive, Dynamic & High-End Design</li>
                <li>Customized WordPress or PHP Development</li>
                <li>Fully Mobile Responsive</li>
                <li>Interactive Sliding Banners</li>
                <li>Up to 15 Custom Made Banner Designs</li>
                <li>15 Stock Images</li>
              </ul>
            </div>
            <button className="package-btn">Start Project <span>→</span></button>
          </div>
        </div>
      </section>

      {/* CTA Headstart Section */}
      <section className="cta-headstart-section" style={{ background: '#18191a', position: 'relative', overflow: 'hidden' }}>
        <div className="cta-headstart-revamp" style={{ maxWidth: '900px', margin: '3rem auto', background: '#C6FF1A', borderRadius: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
          <div className="cta-headstart-imgwrap" style={{ flex: '0 0 220px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e9f97a' }}>
            <Image src="/images/jump.png" alt="Get a Headstart" width={120} height={120} style={{ borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', background: '#C6FF1A' }} />
          </div>
          <div className="cta-headstart-main" style={{ flex: 1, padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>Get a Headstart!</h2>
            <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: '2rem' }}>Ready to elevate your online presence? Contact Deepthink Studio today to start building a custom website that drives results. Let's create something amazing together!</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Link href="/contact" className="cta-headstart-chat" style={{ background: '#18191a', color: '#fff', fontWeight: 700, border: 'none', borderRadius: '30px', padding: '0.9rem 2.2rem', fontSize: '1.1rem', cursor: 'pointer', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>Live chat</Link>
              <a href="tel:3853551138" className="cta-headstart-call" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#18191a', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="11" fill="#18191a"/><path d="M7 9c.5 2 2.5 4 4.5 4.5l1.5-1.5c.2-.2.5-.2.7 0l2 1.2c.2.1.3.4.2.6-.4 1.1-1.5 2-2.7 2C9.5 16 6 12.5 6 8.5c0-1.2.9-2.3 2-2.7.2-.1.5 0 .6.2l1.2 2c.1.2.1.5 0 .7L7 9z" fill="#C6FF1A"/></svg>
                <span>(385) 355-1138</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section" style={{ background: 'linear-gradient(to bottom, #18191a 0%, #e9ecef 100%)', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.18">
            <ellipse cx="960" cy="540" rx="900" ry="400" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="700" ry="300" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="500" ry="200" stroke="#222" strokeWidth="2"/>
            <ellipse cx="960" cy="540" rx="300" ry="100" stroke="#222" strokeWidth="2"/>
          </g>
        </svg>
        <div className="quote-bg" style={{ position: 'relative', zIndex: 1 }}>
          <div className="quote-inner">
            <div className="quote-believe">We believe that</div>
            <div className="quote-text">Great design is clear and simple, making ideas easy to understand at a glance.</div>
          </div>
        </div>
        <div className="quote-cta">
          <div className="quote-cta-inner">
            <div className="quote-cta-title">Got a project to discuss?</div>
            <button className="quote-cta-btn">Start Project <span>→</span></button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}