import React from "react";

const NewsLetterSection = () => {
  return (
    <div>
      <div className="bg-[#000726] min-[1080px]:flex items-center justify-around rounded-[4px] min-[1080px]:py-[50px] min-[1280px]:py-[64px] 2xl:flex 2xl:py-[76px]">
        <div className="min-[1080px]:text-[24px] min-[1280px]:text-[28px] 2xl:text-[32px] text-white font-semibold">
          Subscribe Newsletters
        </div>
        <div className="min-[1080px]:flex items-center justify-between min-[1080px]:px-3 min-[1080px]:w-[480px] min-[1080px]:py-[18px] min-[1280px]:w-[540px] min-[1280px]:py-[20px] bg-[#00395DB2] rounded-[4px] 2xl:flex 2xl:px-3 2xl:w-[600px] 2xl:py-[22px]">
          <div className="min-[1080px]:text-[14px] min-[1280px]:text-[15px] 2xl:text-[16px] text-white pl-5 opacity-50">
            Enter your email
          </div>
          <div>
            <button
              type="button"
              className="hidden md:inline-block min-[1080px]:text-[14px] min-[1080px]:w-[170px] min-[1080px]:h-[48px] min-[1280px]:w-[190px] min-[1280px]:h-[52px] 2xl:text-[16px] bg-[#01B2C1] text-white 2xl:w-[211px] 2xl:h-[56px] px-6 py-2 rounded-[4px] font-semibold hover:bg-white hover:text-[#01B2C1] transition duration-300"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
