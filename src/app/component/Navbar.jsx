"use client"; 
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Magnetic from "../common/Magnetic";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const header = useRef(null);
  return (
    <div
      ref={header}
      className="absolute flex z-30 top-0 font-bwmss01 text-white p-[20px] md:p-[35px] justify-between w-full items-center"
    >
      <div className="w-full  justify-center flex flex-wrap items-center">
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:p-[15px] cursor-pointer group">
            <ScrollLink to="about" smooth={true} duration={1000}>
              About
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:p-[15px] cursor-pointer group">
            <ScrollLink to="profession" smooth={true} duration={1000}>
              Profession
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:p-[15px] cursor-pointer group">
            <ScrollLink to="alumni" smooth={true} duration={1000}>
              Alumni
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:p-[15px] cursor-pointer group">
            <ScrollLink to="education" smooth={true} duration={1000}>
              Education
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:p-[15px] cursor-pointer group">
            <ScrollLink to="patents" smooth={true} duration={1000}>
              Patents
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:p-[15px] cursor-pointer group">
            <ScrollLink to="publications" smooth={true} duration={1000}>
              Publications
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:p-[15px] cursor-pointer group">
            <ScrollLink to="contact" smooth={true} duration={1000}>
              Contact
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Navbar;
