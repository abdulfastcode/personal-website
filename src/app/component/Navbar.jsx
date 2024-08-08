"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Magnetic from "../common/Magnetic";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const header = useRef(null);
  return (
    <div
      style={{
        background: `linear-gradient(to top, rgba(0, 8, 31)  0%, rgb(0, 0, 0 / 57%) 100%)`,
        backdropFilter: `blur(20px)`,
        WebkitBackdropFilter: `blur(20px)`,
      }}
      ref={header}
      className="max-w-[92%] md:max-w-fit md:absolute flex  md:top-5 inset-x-0 mx-auto border border-white/[0.2] rounded-full  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-30 font-bwmss01 text-neutral-50 py-2 px-2 md:px-8 md:py-2 justify-between  items-center"
    >
      <div className="w-full  justify-center flex flex-wrap items-center">
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:px-[15px] cursor-pointer group">
            <ScrollLink to="about" smooth={true} duration={1000}>
              About
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[32px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:px-[15px] cursor-pointer group">
            <ScrollLink to="education" smooth={true} duration={1000}>
              Education
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[32px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>

        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:px-[15px] cursor-pointer group">
            <ScrollLink to="alumni" smooth={true} duration={1000}>
              Alumni
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[32px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:px-[15px] cursor-pointer group">
            <ScrollLink to="profession" smooth={true} duration={1000}>
              Profession
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[32px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:px-[15px] cursor-pointer group">
            <ScrollLink to="patents" smooth={true} duration={1000}>
              Patents
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[32px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:px-[15px] cursor-pointer group">
            <ScrollLink to="publications" smooth={true} duration={1000}>
              Publications
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[32px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[7px] md:px-[15px] cursor-pointer group">
            <ScrollLink to="contact" smooth={true} duration={1000}>
              Contact
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[32px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Navbar;
