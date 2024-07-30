import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
// import max_inst from "../../../public/education/max_inst.jpg"
// import rvce from "../../../public/education/rvce.png"
// import saarland from "../../../public/education/saarland.jpeg"

export const Education = () => {
  return (
    <div className="bg-000b2d">
      <h1 className="text-white text-5xl md:text-7xl lg:text-9xl pl-2 py-10 md:p-10 font-aeonik">
        EDUCTION
      </h1>
      <TextParallaxContent
        imgUrl="bg-max_inst"
        subheading="PhD student @"
        heading="The Max Planck Institute for Informatics"
      >
        <ExampleContent
          year="August 2009 – Feb 2013"
          thesis={[
            "Graduated Summa Cum Laude,",
            " PhD advisor: Prof. Dr. Thorsten Thormaehlen,",
            " Prof. Dr. Hans-Peter Seidel",
            "Thesis: Data-driven Methods for Interactive Visual Content Creation and Manipulation",
          ]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-rvce"
        subheading="Graduate Student @"
        heading="University of Saarland"
      >
        <ExampleContent year="October 2008 – August 2009" thesis={[]} />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-saarland"
        subheading="Bachelor of Engineering in Computer Science from"
        heading="R.V. College of Engineering, Bangalore, India."
      >
        <ExampleContent year="June 2001 – July 2005" thesis={[]} />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 32;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      //   style={{
      //     paddingLeft: IMG_PADDING,
      //     paddingRight: IMG_PADDING,
      //   }}
      className="px-[22px] md:px-[42px] lg:px-[52px]"
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        // backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(90vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className={`sticky z-0 overflow-hidden rounded-3xl ${imgUrl}`}
    >
      <motion.div
        className="absolute inset-0 bg-[#2429338a]"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.7], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 px-2 text-center text-xl md:mb-4 md:text-3xl font-bwmss01">
        {subheading}
      </p>
      <p className="text-center px-2 md:px-6 text-4xl font-bold md:text-7xl font-aeonik">
        {heading}
      </p>
    </motion.div>
  );
};

const ExampleContent = ({ year, thesis }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-white text-3xl font-bold md:col-span-4">
      {year}
    </h2>
    <div className="col-span-1 md:col-span-8">
      {thesis?.map((e, i) => (
        <p key={i} className="mb-4 text-xl text-white md:text-2xl">
          {e}
        </p>
      ))}
      {/* <p className="mb-8 text-xl text-white md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button> */}
    </div>
  </div>
);
