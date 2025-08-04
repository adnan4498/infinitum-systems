"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScrollProvider from "../smooth-scroll-provider";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { SparklesCore } from "../components/ui/sparkles";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Button } from "../components/ui/moving-border";

export default function AboutPage() {
  const words = [
    {
      text: "About",
    },
    {
      text: "Infinitum",
    },
    {
      text: "Systems",
    },
    {
      text: ".",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const storyWords = [
    {
      text: "Our",
    },
    {
      text: "Story",
    },
    {
      text: ".",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const missionWords = [
    {
      text: "Our",
    },
    {
      text: "Mission",
    },
    {
      text: ".",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const teamWords = [
    {
      text: "Our",
    },
    {
      text: "Team",
    },
    {
      text: ".",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const missionCards = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and methodologies to deliver solutions that are ahead of their time, ensuring our clients stay competitive in an ever-evolving digital landscape.",
      icon: "🚀",
      link: "#",
    },
    {
      title: "Quality Excellence",
      description: "Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail, ensuring flawless execution and exceptional performance.",
      icon: "💎",
      link: "#",
    },
    {
      title: "Client Success",
      description: "Your success is our success. We partner with our clients to understand their unique challenges and deliver customized solutions that drive real business results.",
      icon: "🌟",
      link: "#",
    },
  ];

  const teamStats = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "Deep expertise in modern web technologies",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding client expectations",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and maintenance",
    },
  ];

  return (
    <>
      <SmoothScrollProvider>
        <div
          className="bg-[#00051C] min-h-screen"
          style={{
            backgroundColor: "rgb(0, 5, 28)",
            backgroundImage: `
          radial-gradient(circle at 50% -35%, rgb(1, 178, 193) 0px, transparent 30%)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <Navbar />
          </div>
          
          {/* Header with Sparkles */}
          <section className="pt-32 pb-20 text-center relative overflow-hidden">
            <div className="w-full absolute inset-0 h-screen">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#01b2c1"
              />
            </div>
            <div className="max-w-6xl mx-auto px-5 relative z-10">
              <div className="mb-8">
                <TypewriterEffect words={words} className="text-4xl md:text-6xl font-bold" />
              </div>
              <TextGenerateEffect 
                words="Pioneering the future of digital innovation through cutting-edge technology and creative excellence"
                className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
              />
              <div className="mt-12">
                <Button
                  className="font-semibold text-lg cursor-pointer"
                  containerClassName="inline-block"
                  borderRadius="9999px"
                  duration={3000}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-5">
              <div className="text-center mb-16">
                <TypewriterEffect words={storyWords} className="text-4xl font-semibold" />
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <TextGenerateEffect 
                    words="Founded with a vision to bridge the gap between imagination and digital reality, Infinitum Systems emerged from a passion for creating transformative digital experiences. We began as a small team of innovators who believed that technology should not just function—it should inspire."
                    className="text-gray-300 leading-relaxed"
                  />
                  {/* <TextGenerateEffect 
                    words="Today, we stand at the forefront of digital innovation, combining cutting-edge technology with creative excellence to deliver solutions that don't just meet expectations—they exceed them. Our journey is driven by an unwavering commitment to pushing boundaries and exploring the infinite possibilities of the digital world."
                    className="text-lg text-gray-300 leading-relaxed"
                  />
                  <TextGenerateEffect 
                    words="Every project we undertake is a testament to our belief that great design and robust technology can work hand in hand to create experiences that are both beautiful and powerful."
                    className="text-lg text-gray-300 leading-relaxed"
                  /> */}
                </div>
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-6xl font-bold text-neutral-600 dark:text-white text-center"
                    >
                      ⚡
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
                    >
                      Innovation at the speed of light
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <div className="h-32 w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"></div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="py-20 bg-white/5 relative overflow-hidden">
            <div className="w-full absolute inset-0 h-screen">
              <SparklesCore
                id="tsparticlesmission"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={50}
                className="w-full h-full"
                particleColor="#01b2c1"
              />
            </div>
            <div className="max-w-6xl mx-auto px-5 relative z-10">
              <div className="text-center mb-16">
                <TypewriterEffect words={missionWords} className="text-4xl font-semibold" />
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
              </div>
              <HoverEffect items={missionCards} />
            </div>
          </section>

          {/* Our Team Section */}
          <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-5">
              <div className="text-center mb-16">
                <TypewriterEffect words={teamWords} className="text-4xl font-semibold" />
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
              </div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <TextGenerateEffect 
                  words="Behind every great project is a team of passionate professionals. Our diverse group of developers, designers, and strategists brings together years of experience, creative vision, and technical expertise to turn your ideas into digital reality."
                  className="text-lg text-gray-300 leading-relaxed"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {teamStats.map((stat, index) => (
                  <BackgroundGradient key={index} className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 group">
                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-semibold mb-2">{stat.label}</div>
                      <div className="text-gray-400 text-sm">{stat.description}</div>
                    </div>
                  </BackgroundGradient>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 relative overflow-hidden">
            <div className="w-full absolute inset-0 h-screen">
              <SparklesCore
                id="tsparticlescta"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={30}
                className="w-full h-full"
                particleColor="#01b2c1"
              />
            </div>
            <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's work together to bring your vision to life with cutting-edge technology and creative excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="font-semibold text-lg cursor-pointer"
                  containerClassName="inline-block"
                  borderRadius="9999px"
                  duration={3000}
                >
                  Get Started
                </Button>
                <Button
                  className="font-semibold text-lg cursor-pointer bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  containerClassName="inline-block"
                  borderRadius="9999px"
                  duration={3000}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </section>

          <div className="2xl:px-[84px] py-44 1280:px-[40px]">
            <Footer />
          </div>
        </div>
      </SmoothScrollProvider>
    </>
  );
} 