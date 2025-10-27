import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Deepthink Studio',
  description:
    'Understand the terms governing your use of Deepthink Studio services and website.',
  alternates: {
    canonical: 'https://deepthinkstudio.com/terms-of-use',
  },
};

export default function TermsOfUsePage() {
  return (
    <main>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: 1.6 }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#18191a', marginBottom: '2rem', textAlign: 'center' }}>
          Terms of Use
        </h1>
        
        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
          Last updated: {new Date().toLocaleDateString()}
        </div>

        <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Agreement to Terms
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            By accessing and using Deepthink Studio's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Use License
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Permission is granted to temporarily download one copy of the materials on Deepthink Studio's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Service Terms
          </h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Project Scope
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            All services are provided according to the agreed project scope and specifications. Any changes to the project scope may result in additional charges.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Payment Terms
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Payment terms are as specified in individual service agreements. Late payments may result in project delays or suspension of services.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Intellectual Property
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Upon full payment, clients receive ownership of the final deliverables. Deepthink Studio retains the right to showcase completed work in our portfolio.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Disclaimer
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            The materials on Deepthink Studio's website are provided on an 'as is' basis. Deepthink Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Limitations
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            In no event shall Deepthink Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Deepthink Studio's website, even if Deepthink Studio or a Deepthink Studio authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Accuracy of Materials
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            The materials appearing on Deepthink Studio's website could include technical, typographical, or photographic errors. Deepthink Studio does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Links
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Deepthink Studio has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Deepthink Studio of the site.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Modifications
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Deepthink Studio may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Governing Law
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            These terms and conditions are governed by and construed in accordance with the laws of Nevada, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Contact Information
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            If you have any questions about these Terms of Use, please contact us:
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