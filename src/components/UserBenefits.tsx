import React from 'react';
import { 
  Users, 
  Building2, 
  UserCheck, 
  CreditCard, 
  BarChart3, 
  Shield,
  Smartphone,
  Clock,
  DollarSign
} from 'lucide-react';

const UserBenefits = () => {
  const userTypes = [
    {
      title: 'For Venues',
      icon: Building2,
      color: 'bg-gradient-to-br from-[#5489ae] to-slate-500',
      accentColor: 'slate',
      description: 'Streamline operations and increase revenue with comprehensive event management tools.',
      benefits: [
        {
          icon: BarChart3,
          title: 'Real-time Analytics',
          description: 'Track sales, monitor popular items, and get detailed insights into guest spending patterns.',
          color: 'bg-slate-500'
        },
        {
          icon: CreditCard,
          title: 'Seamless Payments',
          description: 'Integrated Paystack payments with automatic reconciliation and digital receipts.',
          color: 'bg-[#5489ae]'
        },
        {
          icon: Users,
          title: 'Staff Management',
          description: 'Manage bartenders and staff with role-based access and order tracking capabilities.',
          color: 'bg-blue-500'
        },
        {
          icon: DollarSign,
          title: 'Increased Revenue',
          description: 'Higher average spend per guest with easy tipping and upselling opportunities.',
          color: 'bg-slate-600'
        }
      ]
    },
    {
      title: 'For Event Hosts',
      icon: UserCheck,
      color: 'bg-gradient-to-br from-[#8bacbf] to-indigo-500',
      accentColor: 'indigo',
      description: 'Take control of your event payments with smart tab management and guest coordination.',
      benefits: [
        {
          icon: Smartphone,
          title: 'WhatsApp Integration',
          description: 'Send invitations directly through WhatsApp and manage RSVPs seamlessly.',
          color: 'bg-slate-500'
        },
        {
          icon: CreditCard,
          title: 'Flexible Tab Management',
          description: 'Allocate funds to guests or let them load their own. Transfer amounts between guests easily.',
          color: 'bg-indigo-500'
        },
        {
          icon: Clock,
          title: 'Real-time Monitoring',
          description: 'Track spending in real-time and get notifications for important events and milestones.',
          color: 'bg-blue-500'
        },
        {
          icon: Shield,
          title: 'Complete Control',
          description: 'Set spending limits, manage guest lists, and maintain full oversight of event expenses.',
          color: 'bg-[#8bacbf]'
        }
      ]
    },
    {
      title: 'For Guests',
      icon: Users,
      color: 'bg-gradient-to-br from-blue-500 to-slate-600',
      accentColor: 'slate',
      description: 'Enjoy a seamless, cashless experience with easy ordering and payment management.',
      benefits: [
        {
          icon: Smartphone,
          title: 'Mobile-First Experience',
          description: 'Download the app, RSVP, and start ordering with just a few taps on your phone.',
          color: 'bg-[#5489ae]'
        },
        {
          icon: CreditCard,
          title: 'Easy Payments',
          description: 'Use allocated tab funds or load your own money. Add tips effortlessly to show appreciation.',
          color: 'bg-slate-500'
        },
        {
          icon: Clock,
          title: 'Order Tracking',
          description: 'Track your orders in real-time and receive notifications when they\'re ready.',
          color: 'bg-blue-500'
        },
        {
          icon: Shield,
          title: 'Secure & Private',
          description: 'Bank-level security for all transactions with complete privacy and data protection.',
          color: 'bg-slate-600'
        }
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-[#d9d9d9]/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-50 to-slate-50 text-[#5489ae] rounded-full text-sm font-medium border border-indigo-200">
            <Users className="w-4 h-4 mr-2 text-indigo-500" />
            Built for Everyone
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000000]">
            Benefits for
            <span className="bg-gradient-to-r from-[#5489ae] to-[#8bacbf] bg-clip-text text-transparent"> every user</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ceremoney is designed to deliver value to venues, event hosts, and guests alike. 
            See how our platform benefits each user type with tailored features and experiences.
          </p>
        </div>

        {/* User Types */}
        <div className="space-y-16">
          {userTypes.map((userType, index) => {
            const UserIcon = userType.icon;
            return (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-16`}>
                {/* User Type Header */}
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                  <div className="space-y-6">
                    <div className={`w-16 h-16 ${userType.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <UserIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#000000] mb-4">
                        {userType.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {userType.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-6">
                    {userType.benefits.map((benefit, benefitIndex) => {
                      const BenefitIcon = benefit.icon;
                      return (
                        <div 
                          key={benefitIndex}
                          className="bg-white p-6 rounded-xl border border-[#d9d9d9] hover:shadow-lg hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="space-y-4">
                            <div className={`w-10 h-10 ${benefit.color} rounded-lg flex items-center justify-center shadow-md`}>
                              <BenefitIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-[#000000] mb-2">
                                {benefit.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-lg text-gray-600">
            Ready to experience the benefits for yourself?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/za/app/ceremoney/id1474707578"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-[#5489ae] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              Download on App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.qltech.ceremoney"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-slate-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              Download on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBenefits;