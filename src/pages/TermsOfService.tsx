import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';

const TermsOfService = () => {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="09/05/2025">
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">CEREMONEY™ MOBILE APPLICATION TERMS OF USE</h3>
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
                Your usage of the App or any aspect of the Services shall be governed by these Terms 
                of Use (hereafter referred to as "the Terms"). By using the App, you acknowledge that you 
                have read and agree to be bound by these Terms. You must not use the App if you do not 
                agree to the Terms. We may revise these Terms at any time provided that notice of any 
                such revision shall be prominently displayed to users of the App. Your continued usage 
                of the App after posting notice of any revision to these Terms shall be deemed to 
                constitute your acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1.4</h3>
              <p>
                The Ceremoney Services are intended for use by Guests, Event Hosts, Venue Partners 
                and Service Representatives as further defined in section 2 of these Terms. For Event 
                Hosts and Venue Partners, these Terms supplement the additional Ceremoney Terms 
                of Service for such persons.
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
                  <strong>"Commencement Date"</strong> means the date on which you first download or install 
                  the Ceremoney App;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.2</h4>
                <p>
                  <strong>"Communications Platform Provider"</strong> means a third party who makes 
                  a messaging or communications platform or service available to Ceremoney for 
                  Users to use as part of the Services, including but not limited to any message 
                  formatting or aggregation platform or service;
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
                  <strong>"Event"</strong> means a social gathering, function, or occasion created by an Event Host 
                  on the App for the purpose of managing payments and purchases by Guests;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.5</h4>
                <p>
                  <strong>"Guest"</strong> means a User who has been invited to participate in an Event and who 
                  uses the App to make purchases at that Event;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.6</h4>
                <p>
                  <strong>"Payment Service Provider"</strong> means a third party who provides payment processing 
                  services to Ceremoney, including but not limited to Paystack;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.7</h4>
                <p>
                  <strong>"Service Representative"</strong> means a User who is employed by or represents a 
                  Venue Partner and who uses the App to process orders and payments at Events;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.8</h4>
                <p>
                  <strong>"User"</strong> means any person who downloads, installs, or uses the App;
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">2.1.9</h4>
                <p>
                  <strong>"Venue Partner"</strong> means a business or organization that has entered into a 
                  partnership agreement with Ceremoney to provide services at Events.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. USER ACCOUNTS AND REGISTRATION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1</h3>
              <p>
                To use certain features of the App, you must register for a user account. You agree to 
                provide accurate, current, and complete information during the registration process and 
                to update such information to keep it accurate, current, and complete.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2</h3>
              <p>
                You are responsible for safeguarding the password and all activities that occur under 
                your account. You agree to notify Ceremoney immediately of any unauthorized use of 
                your account or any other breach of security.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3.3</h3>
              <p>
                Ceremoney reserves the right to suspend or terminate your account at any time for any 
                reason, including but not limited to violation of these Terms or suspected fraudulent activity.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. USE OF THE SERVICES</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1</h3>
              <p>
                You may use the Services only for lawful purposes and in accordance with these Terms. 
                You agree not to use the Services in any way that violates any applicable federal, state, 
                local, or international law or regulation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2</h3>
              <p>
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Using the Services for any unlawful purpose or to solicit others to perform unlawful acts;</li>
                <li>Violating any international, federal, provincial, or state regulations, rules, laws, or local ordinances;</li>
                <li>Infringing upon or violating our intellectual property rights or the intellectual property rights of others;</li>
                <li>Harassing, abusing, insulting, harming, defaming, slandering, disparaging, intimidating, or discriminating;</li>
                <li>Submitting false or misleading information;</li>
                <li>Uploading or transmitting viruses or any other type of malicious code;</li>
                <li>Collecting or tracking the personal information of others;</li>
                <li>Spamming, phishing, pharming, pretexting, spidering, crawling, or scraping;</li>
                <li>Using the Services for any obscene or immoral purpose;</li>
                <li>Interfering with or circumventing the security features of the Services.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. PAYMENT TERMS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1</h3>
              <p>
                All payments processed through the App are handled by our Payment Service Provider. 
                By using the payment features of the App, you agree to be bound by the Payment Service 
                Provider's terms and conditions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2</h3>
              <p>
                Event Hosts may allocate funds to Guests for use at Events, or Guests may load their 
                own funds. All transactions are subject to applicable fees, which will be clearly disclosed 
                before any transaction is processed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3</h3>
              <p>
                Ceremoney reserves the right to refuse or cancel any transaction at any time for any 
                reason, including but not limited to suspected fraudulent activity or violation of these Terms.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. PRIVACY AND DATA PROTECTION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1</h3>
              <p>
                Your privacy is important to us. Our <Link to="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link> explains how we collect, use, and 
                protect your information when you use the Services. By using the Services, you agree 
                to the collection and use of information in accordance with our <Link to="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2</h3>
              <p>
                We comply with the Protection of Personal Information Act (POPIA) and other applicable 
                data protection laws. You have certain rights regarding your personal information, as 
                outlined in our <Link to="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. INTELLECTUAL PROPERTY RIGHTS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7.1</h3>
              <p>
                The App and its original content, features, and functionality are and will remain the 
                exclusive property of Ceremoney and its licensors. The App is protected by copyright, 
                trademark, and other laws.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7.2</h3>
              <p>
                You are granted a limited, non-exclusive, non-transferable license to use the App for 
                your personal or business use in accordance with these Terms.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. DISCLAIMERS AND LIMITATION OF LIABILITY</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.1</h3>
              <p>
                The Services are provided on an "as is" and "as available" basis. Ceremoney makes no 
                representations or warranties of any kind, express or implied, as to the operation of the 
                Services or the information, content, or materials included therein.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.2</h3>
              <p>
                To the fullest extent permitted by applicable law, Ceremoney disclaims all warranties, 
                express or implied, including but not limited to implied warranties of merchantability 
                and fitness for a particular purpose.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.3</h3>
              <p>
                In no event shall Ceremoney be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses, resulting from your use of the Services.
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
                You agree to defend, indemnify, and hold harmless Ceremoney and its officers, directors, 
                employees, and agents from and against any and all claims, damages, obligations, losses, 
                liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) 
                arising from your use of the Services or violation of these Terms.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. TERMINATION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10.1</h3>
              <p>
                We may terminate or suspend your account and bar access to the Services immediately, 
                without prior notice or liability, under our sole discretion, for any reason whatsoever 
                and without limitation, including but not limited to a breach of the Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10.2</h3>
              <p>
                If you wish to terminate your account, you may simply discontinue using the Services 
                or contact us to request account deletion.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. GOVERNING LAW</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">11.1</h3>
              <p>
                These Terms shall be interpreted and governed by the laws of the Republic of South Africa, 
                without regard to its conflict of law provisions. Our failure to enforce any right or 
                provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. CHANGES TO TERMS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">12.1</h3>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms 
                taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">12.2</h3>
              <p>
                By continuing to access or use our Services after any revisions become effective, you 
                agree to be bound by the revised terms.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. CONTACT INFORMATION</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>Company:</strong> Ceremoney (Pty) Ltd</p>
            <p><strong>Registration Number:</strong> 2019/231352/07</p>
            <p><strong>Address:</strong> 10 Wood Dove Place, Glen Eagles Estate, Kempton Park, 1630</p>
            <p><strong>Email:</strong> info@ceremoney.co.za</p>
            <p><strong>Phone:</strong> 062 404 1549</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. ACKNOWLEDGMENT</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">14.1</h3>
              <p>
                By using the Ceremoney App and Services, you acknowledge that you have read these Terms 
                of Use and agree to be bound by them. If you do not agree to these Terms, you must not 
                use the App or Services.
              </p>
            </div>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default TermsOfService;