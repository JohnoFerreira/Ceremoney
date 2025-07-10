import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';

const VenueContract = () => {
  return (
    <LegalPageLayout title="Venue Partnership Agreement" lastUpdated="09/05/2025">
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">CEREMONEY™ AND VENUE PARTNER TERMS OF SERVICE</h3>
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
                Ceremoney is the provider of a software application ("the App") and related services 
                (collectively "the Services") used to manage, track and arrange payment for purchases 
                made by guests at hosted events.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1.2</h3>
              <p>
                The Ceremoney App is available for download from leading app stores for installation on 
                compatible electronic devices. The App is owned and operated by Ceremoney (Pty) Ltd, 
                registration number: 2019/231352/07 of 10 Wood Dove Place, Glen Eagles Estate, 
                Kempton Park, 1630 (hereafter referred to as "CEREMONEY", "we", "us").
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1.3</h3>
              <p>
                These Terms of Service ("the Terms") govern the relationship between Ceremoney and 
                venue partners ("Venue Partners") who wish to integrate Ceremoney's services into 
                their business operations. By entering into a partnership with Ceremoney, you acknowledge 
                that you have read and agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1.4</h3>
              <p>
                We may revise these Terms at any time provided that notice of any such revision shall 
                be prominently displayed to Venue Partners. Your continued partnership with Ceremoney 
                after posting notice of any revision to these Terms shall be deemed to constitute your 
                acceptance of the revised Terms.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. DEFINITIONS AND INTERPRETATION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.1</h3>
              <p>
                In these Terms, unless the context expressly indicates otherwise, the following words 
                and expressions shall have the meanings assigned to them below:
              </p>
            </div>

            <div className="space-y-3 ml-4">
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.1</h4>
                <p>
                  <strong>"Commencement Date"</strong> means the date on which the Venue Partner first 
                  enters into partnership with Ceremoney;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.2</h4>
                <p>
                  <strong>"Event Host"</strong> means a User who creates an Event on the App for the purpose 
                  of managing payments and purchases by Guests at that Event;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.3</h4>
                <p>
                  <strong>"Event"</strong> means a social gathering, function, or occasion created by an Event Host 
                  on the App for the purpose of managing payments and purchases by Guests at the Venue Partner's premises;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.4</h4>
                <p>
                  <strong>"Guest"</strong> means a User who has been invited to participate in an Event and who 
                  uses the App to make purchases at that Event;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.5</h4>
                <p>
                  <strong>"Payment Service Provider"</strong> means a third party who provides payment processing 
                  services to Ceremoney, including but not limited to Paystack;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.6</h4>
                <p>
                  <strong>"Service Representative"</strong> means a person employed by or representing the 
                  Venue Partner who uses the App to process orders and payments at Events;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.7</h4>
                <p>
                  <strong>"User"</strong> means any person who downloads, installs, or uses the App;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.8</h4>
                <p>
                  <strong>"Venue Partner"</strong> means a business or organization that has entered into this 
                  partnership agreement with Ceremoney to provide services at Events hosted at their premises.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. PARTNERSHIP SCOPE AND SERVICES</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 Ceremoney Services</h3>
              <p>Ceremoney will provide the following services to Venue Partners:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Access to the Ceremoney mobile application platform</li>
                <li>Payment processing infrastructure through our Payment Service Provider</li>
                <li>Real-time order management and tracking systems</li>
                <li>Analytics and reporting tools for business insights</li>
                <li>Staff training and onboarding support</li>
                <li>Technical support and maintenance</li>
                <li>Marketing and promotional support</li>
                <li>Customer support for event participants</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 Integration Requirements</h3>
              <p>
                Venue Partners agree to integrate Ceremoney's services into their operations by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Installing and maintaining the Ceremoney App on designated devices</li>
                <li>Training staff members to become Service Representatives</li>
                <li>Providing reliable internet connectivity for app functionality</li>
                <li>Maintaining up-to-date menu and pricing information in the system</li>
                <li>Following Ceremoney's operational procedures and guidelines</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. VENUE PARTNER RESPONSIBILITIES</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 Operational Responsibilities</h3>
              <p>Venue Partners agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Provide reliable internet connectivity with sufficient bandwidth for app operations</li>
                <li>Ensure adequate staffing levels during events to handle Ceremoney orders</li>
                <li>Maintain service quality standards consistent with their brand and Ceremoney's expectations</li>
                <li>Process orders promptly and accurately through the Ceremoney system</li>
                <li>Provide excellent customer service to Event Hosts and Guests</li>
                <li>Maintain cleanliness and safety standards at their premises</li>
                <li>Comply with all applicable laws, regulations, and licensing requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Staff Training and Management</h3>
              <p>Venue Partners must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Designate and train Service Representatives to use the Ceremoney App</li>
                <li>Ensure Service Representatives understand and follow Ceremoney procedures</li>
                <li>Maintain adequate training records and certifications</li>
                <li>Provide ongoing training as needed for new features or updates</li>
                <li>Report any staff-related issues or concerns to Ceremoney promptly</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.3 Data and Information Management</h3>
              <p>Venue Partners agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Maintain accurate and up-to-date menu information, pricing, and availability</li>
                <li>Protect customer data and privacy in accordance with applicable laws</li>
                <li>Report any data security incidents or breaches immediately</li>
                <li>Provide necessary business information for partnership management</li>
                <li>Cooperate with Ceremoney's audit and compliance requirements</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. FINANCIAL TERMS AND PAYMENT</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Revenue Sharing</h3>
              <p>
                The specific revenue sharing arrangements, commission structures, and payment terms 
                will be detailed in a separate commercial agreement between Ceremoney and the Venue Partner. 
                These arrangements may vary based on factors such as venue size, event volume, and 
                partnership level.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Payment Processing</h3>
              <p>
                All payments will be processed through Ceremoney's Payment Service Provider. Venue Partners 
                will receive payments according to the agreed schedule, minus applicable fees and commissions. 
                Detailed transaction reports will be provided for reconciliation purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 Fees and Charges</h3>
              <p>
                Any applicable platform fees, transaction fees, or service charges will be clearly 
                disclosed in the commercial agreement. Venue Partners are responsible for their own 
                operational costs, including internet connectivity, device maintenance, and staff training.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. INTELLECTUAL PROPERTY AND BRANDING</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Ceremoney Intellectual Property</h3>
              <p>
                All intellectual property rights in the Ceremoney App, platform, and related materials 
                remain the exclusive property of Ceremoney. Venue Partners are granted a limited, 
                non-exclusive license to use the App and related materials solely for the purposes 
                of this partnership.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2 Venue Partner Branding</h3>
              <p>
                Venue Partners retain ownership of their own trademarks, logos, and branding materials. 
                Ceremoney may use Venue Partner branding within the App and for promotional purposes 
                related to the partnership, subject to the Venue Partner's approval.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.3 Co-Marketing</h3>
              <p>
                Both parties may engage in co-marketing activities to promote the partnership and 
                services. Any use of the other party's branding or intellectual property for marketing 
                purposes requires prior written approval.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. DATA PROTECTION AND PRIVACY</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7.1 Data Processing</h3>
              <p>
                Both parties acknowledge that they may process personal data in connection with this 
                partnership. Each party agrees to comply with all applicable data protection laws, 
                including the Protection of Personal Information Act (POPIA).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7.2 Data Security</h3>
              <p>
                Venue Partners must implement appropriate technical and organizational measures to 
                protect personal data processed through the Ceremoney platform. This includes securing 
                devices, maintaining confidentiality, and reporting any security incidents promptly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7.3 Data Sharing</h3>
              <p>
                Customer data collected through the Ceremoney platform remains subject to Ceremoney's 
                <Link to="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>. Venue Partners may only use such data for the purposes of providing 
                services under this partnership and must not share it with third parties without 
                appropriate consent.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. QUALITY STANDARDS AND COMPLIANCE</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.1 Service Standards</h3>
              <p>
                Venue Partners must maintain high standards of service quality, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Timely and accurate order processing</li>
                <li>Professional customer service</li>
                <li>Clean and safe premises</li>
                <li>Compliance with health and safety regulations</li>
                <li>Adherence to licensing requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.2 Performance Monitoring</h3>
              <p>
                Ceremoney may monitor Venue Partner performance through various metrics, including 
                order accuracy, processing times, customer satisfaction, and compliance with procedures. 
                Regular performance reviews may be conducted to ensure standards are maintained.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.3 Corrective Actions</h3>
              <p>
                If performance standards are not met, Ceremoney may require corrective actions, 
                additional training, or other remedial measures. Persistent non-compliance may result 
                in suspension or termination of the partnership.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. TERM AND TERMINATION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">9.1 Term</h3>
              <p>
                This partnership agreement shall commence on the Commencement Date and shall continue 
                until terminated in accordance with these Terms. The initial term and any renewal 
                periods will be specified in the commercial agreement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">9.2 Termination for Convenience</h3>
              <p>
                Either party may terminate this partnership with thirty (30) days written notice to 
                the other party. Such termination shall not affect any obligations or liabilities 
                that have accrued prior to the termination date.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">9.3 Termination for Cause</h3>
              <p>
                Either party may terminate this partnership immediately upon written notice if:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>The other party materially breaches these Terms and fails to cure such breach within fifteen (15) days of written notice</li>
                <li>The other party becomes insolvent, files for bankruptcy, or ceases operations</li>
                <li>The other party engages in fraudulent or illegal activities</li>
                <li>The other party violates data protection or privacy requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">9.4 Effects of Termination</h3>
              <p>
                Upon termination, Venue Partners must cease using the Ceremoney App and return or 
                destroy any confidential information. Outstanding financial obligations will be 
                settled according to the agreed terms.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. LIMITATION OF LIABILITY</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10.1</h3>
              <p>
                To the maximum extent permitted by law, Ceremoney's liability under this partnership 
                is limited to the direct costs of the services provided. Ceremoney shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10.2</h3>
              <p>
                Venue Partners acknowledge that Ceremoney is not responsible for venue-related issues, 
                staff performance, customer satisfaction issues arising from venue operations, or 
                event outcomes beyond the platform services provided.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10.3</h3>
              <p>
                Each party's total liability under this agreement shall not exceed the total fees 
                paid or payable under the partnership in the twelve (12) months preceding the claim.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. INDEMNIFICATION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">11.1</h3>
              <p>
                Venue Partners agree to indemnify and hold harmless Ceremoney from any claims, damages, 
                losses, or expenses arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Venue Partner's breach of these Terms</li>
                <li>Negligent or wrongful acts by Venue Partner or its staff</li>
                <li>Venue-related incidents or accidents</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Infringement of third-party rights</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. SUPPORT AND TRAINING</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">12.1 Initial Training</h3>
              <p>
                Ceremoney will provide comprehensive initial training for Venue Partner staff, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>App functionality and navigation</li>
                <li>Order processing procedures</li>
                <li>Customer service best practices</li>
                <li>Troubleshooting common issues</li>
                <li>Data protection and privacy requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">12.2 Ongoing Support</h3>
              <p>
                Ceremoney provides ongoing technical support, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Help desk support during business hours</li>
                <li>Software updates and maintenance</li>
                <li>Performance monitoring and optimization</li>
                <li>Additional training as needed</li>
                <li>Regular check-ins and partnership reviews</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. CONFIDENTIALITY</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">13.1</h3>
              <p>
                Both parties acknowledge that they may have access to confidential information belonging 
                to the other party. Each party agrees to maintain the confidentiality of such information 
                and use it solely for the purposes of this partnership.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">13.2</h3>
              <p>
                Confidential information includes, but is not limited to, business strategies, customer 
                data, financial information, technical specifications, and proprietary processes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">13.3</h3>
              <p>
                The confidentiality obligations shall survive termination of this partnership and 
                continue for a period of five (5) years thereafter.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">14.1</h3>
              <p>
                This partnership agreement shall be governed by and construed in accordance with the 
                laws of the Republic of South Africa.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">14.2</h3>
              <p>
                Any disputes arising from this partnership shall first be addressed through good faith 
                negotiation between the parties. If negotiation fails, disputes shall be resolved through 
                binding arbitration in accordance with the rules of the Arbitration Foundation of Southern Africa.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">15. GENERAL PROVISIONS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">15.1 Entire Agreement</h3>
              <p>
                These Terms, together with any commercial agreement and other documents referenced 
                herein, constitute the entire agreement between the parties and supersede all prior 
                negotiations, representations, or agreements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">15.2 Amendments</h3>
              <p>
                These Terms may only be amended by written agreement signed by both parties, except 
                for updates made by Ceremoney in accordance with Section 1.4.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">15.3 Severability</h3>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining 
                provisions shall continue in full force and effect.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">15.4 Force Majeure</h3>
              <p>
                Neither party shall be liable for any failure or delay in performance due to circumstances 
                beyond their reasonable control, including but not limited to acts of God, natural disasters, 
                war, terrorism, or government actions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">16. CONTACT INFORMATION</h2>
          <p>
            For questions about this partnership agreement or to discuss partnership opportunities:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>Company:</strong> Ceremoney (Pty) Ltd</p>
            <p><strong>Registration Number:</strong> 2019/231352/07</p>
            <p><strong>Address:</strong> 10 Wood Dove Place, Glen Eagles Estate, Kempton Park, 1630</p>
            <p><strong>Email:</strong> partnerships@ceremoney.co.za</p>
            <p><strong>General Contact:</strong> info@ceremoney.co.za</p>
            <p><strong>Phone:</strong> 062 404 1549</p>
            <p><strong>Subject:</strong> Venue Partnership Inquiry</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">17. ACKNOWLEDGMENT</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">17.1</h3>
              <p>
                By entering into partnership with Ceremoney, the Venue Partner acknowledges that they 
                have read, understood, and agree to be bound by these Terms of Service. This partnership 
                represents a mutual commitment to providing excellent service to Event Hosts and Guests 
                while building a successful business relationship.
              </p>
            </div>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default VenueContract;