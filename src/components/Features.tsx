import React from 'react';
import { 
  CreditCard, 
  Users, 
  BarChart3, 
  Shield, 
  Smartphone, 
  MessageSquare,
  Receipt,
  Zap,
  Clock
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Smart Tab Management',
      description: 'Hosts can allocate amounts to guests or let guests load their own funds. Transfer tab amounts between guests seamlessly.',
      color: 'bg-[#5489ae]'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Integration',
      description: 'Guests receive invitations via WhatsApp, download the app, and RSVP directly through the platform.',
      color: 'bg-slate-500'
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Perfect for event hosts, bartenders, guests, and venues. Everyone gets the tools they need.',
      color: 'bg-[#8bacbf]'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track orders, monitor spending, and get detailed reports with real-time updates across all devices.',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Bank-level security with Paystack integration. All transactions are encrypted and compliant.',
      color: 'bg-[#5489ae]'
    },
    {
      icon: Receipt,
      title: 'Digital Receipts',
      description: 'Automatic receipt generation for all transactions. Keep perfect records for every event.',
      color: 'bg-[#8bacbf]'
    },
    {
      icon: Zap,
      title: 'Instant Tips',
      description: 'Guests can easily add tips to their orders. Staff get paid faster and more efficiently.',
      color: 'bg-indigo-500'
    },
    {
      icon: Clock,
      title: 'Order Tracking',
      description: 'Real-time order tracking from placement to delivery. Never lose track of what\'s happening.',
      color: 'bg-slate-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Built for mobile from the ground up. Works perfectly on any device, anywhere.',
      color: 'bg-[#5489ae]'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-50 to-blue-50 text-[#5489ae] rounded-full text-sm font-medium border border-slate-200">
            <Zap className="w-4 h-4 mr-2 text-blue-500" />
            Powerful Features
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000000]">
            Everything you need for
            <span className="bg-gradient-to-r from-[#5489ae] to-[#8bacbf] bg-clip-text text-transparent"> seamless events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tab management to real-time analytics, Ceremoney provides all the tools 
            you need to run successful events with effortless payment processing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-white border border-[#d9d9d9] rounded-2xl hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/za/app/ceremoney/id1474707578"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#5489ae] to-slate-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              Download on App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.qltech.ceremoney"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#8bacbf] to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              Download on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;