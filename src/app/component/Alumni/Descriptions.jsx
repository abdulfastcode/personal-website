import React from "react";
import AnchorElem from "../../common/AnchorElem";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Descriptions({
  data,
  selectedProject,
  setSelectedProject,
}) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className="absolute top-[114px] md:top-[154px] lg:top-[208px] h-full w-full z-40 pointer-events-none">
      {data.map((project, i) => {
        const { title, description, link } = project;
        return (
          <div
            key={i}
            className="min-h-[50px] flex justify-between items-center px-[5%] md:px-[10%] custom-clip_path  bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] border-t border-t-solid border-t-[#b7ab986c]"
            style={{
              clipPath:
                // 2 === 2 ? "inset(0 0 0)" : "inset(50% 0 50%)",
                selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%)",
              // transition: "clip-path 0.3s ease-in-out",
            }}
            onMouseEnter={() => setSelectedProject(i)}
          >
            <p className="text-[#fff] font-aeonik uppercase font-bold text-[5vw] md:text-[5vw] lg:text-[5vw] m-0 relative z-10">
              {crop(title, 9)}
            </p>
            <a
              target="_blank"
              href={link}
              className="w-[60%] md:w-[40%] font-bwmss01 text-[10px] md:text-[1.5vw] lg:text-[1.2vw] font-bold relative z-[50] text-white hover:underline hover:cursor-pointer pointer-events-auto "
              onMouseEnter={(e) => {
                e.stopPropagation();
                setSelectedProject(i);
              }}
            >
              <span>
                {description}{" "}
                <FaExternalLinkAlt className="inline align-baseline ml-1" />
              </span>
              {/* <FaExternalLinkAlt className="absolute right-0 bottom-0 transform translate-x-full" /> */}
            </a>
          </div>
        );
      })}
    </div>
  );
}
