"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import heroImage from '../../../public/assets/hero.png';

const Hero = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const heroRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const imageRefs = useRef([]);

  const images = [
    heroImage,
      '/assets/hero1.png',
      '/assets/hero2.png',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (imagesContainerRef.current && imageRefs.current.length > 0) {
        currentIndex = (currentIndex + 1) % imageRefs.current.length;
        imagesContainerRef.current.scrollTo({
          left: imageRefs.current[currentIndex].offsetLeft,
          behavior: 'smooth',
        });
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div ref={heroRef} className="relative">
      <div className="hero-content flex flex-col md:flex-row gap-4 py-10 md:py-20 px-4 md:px-10 text-center">
        <div className="text-left flex flex-col justify-center md:w-1/2">
          <h1 className="text-xl md:text-2xl font-bold mb-4">SINC Partners is a service incubation company</h1>
          <p className="text-md md:text-lg mb-8">
            Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-neutral-900 rounded-full px-4 py-2 text-neutral-200">sync with us</button>
          </div>
        </div>
        <div
          className="heroImage w-full h-full overflow-x-scroll whitespace-nowrap relative md:w-1/2"
          ref={imagesContainerRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx>{`
            .heroImage::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="inline-block w-full"
            >
              <Image
                src={image}
                alt={`Hero Image ${index}`}
                layout="responsive"
                width={700}
                height={300}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      {showNewsletter && (
        <div className="fixed bottom-0 right-0 p-6 bg-neutral-900 text-white shadow-lg rounded-lg animate-fade-in z-50 py-10 space-y-5">
          <div className="flex justify-between items-start">
            <h2 className="text-lg md:text-[30px] font-semibold mb-2 px-4 tracking-wide">Newsletter</h2>
            <button className="text-xl px-4" onClick={() => setShowNewsletter(false)}>x</button>
          </div>
          <p className="mb-4 text-sm leading-4 md:text-sm font-extralight tracking-wider px-4">
            Get the latest about SINC Partners, our startup Incubator program,<br/>
            Portfolio company offerings - straight into your inbox.
          </p>
          <form className="flex flex-col md:flex-row">
            <div className="ring-1 ring-neutral-400 rounded-full w-full flex justify-between">
              <input
                type="email"
                className="px-4 text-xs md:text-sm rounded-tl-full rounded-bl-full bg-transparent py-2 mb-2 md:mb-0 text-white w-full focus:bg-transparent outline-none"
                placeholder="Enter your email address"
                required
              />
              <button type="submit" className="bg-neutral-300 text-black rounded-full px-3 py-2 text-xs md:text-sm">Subscribe</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Hero;
