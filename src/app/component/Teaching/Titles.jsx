import React, { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function Titles({ data, setSelectedProject }) {
  return (
    <div className="w-full border-t border-t-solid border-t-[#b7ab986c]">
      {data.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </div>
  );
}

function Title({ data, setSelectedProject }) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div
      ref={container}
      className="relative z-20 border-t border-t-solid border-t-[#b7ab986c]"
    >
      <div
        className="inline-block pl-[10%]"
        onMouseOver={() => {
          setSelectedProject(i);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
        <motion.p 
        style={{ clipPath: clip }}
        className="inline-block text-[#ffffffc0] uppercase font-bold text-[7vw] leading-[7.5vw] m-0 relative z-20"
      >
        {title}
      </motion.p>
      
      <p className="absolute top-0 block text-[#11204c] uppercase font-bold text-[7vw] leading-[7.5vw] m-0 z-10">
        {title}
      </p>
      </div>
    </div>
  );
}
