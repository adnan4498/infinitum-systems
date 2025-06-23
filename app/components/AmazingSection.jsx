"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import circleIcon from "../../public/circle.svg";

const AmazingSection = () => {
  const cardRefs = useRef([]);
  const arrowRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    cards.forEach((card, i) => {
      const arrow = arrowRefs.current[i];

      const enter = () => {
        gsap.killTweensOf(arrow);
        gsap.to(arrow, {
          opacity: 1,
          scale: 1.1,
          duration: 0.4,
          ease: "back.out(1.7)",
        });
      };

      const leave = () => {
        gsap.killTweensOf(arrow);
        gsap.to(arrow, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power1.out",
        });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    });
  }, []);

  return (
    <div className="relative">
      <div className="2xl:flex justify-between ">
        <div className="2xl:text-[68px] 2xl:font-extrabold 2xl:w-[607px] 2xl:mt-[15px]">
          Explore Our <span className="!text-[#46F0FF]">Amazing</span> Works
        </div>
        <div>
          <div className="2xl:text-[20px] font-semibold 2xl:mt-[20px]">
            <span className="text-[#FFF]">Our</span>
            <span className="text-[#46F0FF]">Work</span>
          </div>
          <div className="text-[16px] 2xl:w-[525px] 2xl:mt-[30px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </div>
        </div>
      </div>

      <div className="absolute top-[-20px] left-[420px]">
        <Image src={circleIcon} alt="About Us" width={157} height={157} />
      </div>

      <div className="2xl:flex gap-[31px] mt-8">
        <div className="2xl:w-[128px] 2xl:h-[41px] flex justify-center items-center rounded-full bg-[#01B2C1]">
          <div>Branding</div>
        </div>
        <div className="2xl:w-[128px] 2xl:h-[41px] flex justify-center items-center rounded-full border border-[#01B2C1] hover:bg-[#01B2C1] hover:text-white transition duration-300 cursor-pointer">
          <div>UI/UX Design</div>
        </div>
        <div className="2xl:w-[128px] 2xl:h-[41px] flex justify-center items-center rounded-full border border-[#01B2C1] hover:bg-[#01B2C1] hover:text-white transition duration-300 cursor-pointer">
          <div>Development</div>
        </div>
      </div>

      <div className="2xl:flex gap-[25px] mt-[40px]">
        {[1, 2, 3].map((num, index) => (
          <div
            key={num}
            className="relative cursor-pointer"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <Image
              src={`/amazingImg${num}.svg`}
              width={415.08}
              height={310}
              alt={`Amazing Work ${num}`}
              className="w-[415.08px] h-[310px] rounded-[40px] object-cover"
            />
            <div
              ref={(el) => (arrowRefs.current[index] = el)}
              className="w-[71px] h-[71px] bg-[#01B2C1] rounded-full flex items-center justify-center absolute bottom-[-3px] right-[-5px]"
            >
              <ArrowUpRight color="#fff" size={30} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazingSection;