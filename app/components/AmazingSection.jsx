"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import circleIcon from "../../public/circle.svg";
import { ThreeDMarquee } from "./ui/3d-marquee";
import kaiserImg from "../../public/kaiser-img.png";
import HBOimg from "../../public/hbo-img.png";
import zenSilkImg from "../../public/silk-zen-img.png";

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


   const images = [
      kaiserImg.src,
      { type: "video", src: "/atelier-video.mp4" },
      zenSilkImg.src,
      { type: "video", src: "/kaiser-video.mp4" },
      HBOimg.src,
      { type: "video", src: "/plinth-video.mp4" },
      kaiserImg.src,
      { type: "video", src: "/the-palm-video.mp4" },
      kaiserImg.src,
      { type: "video", src: "/atelier-video.mp4" },
      zenSilkImg.src,
      { type: "video", src: "/kaiser-video.mp4" },
      HBOimg.src,
      { type: "video", src: "/plinth-video.mp4" },
      kaiserImg.src,
      { type: "video", src: "/atelier-video.mp4" },
      kaiserImg.src,
      { type: "video", src: "/kaiser-video.mp4" },
      HBOimg.src,
      { type: "video", src: "/the-palm-video.mp4" },
      zenSilkImg.src,
      { type: "video", src: "/plinth-video.mp4" },
      kaiserImg.src,
      { type: "video", src: "/atelier-video.mp4" },
      HBOimg.src,
      { type: "video", src: "/kaiser-video.mp4" },
      zenSilkImg.src,
      { type: "video", src: "/the-palm-video.mp4" },
      kaiserImg.src,
      { type: "video", src: "/plinth-video.mp4" },
      kaiserImg.src,
      { type: "video", src: "/the-palm-video.mp4" },
      HBOimg.src,
      { type: "video", src: "/atelier-video.mp4" },
      zenSilkImg.src,
      { type: "video", src: "/kaiser-video.mp4" },
    ];

  return (
    <div className="relative">
      <div className="min-[1080px]:flex justify-between min-[1280px]:justify-normal min-[1280px]:gap-[120px] 2xl:flex 3xl:justify-normal 3xl:gap-[160px]">
        <div className="min-[1080px]:text-[44px] min-[1080px]:w-[520px] min-[1080px]:mt-[10px] min-[1280px]:text-[50px] min-[1280px]:w-[580px] min-[1280px]:mt-[12px] 2xl:text-[68px] 2xl:font-extrabold 2xl:w-[607px] 2xl:mt-[15px] 3xl:text-[88px] 3xl:w-[750px] leading-tight">
          Explore Our <span className="!text-[#46F0FF]"><br className="hidden min-[1280]:block 2xl:hidden"></br> Amazing</span> Works
        </div>
        <div>
          <div className="min-[1080px]:text-[16px] min-[1280px]:text-[17px] font-semibold min-[1080px]:mt-[15px] min-[1280px]:mt-[18px] 2xl:text-[20px] 2xl:mt-[20px] 3xl:text-[24px]">
            <span className="text-[#FFF]">Our</span>
            <span className="text-[#46F0FF]"> Work</span>
          </div>
          <div className="min-[1080px]:text-[13px] min-[1280px]:text-[15px] min-[1080px]:w-[440px] min-[1280px]:w-[490px] min-[1080px]:mt-[20px] min-[1280px]:mt-[26px] text-[16px] 2xl:w-[525px] 2xl:mt-[30px] 3xl:text-[18px] 3xl:w-[640px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </div>
        </div>
      </div>

      <div className="absolute min-[1080px]:top-[-40px] min-[1080px]:left-[360px] min-[1280px]:left-[400px] 2xl:top-[-50px] left-[450px] 2xl:left-[450px] 3xl:left-[540px]">
        <Image src={circleIcon} alt="About Us" width={157} height={157} />
      </div>

      <div className="min-[1080px]:flex gap-[24px] mt-8 2xl:flex 2xl:gap-[31px] 1280:text-[14px] 2xl:text-[16px]">
        <div className="min-[1080px]:w-[110px] min-[1080px]:h-[36px] 2xl:w-[128px] 2xl:h-[41px] flex justify-center items-center rounded-full bg-[#01B2C1] text-white">
          <div>Branding</div>
        </div>
        <div className="min-[1080px]:w-[110px] min-[1080px]:h-[36px] 2xl:w-[128px] 2xl:h-[41px] flex justify-center items-center rounded-full border border-[#01B2C1] hover:bg-[#01B2C1] hover:text-white transition duration-300 cursor-pointer">
          <div>UI/UX Design</div>
        </div>
        <div className="min-[1080px]:w-[110px] min-[1080px]:h-[36px] 2xl:w-[128px] 2xl:h-[41px] flex justify-center items-center rounded-full border border-[#01B2C1] hover:bg-[#01B2C1] hover:text-white transition duration-300 cursor-pointer">
          <div>Development</div>
        </div>
      </div>



        <div className="py-20 cursor-pointer">
            <ThreeDMarquee images={images} />
          </div>


      {/* <div className="min-[1080px]:flex justify-around min-[1280px]:gap-[30px] 2xl:flex gap-[25px] mt-[40px] 3xl:gap-[50px]">
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
              className="min-[1080px]:w-[360px] min-[1080px]:h-[270px] min-[1280px]:w-[390px] min-[1280px]:h-[290px] w-[415.08px] h-[310px] 3xl:w-[480px] 3xl:h-[360px] rounded-[40px] object-cover"
            />
            <div
              ref={(el) => (arrowRefs.current[index] = el)}
              className="min-[1080px]:w-[60px] min-[1080px]:h-[60px] min-[1280px]:w-[66px] min-[1280px]:h-[66px] w-[71px] h-[71px] 3xl:w-[80px] 3xl:h-[80px] bg-[#01B2C1] rounded-full flex items-center justify-center absolute bottom-[-3px] right-[-5px]"
            >
              <ArrowUpRight color="#fff" size={32} />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AmazingSection;
