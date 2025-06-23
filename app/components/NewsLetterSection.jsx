import React from "react";

const NewsLetterSection = () => {
  return (
    <div>
      <div className="bg-[#000726] 2xl:flex items-center justify-around rounded-[4px] 2xl:py-[76px]">
        <div className="2xl:text-[32px]">Subscribe Newsletters</div>
        <div className="2xl:flex items-center justify-between 2xl:px-3 2xl:w-[600px] bg-[#00395DB2] 2xl:py-[22px] rounded-[4px]">
            <div className="2xl:text-[16px] 2xl:pl-5 opacity-50">
                Enter your email
            </div>
          <div>
            <button
              type="button"
              className="hidden md:inline-block 2xl:text-[16px] bg-[#01B2C1] text-white 2xl:w-[211px] 2xl:h-[56px] 2xl:px-6 2xl:py-2  rounded-[4px] 2xl:font-semibold hover:bg-white hover:text-[#01B2C1] transition duration-300"
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
