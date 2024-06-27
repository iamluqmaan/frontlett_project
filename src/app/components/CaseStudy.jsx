import React from 'react';

const CaseStudy = () => {
  return (
    <div className="py-10 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-left">Case Study</h2>
        <p className="mb-8 text-left">
          See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time.
        </p>
        <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-4 py-2 bg-white rounded-full shadow">Service Incubator Equity</button>
          <button className="px-4 py-2 bg-white rounded-full shadow">SEEQ Maths Equation</button>
          <button className="px-4 py-2 bg-white rounded-full shadow">Value of my Equity Over Time</button>
        </div>
        <button className="mt-8 px-6 py-2 underline text-black rounded">Become A Service Incubator &rarr;</button>
      </div>
    </div>
  );
};

export default CaseStudy;
