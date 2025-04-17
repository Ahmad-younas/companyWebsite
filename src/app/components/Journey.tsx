'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Journey = () => {
  // Duplicate logos array for seamless loop
  const logos = [
    { src: '/images/clients/kayak.svg', alt: 'Kayak' },
    { src: '/images/clients/edx.svg', alt: 'edX' },
    { src: '/images/clients/lendaid.svg', alt: 'LendAid' },
    { src: '/images/clients/mit.svg', alt: 'MIT' },
    { src: '/images/clients/payperk.svg', alt: 'PayPerk' },
    { src: '/images/clients/travelliance.svg', alt: 'Travelliance' },
    { src: '/images/clients/2u.svg', alt: '2U' },
    { src: '/images/clients/boston-venture.svg', alt: 'Boston Venture Studio' },
    { src: '/images/clients/cio.svg', alt: 'CIO' },
    { src: '/images/clients/jar.svg', alt: 'Jar' }
  ];

  // Duplicate the logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative ">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, #0066FF 2%, transparent 0%),
              radial-gradient(circle at 75px 75px, #1A2258 2%, transparent 0%)
            `,
            backgroundSize: '100px 100px',
          }}
        />
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(45deg, #0066FF 25%, transparent 25%),
              linear-gradient(-45deg, #0066FF 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #0066FF 75%),
              linear-gradient(-45deg, transparent 75%, #0066FF 75%)
            `,
            backgroundSize: '100px 100px',
            backgroundPosition: '0 0, 0 50px, 50px -50px, -50px 0px',
            opacity: '0.02'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-10 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Journey Title */}
          <h2 className="text-center mb-16">
            <span className="text-[2.5rem] text-[#1A2258] font-semibold">
              A Journey of <span className="text-[#0066FF]">18 years</span> with <span className="text-[#0066FF]">550+</span> projects
              <br />
              and <span className="text-[#0066FF]">100+</span> tech partnerships
            </span>
          </h2>

          {/* Statistics Box */}
          <div className="bg-[#1A2258] rounded-2xl p-12 mb-20 shadow-xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            {/* Statistics Box Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" 
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20px 20px, white 2%, transparent 0%),
                    radial-gradient(circle at 60px 60px, white 1%, transparent 0%)
                  `,
                  backgroundSize: '80px 80px',
                }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-600 gap-8 md:gap-0 relative z-10">
              <div className="text-center px-4 py-4 md:py-0">
                <div className="text-white text-5xl font-bold mb-2">95%</div>
                <div className="text-gray-300 text-lg">Client Satisfaction Rate</div>
              </div>
              <div className="text-center px-4 py-4 md:py-0">
                <div className="text-white text-5xl font-bold mb-2">Zero</div>
                <div className="text-gray-300 text-lg">Detractors</div>
              </div>
              <div className="text-center px-4 py-4 md:py-0">
                <div className="text-white text-5xl font-bold mb-2">81.8</div>
                <div className="text-gray-300 text-lg">Net Promoter Score</div>
              </div>
              <div className="text-center px-4 py-4 md:py-0">
                <div className="text-white text-5xl font-bold mb-2">Avg. 5 Years</div>
                <div className="text-gray-300 text-lg">Client Relationship</div>
              </div>
            </div>
          </div>

          {/* Client Logos Slider */}
          <div className="relative overflow-hidden w-full" style={{ padding: '20px 0' }}>
            <style jsx>{`
              @keyframes slide {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .slider-track {
                animation: slide 30s linear infinite;
                width: fit-content;
                display: flex;
                gap: 4rem;
              }
              .slider-track:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="slider-track">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.alt}-${index}`}
                  className="flex items-center justify-center min-w-[150px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey; 