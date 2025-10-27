import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Deepthink Studio',
  description:
    'Reach out to Deepthink Studio for project inquiries, consultations, and support. We are here to help bring your digital vision to life.',
  alternates: {
    canonical: 'https://deepthinkstudio.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Contact Hero Section */}
      <section className="contact-hero" style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #23282b 0%, #f5f6f7 100%)', overflow: 'hidden' }}>
        <svg width="100%" height="100%" viewBox="0 0 1920 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <g opacity="0.18">
            <g>
              <path d="M960 300m-270 0a270 270 0 1 0 540 0a270 270 0 1 0 -540 0" stroke="#222" strokeWidth="2" fill="none"/>
              <path d="M480 300c0-265 695-265 960 0s-695 265-960 0z" stroke="#222" strokeWidth="2" fill="none"/>
              <path d="M0 300c0-265 1920-265 1920 0s-1920 265-1920 0z" stroke="#222" strokeWidth="2" fill="none"/>
            </g>
            <g>
              <path d="M320 300c0-200 1280-200 1600 0s-1280 200-1600 0z" stroke="#222" strokeWidth="1" fill="none"/>
              <path d="M1600 300c0-200-1280-200-1600 0s1280 200 1600 0z" stroke="#222" strokeWidth="1" fill="none"/>
            </g>
          </g>
        </svg>
        <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '4.2rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#18191a', textAlign: 'center', lineHeight: 1.1 }}>Contact Us</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: 0, background: '#18191a', padding: '3rem 0' }}>
        <div style={{ background: '#fff', borderRadius: '20px 0 0 20px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '340px', maxWidth: '400px', height: '340px' }}>
          <Image src="/images/71ae107a-2866-44dc-a912-d83bf31520bf.png" alt="Contact Us" width={400} height={340} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
        </div>
        <div style={{ background: '#C6FF1A', borderRadius: '0 20px 20px 0', padding: '2.5rem 2.5rem 2rem 2.5rem', minWidth: '420px', maxWidth: '700px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: '1.2rem' }}>
            <div style={{ fontSize: '1.1rem', color: '#222', marginBottom: '0.2rem' }}>Let Our Experts Work For You</div>
            <div style={{ fontSize: '2.3rem', fontWeight: 700, color: '#18191a', marginBottom: '1.2rem' }}>Get In Touch!</div>
          </div>
          <form action="https://formspree.io/f/mjkognjj" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#222', fontSize: '1.1rem' }}>👤</span>
                <input type="text" name="name" placeholder="Name" required style={{ flex: 1, border: 'none', borderBottom: '2px dashed #222', background: 'transparent', fontSize: '1.1rem', color: '#222', padding: '0.5rem 0', outline: 'none' }} />
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#222', fontSize: '1.1rem' }}>✉</span>
                <input type="email" name="email" placeholder="E-Mail" required style={{ flex: 1, border: 'none', borderBottom: '2px dashed #222', background: 'transparent', fontSize: '1.1rem', color: '#222', padding: '0.5rem 0', outline: 'none' }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#222', fontSize: '1.1rem' }}>📞</span>
                <input type="text" name="phone" placeholder="Phone Number" style={{ flex: 1, border: 'none', borderBottom: '2px dashed #222', background: 'transparent', fontSize: '1.1rem', color: '#222', padding: '0.5rem 0', outline: 'none' }} />
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#222', fontSize: '1.1rem' }}>💼</span>
                <select name="service" required style={{ flex: 1, border: 'none', borderBottom: '2px dashed #222', background: 'transparent', fontSize: '1.1rem', color: '#222', padding: '0.5rem 0', outline: 'none' }}>
                  <option value="" disabled selected>Select Service</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="Website Design">Website Design</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Web Portal">Web Portal</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="SEO">SEO</option>
                  <option value="Video Animation">Video Animation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ color: '#222', fontSize: '1.1rem', marginTop: '0.3rem' }}>✏</span>
              <textarea name="message" placeholder="Your Message Here" rows={2} required style={{ flex: 1, border: 'none', borderBottom: '2px dashed #222', background: 'transparent', fontSize: '1.1rem', color: '#222', padding: '0.5rem 0', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
            <div style={{ fontSize: '0.95rem', color: '#222', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
              <input type="checkbox" name="consent" required style={{ marginRight: '0.5rem' }} />
              By submitting your contact details, you agree to receive calls and text messages from our team for purposes related to your inquiry. These communications may include, but are not limited to, responses to your questions, follow-up information, and updates regarding our services. Standard messaging and data rates may apply. You may opt out of these communications at any time by following the instructions provided in the messages or contacting us directly. For more details, please review our <a href="/privacy-policy" style={{ color: '#18191a', fontWeight: 600, textDecoration: 'underline' }}>Privacy Policy</a>.
            </div>
            <button type="submit" style={{ background: '#18191a', color: '#fff', border: 'none', borderRadius: '20px', padding: '0.7rem 2.2rem', fontSize: '1.1rem', fontFamily: "'Montserrat', Arial, sans-serif", fontWeight: 700, cursor: 'pointer', marginTop: '0.5rem' }}>Submit</button>
          </form>
        </div>
      </section>
      
      <div className="aboutus-brands" style={{ textAlign: 'center', color: '#222', fontFamily: "'Georgia', serif", fontSize: '1.1rem', marginTop: 0 }}>Teamed up with awesome brands through the years.</div>
    </main>
  );
}