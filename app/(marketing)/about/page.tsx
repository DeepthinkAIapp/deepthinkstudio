import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me | Deepthink Studio',
  description:
    'Discover the story behind Deepthink Studio, our design philosophy, core values, and the results we deliver for clients worldwide.',
  alternates: {
    canonical: 'https://deepthinkstudio.com/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* About Hero Section */}
      <section className="about-hero" style={{ background: 'linear-gradient(to bottom, #18191a 0%, #e9ecef 100%)', position: 'relative', overflow: 'hidden' }}>
        <div id="about-sunflower-bg">
          {/* SVG line pattern overlay */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.18">
              <ellipse cx="960" cy="540" rx="900" ry="400" stroke="#222" strokeWidth="2"/>
              <ellipse cx="960" cy="540" rx="700" ry="300" stroke="#222" strokeWidth="2"/>
              <ellipse cx="960" cy="540" rx="500" ry="200" stroke="#222" strokeWidth="2"/>
              <ellipse cx="960" cy="540" rx="300" ry="100" stroke="#222" strokeWidth="2"/>
            </g>
          </svg>
          {/* Sunflower SVGs */}
          <svg className="sunflower-svg sunflower-center" width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#bfc3c6" strokeWidth="2" opacity="0.45">
              <path d="M450,100 Q700,450 450,800 Q200,450 450,100 Z"/>
              <path d="M450,120 Q680,450 450,780 Q220,450 450,120 Z"/>
              <path d="M450,140 Q660,450 450,760 Q240,450 450,140 Z"/>
              <path d="M450,160 Q640,450 450,740 Q260,450 450,160 Z"/>
              <path d="M450,180 Q620,450 450,720 Q280,450 450,180 Z"/>
              <path d="M450,200 Q600,450 450,700 Q300,450 450,200 Z"/>
              <ellipse cx="450" cy="450" rx="340" ry="340"/>
              <ellipse cx="450" cy="450" rx="300" ry="300"/>
              <ellipse cx="450" cy="450" rx="250" ry="250"/>
              <ellipse cx="450" cy="450" rx="200" ry="200"/>
            </g>
          </svg>
          <svg className="sunflower-svg sunflower-left" width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#bfc3c6" strokeWidth="2" opacity="0.32">
              <ellipse cx="450" cy="450" rx="340" ry="340"/>
              <ellipse cx="450" cy="450" rx="300" ry="300"/>
              <ellipse cx="450" cy="450" rx="250" ry="250"/>
              <ellipse cx="450" cy="450" rx="200" ry="200"/>
            </g>
          </svg>
          <svg className="sunflower-svg sunflower-right" width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#bfc3c6" strokeWidth="2" opacity="0.32">
              <ellipse cx="450" cy="450" rx="340" ry="340"/>
              <ellipse cx="450" cy="450" rx="300" ry="300"/>
              <ellipse cx="450" cy="450" rx="250" ry="250"/>
              <ellipse cx="450" cy="450" rx="200" ry="200"/>
            </g>
          </svg>
        </div>
        <div className="about-hero-content about-hero-content-left">
          <div className="about-hero-sub">Trust Your Brand with our Digital Creativity</div>
          <div className="about-hero-headline"><span>CREATIVE*</span><br/>DESIGN STUDIO</div>
          <div className="about-hero-desc" style={{ fontSize: '1.15rem', fontWeight: 500, color: '#e0e0e0', textShadow: '0 1px 4px rgba(0,0,0,0.18)', background: 'rgba(34,34,34,0.18)', borderRadius: '10px', padding: '0.8rem 1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
            At Deepthink Studio, we elevate your brand with exceptional digital experiences and innovative strategies. Our team combines creative vision with technical expertise to deliver solutions that captivate and engage your audience. Whether you're looking to build a powerful brand identity, launch an interactive website, or implement cutting-edge marketing ideas, we're dedicated to helping your business thrive online.
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="about-contact-form-wrap" style={{ position: 'relative', zIndex: 10 }}>
          <div className="about-contact-form-title">We're Always Happy To Hear From Our Friends</div>
          <div className="about-contact-form-desc">Contact us for partnership opportunities and product information.</div>
          <form className="about-contact-form" action="https://formspree.io/f/mjkognjj" method="POST">
            <div className="about-contact-form-row">
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="text" name="phone" placeholder="Phone Number" />
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
            <textarea name="message" placeholder="Leave us a message" rows={3} required></textarea>
            <button type="submit" className="about-contact-form-submit">Submit</button>
          </form>
        </div>

        {/* About Us Section */}
        <section className="aboutus-section" style={{ background: 'none', maxWidth: '1200px', margin: '3rem auto', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'stretch', gap: '3rem' }}>
          <div className="aboutus-image-col" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg className="aboutus-torus-svg aboutus-torus-center" width="420" height="360" viewBox="0 0 420 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="torus-group-center" stroke="#222" strokeWidth="1.2" opacity="0.7">
                <g id="torus-dots-center"></g>
              </g>
            </svg>
          </div>
          <div className="aboutus-content-col" style={{ flex: '1.2', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', justifyContent: 'center' }}>
            <h2 className="aboutus-title" style={{ fontSize: '3rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#222', marginBottom: '1.2rem' }}>Who Are We?<br/>About Us</h2>
            <div className="aboutus-desc" style={{ fontSize: '1.3rem', color: '#222', marginBottom: '2.2rem', maxWidth: '600px' }}>
              We're Deepthink Studio, a top-tier digital agency known for our creative web design prowess in the business of turning digital dreams into reality. We're all about crafting visually pleasing websites that stand out from the crowd. With a knack for blending innovation and artistic flair, we elevate businesses to new heights online. Whether you're after a captivating web presence or sturdy e-commerce solutions, we've got the skills and the team to make it happen.
            </div>
            <div className="aboutus-btn-row" style={{ marginTop: '0.5rem' }}>
              <button className="aboutus-btn start-project-btn" style={{ background: '#222', color: '#fff', border: 'none', borderRadius: '20px', padding: '0.7rem 1.5rem', fontSize: '1rem', fontFamily: "'Georgia', serif", fontWeight: 700, cursor: 'pointer', marginRight: '0.5rem', transition: 'background 0.2s, color 0.2s' }}>Start Project</button>
              <span className="aboutus-btn-arrow" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" fill="#C6FF1A"/>
                  <path d="M14 18h8M20 14l4 4-4 4" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </section>
      </section>
      
      <div className="aboutus-brands" style={{ textAlign: 'center', color: '#222', fontFamily: "'Georgia', serif", fontSize: '1.1rem', marginTop: 0 }}>Teamed up with awesome brands through the years.</div>
    </main>
  );
}