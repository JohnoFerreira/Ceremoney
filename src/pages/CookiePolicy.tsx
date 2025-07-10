import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const CookiePolicy = () => {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="January 2025">
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies and Similar Technologies</h2>
          <p>
            Cookies are small text files stored on your device when you visit our website or use our mobile 
            application. Similar technologies include web beacons, pixels, local storage, and mobile identifiers. 
            These technologies help us provide you with a better experience, remember your preferences, and 
            improve our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Essential Cookies</h3>
              <p className="text-blue-800">
                These cookies are necessary for our website and app to function properly. They enable core 
                functionality such as security, network management, and accessibility. You cannot opt out 
                of these cookies.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>Examples:</strong> Authentication, security, load balancing, user session management
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Performance and Analytics Cookies</h3>
              <p className="text-green-800">
                These cookies help us understand how visitors interact with our website and app by collecting 
                anonymous information about usage patterns, popular features, and performance metrics.
              </p>
              <p className="text-sm text-green-700 mt-2">
                <strong>Examples:</strong> Google Analytics, app performance monitoring, crash reporting
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Functional Cookies</h3>
              <p className="text-purple-800">
                These cookies remember your preferences and provide enhanced, personalized features. They 
                improve your user experience but are not essential for basic functionality.
              </p>
              <p className="text-sm text-purple-700 mt-2">
                <strong>Examples:</strong> Language preferences, theme settings, recently viewed events
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Marketing and Advertising Cookies</h3>
              <p className="text-orange-800">
                These cookies track your browsing habits to deliver personalized advertisements and measure 
                the effectiveness of our marketing campaigns. We only use these with your explicit consent.
              </p>
              <p className="text-sm text-orange-700 mt-2">
                <strong>Examples:</strong> Social media pixels, retargeting ads, campaign tracking
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Cookies</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
            <li>Authenticate users and maintain secure sessions</li>
            <li>Remember your preferences and settings</li>
            <li>Analyze website and app usage to improve our services</li>
            <li>Personalize content and recommendations</li>
            <li>Measure the effectiveness of our marketing campaigns</li>
            <li>Prevent fraud and enhance security</li>
            <li>Provide customer support and troubleshoot issues</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies and Services</h2>
          <p>We work with trusted third-party services that may place cookies on your device:</p>
          
          <div className="space-y-4 mt-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Payment Processing</h3>
              <p><strong>Paystack:</strong> Processes payments securely and may use cookies for fraud prevention and transaction processing.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
              <p><strong>Google Analytics:</strong> Helps us understand user behavior and improve our services. You can opt out at <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">tools.google.com/dlpage/gaoptout</a></p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Social Media</h3>
              <p><strong>WhatsApp Business API:</strong> Enables our invitation system and may use cookies for service delivery.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Customer Support</h3>
              <p><strong>Support Platforms:</strong> May use cookies to provide personalized assistance and maintain conversation history.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Mobile Application Data</h2>
          <p>
            Our mobile application may use technologies similar to cookies, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
            <li><strong>Local Storage:</strong> Stores app preferences and cached data for better performance</li>
            <li><strong>Device Identifiers:</strong> Unique identifiers for analytics and personalization</li>
            <li><strong>Push Notification Tokens:</strong> Enable us to send you important event updates</li>
            <li><strong>Location Data:</strong> With your permission, for venue-specific features</li>
            <li><strong>Biometric Data:</strong> For secure authentication (stored locally on your device)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Managing Your Cookie Preferences</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Browser Settings</h3>
              <p>
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>View and delete existing cookies</li>
                <li>Block all cookies or cookies from specific sites</li>
                <li>Receive notifications when cookies are set</li>
                <li>Set preferences for different types of cookies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Mobile App Settings</h3>
              <p>
                In our mobile app, you can manage data collection preferences through:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>App settings menu</li>
                <li>Device privacy settings</li>
                <li>Notification preferences</li>
                <li>Location services settings</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Note</h3>
              <p className="text-yellow-800">
                Disabling certain cookies may affect the functionality of our website and app. Essential 
                cookies cannot be disabled as they are necessary for basic service operation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookie Retention Periods</h2>
          <div className="space-y-3">
            <p><strong>Session Cookies:</strong> Deleted when you close your browser or app</p>
            <p><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</p>
            <p><strong>Analytics Cookies:</strong> Typically expire after 2 years</p>
            <p><strong>Marketing Cookies:</strong> Usually expire after 30-90 days</p>
            <p><strong>Functional Cookies:</strong> May persist for up to 1 year</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or 
            applicable laws. We will notify you of material changes through our app, website, or email. 
            The "Last Updated" date at the top of this policy indicates when it was last revised.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us About Cookies</h2>
          <p>
            If you have questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>Email:</strong> privacy@ceremoney.co.za</p>
            <p><strong>General Contact:</strong> info@ceremoney.co.za</p>
            <p><strong>Phone:</strong> 062 404 1549</p>
            <p><strong>Subject Line:</strong> Cookie Policy Inquiry</p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default CookiePolicy;