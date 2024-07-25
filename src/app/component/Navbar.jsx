"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Magnetic from "../common/Magnetic";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const header = useRef(null);
  return (
    <div
      ref={header}
      className="absolute flex z-30 top-0 font-bwmss01 text-white p-[35px] justify-between w-full items-center"
    >
      <div className="w-full  justify-center flex items-center">
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[15px] cursor-pointer group">
            <ScrollLink to="about" smooth={true} duration={1000}>
              About
            </ScrollLink>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[15px] cursor-pointer group">
            <a>Education</a>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="flex flex-col relative z-10 p-[15px] cursor-pointer group">
            <a>Contact</a>
            <div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Navbar;
