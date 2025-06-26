"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About Us", "What We do", "Testimonial"];

  return (
    <nav
      className={`py-8 md:py-14 px-[108px] 3xl:px-[s] fixed w-full z-50 top-0 start-0 transition-colors duration-300 ${
        scrolled ? "bg-[#00051C] backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl 3xl:max-w-[1600px] flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            className="h-12 md:h-16 3xl:h-20 ml-1"
            alt="Logo"
            width={180}
            height={16}
          />
        </div>

        <div className="flex md:order-2">
          <button
            type="button"
            className="hidden md:inline-block bg-[#01b2c1] text-white hover:bg-white hover:!text-[#01b2c1] cursor-pointer px-6 py-2 3xl:px-8 3xl:py-3 rounded-full font-semibold text-base 3xl:text-lg transition duration-300"
          >
            Get started
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden cursor-pointer md:flex justify-center gap-[64px] 3xl:gap-[96px] text-base 3xl:text-lg font-light group">
          <div className="text-[#46F0FF] group-hover:text-white hover:!text-[#46F0FF] transition-colors duration-300">
            Home
          </div>
          <div className="text-white group-hover:text-white hover:!text-[#46F0FF] transition-colors duration-300">
            About us
          </div>
          <div className="text-white group-hover:text-white hover:!text-[#46F0FF] transition-colors duration-300">
            What We do
          </div>
          <div className="text-white group-hover:text-white hover:!text-[#46F0FF] transition-colors duration-300">
            Testimonials
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-90 transition-all duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-16 pb-24">
          <div className="absolute top-6 right-6">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-full hover:bg-white hover:text-[#01B2C1] transition duration-300"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-8 w-full max-w-xs">
            {navItems.map((item) => (
              <li key={item} className="w-full">
                <a
                  href="#"
                  onClick={() => handleItemClick(item)}
                  className={`block py-3 text-center text-xl 3xl:text-2xl relative font-extralight transition-all duration-300 ${
                    activeItem === item
                      ? "text-[#01B2C1]"
                      : "text-white hover:text-[#01B2C1]"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-2 left-1/4 w-1/2 h-px transition-all duration-300 ${
                      activeItem === item
                        ? "bg-[#01B2C1] scale-x-100"
                        : "bg-white scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <button
              type="button"
              className="bg-[#01B2C1] text-white px-8 py-3 3xl:px-10 3xl:py-4 3xl:text-xl rounded-full font-semibold hover:bg-white hover:text-[#01B2C1] transition duration-300"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
