"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import AnchorElem from "../common/AnchorElem";
// import { calsans } from "@/fonts/calsans";
const Profession = () => {
  const content = [
    // {
    //   title: "September 2015 – Present",
    //   description: (
    //     <>
    //       <p>
    //         Founder and CEO,{" "}
    //         <AnchorElem
    //           name="Fast Code AI Consult Pvt. Ltd."
    //           href="https://fastcode.ai/"
    //         />
    //         , Bangalore, India
    //       </p>
    //     </>
    //   ),
    // },
    // {
    //   title: "March 2021 – Present",
    //   description: (
    //     <>
    //       <p>
    //         Founder and Chief Scientist, UAVIO Labs Pvt. Ltd., Bangalore, India
    //       </p>
    //     </>
    //   ),
    // },
    // {
    //   title: "January 2020 – Present",
    //   description: (
    //     <>
    //       <p>
    //         <AnchorElem
    //           href="http://cds.iisc.ac.in/people/faculty/"
    //           name="Adjunct Faculty"
    //         />{" "}
    //         at the <AnchorElem href="http://cds.iisc.ac.in/" name="CDS Dept." />
    //         ,{" "}
    //         <AnchorElem name="IISc Bangalore" href="https://www.iisc.ac.in/" />
    //       </p>
    //     </>
    //   ),
    // },
    // {
    //   title: "Dec 2016 – May 2019",
    //   description: (
    //     <>
    //       <p>
    //         <AnchorElem
    //           name="Adjunct Assistant Professor"
    //           href="https://www.cse.iitb.ac.in/page502"
    //         />{" "}
    //         at CSE Dept.,{" "}
    //         <AnchorElem name="IIT Bombay" href="https://www.iitb.ac.in/" />
    //       </p>
    //     </>
    //   ),
    // },
    // {
    //   title: "Nov 2015 – Present",
    //   description: (
    //     <>
    //       <p>
    //         Co-founder at{" "}
    //         <AnchorElem
    //           name="Perceptive Code"
    //           href="http://perceptivecode.com/"
    //         />
    //         , CA., USA
    //       </p>
    //     </>
    //   ),
    // },
    // {
    //   title: "July 2015 – Nov 2015",
    //   description: (
    //     <>
    //       <p>Researcher at SPG, Apple, Cupertino</p>
    //     </>
    //   ),
    // },
    // {
    //   title: "March 2013 – Feb 2015",
    //   description: (
    //     <>
    //       <p>
    //         Post-doc at Courant Institute, NYU with{" "}
    //         <AnchorElem
    //           href="https://research.google/people/ChrisBregler/"
    //           name="Chris Bregler"
    //         />{" "}
    //         and{" "}
    //         <AnchorElem
    //           name="Yann LeCun"
    //           href="https://en.wikipedia.org/wiki/Yann_LeCun"
    //         />
    //       </p>
    //     </>
    //   ),
    // },
    // {
    //   title: "Feb 2011 – May 2011",
    //   description: (
    //     <>
    //       <p>
    //         Research Intern at{" "}
    //         <AnchorElem name="Weta Digital" href="http://www.wetafx.co.nz/" />,
    //         Wellington, New Zealand <br />
    //         Feature film credits:{" "}
    //         <AnchorElem
    //           name="The Adventures of Tintin(2011)"
    //           href="https://www.imdb.com/title/tt0983193/fullcredits#cast"
    //         />{" "}
    //         – R & D Developer
    //       </p>
    //     </>
    //   ),
    // },
    // {
    //   title: "October 2007 – August 2008",
    //   description: (
    //     <>
    //       <p>
    //         Research Assistant at{" "}
    //         <AnchorElem
    //           href="http://www.micc.unifi.it/"
    //           name="Media Integration and Communication Center (MICC)"
    //         />
    //         , University of Florence, Florence, Italy
    //       </p>
    //     </>
    //   ),
    // },
    // {
    //   title: "September 2006 – September 2007",
    //   description: (
    //     <>
    //       <p>
    //         Software Developer at{" "}
    //         <AnchorElem
    //           href="https://www.yahoo.com/"
    //           name="Yahoo India R & D"
    //         />
    //         , Bangalore, India
    //       </p>
    //     </>
    //   ),
    // },
    // {
    //   title: "July 2005 – August 2006",
    //   description: (
    //     <>
    //       <p>
    //         Software Developer at{" "}
    //         <AnchorElem href="http://www.picorp.com/" name="Pi Corporation" />{" "}
    //         (now <AnchorElem href="http://decho.com/" name="Decho" />
    //         ), Bangalore, India
    //       </p>
    //     </>
    //   ),
    // },

    {
      title: "August 2009 – Feb 2013",
      description: (
        <>
          <p className="font-semibold">
            PhD from The Max Planck Institute for Informatics
          </p>
          <p>
            Graduated Summa Cum Laude,
            <br /> PhD advisor: Prof. Dr. Thorsten Thormaehlen, <br />
            Prof. Dr. Hans-Peter Seidel,
            <br />
            Thesis: Data-driven Methods for Interactive Visual Content Creation
            and Manipulation
          </p>
        </>
      ),
    },
    {
      title: "October 2008 – August 2009",
      description: (
        <>
          <p className="font-semibold">
          Graduated from University of Saarland
          </p>
        </>
      ),
    },
    {
      title: "June 2001 – July 2005",
      description: (
        <>
          <p className="font-semibold">
          Bachelor of Engineering in Computer Science from R.V. College of Engineering, Bangalore, India.
          </p>
        </>
      ),
    },
  ];
  return (
    <div>
      <h1 className="text-white text-5xl md:text-7xl lg:text-8xl pl-2 pt-16 pb-6 md:p-10 font-aeonik ">
        EDUCATION
      </h1>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {content.map((item, index) => (
            <div
              key={`content-${index}`}
              className="mb-7 pl-[20px] sm:pl-[30px] md:pl-0 md:mb-10"
            >
              <h1 className="font-aeonik text-2xl md:text-3xl lg:text-4xl text-white">
                {item.title}
              </h1>

              <div className="text-base md:text-lg lg:text-xl pt-[5px] md:pt-[20px] text-white  font-bwmss01">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Profession;
