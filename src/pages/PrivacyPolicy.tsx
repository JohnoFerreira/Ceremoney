import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="09/05/2025">
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">CEREMONEY™ PRIVACY POLICY</h3>
          <p className="text-blue-800">
            Version 1.1 09/05/2025
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. INTRODUCTION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1.1</h3>
              <p>
                Ceremoney (Pty) Ltd ("we," "our," or "us") is committed to protecting your privacy and personal 
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our mobile application and services. This policy complies with the 
                Protection of Personal Information Act (POPIA) and other applicable data protection laws.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1.2</h3>
              <p>
                This Privacy Policy applies to all users of the Ceremoney mobile application ("App") and 
                related services ("Services"), including Event Hosts, Guests, Venue Partners, and Service 
                Representatives.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1.3</h3>
              <p>
                By using our App and Services, you consent to the collection, use, and disclosure of your 
                personal information as described in this Privacy Policy. If you do not agree with this 
                Privacy Policy, please do not use our App or Services.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. INFORMATION WE COLLECT</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.1 Personal Information</h3>
              <p>We collect information you provide directly, including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Name, email address, and phone number</li>
                <li>Profile information and preferences</li>
                <li>Event details and guest lists</li>
                <li>Payment information (processed securely through Paystack)</li>
                <li>Communication preferences</li>
                <li>Identity verification documents (when required)</li>
                <li>Banking details for payment processing</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.2 Usage Information</h3>
              <p>We automatically collect information about your app usage:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Device information (type, operating system, unique identifiers)</li>
                <li>App usage patterns and feature interactions</li>
                <li>Transaction history and order details</li>
                <li>Location data (with your permission, for venue services)</li>
                <li>Log files and analytics data</li>
                <li>IP address and browser information</li>
                <li>Crash reports and performance data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.3 WhatsApp Integration</h3>
              <p>
                When you use our WhatsApp invitation feature, we access your contact list (with permission) 
                to send event invitations. We do not store your entire contact list permanently and only 
                retain contact information necessary for event management.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.4 Camera and Photo Access</h3>
              <p>
                With your permission, we may access your device's camera and photo library for profile 
                pictures, event photos, and identity verification purposes.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. HOW WE USE YOUR INFORMATION</h2>
          
          <div className="space-y-4">
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Provide and maintain our event payment management services</li>
              <li>Process transactions and manage bar tabs</li>
              <li>Send event invitations via WhatsApp</li>
              <li>Verify user identity and prevent fraud</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send important service notifications and updates</li>
              <li>Analyze usage patterns to improve our services</li>
              <li>Prevent fraud and ensure platform security</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Generate analytics and reports for business purposes</li>
              <li>Facilitate communication between event participants</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. INFORMATION SHARING AND DISCLOSURE</h2>
          
          <div className="space-y-4">
            <p>We do not sell your personal information. We may share information in these circumstances:</p>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 Service Providers</h3>
              <p>We share information with trusted third parties who assist us:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Paystack (payment processing)</li>
                <li>Cloud hosting and data storage providers</li>
                <li>Analytics and performance monitoring services</li>
                <li>Customer support platforms</li>
                <li>WhatsApp Business API providers</li>
                <li>Identity verification services</li>
                <li>Marketing and communication platforms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Event Participants</h3>
              <p>
                Within events, certain information is shared between hosts, venues, and guests as necessary 
                for service delivery (e.g., order details, guest names for event management, contact 
                information for coordination).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.3 Legal Requirements</h3>
              <p>
                We may disclose information when required by law, court order, or to protect our rights, 
                safety, and the safety of others. This includes compliance with tax obligations, anti-money 
                laundering requirements, and other regulatory obligations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.4 Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                to the acquiring entity, subject to the same privacy protections.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. PAYMENT INFORMATION SECURITY</h2>
          
          <div className="space-y-4">
            <p>
              Payment card information is processed securely through Paystack, our PCI DSS compliant payment 
              processor. We do not store complete payment card details on our servers. Paystack maintains 
              the highest security standards for payment processing and data protection.
            </p>
            
            <p>
              All financial transactions are encrypted using industry-standard SSL/TLS protocols. We implement 
              additional security measures including tokenization and fraud detection systems to protect your 
              financial information.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. DATA SECURITY MEASURES</h2>
          
          <div className="space-y-4">
            <p>We implement comprehensive security measures including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Encryption of data in transit and at rest using AES-256 encryption</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Multi-factor authentication for administrative access</li>
              <li>Access controls and authentication requirements</li>
              <li>Employee training on data protection practices</li>
              <li>Incident response procedures and breach notification protocols</li>
              <li>Regular backup and disaster recovery testing</li>
              <li>Network security monitoring and intrusion detection</li>
              <li>Secure development practices and code reviews</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. DATA RETENTION</h2>
          
          <div className="space-y-4">
            <p>
              We retain your personal information for as long as necessary to provide our services and fulfill 
              legal obligations. Specific retention periods include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Account information: Until account deletion plus 7 years for legal compliance</li>
              <li>Transaction records: 7 years for financial and tax purposes</li>
              <li>Event data: 3 years for service improvement and dispute resolution</li>
              <li>Marketing communications: Until you unsubscribe</li>
              <li>Support communications: 2 years after resolution</li>
              <li>Analytics data: 2 years in aggregated, anonymized form</li>
              <li>Security logs: 1 year for security monitoring purposes</li>
            </ul>
            
            <p>
              After the retention period expires, we securely delete or anonymize your personal information 
              in accordance with our data retention schedule and applicable laws.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. YOUR RIGHTS UNDER POPIA</h2>
          
          <div className="space-y-4">
            <p>As a South African resident, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Access your personal information we hold</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your personal information (subject to legal requirements)</li>
              <li>Object to processing for direct marketing</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Lodge a complaint with the Information Regulator</li>
              <li>Receive information about data breaches that may affect you</li>
              <li>Request data portability in certain circumstances</li>
              <li>Restrict processing in certain circumstances</li>
            </ul>
            
            <p>
              To exercise these rights, please contact us using the details provided in Section 12. We will 
              respond to your request within 30 days and may require identity verification to protect your privacy.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. INTERNATIONAL DATA TRANSFERS</h2>
          
          <div className="space-y-4">
            <p>
              Your information may be transferred to and processed in countries outside South Africa where 
              our service providers operate. We ensure appropriate safeguards are in place to protect your 
              information in accordance with this Privacy Policy and applicable laws.
            </p>
            
            <p>
              These safeguards include standard contractual clauses, adequacy decisions, and other legally 
              recognized transfer mechanisms. We only transfer data to countries or organizations that provide 
              adequate protection for personal information.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. CHILDREN'S PRIVACY</h2>
          
          <div className="space-y-4">
            <p>
              Our services are not intended for children under 18. We do not knowingly collect personal 
              information from children under 18. If we become aware that we have collected such information, 
              we will take steps to delete it promptly.
            </p>
            
            <p>
              If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us immediately so we can take appropriate action.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. COOKIES AND TRACKING TECHNOLOGIES</h2>
          
          <div className="space-y-4">
            <p>
              We use cookies and similar tracking technologies to enhance your experience, analyze usage 
              patterns, and provide personalized content. Our Cookie Policy provides detailed information 
              about the types of cookies we use and how you can manage them.
            </p>
            
            <p>
              You can control cookies through your browser settings, but disabling certain cookies may 
              affect the functionality of our services.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. CHANGES TO THIS PRIVACY POLICY</h2>
          
          <div className="space-y-4">
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, 
              or applicable laws. We will notify you of material changes through the app, email, or our website. 
              Your continued use of our services after changes become effective constitutes acceptance of the 
              updated policy.
            </p>
            
            <p>
              We encourage you to review this Privacy Policy regularly to stay informed about how we protect 
              your information.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. CONTACT US</h2>
          
          <div className="space-y-4">
            <p>
              For questions about this Privacy Policy or to exercise your rights, contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p><strong>Data Protection Officer:</strong> Ceremoney (Pty) Ltd</p>
              <p><strong>Company Registration:</strong> 2019/231352/07</p>
              <p><strong>Address:</strong> 10 Wood Dove Place, Glen Eagles Estate, Kempton Park, 1630</p>
              <p><strong>Email:</strong> privacy@ceremoney.co.za</p>
              <p><strong>General Contact:</strong> info@ceremoney.co.za</p>
              <p><strong>Phone:</strong> 062 404 1549</p>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Information Regulator:</strong> If you believe we have not addressed your privacy concerns 
                adequately, you may lodge a complaint with the Information Regulator of South Africa at{' '}
                <a href="https://www.justice.gov.za/inforeg/" className="text-blue-600 hover:underline">
                  www.justice.gov.za/inforeg/
                </a>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. CONSENT AND ACKNOWLEDGMENT</h2>
          
          <div className="space-y-4">
            <p>
              By using the Ceremoney App and Services, you acknowledge that you have read, understood, and 
              agree to this Privacy Policy. You consent to the collection, use, and disclosure of your 
              personal information as described herein.
            </p>
            
            <p>
              You may withdraw your consent at any time by discontinuing use of our services and requesting 
              deletion of your account, subject to our legal obligations to retain certain information.
            </p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;