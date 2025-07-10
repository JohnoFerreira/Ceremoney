import React from 'react';
import { ArrowRight, MessageSquare, Smartphone, CreditCard, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Send Invitations',
      description: 'Host sets up the event and sends WhatsApp invitations to guests from their curated guest list.',
      color: 'bg-slate-500',
      glow: 'shadow-slate-200'
    },
    {
      icon: Smartphone,
      title: 'Download & RSVP',
      description: 'Guests receive the invitation, download the Ceremoney app, and RSVP for the event.',
      color: 'bg-[#5489ae]',
      glow: 'shadow-blue-200'
    },
    {
      icon: CreditCard,
      title: 'Load Funds',
      description: 'Host allocates tab amounts to guests, or guests can load their own funds for purchases.',
      color: 'bg-blue-500',
      glow: 'shadow-blue-200'
    },
    {
      icon: BarChart3,
      title: 'Track & Manage',
      description: 'Real-time tracking of orders, spending, and analytics. Transfer funds between guests as needed.',
      color: 'bg-indigo-500',
      glow: 'shadow-indigo-200'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#d9d9d9]/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-50 to-slate-50 text-[#5489ae] rounded-full text-sm font-medium border border-indigo-200">
            <ArrowRight className="w-4 h-4 mr-2 text-indigo-500" />
            Simple Process
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000000]">
            How Ceremoney
            <span className="bg-gradient-to-r from-[#5489ae] to-[#8bacbf] bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your event up and running in minutes. Our streamlined process makes 
            payment management effortless for everyone involved.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-300 via-blue-300 to-indigo-300 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200 shadow-lg ${step.glow}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-[#d9d9d9] rounded-full flex items-center justify-center text-xs font-bold text-[#000000]">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#000000]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-4">
                      <ArrowRight className="w-6 h-6 text-[#8bacbf]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-lg text-gray-600">
            Ready to streamline your next event?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/za/app/ceremoney/id1474707578"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-slate-500 to-[#5489ae] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 inline-flex items-center justify-center group"
            >
              Download on App Store
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.qltech.ceremoney"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 inline-flex items-center justify-center group"
            >
              Download on Google Play
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;