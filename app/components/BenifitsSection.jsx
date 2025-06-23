import Image from "next/image";
import React from "react";
import benifitsImg from "../../public/benifits-img.png";

const BenifitsSection = () => {
  return (
    <div>
      <div className="2xl:flex gap-[28px]">
        <div>
          <div className="2xl:text-[20px] font-semibold">
            <span className="text-[#FFF]">Our</span>
            <span className="!text-[#46F0FF]"> Benifits</span>
          </div>
          <div className="2xl:text-[68px] 2xl:font-extrabold 2xl:w-[618px] 2xl:mt-[15px]">
            Smart benefits for your digital growth
          </div>
          <hr className="2xl:w-[550px] !text-[#454545] 2xl:mt-[34px]"></hr>

          <div className="2xl:mt-[44px] 2xl:flex gap-[30px]">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="254"
                  viewBox="0 0 55 254"
                  fill="none"
                >
                  <circle cx="27.5" cy="27.5" r="27.5" fill="#01B2C1" />
                  <path
                    d="M37.2124 16.7019H40.4686C40.7565 16.7019 41.0326 16.8163 41.2361 17.0198C41.4397 17.2234 41.554 17.4994 41.554 17.7873V35.1539C41.554 35.4418 41.4397 35.7178 41.2361 35.9214C41.0326 36.1249 40.7565 36.2393 40.4686 36.2393H14.4188C14.1309 36.2393 13.8548 36.1249 13.6513 35.9214C13.4477 35.7178 13.3333 35.4418 13.3333 35.1539V17.7873C13.3333 17.4994 13.4477 17.2234 13.6513 17.0198C13.8548 16.8163 14.1309 16.7019 14.4188 16.7019H17.675"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* <path
                    d="M25.2729 246.91L23.1021 252.651"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /> */}
                  <path
                    d="M29.6145 36.2393L31.7853 41.6663"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.9312 41.6665H33.9561"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.2497 17.4837C26.3432 17.243 26.5072 17.0362 26.7203 16.8904C26.9333 16.7445 27.1855 16.6665 27.4437 16.6665C27.7019 16.6665 27.954 16.7445 28.1671 16.8904C28.3802 17.0362 28.5442 17.243 28.6376 17.4837L30.027 21.0439H33.7391C34.003 21.0478 34.2598 21.1304 34.4764 21.2813C34.693 21.4321 34.8596 21.6443 34.9547 21.8905C35.028 22.1215 35.0343 22.3685 34.9728 22.6029C34.9113 22.8373 34.7846 23.0494 34.6074 23.2147L31.3295 26.1236L32.7188 28.9022C32.8445 29.1462 32.8872 29.4245 32.8401 29.6949C32.7931 29.9653 32.659 30.213 32.4583 30.4001C32.2624 30.5956 32.0085 30.7224 31.7346 30.7615C31.4607 30.8007 31.1815 30.75 30.9387 30.6172L27.4437 28.7069L23.9487 30.6172C23.7059 30.75 23.4267 30.8007 23.1528 30.7615C22.8788 30.7224 22.6249 30.5956 22.4291 30.4001C22.2283 30.213 22.0943 29.9653 22.0472 29.6949C22.0002 29.4245 22.0428 29.1462 22.1686 28.9022L23.5579 26.1236L20.28 23.2147C20.086 23.0424 19.9488 22.8152 19.8868 22.5632C19.8248 22.3112 19.8408 22.0464 19.9326 21.8037C20.041 21.5737 20.2132 21.3798 20.4288 21.245C20.6443 21.1103 20.8941 21.0405 21.1483 21.0439H24.8604L26.2497 17.4837Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="254"
                viewBox="0 0 55 254"
                fill="none"
              >
                <circle cx="27.5" cy="27.5" r="27.5" fill="#01B2C1" />
                <path
                  d="M37.2124 16.7019H40.4686C40.7565 16.7019 41.0326 16.8163 41.2361 17.0198C41.4397 17.2234 41.554 17.4994 41.554 17.7873V35.1539C41.554 35.4418 41.4397 35.7178 41.2361 35.9214C41.0326 36.1249 40.7565 36.2393 40.4686 36.2393H14.4188C14.1309 36.2393 13.8548 36.1249 13.6513 35.9214C13.4477 35.7178 13.3333 35.4418 13.3333 35.1539V17.7873C13.3333 17.4994 13.4477 17.2234 13.6513 17.0198C13.8548 16.8163 14.1309 16.7019 14.4188 16.7019H17.675"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.2729 246.91L23.1021 252.651"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.6145 36.2393L31.7853 41.6663"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9312 41.6665H33.9561"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.2497 17.4837C26.3432 17.243 26.5072 17.0362 26.7203 16.8904C26.9333 16.7445 27.1855 16.6665 27.4437 16.6665C27.7019 16.6665 27.954 16.7445 28.1671 16.8904C28.3802 17.0362 28.5442 17.243 28.6376 17.4837L30.027 21.0439H33.7391C34.003 21.0478 34.2598 21.1304 34.4764 21.2813C34.693 21.4321 34.8596 21.6443 34.9547 21.8905C35.028 22.1215 35.0343 22.3685 34.9728 22.6029C34.9113 22.8373 34.7846 23.0494 34.6074 23.2147L31.3295 26.1236L32.7188 28.9022C32.8445 29.1462 32.8872 29.4245 32.8401 29.6949C32.7931 29.9653 32.659 30.213 32.4583 30.4001C32.2624 30.5956 32.0085 30.7224 31.7346 30.7615C31.4607 30.8007 31.1815 30.75 30.9387 30.6172L27.4437 28.7069L23.9487 30.6172C23.7059 30.75 23.4267 30.8007 23.1528 30.7615C22.8788 30.7224 22.6249 30.5956 22.4291 30.4001C22.2283 30.213 22.0943 29.9653 22.0472 29.6949C22.0002 29.4245 22.0428 29.1462 22.1686 28.9022L23.5579 26.1236L20.28 23.2147C20.086 23.0424 19.9488 22.8152 19.8868 22.5632C19.8248 22.3112 19.8408 22.0464 19.9326 21.8037C20.041 21.5737 20.2132 21.3798 20.4288 21.245C20.6443 21.1103 20.8941 21.0405 21.1483 21.0439H24.8604L26.2497 17.4837Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
              </div>
            </div>

            <div className="2xl:flex flex-col gap-[50px]">
              <div>
                <div className="!text-[#42E1F1] 2xl:text-[20px]">
                  Reliable Execution
                </div>
                <div className="text-[20px] 2xl:mt-[15px]">
                  Fresh ideas grounded in consistent delivery.
                </div>
              </div>
              <div>
                <div className=" 2xl:text-[20px] ">Strategic by Choice</div>
                <div className="text-[20px] 2xl:mt-[15px]">
                  A team fueled by curiosity and guided by smart decisions.
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:w-[149px] 2xl:h-[41px] flex justify-center items-center rounded-full bg-[#01B2C1]">
            <div>Read More</div>
          </div>
        </div>

        <div className="relative">
          <div>
            <Image src={benifitsImg} width={707} height={609} alt="image" />
          </div>
          <div className="absolute">
            <button className="bg-[#01B2C1] cursor-pointer w-auto px-4 h-10 absolute top-[-570px] left-[370px] rounded-3xl text-xl font-medium whitespace-nowrap shadow-md hover:bg-white hover:!text-[#01B2C1] transition duration-300">
              Innovative Thinking
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BenifitsSection;
