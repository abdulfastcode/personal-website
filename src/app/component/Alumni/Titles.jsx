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
      className="relative z-20 border-t border-t-solid border-t-[#b7ab986c] min-h-[50px] flex items-center"
      onMouseEnter={() => {
        setSelectedProject(i);
      }}
      onTouchStart={()=>{
        setSelectedProject(i);
      }}
      onMouseLeave={() => {
        setSelectedProject(null);
      }}
    >
      <div
        className="inline-block pl-[5%] md:pl-[10%]"
       
      >
        <motion.p 
        style={{ clipPath: clip }}
        className="font-aeonik inline-block text-[#ffffffb1] uppercase font-bold  text-[5vw] md:text-[5vw] lg:text-[5vw]   m-0 relative z-20 select-none"
      >
        {title}
      </motion.p>
      
      <p className="font-aeonik absolute top-0  text-[#11204c] uppercase font-bold text-[5vw] md:text-[5vw] lg:text-[5vw]  m-0 z-10  h-full flex items-center select-none">
        {title}
      </p>
      </div>
    </div>
  );
}
