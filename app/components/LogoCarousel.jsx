'use client';
import React from 'react';

const logos = [
  '/3m.svg',
  '/barstool-store.svg',
  '/budweiser.svg',
  '/buzzfeed.svg',
  '/forbes.svg',
  '/macys.svg',
  '/menshealth.svg',
  '/mrbeast.svg',
];

const LogoCarousel = () => {
  return (
    <section className="logo-slider overflow-x-hidden bg-[#00051C]">
        <div className="slider relative h-[110px]">
          <div className="slide-track absolute top-0 left-0 flex  w-[200%] animate-scroll">
            {[...logos, ...logos].map((src, index) => (
              <div
                key={index}
                className="slide flex h-full items-center"
              >
                <div className="mr-[52px] flex h-[91px] w-[120px] items-center justify-center bg-gray-50 rounded shadow">
                  <img
                    src={src}
                    alt="logo"
                    className="h-12 w-24 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Styled-JSX animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
