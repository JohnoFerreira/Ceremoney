
import React from 'react';

const VenueBenefits = () => {
  return (
    <section className="bg-white text-black py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Why Venues Love Ceremoney</h2>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <li className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Guaranteed Payouts</h3>
          <p>You’ll never chase down a bar tab again—Ceremoney guarantees payment, every time.</p>
        </li>
        <li className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">No POS Integration Needed</h3>
          <p>Use our system alongside yours. No new hardware or integration headaches required.</p>
        </li>
        <li className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Faster Service, Happier Guests</h3>
          <p>Guests order quicker with their phones—fewer queues, more drinks served.</p>
        </li>
        <li className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Insightful Analytics</h3>
          <p>Understand drink trends and guest behavior with event-level data insights.</p>
        </li>
      </ul>
    </section>
  );
};

export default VenueBenefits;
