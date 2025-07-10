import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Ceremoney work for event hosts?",
      answer: "Event hosts create their event, send WhatsApp invitations to guests, and can either allocate tab amounts to guests or let guests load their own funds. You have full control over spending limits and can transfer funds between guests in real-time."
    },
    {
      question: "Is Ceremoney secure for payments?",
      answer: "Yes, Ceremoney uses bank-level security with Paystack integration. All transactions are encrypted and compliant with industry standards. We never store sensitive payment information on our servers."
    },
    {
      question: "What devices does Ceremoney work on?",
      answer: "Ceremoney is built mobile-first and works on all smartphones and tablets. Venues can also use tablets or computers for staff management and analytics dashboards."
    },
    {
      question: "How do guests join an event?",
      answer: "Guests receive a WhatsApp invitation, download the Ceremoney app, and RSVP directly. They can then use allocated funds or load their own money to make purchases throughout the event."
    },
    {
      question: "Can venues integrate Ceremoney with existing systems?",
      answer: "Ceremoney is designed to work as a standalone solution that complements existing venue operations. While we don't currently integrate with existing POS systems, our platform provides all the tools venues need for event payment management."
    },
    {
      question: "What happens if there's no internet connection?",
      answer: "Ceremoney requires an internet connection to process payments and sync data in real-time. We recommend ensuring reliable WiFi or mobile data connectivity at your event venue for the best experience."
    },
    {
      question: "How are tips handled?",
      answer: "Guests can easily add tips to their orders with preset percentages or custom amounts. Tips are distributed to staff in real-time and tracked separately for easy payroll management."
    },
    {
      question: "Is there a limit to the number of guests per event?",
      answer: "No, Ceremoney scales to handle events of any size, from intimate gatherings of 10 people to large corporate events with thousands of attendees."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-50 to-blue-50 text-[#5489ae] rounded-full text-sm font-medium border border-slate-200">
            <HelpCircle className="w-4 h-4 mr-2 text-slate-500" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000000]">
            Got
            <span className="bg-gradient-to-r from-[#5489ae] to-[#8bacbf] bg-clip-text text-transparent"> questions?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about how Ceremoney works and how it can benefit your events.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#d9d9d9]/10 rounded-xl border border-[#d9d9d9] overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-slate-50/50 hover:to-blue-50/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-[#000000] pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-slate-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-br from-slate-50/50 via-blue-50/50 to-indigo-50/50 rounded-2xl border border-slate-200">
          <h3 className="text-xl font-semibold text-[#000000] mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you understand how Ceremoney can work for your events.
          </p>
          <a 
            href="mailto:info@ceremoney.co.za"
            className="inline-block bg-gradient-to-r from-slate-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;