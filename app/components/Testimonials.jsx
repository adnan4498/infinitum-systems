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
      className="2xl:bg-[#00051C] 2xl:min-h-screen 2xl:w-full"
      style={{
        backgroundColor: "rgb(0, 5, 28)",
        backgroundImage: `url('/gradient.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "contain",
      }}
    >
      <section className="2xl:relative 2xl:w-full 2xl:overflow-hidden 2xl:text-white 2xl:py-20 2xl:px-4 2xl:flex 2xl:flex-col 2xl:items-center 2xl:text-center 2xl:z-10">
        <h3 className="2xl:text-[24px] 2xl:text-gray-400">Testimonials</h3>
        <h2 className="2xl:text-[68px] 2xl:font-bold 2xl:mt-[10px]">
          What <span className="2xl:!text-cyan-400">Our Client</span> Says
        </h2>

        <div className="2xl:relative 2xl:bg-[#032d3e] 2xl:max-w-2xl 2xl:w-full 2xl:rounded-xl 2xl:px-8 2xl:py-16">
          <div className="2xl:absolute 2xl:-bottom-10 2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2 2xl:w-20 2xl:h-20 2xl:border-4 2xl:border-cyan-400 2xl:rounded-full 2xl:overflow-hidden 2xl:bg-gray-200">
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="2xl:w-full 2xl:h-full 2xl:object-cover"
            />
          </div>

          <p className="2xl:text-base 2xl:text-gray-300 2xl:leading-relaxed 2xl:mb-6">
            {testimonials[current].text}
          </p>
          <h4 className="2xl:text-cyan-400 2xl:font-bold 2xl:text-lg">
            {testimonials[current].name}
          </h4>
          <p className="2xl:text-sm 2xl:text-gray-400">
            {testimonials[current].title}
          </p>
        </div>

        <div className="2xl:mt-16 2xl:flex 2xl:items-center 2xl:justify-center 2xl:gap-4 2xl:flex-wrap">
          <button
            onClick={prev}
            className="2xl:w-10 2xl:h-10 2xl:border-2 2xl:border-cyan-400 2xl:text-cyan-400 2xl:rounded-full 2xl:flex 2xl:items-center 2xl:justify-center 2xl:text-xl 2xl:hover:bg-cyan-400 2xl:hover:text-black 2xl:transition"
          >
            ←
          </button>

          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`2xl:w-12 2xl:h-12 2xl:rounded-full 2xl:overflow-hidden 2xl:border 2xl:transition-transform 2xl:duration-300 ${
                i === current
                  ? "2xl:border-cyan-400 2xl:border-4 2xl:scale-110"
                  : "2xl:border-gray-400 2xl:opacity-50"
              }`}
            >
              <img
                src={t.img}
                alt={t.name}
                className="2xl:w-full 2xl:h-full 2xl:object-cover"
              />
            </div>
          ))}

          <button
            onClick={next}
            className="2xl:w-10 2xl:h-10 2xl:border-2 2xl:border-cyan-400 2xl:text-cyan-400 2xl:rounded-full 2xl:flex 2xl:items-center 2xl:justify-center 2xl:text-xl 2xl:hover:bg-cyan-400 2xl:hover:text-black 2xl:transition"
          >
            →
          </button>
        </div>
      </section>

      <div>
        <hr className="!text-[#01B2C1] bg-[#01B2C1] 2xl:w-[1297px]"></hr>
      </div>
    </div>
  );
}
