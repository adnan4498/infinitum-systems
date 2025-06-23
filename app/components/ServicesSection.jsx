"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroLadyImg from "../../public/hero-lady.png";

const services = [
  {
    title: "UI/UX",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    img: "/hero-lady.png",
  },
  {
    title: "Web Dev",
    desc: "We build blazing-fast websites with clean code and scalable architecture.",
    img: "/hero-lady.png",
  },
  {
    title: "Branding",
    desc: "Crafting memorable brand experiences through visual identity and storytelling.",
    img: "/hero-lady.png",
  },
];

const ServiceCards = () => {
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);
  const arrowRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    const enters = [];
    const leaves = [];

    cards.forEach((card, i) => {
      const arrow = arrowRefs.current[i];
      const text = textRefs.current[i];

      const enter = () => {
        gsap.killTweensOf([arrow, text]);

        gsap.to(arrow, {
          opacity: 1,
          rotate: -15,
          duration: 0.4,
          ease: "back.out(1.7)",
        });

        gsap.to(text, {
          opacity: 1,
          y: -20,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.killTweensOf([arrow, text]);

        gsap.to(arrow, {
          opacity: 0,
          rotate: 0,
          duration: 0.3,
          ease: "power1.out",
        });

        gsap.to(text, {
          opacity: 0,
          y: 0,
          duration: 0.4,
          ease: "power1.inOut",
        });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      enters.push(() => card.removeEventListener("mouseenter", enter));
      leaves.push(() => card.removeEventListener("mouseleave", leave));
    });

    return () => {
      enters.forEach((off) => off());
      leaves.forEach((off) => off());
    };
  }, []);

  return (
    <div className="bg-[#00051C] w-full m-0 p-0">
      <div className="w-full px-4 pt-0">
        <p className="text-white font-bold text-center text-xl mt-0">
          What we <span className="!text-sky-300"> do </span>
        </p>
        <p className="text-white font-extrabold text-center text-[48px] py-6">
          Transforming ideas <br /> into visually stunning realities
        </p>
      </div>

      <div className="flex justify-center w-full mt-[38px]">
        <div className="flex max-w-[1600px] w-full gap-y-20 gap-x-10 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative w-[480px] cursor-pointer"
            >
              <div className="bg-[#0A0F2C] rounded-2xl overflow-hidden shadow-xl relative z-10">
                <div className="relative overflow-hidden">
                  <Image
                    ref={(el) => (imageRefs.current[index] = el)}
                    src={service.img}
                    alt={service.title}
                    width={480}
                    height={440}
                    className="object-cover w-full h-[440px]"
                  />

                  <div
                    ref={(el) => (arrowRefs.current[index] = el)}
                    className="absolute top-0 right-3 opacity-0"
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 bg-[#00051C] w-36 h-24 rounded-full rotate-[1deg]" />
                      <div className="bg-cyan-400 rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-md rotate-[-15deg]">
                        <ArrowUpRight className="text-white" size={28} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={(el) => (textRefs.current[index] = el)}
                className="absolute left-0 w-full opacity-0 mt-[30px]"
              >
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed w-[370px]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
