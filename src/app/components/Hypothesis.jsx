import React from 'react';
import Image from 'next/image';
import polygon1 from '../../../public/assets/PolygonOne.png';
import polygon2 from '../../../public/assets/polygonTwo.png';
import polygon3 from '../../../public/assets/polygonThree.png';

const Hypothesis = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Hypothesis</h2>
        <p className="mb-8">Just a few reasons we know it’s time for this model within the ecosystem</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 space-y-4 bg-white rounded shadow">
            <Image 
                src={polygon1}
                width={40}
                height={40}
            />
            <p>Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support</p>
          </div>
          <div className="p-6 space-y-4 bg-white rounded shadow">
            <Image 
                src={polygon2}
                width={40}
                height={40}
            />
            <p>If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment</p>
          </div>
          <div className="p-6 space-y-4 bg-white rounded shadow">
            <Image 
                src={polygon3}
                width={40}
                height={40}
            />
            <p>Young professionals who don’t have a lot of money to invest nor are accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hypothesis;
