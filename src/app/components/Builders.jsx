"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Builders = () => {
  return (
    <div className="relative flex justify-center flex-col items-center bg-gray-100 pt-10 px-4 md:px-8">
      <div className="text-center py-10 px-8 bg-white rounded-lg max-w-2xl w-full">
        <blockquote className="text-lg font-semibold text-gray-800">
          "Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"
        </blockquote>
        <cite className="block mt-4 text-sm text-gray-600 not-italic">
          <p className='font-semibold text-black'>Daniel Izeghs Oratokhai</p>
          <p>Managing Partner at SINC Partners Ltd</p>
        </cite>
      </div>
      <div className="text-center py-20 px-8">
        <h1 className="text-3xl md:text-5xl font-semi-bold text-center mb-10">Network of builders helping<br /> startup scale</h1>
        <div className="flex flex-col px-0 md:px-10 md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Work with Service Incubators to expedite your time-to-market</h2>
            <p className="text-sm text-neutral-600 mb-4">
              Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.
            </p>
            <p className="text-sm mb-4">
              For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.
            </p>
            <Link href="/learn-more" passHref className="text-black underline font-bold">Learn More &rarr;
            </Link>
          </div>
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Access funding after your MVP is validated</h2>
            <p className="text-sm text-neutral-600 mb-4">
              Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
            </p>
            <p className="text-sm mb-4">
              Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months
            </p>
            <Link href="/learn-more" passHref className="text-black underline font-bold">Learn More &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builders;
