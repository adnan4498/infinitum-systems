import Image from "next/image";
import React from "react";
import benifitsImg from "../../public/benifits-img.png";

const BenifitsSection = () => {
  return (
    <div>
      <div className="xl:flex gap-[28px] xl:justify-between 3xl:justify-around max-[1080px]:px-6 2xl:px-0 ">
        <div>
          <div className="xl:text-[16px] 2xl:text-[20px] font-semibold">
            <span className="text-[#FFF]">Our</span>
            <span className="!text-[#46F0FF]"> Benifits</span>
          </div>
          <div className="xl:text-[42px] xl:font-extrabold xl:w-[520px] 2xl:text-[68px] 3xl:w-[800px] xl:mt-[15px]">
            Smart benefits for your digital growth
          </div>
          <hr className="xl:w-[450px] 2xl:w-[550px] !text-[#454545] xl:mt-[24px] 2xl:mt-[34px]" />

          <div className="xl:mt-[36px] xl:flex gap-[30px] max-[1080px]:flex-col">
            <div>
              <div>
                {/* SVG remains unchanged */}
              </div>

              <div></div>
            </div>

            <div className="xl:flex flex-col gap-[40px] 2xl:gap-[50px]">
              <div>
                <div className="!text-[#42E1F1] xl:text-[16px] 2xl:text-[20px]">
                  Reliable Execution
                </div>
                <div className="text-[16px] 2xl:text-[18px] xl:mt-[10px] 2xl:mt-[15px]">
                  Fresh ideas grounded in consistent delivery.
                </div>
              </div>
              <div>
                <div className="xl:text-[16px] 2xl:text-[20px]">Strategic by Choice</div>
                <div className="text-[16px] 2xl:text-[18px] xl:mt-[10px] 2xl:mt-[15px]">
                  A team fueled by curiosity and guided by smart decisions.
                </div>
              </div>
            </div>
          </div>

          <div className="xl:w-[130px] xl:h-[38px] 2xl:w-[149px] 2xl:h-[41px] 3xl:w-[180px] 3xl:h-[50px] flex justify-center items-center rounded-full bg-[#01B2C1] text-white hover:bg-white hover:text-[#01B2C1] transition-colors duration-300 cursor-pointer mt-8">
            <div className="text-sm 2xl:text-sm 3xl:text-base font-semibold">Read More</div>
          </div>
        </div>

        <div className="relative mt-12 xl:mt-0  1280:w-[600px]  2xl:w-[707px] 2xl:h-[609px] ">
          <div>
            <Image src={benifitsImg} width={707} height={609} alt="image" />
          </div>
          <div className="absolute">
            <button className="bg-[#01B2C1] cursor-pointer xl:text-[16px] 2xl:text-xl 2xl:w-auto px-4 h-10 absolute top-[-520px] left-[300px] xl:top-[-515px] xl:left-[330px] 2xl:left-[373px] 2xl:top-[-590px] 3xl:top-[-600px] 3xl:left-[383px] rounded-3xl  font-medium whitespace-nowrap shadow-md hover:bg-white hover:!text-[#01B2C1] transition duration-300">
              Innovative Thinking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenifitsSection;
