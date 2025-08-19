import React from "react";

const Footer2 = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Infinitum</h2>
            <p className="text-indigo-200 mb-6 max-w-sm">
              Pioneering the future of digital innovation with cutting-edge solutions for forward-thinking businesses.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition">
                <span className="font-bold">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition">
                <span className="font-bold">t</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition">
                <span className="font-bold">in</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition">
                <span className="font-bold">ig</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="relative z-10">Solutions</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400 opacity-50"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-indigo-200 hover:text-white transition">Web Development</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition">Mobile Apps</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition">UI/UX Design</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition">Cloud Services</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition">AI Integration</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="relative z-10">Company</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400 opacity-50"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-indigo-200 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition">Press</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400 opacity-50"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="text-indigo-200">123 Innovation Street, Tech City, TC 10001</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-indigo-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-indigo-200">info@infinitum.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-indigo-800 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-indigo-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Infinitum Systems. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-indigo-300 hover:text-white transition text-sm">Privacy Policy</a>
            <a href="#" className="text-indigo-300 hover:text-white transition text-sm">Terms of Service</a>
            <a href="#" className="text-indigo-300 hover:text-white transition text-sm">Cookie Policy</a>
            <a href="#" className="text-indigo-300 hover:text-white transition text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;