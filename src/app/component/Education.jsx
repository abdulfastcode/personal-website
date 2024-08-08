import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
// import max_inst from "../../../public/education/max_inst.jpg"
// import rvce from "../../../public/education/rvce.png"
// import saarland from "../../../public/education/saarland.jpeg"

export const Education = () => {
  return (
    <div className="bg-000b2d">
      <h1 className="text-white text-5xl md:text-7xl lg:text-7xl pl-2 py-10 md:p-10 font-dmsans">
        Profession
      </h1>
      <TextParallaxContent
        imgUrl="bg-fcai1 md:bg-fcai"
        yearSpend="Sept 2015 – Present"
        heading="Founder and CEO, Fast Code AI Consult Pvt. Ltd. Bangalore, India"
        bgSize="bg-cover "
        role="Founder and CEO"
      >
        {/* <ExampleContent
          year=""
          thesis={[
            "Graduated Summa Cum Laude,",
            "PhD advisor: Prof. Dr. Thorsten Thormaehlen,",
            "Prof. Dr. Hans-Peter Seidel",
            "Thesis: Data-driven Methods for Interactive Visual Content Creation and Manipulation",
          ]}
        /> */}
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="bg-iisc"
        yearSpend="Jan 2020 – Present"
        heading="Adjunct Faculty @ CDS Dept., IISc"
        bgSize="bg-cover md:bg-cover"
        role="Adjunct Faculty"
      >
        {/* <ExampleContent year="June 2001 – July 2005" thesis={[]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-iitb"
        yearSpend="Dec 2016 – May 2019"
        heading="Adjunct Assistant Professor at CSE Dept., IIT Bombay"
        bgSize="bg-cover md:bg-cover"
        role="Adjunct Assistant Professor"
      >
        {/* <ExampleContent year="June 2001 – July 2005" thesis={[]} /> */}
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="bg-apple md:bg-apple1"
        yearSpend="July 2015 – Nov 2015"
        heading="Researcher at SPG, Apple, Cupertino"
        bgSize="bg-cover md:bg-cover"
        role="Researcher"
      >
        {/* <ExampleContent year="June 2001 – July 2005" thesis={[]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-desc"
        yearSpend="March 2013 – Feb 2015"
        heading="Post-doc at Courant Institute, NYU with Chris Bregler and Yann LeCun"
        bgSize="bg-cover md:bg-cover"
        role="Post-Doc"
      >
        {/* <ExampleContent year="June 2001 – July 2005" thesis={[]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-adv_tint md:bg-adv_tint1"
        yearSpend="Feb 2011 – May 2011"
        heading={`Research Intern at Weta Digital Wellington, New Zealand. \n Feature film credits: The Adventures of Tintin(2011) – R & D Developer`}
        bgSize="bg-cover md:bg-cover"
        role="Research Intern"
      >
        {/* <ExampleContent
          year="Feature film credits:"
          thesis={["The Adventures of Tintin(2011) – R & D Developer"]}
        /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-research"
        yearSpend="Oct 2007 – Aug 2008"
        heading="Research Assistant at Media Integration and Communication Center (MICC), University of Florence, Florence, Italy"
        bgSize="bg-cover md:bg-cover"
        role="Research Assistant"
      >
        {/* <ExampleContent year="Feature film credits:" thesis={["The Adventures of Tintin(2011) – R & D Developer"]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-yahoo md:bg-yahoo1"
        yearSpend="Sept 2006 – Sept 2007"
        heading="Software Developer at Yahoo India R & D, Bangalore, India"
        bgSize="bg-cover md:bg-cover"
        role="Software Developer"
      >
        {/* <ExampleContent year="Feature film credits:" thesis={["The Adventures of Tintin(2011) – R & D Developer"]} /> */}
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 32;

const TextParallaxContent = ({
  imgUrl,
  yearSpend,
  heading,
  children,
  bgSize,
  role
}) => {
  return (
    <div
      //   style={{
      //     paddingLeft: IMG_PADDING,
      //     paddingRight: IMG_PADDING,
      //   }}
      className="px-[22px] md:px-[42px] lg:px-[52px] "
    >
      <div className="relative h-[auto] pb-[60px] md:pb-[80px] lg:pb-0 lg:h-[95vh]  ">
        <StickyImage imgUrl={imgUrl} bgSize={bgSize} />
        <OverlayCopy heading={heading} yearSpend={yearSpend} role={role} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl, bgSize }) => {
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

        // backgroundSize: "contain",
        backgroundPosition: "center",
        // height: `calc(50vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className={` bg-no-repeat z-0 overflow-hidden rounded-3xl ${bgSize} ${imgUrl} 
      h-[calc(60vh-64px)] md:h-[calc(80vh-64px)] `}
    >
      <motion.div
        className="absolute inset-0 bg-[#2429338a] rounded-3xl"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ yearSpend, heading,role }) => {
  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "end start"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  // const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.7], [0, 1, 0]);

  return (
    <motion.div
      // style={{
      //   y,
      //   opacity,
      // }}
      // ref={targetRef}
      className="pt-[20px] flex flex-col lg:flex-row  w-full pl-5 lg:pl-0 items-start md:pl-10 text-white gap-[20px]  "
    >
      <div className="flex flex-row-reverse lg:flex-row items-center justify-between lg:justify-normal w-[95%] lg:w-auto">
        <p className="pl-6 text-sm text-gray-400 lg:font-thin  md:pl-4">{yearSpend}</p>
        <p className=" lg:pl-6 text-white font-bold text-xl  md:text-3xl lg:text-[2rem] font-dmsans ">
          {role}
          {/* Founder And CEO */}
        </p>
      </div>
      <div className="w-[80%] lg:max-w-[50%]">
        <p className="pl-1 lg:pl-12 text-slate-300 font-bwmss01 lg:pt-[8px]">
         {heading}
        </p>
      </div>
    </motion.div>
  );
};

const ExampleContent = ({ year, thesis }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24  md:grid-cols-12">
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
