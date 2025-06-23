import { Button } from "@/components/ui/button";
import React from "react";

const PricingSection = () => {
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

  return (
    <section
      className="relative h-[900px] py-24 px-4 flex flex-col items-center"
      style={{
        backgroundImage: "url('/pricing-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00051C]/85 to-[#000A33]/85 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose your <span className="!text-sky-300">Best</span> Plan
          </h1>
        </div>

        <div className="gap-[23px] flex">
          {plans.map((item, i) => (
            <div
              key={i}
              className="w-[416px] h-[502px] border-[2px] border-[#FFFFFF] rounded-[24px] p-[20px] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer hover:bg-white hover:!text-black"
            >
              <div className="flex flex-col justify-center items-center text-center gap-[15px]">
                <div className="text-[32px] font-semibold">{item.title}</div>
                <div className="text-[42px] font-semibold">{item.price}</div>
                <div className="w-[333px] text-[16px]">{item.description}</div>
                <div className="w-[333px] text-[16px]">{item.features}</div>
                <div className="flex justify-center">
                  <div className="w-[133px] bg-[#01B2C1] rounded-full p-[10px] text-center">
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
