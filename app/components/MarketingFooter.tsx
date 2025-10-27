import Image from 'next/image';
import Link from 'next/link';

export default function MarketingFooter() {
  return (
    <footer className="footer-new">
      <div className="footer-main">
        <div className="footer-col footer-brand">
          <div className="footer-logo">
            <Image
              src="/images/logo.png"
              alt="Deepthink Studio Logo"
              className="logo-flip"
              width={80}
              height={60}
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
            <span className="footer-logo-text">
              <span>DEEPTHINK</span>
              <br />
              <span className="footer-logo-sub">STUDIO</span>
            </span>
          </div>
          <div className="footer-desc">
            Deepthink Studio was founded on the principle that a strong digital presence can elevate
            brands worldwide. We empower businesses to grow and thrive online through innovative web
            design and strategic digital solutions.
          </div>
        </div>

        <div className="footer-col footer-links">
          <div className="footer-links-title">Quick Links</div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/packages">Packages</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-use">Terms of Use</Link>
            </li>
            <li>
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-services">
          <div className="footer-links-title">Our Services</div>
          <ul>
            <li>
              <Link href="/seo-services">SEO Services</Link>
            </li>
            <li>
              <Link href="/web-design-services">Web Design Services</Link>
            </li>
            <li>
              <Link href="/digital-marketing-services">Digital Marketing</Link>
            </li>
            <li>
              <Link href="/ecommerce-development">E-commerce Development</Link>
            </li>
            <li>
              <Link href="/enterprise-seo">Enterprise SEO</Link>
            </li>
            <li>
              <Link href="/ppc-management">PPC Management</Link>
            </li>
            <li>
              <Link href="/ui-ux-design">UI/UX Design</Link>
            </li>
            <li>
              <Link href="/shopify-development">Shopify Development</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <div className="footer-links-title">Contact Us</div>
          <div className="footer-contact-list">
            <div>
              <svg width="16" height="16" fill="#222" aria-hidden="true">
                <circle cx="8" cy="8" r="8" fill="#fff" />
                <text
                  x="8"
                  y="13"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="Arial"
                  fill="#222"
                >
                  &#9742;
                </text>
              </svg>{' '}
              (385) 355-1138
            </div>
            <div>
              <svg width="16" height="16" fill="#222" aria-hidden="true">
                <circle cx="8" cy="8" r="8" fill="#fff" />
                <text
                  x="8"
                  y="13"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="Arial"
                  fill="#222"
                >
                  @
                </text>
              </svg>{' '}
              <a href="mailto:info@deepthinkstudio.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                info@deepthinkstudio.com
              </a>
            </div>
            <div>
              <svg width="16" height="16" fill="#222" aria-hidden="true">
                <circle cx="8" cy="8" r="8" fill="#fff" />
                <text
                  x="8"
                  y="13"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="Arial"
                  fill="#222"
                >
                  &#8962;
                </text>
              </svg>{' '}
              620 S 7th St PMB 1943, Las Vegas, Nevada 89101, United States
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-copyright">
          <span>&copy;</span> 2025 Deepthink Studio | All rights reserved.
        </div>
        <div className="footer-legal">
          All content, including logos, images, designs, and text, is the intellectual property of
          Deepthink Studio unless otherwise stated. Any third-party trademarks, logos, or brand
          names displayed on this website are the property of their respective owners and are used
          strictly for illustrative purposes. Portfolio examples and case studies shown on this
          website are based on real work completed by our team; however, some names, visuals, or
          details may be modified to honor client confidentiality agreements under our
          Non-Disclosure Agreements (NDAs). These samples are intended to demonstrate the quality
          and style of our work, and do not claim affiliation or endorsement unless explicitly
          stated.
        </div>
        <div className="footer-dba">
          Deepthink Studio is DBA of <b>DEEPTHINK ENTERPRISES LLC</b>
        </div>
      </div>
    </footer>
  );
}
