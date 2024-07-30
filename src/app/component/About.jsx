import React from "react";
import RoundedButton from "../common/RoundedButton";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const phrase = `Founder and Chief Scientist of Fast Code AI and holds a Ph.D. in Computer Science from the Max-Planck Institute for Informatics, Germany. His research intersects computer graphics, vision, and machine learning. Also serves as an Adjunct Faculty in the CDS department at IISc, where he leads a deep learning research group. He has an extensive teaching and professional background, having taught Computer Vision at IIT Bombay and worked with companies like Yahoo!, Weta Digital, and Apple. `;
  const description = useRef(null);
  const isInView = useInView(description);

  // animation
  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="w-full bg-[#000b2d] text-white  md:pb-[80px] lg:pb-[100px]">
      <div data-scroll data-scroll-speed={0.1}>
        <RoundedButton className=" hidden md:flex top-[-10px] md:top-[-25px] lg:top-[-100px] md:left-[100px] w-[140px] lg:w-[180px] h-[140px] lg:h-[180px] bg-[#202e5b] text-white rounded-full absolute  items-center justify-center cursor-pointer ">
          <p className="m-0 text-[16px] font-light relative z-10 font-bwmss01">
            About me
          </p>
        </RoundedButton>
        {/* <p className="block mx-w-[150px] top-[80px] left-[20px] md:hidden m-0 text-[16px] font-light relative z-10 font-bwmss01">
            About me
          </p> */}
      </div>
      <div
        ref={description}
        className="pl-[30px] pr-[20px] md:pl-[268px] lg:pl-[300px] md:pr-[100px] mt-[50px] md:mt-[100px] lg:mt-[200px] flex justify-center font-aeonik"
      >
        <div className="max-w-[1400px] flex gap-[50px] relative ">
          <p className="m-0 text-[22px] md:text-[26px] lg:text-[36px] gap-[8px] leading-[1.3] ">
            {phrase.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="mr-[3px] relative overflow-hidden inline-flex"
                >
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                    className="mr-[3px]"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
