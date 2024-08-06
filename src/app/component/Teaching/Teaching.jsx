"use client";
import { useState } from "react";
import Titles from "./Titles";
import Descriptions from "./Descriptions";

const data = [
  {
    title: "AI Masterclass",
    description:
      "comprehensive, hands-on course in machine learning – designed to take you from beginner to expert, to stay relevant and ahead of the competition",
    speed: 0.5,
  },
  {
    title: "Post Graduate Program in AI & ML (Ongoing) with Great Learning",
    description: "",
    speed: 0.5,
  },
  {
    title: "Deep Learning for Computer Vision",
    description: "",
    speed: 0.67,
  },
  {
    title: "Computer Vision",
    description:
      "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
    speed: 0.8,
  },
  {
    title: "Deep Learning module for Computer Vision ",
    description:
      "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
    speed: 0.8,
  },
];

export default function Teaching() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className=" w-full relative mb-[70px] z-30 ">
      <h1
        className="text-white text-5xl md:text-7xl lg:text-9xl 
pl-2 py-10 md:p-10 font-dmsans"
      >
        TEACHING
      </h1>
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}
