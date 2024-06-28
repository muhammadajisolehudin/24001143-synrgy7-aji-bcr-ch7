import React, { useState } from 'react';

const Navbar: React.FC = () => {
  // Contoh state untuk menangani toggle menu di versi mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function untuk toggle menu di versi mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navigation" className="flex justify-between items-center w-full">
      <button className="bg-[#0D28A6] h-[34px] w-[100px]"></button>
      <div className="flex justify-center items-center">
          <ul 
              id="menu" 
              className="z-50 flex flex-col lg:flex-row absolute lg:static lg:right-0 right-[-9.5%] top-[-3%] lg:top-0 w-[50vw] lg:w-full bg-[#FFFFFF] lg:bg-transparent h-[100vh] lg:h-[auto] items-left lg:items-center gap-5 lg:gap-8 p-5 lg:p-0 transform translate-x-full lg:translate-x-0 transition duration-[1s]"
          >
              <li className="mt-1">
                  <a href="" className="font-bold lg:hidden">BCR</a>
              </li>
              <li>
                  <a href="#our-section">Our Service</a>
              </li>
              <li>
                  <a href="#whyUs-section">Why Us</a>
              </li>
              <li>
                  <a href="#testimonial-section">Testimonial</a>
              </li>
              <li>
                  <a href="#faq-section">FAQ</a>
              </li>
              <li className="flex bg-[#5CB85F] w-[81px] h-[36px] justify-center items-center rounded-[2px]">
                  <a className="text-white font-bold " href="">Register</a>
              </li>
          </ul>
          <button id="menu-toggle" className="z-50 menu-toggle block lg:hidden mt-1">
              <div id="garis1" className="w-[18px] transition duration-[0.5s] h-[2px] rounded bg-[#222222] mb-1 transform origin-left"></div>
              <div id="garis2" className="w-[18px] h-[2px] rounded bg-[#222222] mb-1"></div>
              <div id="garis3" className="w-[18px] transition duration-[0.5s] h-[2px] rounded bg-[#222222] mb-1 transform origin-left"></div>
          </button>
      </div>
  </div>
  );
};

export default Navbar;
