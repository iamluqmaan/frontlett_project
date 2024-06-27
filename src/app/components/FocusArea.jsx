import React from 'react';

const FocusArea = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 text-center">Our Area of Focus</h2>
        <p className="mt-4 text-sm text-gray-500 text-center">
          In our quest to help make success available to everyone, we have initial strategic<br/>
          direction to focus on these five key areas at the lab
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="flex flex-col  py-8 bg-gray-100 shadow"
              style={{ backgroundColor: area.color }}
            >
              <h3 className="text-lg text-left font-semibold pl-4 pb-5 text-white">0{index + 1}</h3>
              <h3 className="text-lg text-left pl-4 font-semibold text-white"> {area.title} </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const focusAreas = [
  { title: 'Business Support & Incubation', color: '#303030' },
  { title: 'On-Demand & As-A-Service', color: '#F47733' },
  { title: 'Marketplace & Crowdsourcing', color: '#FF78BF' },
  { title: 'Aggregation & Shared Economy', color: '#20888F' },
  { title: 'Decentralized Economy & Digital Assets', color: '#FF88C6' },
];

export default FocusArea;
