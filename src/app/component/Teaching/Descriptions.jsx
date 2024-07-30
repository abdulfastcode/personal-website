import React from "react";

export default function Descriptions({ data, selectedProject }) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className="absolute top-[16.2%] h-full w-full z-30 pointer-events-none">
      {data.map((project, i) => {
        const { title, description } = project;

        return (
          <div
            key={i}
            className=" flex justify-between items-center px-[10%] custom-clip_path"
            style={{
              background:
                    "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              clipPath:
                selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%)",
            }}
          >
            <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw] m-0 relative z-10">{crop(title, 9)}</p>

            <p className="w-[40%] text-[1vw] font-bold">{description}</p>
          </div>
        );
      })}
    </div>
  );
}
