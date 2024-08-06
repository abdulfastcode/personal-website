import Image from "next/image";
import React from "react";
import ProfilePic from "../../../public/Arjun.webp";
import fcai from "../../../public/fcai.png";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaGoogleScholar } from "react-icons/fa6";
import Magnetic from "../common/Magnetic";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { LinkPreview } from "./ui/link-preview";
import { BackgroundBeams } from "./ui/background-beams";
import { Spotlight } from "./ui/Spotlight";

const NewLandingScreen = () => {
  const items = [
    {
      id: 1,
      name: "LinkedIn",
      //   designation: "Software Engineer",
      icon: (
        <Magnetic>
          <a
            href="https://www.linkedin.com/in/arjunjain/"
            target="_blank"
            className="w-[55px] h-[55px] bg-white flex justify-center items-center rounded-full shadow-[0px_1px_2px_0px_#1a202c] cursor-pointer"
          >
            <FaLinkedinIn className="w-[30px] h-[30px] text-[#000b2d]" />
          </a>
        </Magnetic>
      ),
    },
    {
      id: 2,
      name: "Mail",
      //   designation: "Software Engineer",
      icon: (
        <Magnetic>
          <a
            href="mailto:arjunjain@gmail.com"
            className="w-[55px] h-[55px] bg-white flex justify-center items-center rounded-full shadow-[0px_1px_2px_0px_#1a202c] cursor-pointer"
          >
            <MdEmail className="w-[30px] h-[30px] text-[#000b2d]" />
          </a>
        </Magnetic>
      ),
    },
    {
      id: 3,
      name: "Google Scholar",
      //   designation: "Software Engineer",
      icon: (
        <Magnetic>
          <a
            href="https://scholar.google.co.in/citations?user=elmWdycAAAAJ&hl=en"
            target="_blank"
            className="w-[55px] h-[55px] bg-white flex justify-center items-center rounded-full shadow-[0px_1px_2px_0px_#1a202c] cursor-pointer"
          >
            <FaGoogleScholar className="w-[30px] h-[30px] text-[#000b2d]" />
          </a>
        </Magnetic>
      ),
    },
    {
      id: 4,
      name: "GitHub",
      //   designation: "Software Engineer",
      icon: (
        <Magnetic>
          <a
            href="https://github.com/stencilman/"
            target="_blank"
            className="w-[55px] h-[55px] bg-white flex justify-center items-center rounded-full shadow-[0px_1px_2px_0px_#1a202c] cursor-pointer"
          >
            <TbBrandGithubFilled className="w-[30px] h-[30px] text-[#000b2d]" />
          </a>
        </Magnetic>
      ),
    },
  ];
  return (
    <div className="w-full h-[100vh] bg-[#000b2d] flex justify-center items-center flex-col gap-[30px] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative z-20 w-[250px] h-[250px] border-4 border-white border-solid rounded-full  overflow-hidden">
        <Image
          className="absolute w-full h-full"
          src={ProfilePic}
          width="300"
          height="300"
          alt=""
          placeholder="blur"
        />
      </div>
      <div className="relative z-20 flex items-center  flex-col gap-[20px]">
        <h1 className="text-white font-dmsans  text-6xl md:text-8xl text-center">
          Arjun Jain
        </h1>
        <h3 className="text-white font-bwmss01 text-2xl md:text-4xl text-center">
          Founder & Chief Scientist @ <br />{" "}
          <LinkPreview
            imageSrc={fcai}
            isStatic
            url="https://www.fastcode.ai/"
            className="font-bold"
          >
            FastCode Ai
          </LinkPreview>
        </h3>
      </div>
      <div className="relative z-20 flex gap-[20px] justify-center items-center mt-[20px] flex-wrap">
        <AnimatedTooltip items={items} />
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default NewLandingScreen;
