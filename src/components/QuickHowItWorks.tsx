
import React from 'react';

const QuickHowItWorks = () => {
  return (
    <section className="bg-[#d9d9d9] text-black py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid gap-8 md:grid-cols-3 text-center">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">1. Host Sets the Rules</h3>
          <p>Choose who can drink, what they can order, and how much they can spend.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">2. Guests Tap to Order</h3>
          <p>Guests use the Ceremoney app to order drinks—fast and cashless.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">3. Venue Gets Paid</h3>
          <p>Tabs are settled automatically. No arguments. No unpaid bills.</p>
        </div>
      </div>
    </section>
  );
};

export default QuickHowItWorks;
