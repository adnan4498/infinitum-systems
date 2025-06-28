"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import circleIcon from "../../public/circle.svg";
import ladyImg from "../../public/about-us-lady.png";
import { DD } from "./DD";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const AnimatedAboutUsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row items-center lg:gap-10 w-full px-6 lg:px-16 py-20 bg-[#00051C] relative overflow-hidden"
    >
      <div className="relative w-full  flex justify-center items-center">
        {/* <div className="group relative w-[581px] h-[570px] overflow-hidden border-t-8 border-l-8 border-b-8 border-r-0 border-sky-300">
          <Image
            src="/about-us-lady.png"
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {inView && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="glow-border" />
            </div>
          )}
        </div> */}
        {/* <DD /> */}

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
          </CardBody>
        </CardContainer>
        
      </div>

{/* 
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[600px] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
                <Image
                  src="/about-us-lady.png"
                  width={660}
                  height={400}
                />
            </CardItem>
          </CardBody>
        </CardContainer> */}

      <div className="absolute right-[100px] top-[0px]">
        <Image src="/circle.svg" alt="About Us" width={157} height={157} />
      </div>

      <div className="mt-10 lg:mt-0 w-8/12 text-white">
        <h3 className="text-2xl text-center lg:text-left">
          <span className="font-semibold ">About </span>
          <span className="!text-[#01B2C1] font-semibold">Us</span>
        </h3>
        <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mt-4 font-['poppins'] w-[661px]">
          We craft <span className="!text-[#01B2C1]">bold ideas</span> and smart
          designs that thrive in a digital-first world.
        </h2>
        <p className="text-base leading-relaxed mt-6 max-w-xl font-semibold w-[584px]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
        <button className="mt-8 bg-[#01b2c1] text-white hover:bg-white hover:!text-[#01b2c1] cursor-pointer px-6 py-3 rounded-full font-semibold   transition duration-300 w-[121px]">
          Explore
        </button>
      </div>
    </div>
  );
};

export default AnimatedAboutUsSection;
