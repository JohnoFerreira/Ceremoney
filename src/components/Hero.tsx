import React from 'react';
import { Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[#d9d9d9]/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#000000] leading-tight">
                Bar Tabs,
                <span className="bg-gradient-to-r from-[#5489ae] to-[#8bacbf] bg-clip-text text-transparent"> Simply </span>
                Done
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Streamline bar tabs and payments at weddings, corporate events, and private parties. 
                Secure, simple, and seamless for hosts, guests, and venues.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-slate-500" />
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Real-time Updates</span>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="space-y-4">
              <p className="text-base md:text-lg font-semibold text-[#000000]">Download the app:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://apps.apple.com/za/app/ceremoney/id1474707578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#000000] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                
                <a 
                  href="https://play.google.com/store/apps/details?id=com.qltech.ceremoney"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#000000] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#d9d9d9]">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-600">50+</div>
                <div className="text-sm text-gray-600">Events Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Phone Mockup */}
              <div className="bg-gradient-to-br from-[#000000] to-gray-800 rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 h-96">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <img 
                        src="/New Ceremoney Logo Cover.png" 
                        alt="Ceremoney" 
                        className="h-6 w-auto"
                      />
                      <div className="text-sm font-medium text-[#000000]">Wedding Reception</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-slate-50 to-blue-100 rounded-lg p-4 border border-slate-200">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Tab Balance</span>
                          <span className="font-bold text-slate-600">R2,450</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Active Guests</span>
                          <span className="font-medium text-blue-600">24</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Orders Today</span>
                          <span className="font-medium text-indigo-600">156</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-slate-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Shield className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;