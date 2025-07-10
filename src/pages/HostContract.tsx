import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';

const HostContract = () => {
  return (
    <LegalPageLayout title="Event Host Agreement" lastUpdated="09/05/2025">
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">CEREMONEY™ AND EVENT HOST TERMS OF SERVICE</h3>
          <p className="text-purple-800">
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
                event hosts ("Event Hosts") who wish to use Ceremoney's services to manage payments 
                and guest experiences at their events. By creating an event on the Ceremoney platform, 
                you acknowledge that you have read and agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1.4</h3>
              <p>
                We may revise these Terms at any time provided that notice of any such revision shall 
                be prominently displayed to Event Hosts. Your continued use of Ceremoney's services 
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
                  <strong>"Commencement Date"</strong> means the date on which the Event Host first 
                  creates an event on the Ceremoney platform;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.2</h4>
                <p>
                  <strong>"Event"</strong> means a social gathering, function, or occasion created by an Event Host 
                  on the App for the purpose of managing payments and purchases by Guests;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.3</h4>
                <p>
                  <strong>"Event Host"</strong> means a User who creates an Event on the App for the purpose 
                  of managing payments and purchases by Guests at that Event;
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
                  <strong>"Service Representative"</strong> means a person employed by or representing a 
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
                  <strong>"Venue Partner"</strong> means a business or organization that has entered into a 
                  partnership agreement with Ceremoney to provide services at Events.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. EVENT HOST SERVICES AND RESPONSIBILITIES</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 Services Provided to Event Hosts</h3>
              <p>Ceremoney provides Event Hosts with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Event creation and management tools</li>
                <li>Guest list management and invitation system</li>
                <li>WhatsApp integration for guest invitations</li>
                <li>Tab allocation and fund management capabilities</li>
                <li>Real-time spending monitoring and controls</li>
                <li>Payment processing through our Payment Service Provider</li>
                <li>Digital receipts and transaction records</li>
                <li>Analytics and reporting tools</li>
                <li>Customer support during events</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 Event Host Responsibilities</h3>
              <p>Event Hosts agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Provide accurate event information and guest details</li>
                <li>Ensure sufficient funds are available for allocated tabs</li>
                <li>Communicate event details clearly to invited guests</li>
                <li>Comply with venue policies and local regulations</li>
                <li>Respect guest privacy and data protection requirements</li>
                <li>Use the platform responsibly and in accordance with these Terms</li>
                <li>Monitor guest spending and manage tab allocations appropriately</li>
                <li>Resolve any disputes with guests in good faith</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3.3 Event Setup and Management</h3>
              <p>
                Event Hosts are responsible for properly setting up their events, including accurate 
                venue information, appropriate guest lists, and reasonable spending limits. Ceremoney 
                provides tools and guidance but cannot guarantee the success or smooth operation of 
                any specific event.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. PAYMENT TERMS AND FINANCIAL RESPONSIBILITIES</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 Payment Processing</h3>
              <p>
                All payments are processed securely through our Payment Service Provider. Event Hosts 
                are responsible for ensuring adequate funds are available for tab allocations and 
                understanding that allocated funds are held in trust for guest purchases.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Tab Management</h3>
              <p>
                Event Hosts may allocate specific amounts to guests or allow guests to load their own 
                funds. All tab allocations are subject to the Event Host's approval and available funds. 
                Event Hosts can transfer amounts between guests and modify allocations in real-time 
                during events.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.3 Service Fees</h3>
              <p>
                Ceremoney charges service fees for platform usage, which will be clearly disclosed 
                before any transaction. Event Hosts are responsible for understanding and accepting 
                these fees as part of using the service.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.4 Refunds and Cancellations</h3>
              <p>
                Refund policies for unused tab allocations and service fees will be applied according 
                to the timing of event cancellation and the specific circumstances involved. Event Hosts 
                should review refund policies before creating events.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. GUEST MANAGEMENT AND PRIVACY</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Guest Data and Privacy</h3>
              <p>
                Event Hosts acknowledge that guest data will be processed in accordance with our <Link to="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>. 
                Event Hosts must obtain appropriate consent from guests for data collection and processing, 
                and must not share guest information inappropriately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Guest Invitations</h3>
              <p>
                Event Hosts are responsible for sending appropriate invitations to guests and ensuring 
                that only intended recipients receive event access. Ceremoney provides tools for invitation 
                management but cannot control how Event Hosts use these tools.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 Guest Conduct</h3>
              <p>
                While Event Hosts cannot control guest behavior, they are encouraged to communicate 
                appropriate expectations and guidelines to their guests regarding the use of the 
                Ceremoney platform during events.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. PLATFORM USAGE AND RESTRICTIONS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Acceptable Use</h3>
              <p>Event Hosts agree to use the platform only for legitimate events and purposes, and not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Create fraudulent or misleading events</li>
                <li>Use the platform for illegal activities</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Attempt to circumvent platform security measures</li>
                <li>Use the platform in ways that could harm Ceremoney or other users</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2 Account Security</h3>
              <p>
                Event Hosts are responsible for maintaining the security of their accounts and must 
                not share login credentials with unauthorized parties. Any activities conducted under 
                an Event Host's account are their responsibility.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.3 Platform Availability</h3>
              <p>
                While Ceremoney strives to provide reliable service, we cannot guarantee uninterrupted 
                platform availability. Event Hosts should have contingency plans for their events in 
                case of technical difficulties.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. INTELLECTUAL PROPERTY AND DATA</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7.1 Ceremoney Intellectual Property</h3>
              <p>
                All intellectual property rights in the Ceremoney App, platform, and related materials 
                remain the exclusive property of Ceremoney. Event Hosts are granted a limited, 
                non-exclusive license to use the platform for their events.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7.2 Event Host Data</h3>
              <p>
                Event Hosts retain ownership of their event data and guest information, subject to 
                Ceremoney's <Link to="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link> and these Terms. Ceremoney may use aggregated, anonymized 
                data for platform improvement and analytics purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7.3 Data Protection</h3>
              <p>
                Both parties agree to comply with applicable data protection laws, including the 
                Protection of Personal Information Act (POPIA). Event Hosts must ensure they have 
                appropriate consent for processing guest data.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. LIMITATION OF LIABILITY</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.1</h3>
              <p>
                To the maximum extent permitted by law, Ceremoney's liability under this agreement 
                is limited to the direct costs of the services provided. Ceremoney shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.2</h3>
              <p>
                Event Hosts acknowledge that Ceremoney is not responsible for venue-related issues, 
                guest behavior, event outcomes, or any disputes that may arise between Event Hosts 
                and their guests beyond the platform services provided.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.3</h3>
              <p>
                Ceremoney's total liability under this agreement shall not exceed the total fees 
                paid by the Event Host for the specific event in question.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. INDEMNIFICATION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">9.1</h3>
              <p>
                Event Hosts agree to indemnify and hold harmless Ceremoney from any claims, damages, 
                losses, or expenses arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Event Host's breach of these Terms</li>
                <li>Negligent or wrongful acts by the Event Host</li>
                <li>Event-related incidents or disputes</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Infringement of third-party rights</li>
                <li>Misuse of guest data or privacy violations</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. SUPPORT AND ASSISTANCE</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10.1 Customer Support</h3>
              <p>
                Ceremoney provides customer support to Event Hosts before, during, and after events. 
                Support includes platform guidance, technical assistance, and help with event management 
                features.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10.2 Training and Resources</h3>
              <p>
                Ceremoney may provide training materials, guides, and resources to help Event Hosts 
                make the most of the platform. Event Hosts are encouraged to familiarize themselves 
                with these resources before hosting events.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10.3 Technical Issues</h3>
              <p>
                In case of technical difficulties during events, Ceremoney will make reasonable efforts 
                to provide prompt assistance. However, Event Hosts should be prepared with alternative 
                arrangements if needed.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. TERMINATION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">11.1 Termination by Event Host</h3>
              <p>
                Event Hosts may terminate their use of the platform at any time by discontinuing 
                event creation and deleting their account. Outstanding financial obligations will 
                be settled according to the agreed terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">11.2 Termination by Ceremoney</h3>
              <p>
                Ceremoney may terminate an Event Host's access to the platform immediately if:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>The Event Host materially breaches these Terms</li>
                <li>The Event Host engages in fraudulent or illegal activities</li>
                <li>The Event Host violates data protection or privacy requirements</li>
                <li>The Event Host's actions harm other users or the platform</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">11.3 Effects of Termination</h3>
              <p>
                Upon termination, Event Hosts must cease using the platform and settle any outstanding 
                financial obligations. Data retention and deletion will be handled according to our 
                <Link to="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link> and applicable laws.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">12.1</h3>
              <p>
                This agreement shall be governed by and construed in accordance with the laws of 
                the Republic of South Africa.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">12.2</h3>
              <p>
                Any disputes arising from this agreement shall first be addressed through good faith 
                negotiation between the parties. If negotiation fails, disputes shall be resolved through 
                binding arbitration in accordance with the rules of the Arbitration Foundation of Southern Africa.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. GENERAL PROVISIONS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">13.1 Entire Agreement</h3>
              <p>
                These Terms, together with our <Link to="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link> and other referenced documents, 
                constitute the entire agreement between the Event Host and Ceremoney regarding 
                the use of our services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">13.2 Amendments</h3>
              <p>
                These Terms may be updated by Ceremoney from time to time. Event Hosts will be 
                notified of material changes, and continued use of the platform constitutes 
                acceptance of updated Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">13.3 Severability</h3>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the 
                remaining provisions shall continue in full force and effect.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">13.4 Force Majeure</h3>
              <p>
                Neither party shall be liable for any failure or delay in performance due to 
                circumstances beyond their reasonable control, including but not limited to acts 
                of God, natural disasters, war, terrorism, or government actions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. CONTACT INFORMATION</h2>
          <p>
            For questions about this Event Host Agreement or support with hosting events:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>Company:</strong> Ceremoney (Pty) Ltd</p>
            <p><strong>Registration Number:</strong> 2019/231352/07</p>
            <p><strong>Address:</strong> 10 Wood Dove Place, Glen Eagles Estate, Kempton Park, 1630</p>
            <p><strong>Email:</strong> hosts@ceremoney.co.za</p>
            <p><strong>General Contact:</strong> info@ceremoney.co.za</p>
            <p><strong>Phone:</strong> 062 404 1549</p>
            <p><strong>Subject:</strong> Event Host Support</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">15. ACKNOWLEDGMENT</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">15.1</h3>
              <p>
                By creating an event on the Ceremoney platform, the Event Host acknowledges that they 
                have read, understood, and agree to be bound by these Terms of Service. This agreement 
                represents a commitment to using the platform responsibly and providing excellent 
                experiences for event guests.
              </p>
            </div>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default HostContract;