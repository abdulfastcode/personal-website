"use client";
import React, { useState,useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../../../lib/utils";
import Link from "next/link";
import Magnetic from "@/app/common/Magnetic";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.005) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className={cn(
          "max-w-[92%] md:max-w-fit flex fixed top-5 inset-x-0 mx-auto border border-white/[0.2] rounded-full navbar_bg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center font-bwmss01 text-neutral-50 py-2 px-2 md:px-8 md:py-2 space-x-4",
          className
        )}
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
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
