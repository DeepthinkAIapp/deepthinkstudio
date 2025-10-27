'use client';

import Image from 'next/image';
import Link from 'next/link';
import { openContactModal } from './ContactModal';

export default function MarketingHeader() {
  return (
    <header className="navbar glassy-header">
      <div className="navbar-inner">
        <div className="logo-group">
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            <span className="logo-icon">
              <Image
                src="/images/logo.png"
                alt="Deepthink Studio Logo"
                className="logo-flip"
                width={40}
                height={40}
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </span>
            <span className="logo-text">
              DEEPTHINK
              <br />
              <span className="logo-sub">STUDIO</span>
            </span>
          </Link>
        </div>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <div className="dropdown">
            <Link href="/services" className="dropdown-toggle">
              Services <span className="dropdown-arrow">&#9662;</span>
            </Link>
            <div className="dropdown-menu">
              <Link href="/services#core">Core Growth Services</Link>
              <Link href="/services#industry-seo">Industry SEO Playbooks</Link>
              <Link href="/services#specialized-marketing">Specialised Acquisition</Link>
              <Link href="/services#industry-web-design">Industry Web Design</Link>
              <Link href="/services#additional-web">Advanced Web Engineering</Link>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '0.5rem 0' }} />
              <Link href="/seo-services">SEO Services</Link>
              <Link href="/web-design-services">Web Design Services</Link>
              <Link href="/digital-marketing-services">Digital Marketing</Link>
              <Link href="/ecommerce-development">E-commerce Development</Link>
              <Link href="/enterprise-seo">Enterprise SEO</Link>
            </div>
          </div>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/contact">Contact Us</Link>
          <Link
            href="/blog"
            style={{ fontWeight: 700, color: '#C6FF1A' }}
          >
            Blog
          </Link>
        </nav>

        <div className="header-actions">
          <button className="start-project-btn" type="button" onClick={openContactModal}>
            Start Project
          </button>
          <button className="arrow-btn" type="button" aria-label="Next">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#C6FF1A" />
              <path
                d="M13 10l6 6-6 6"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <a
            href="mailto:info@deepthinkstudio.com"
            className="contact-btn"
            aria-label="Contact"
            style={{ display: 'inline-block' }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#222" />
              <path
                d="M10 16c2.5 2.5 6.5 2.5 9 0"
                stroke="#C6FF1A"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="16" cy="13" r="2" fill="#C6FF1A" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
