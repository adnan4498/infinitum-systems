"use client";

import { useState } from "react";

const testimonials = [
  {
    text: `"Lorem ipsum dolor sit amet..."`,
    name: "Jessica Anna",
    title: "Product Manager at BrightApp",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    text: `"Excellent service and fantastic UI."`,
    name: "Liam Gray",
    title: "CTO at TechCore",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    text: `"Professional and consistent support."`,
    name: "Sophia Turner",
    title: "CEO at Creatix",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    text: `"Amazing experience from start to finish."`,
    name: "Ethan Smith",
    title: "Founder at InnovateX",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  return (
    <div
      className="bg-[#00051C] min-h-screen w-full 3xl:px-10"
      style={{
        backgroundImage: `url('/gradient.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "contain",
      }}
    >
      <section className="min-[1080px]:relative min-[1080px]:w-full min-[1080px]:overflow-hidden min-[1080px]:text-white min-[1080px]:py-20 min-[1080px]:px-4 min-[1080px]:flex min-[1080px]:flex-col min-[1080px]:items-center min-[1080px]:text-center min-[1080px]:z-10 2xl:relative 2xl:py-20 2xl:px-4 2xl:text-white 2xl:flex 2xl:flex-col 2xl:items-center 2xl:text-center 2xl:z-10 3xl:py-28 3xl:px-10">
        <h3 className="min-[1080px]:text-[20px] text-gray-400 2xl:text-[24px] 3xl:text-[28px]">Testimonials</h3>
        <h2 className="min-[1080px]:text-[42px] font-bold mt-[8px] 2xl:text-[68px] 2xl:mt-[10px] 3xl:text-[76px] 3xl:mt-[12px]">
          What <span className="!text-cyan-400">Our Client</span> Says
        </h2>

        <div className="min-[1080px]:relative min-[1080px]:bg-[#032d3e] min-[1080px]:max-w-2xl min-[1080px]:w-full min-[1080px]:rounded-xl min-[1080px]:px-6 min-[1080px]:py-14 2xl:rounded-xl 2xl:px-8 2xl:py-16 2xl:max-w-2xl 3xl:max-w-3xl 3xl:px-12 3xl:py-20 3xl:rounded-2xl">
          <div className="min-[1080px]:absolute min-[1080px]:-bottom-10 min-[1080px]:left-1/2 min-[1080px]:transform min-[1080px]:-translate-x-1/2 min-[1080px]:w-16 min-[1080px]:h-16 min-[1080px]:border-4 min-[1080px]:border-cyan-400 min-[1080px]:rounded-full min-[1080px]:overflow-hidden min-[1080px]:bg-gray-200 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24">
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="min-[1080px]:text-[15px] text-gray-300 leading-relaxed mb-6 3xl:text-lg 3xl:mb-8">
            {testimonials[current].text}
          </p>
          <h4 className="text-cyan-400 font-bold text-[16px] 3xl:text-xl">
            {testimonials[current].name}
          </h4>
          <p className="text-sm text-gray-400 3xl:text-base">
            {testimonials[current].title}
          </p>
        </div>

        <div className="min-[1080px]:mt-14 min-[1080px]:flex min-[1080px]:items-center min-[1080px]:justify-center min-[1080px]:gap-3 min-[1080px]:flex-wrap 2xl:mt-16 2xl:gap-4 3xl:mt-20 3xl:gap-6 cursor-pointer">
          <button
            onClick={prev}
            className="min-[1080px]:w-9 min-[1080px]:h-9 min-[1080px]:text-lg min-[1080px]:border-2 min-[1080px]:border-cyan-400 min-[1080px]:text-cyan-400 min-[1080px]:rounded-full min-[1080px]:flex min-[1080px]:items-center min-[1080px]:justify-center min-[1080px]:hover:bg-cyan-400 min-[1080px]:hover:text-black min-[1080px]:transition 2xl:w-10 2xl:h-10 2xl:text-xl 3xl:w-12 3xl:h-12 3xl:text-2xl"
          >
            ←
          </button>

          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`min-[1080px]:w-10 min-[1080px]:h-10 min-[1080px]:rounded-full min-[1080px]:overflow-hidden min-[1080px]:border min-[1080px]:transition-transform min-[1080px]:duration-300 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 ${
                i === current
                  ? "min-[1080px]:border-cyan-400 min-[1080px]:border-4 min-[1080px]:scale-110"
                  : "min-[1080px]:border-gray-400 min-[1080px]:opacity-50"
              }`}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <button
            onClick={next}
            className="min-[1080px]:w-9 min-[1080px]:h-9 min-[1080px]:text-lg min-[1080px]:border-2 min-[1080px]:border-cyan-400 min-[1080px]:text-cyan-400 min-[1080px]:rounded-full min-[1080px]:flex min-[1080px]:items-center min-[1080px]:justify-center min-[1080px]:hover:bg-cyan-400 min-[1080px]:hover:text-black min-[1080px]:transition 2xl:w-10 2xl:h-10 2xl:text-xl 3xl:w-12 3xl:h-12 3xl:text-2xl"
          >
            →
          </button>
        </div>
      </section>

      <div className="">
        <div className="flex justify-center">
        <hr className="!text-[#01B2C1] bg-[#01B2C1] min-[1080px]:w-[1400px] min-[1280px]:w-[1200px] 2xl:w-[1297px] 3xl:w-[1700px]" />
        </div>
      </div>
    </div>
  );
}
