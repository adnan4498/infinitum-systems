"use client"
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const PricingSection = () => {
  const [myState, setMyState] = useState(5);

  useEffect(() => {
    setMyState(6);
  }, [myState]);

  const plans = [
    {
      title: "Basic Plan",
      price: "$75",
      description:
        "Ideal for small businesses or startups looking to establish their brand presence. Includes essential features to get started.",
      features: ["24/7 Support"],
      type: "transparent",
    },
    {
      title: "Standard Plan",
      price: "$200",
      description:
        "Perfect for growing brands that need a more complete and polished digital presence. Offers balanced value with more customization.",
      features: ["24/7 Support"],
      type: "solid",
    },
    {
      title: "Professional Plan",
      price: "$500",
      description:
        "Designed for businesses seeking advanced strategy, premium quality, and custom-built solutions.",
      features: ["24/7 Support"],
      type: "transparent",
    },
  ];

  console.log(myState, "mmm");

  return (
    <section
      className="relative h-[900px] 3xl:h-[1100px] py-24 3xl:py-32 px-4 3xl:px-16 flex flex-col items-center"
      style={{
        backgroundImage: "url('/pricing-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#00051C]/85 to-[#000A33]/85 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <div className="text-center mb-16 3xl:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-white mb-4">
            Choose your <span className="!text-sky-300">Best</span> Plan
          </h1>
        </div>

        <div className="gap-[23px] 3xl:gap-[40px] flex">
          {plans.map((item, i) => (
            <div
              key={i}
              className="w-[416px] 3xl:w-[500px] h-[502px] 3xl:h-[600px] border-[2px] border-[#FFFFFF] rounded-[24px] p-[20px] 3xl:p-[32px] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer hover:bg-white hover:!text-black"
            >
              <div className="flex flex-col justify-center items-center text-center gap-[15px] 3xl:gap-[25px]">
                <div className="text-[32px] 3xl:text-[40px] font-semibold">
                  {item.title}
                </div>
                <div className="text-[42px] 3xl:text-[52px] font-semibold">
                  {item.price}
                </div>
                <div className="w-[333px] 3xl:w-[390px] text-[16px] 3xl:text-[18px]">
                  {item.description}
                </div>
                <div className="w-[333px] 3xl:w-[390px] text-[16px] 3xl:text-[18px]">
                  {item.features}
                </div>
                <div className="flex justify-center">
                  <div className="w-[133px] 3xl:w-[160px] bg-[#01B2C1] rounded-full p-[10px] 3xl:p-[14px] text-center">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;