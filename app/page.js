// pages/index.js
import Image from "next/image";
import { Poppins, Abhaya_Libre } from "next/font/google";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoCarousel from "./components/LogoCarousel";
import AnimatedAboutUsSection from "./components/AboutUs";
import ServicesSection from "./components/ServicesSection";
import BenifitsSection from "./components/BenifitsSection";
import AmazingSection from "./components/AmazingSection";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import NewsLetterSection from "./components/NewsLetterSection";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-abhaya-libre",
});

export default function Home() {
  return (
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
      <div>
        <HeroSection />
      </div>
      <div>
        <LogoCarousel />
      </div>
      <div className="mt-[141px]">
        <AnimatedAboutUsSection />
      </div>
      <div className="mt-[100px] px-[108px]">
        <ServicesSection />
      </div>

      <div className="2xl:px-[84px] mt-[350px]">
        <BenifitsSection />
      </div>

      <div className="2xl:px-[84px] py-44">
        <AmazingSection />
      </div>
      <div className="mt-10">
        <PricingSection />
      </div>
      <div className="2xl:px-[84px] py-44">
        <Testimonials />
      </div>

      <div className="2xl:px-[84px] py-44">
        <NewsLetterSection />
      </div>

      <div className="2xl:px-[84px] py-44">
        <Footer />
      </div>
    </div>
  );
}
