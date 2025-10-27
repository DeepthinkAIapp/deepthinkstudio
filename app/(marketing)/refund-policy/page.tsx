import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Deepthink Studio',
  description:
    'Learn about eligibility, process, and terms for refunds on Deepthink Studio services.',
  alternates: {
    canonical: 'https://deepthinkstudio.com/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <main>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: 1.6 }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: "'Georgia', serif", fontWeight: 700, color: '#18191a', marginBottom: '2rem', textAlign: 'center' }}>
          Refund Policy
        </h1>
        
        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
          Last updated: {new Date().toLocaleDateString()}
        </div>

        <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Overview
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            At Deepthink Studio, we strive to provide exceptional service and ensure client satisfaction. This refund policy outlines the terms and conditions under which refunds may be issued for our services.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Refund Eligibility
          </h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Eligible for Refund
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Refunds may be considered in the following circumstances:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Service not delivered as agreed in the contract</li>
            <li>Significant deviation from agreed specifications</li>
            <li>Failure to meet agreed deadlines without client approval</li>
            <li>Technical issues that prevent service delivery</li>
            <li>Cancellation within 24 hours of project initiation (before work begins)</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Not Eligible for Refund
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Refunds will not be issued in the following cases:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Change of mind after work has commenced</li>
            <li>Client-provided content or materials are inadequate</li>
            <li>Client delays in providing feedback or approvals</li>
            <li>Services completed according to agreed specifications</li>
            <li>Third-party service failures (hosting, domain, etc.)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Refund Process
          </h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            How to Request a Refund
          </h3>
          <ol style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Contact us via email at info@deepthinkstudio.com</li>
            <li>Provide detailed explanation of the issue</li>
            <li>Include project details and contract information</li>
            <li>Submit any relevant documentation</li>
          </ol>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Review Process
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            All refund requests will be reviewed within 5-7 business days. We may request additional information or clarification during the review process.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Refund Amounts
          </h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Partial Refunds
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Partial refunds may be issued based on:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Percentage of work completed</li>
            <li>Value of deliverables already provided</li>
            <li>Time and resources invested</li>
            <li>Specific circumstances of the case</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Processing Time
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Approved refunds will be processed within 10-15 business days and returned to the original payment method.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Dispute Resolution
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            If you are not satisfied with our refund decision, you may:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Request a second review by our management team</li>
            <li>Provide additional documentation or evidence</li>
            <li>Seek mediation through appropriate channels</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Service-Specific Policies
          </h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Web Design Projects
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Refunds for web design projects are calculated based on milestones completed. Once a milestone is approved by the client, that portion of the project is considered delivered.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
            Ongoing Services
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            For monthly services (hosting, maintenance, etc.), refunds are prorated based on unused service time.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Contact Information
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            For refund requests or questions about this policy, please contact us:
          </p>
          <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> info@deepthinkstudio.com</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Phone:</strong> (385) 355-1138</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Address:</strong> 620 S 7th St PMB 1943, Las Vegas, Nevada 89101, United States</p>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#18191a', marginBottom: '1rem' }}>
            Policy Updates
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            This refund policy may be updated from time to time. We will notify clients of any significant changes via email or through our website.
          </p>
        </section>
      </div>
    </main>
  );
}