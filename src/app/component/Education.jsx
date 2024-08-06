import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
// import max_inst from "../../../public/education/max_inst.jpg"
// import rvce from "../../../public/education/rvce.png"
// import saarland from "../../../public/education/saarland.jpeg"
 
export const Education = () => {
  return (
    <div className="bg-000b2d">
      <h1 className="text-white text-5xl md:text-7xl lg:text-8xl pl-2 py-10 md:p-10 font-dmsans">
        PROFESSION
      </h1>
      <TextParallaxContent
        imgUrl="bg-fcai1 md:bg-fcai"
        subheading="September 2015 – Present"
        heading="Founder and CEO, Fast Code AI Consult Pvt. Ltd. Bangalore, India"
        bgSize="bg-cover md:bg-contain"
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
        subheading="January 2020 – Present"
        heading="Adjunct Faculty @ CDS Dept., IISc"
        bgSize="bg-cover md:bg-cover"
      >
        {/* <ExampleContent year="June 2001 – July 2005" thesis={[]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-iitb"
        subheading="Dec 2016 – May 2019"
        heading="Adjunct Assistant Professor at CSE Dept., IIT Bombay"
        bgSize="bg-cover md:bg-cover"
      >
        {/* <ExampleContent year="June 2001 – July 2005" thesis={[]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-perception_codes1 "
        subheading="Nov 2015 – Present"
        heading=" Co-founder at Perceptive Code, CA., USA"
        bgSize="bg-cover md:bg-cover"
      >
        {/* <ExampleContent year="June 2001 – July 2005" thesis={[]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-apple md:bg-apple1"
        subheading="July 2015 – Nov 2015"
        heading="Researcher at SPG, Apple, Cupertino"
        bgSize="bg-cover md:bg-cover"
      >
        {/* <ExampleContent year="June 2001 – July 2005" thesis={[]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-desc"
        subheading="March 2013 – Feb 2015"
        heading="Post-doc at Courant Institute, NYU with Chris Bregler and Yann LeCun"
        bgSize="bg-cover md:bg-cover"
      >
        {/* <ExampleContent year="June 2001 – July 2005" thesis={[]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-adv_tint md:bg-adv_tint1"
        subheading="Feb 2011 – May 2011"
        heading="Research Intern at Weta Digital Wellington, New Zealand "
        bgSize="bg-cover md:bg-cover"
      >
        <ExampleContent
          year="Feature film credits:"
          thesis={["The Adventures of Tintin(2011) – R & D Developer"]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-research"
        subheading="October 2007 – August 2008"
        heading="Research Assistant at Media Integration and Communication Center (MICC), University of Florence, Florence, Italy"
        bgSize="bg-cover md:bg-cover"
      >
        {/* <ExampleContent year="Feature film credits:" thesis={["The Adventures of Tintin(2011) – R & D Developer"]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-yahoo md:bg-yahoo1"
        subheading="September 2006 – September 2007"
        heading="Software Developer at Yahoo India R & D, Bangalore, India"
        bgSize="bg-cover md:bg-cover"
      >
        {/* <ExampleContent year="Feature film credits:" thesis={["The Adventures of Tintin(2011) – R & D Developer"]} /> */}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="bg-sde"
        subheading="July 2005 – August 2006"
        heading="Software Developer at Pi Corporation (now Decho), Bangalore, India"
        bgSize="bg-cover md:bg-cover"
      >
        {/* <ExampleContent year="Feature film credits:" thesis={["The Adventures of Tintin(2011) – R & D Developer"]} /> */}
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 32;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
  bgSize,
}) => {
  return (
    <div
      //   style={{
      //     paddingLeft: IMG_PADDING,
      //     paddingRight: IMG_PADDING,
      //   }}
      className="px-[22px] md:px-[42px] lg:px-[52px]"
    >
      <div className="relative  h-[100vh] md:h-[150vh]">
        <StickyImage imgUrl={imgUrl} bgSize={bgSize} />
        <OverlayCopy heading={heading} subheading={subheading} />
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
      className={`sticky bg-no-repeat z-0 overflow-hidden rounded-3xl ${bgSize} ${imgUrl} 
      h-[calc(60vh-64px)] ]`}
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
      className="pt-[380px] md:pt-[350px] absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 px-2 text-center text-xl md:mb-4 md:text-3xl font-bwmss01">
        {subheading}
      </p>
      <p className="text-center px-2 md:px-6 text-4xl font-bold md:text-7xl font-dmsans">
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
