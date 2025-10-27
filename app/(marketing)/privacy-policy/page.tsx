import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Deepthink Studio',
  description:
    'Review the Deepthink Studio privacy policy to learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://deepthinkstudio.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: 1.6 }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#18191a', marginBottom: '2rem', textAlign: 'center' }}>
          Privacy Policy
        </h1>
        
        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
          Last updated: {new Date().toLocaleDateString()}
        </div>

        <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Introduction
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Deepthink Studio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Information We Collect
          </h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Personal Information
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Fill out contact forms or request quotes</li>
            <li>Subscribe to our newsletter</li>
            <li>Communicate with us via email or phone</li>
            <li>Use our services</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            This information may include your name, email address, phone number, company name, and project details.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Automatically Collected Information
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            We may automatically collect certain information about your device and usage patterns, including:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website information</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            How We Use Your Information
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We use the information we collect to:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze website usage and improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Information Sharing and Disclosure
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>With service providers who assist us in operating our website and conducting our business</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or acquisition</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Data Security
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Your Rights
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            You have the right to:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Access and update your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Cookies and Tracking Technologies
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Changes to This Privacy Policy
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Contact Us
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> info@deepthinkstudio.com</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Phone:</strong> (385) 355-1138</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Address:</strong> 620 S 7th St PMB 1943, Las Vegas, Nevada 89101, United States</p>
          </div>
        </section>
      </div>
    </main>
  );
}