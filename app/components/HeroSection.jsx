"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Counter = ({ target, label, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(target * progress);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [target]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-base font-normal text-white mt-1">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const wordRef = useRef(null); // ✅ Define ref here

  useEffect(() => {
    const words = ["Solution", "Innovation", "Strategy", "Technology"];
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    // Force initial clear to avoid render delay
    gsap.set(wordRef.current, { text: "" });

    words.forEach((word) => {
      tl.to(wordRef.current, {
        duration: 1,
        text: word,
        ease: "none",
      })
        .to({}, { duration: 1 }) // pause after typing
        .to(wordRef.current, {
          duration: 0.5,
          text: "",
          ease: "power2.in",
        });
    });
  }, []);

  return (
    <>
      <div className="py-64 px-[108px] relative flex justify-between items-start">
        <div>
          <h1 className="text-7xl font-extrabold text-white uppercase">
            Creative{" "}
            <span className="!text-[#46F0FF]" ref={wordRef}>
              Solution
            </span>
            <br />
            For a Digital <br /> World
          </h1>
          <button
            type="button"
            className="hidden md:inline-block cursor-pointer bg-[#01B2C1] text-white px-6 py-2 mt-4 rounded-full font-bold hover:bg-white hover:text-[#01B2C1] transition duration-300 3xl:px-8 3xl:py-3 3xl:text-lg 3xl:mt-6"
          >
            Let's Talk
          </button>
        </div>

        <div className="relative pl-72 w-[223px]">
          <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/BuRidrCEDW.png')] bg-cover bg-no-repeat absolute top-0 left-0 z-[13]" />
          <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/XPqOcLZgnJ.png')] bg-cover bg-no-repeat absolute top-0 left-[53px] z-[22]" />
          <span className="flex w-[223px] h-[72px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#fff] absolute top-[84px] left-0 text-left overflow-hidden z-[23]">
            We craft bold ideas and <br />
            smart designs that thrive in <br />a digital-firwwst world.
          </span>
        </div>
      </div>

      <div className="relative w-full h-[500px] ">
        <video
          className="w-full h-full object-cover absolute -top-[60px] left-0 z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute xl:bottom-[220px] 2xl:bottom-60 3xl:bottom-[260px] left-1/2 transform -translate-x-1/2 translate-y-1/4 z-20">
          <Image
            src="/hero-lady.png"
            alt="Hero Lady"
            width={802}
            height={802}
            className="object-contain"
          />

          <div className="absolute left-full top-[200px] flex flex-col gap-6 text-start">
            <div className="bg-[#00051C]/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 shadow-lg translate-y-1 -ml-4 w-[200px]">
              <Counter target={200} label="PARTNERS" suffix="+" />
            </div>

            <div className="mt-6 text-start bg-[#00051C]/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 shadow-lg -translate-y-1 w-[260px] text-white">
              <div className="text-5xl font-bold">90%</div>
              <div className="text-base font-normal mt-1 ">
                FASTER TECHNOLOGY
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
