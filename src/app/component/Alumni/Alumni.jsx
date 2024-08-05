"use client";
import { useState } from "react";
import Titles from "./Titles";
import Descriptions from "./Descriptions";
import { FaExternalLinkAlt } from "react-icons/fa";

const data = [
  {
    title: "Rishabh Dabral",
    description:
      "Former PhD Student - (2017-2020), now post-doc at MPII, Germany",
    speed: 0.5,
    link:"https://www.cse.iitb.ac.in/~rdabral/",
  },
  {
    title: "Rahul Mitra ",
    description:
      "Former PhD Student -(20217-2022), now Qualcomm Research, India",
    speed: 0.5,
    link:"https://sites.google.com/site/rahulm9999/home",
  },
  {
    title: "Nehal Doiphode",
    description: "Former MS Student - (2017-2018), now PhD student at UPenn",
    speed: 0.67,
    link:"https://www.linkedin.com/in/nehal-doiphode-711619149/",
  },
  {
    title: "Uday Kasupati ",
    description: "Former MS Student - (2017-2018), now PhD student at EPFL",
    speed: 0.5,
    link:"http://cs.utexas.edu/~uday/"
  },
  {
    title: "Shubham Goel",
    description:
      "Former MS Student - (2017-2018), now PhD student at UC Berkeley",
    speed: 0.5,
    link:"https://shubham-goel.github.io/",
  },
  {
    title: "Saurabh Sharma",
    description:
      "Former MS Student - (2017-2018), now PhD student at UC Santa Barbara",
    speed: 0.5,
    link:"https://www.linkedin.com/in/saurabh-sharma-deeptinkerer/",
  },
  {
    title: "Anurag Mundahada ",
    description: "Former MS Student - (2017-2019), now Co-founder at Insane.ai",
    speed: 0.5,
    link:"https://www.linkedin.com/in/anuragmundhada/",
  },
  {
    title: "Nitesh Bharadwaj Gundavarapu ",
    description:
      "Former MS Student - (2018-2019), now Machine Learning/Data Scientist at Apple Inc",
    speed: 0.5,
    link:"https://www.linkedin.com/in/nitesh-bharadwaj-47b68750/",
  },
  {
    title: "Naman Jain",
    description:
      "Former MS Student - (2018-2019), now PhD student at UC Berkley",
    speed: 0.5,
    link:"https://naman-ntc.github.io/",
  },
  {
    title: "Rohit Jena",
    description: "Former MS Student - (2018-2019), now PhD student at UPenn ",
    speed: 0.5,
    link:"https://www.linkedin.com/in/rohitrango/",
  },
  {
    title: "Sahil Shah",
    description:
      "Former MS Student - (2018-2019), now Strategist at Tower Research Capital",
    speed: 0.5,
    link:"https://www.linkedin.com/in/sahil-shah-842a64134/",
  },
  {
    title: "Pavan Teja",
    description:
      "Former MS Student - (2017-2020), now masters student at University of Tubingen",
    speed: 0.5,
    link: "https://scholar.google.com/citations?user=cc_zsxIAAAAJ&hl=en",
  },
  {
    title: "Divyansh",
    description:
      "Former MS Student - (2018-2019), now PhD student at UC San Diego",
    speed: 0.5,
    link:"https://www.linkedin.com/in/divsri/",
  },
  {
    title: "Jai Doshi ",
    description: "Former MS Student - (2021), now at Google India",
    speed: 0.5,
    link:"https://www.linkedin.com/in/jai-doshi-2160b6174/",
  },
];

export default function Alumni() {
  const [selectedProject, setSelectedProject] = useState(null);
  console.log("selectedProject",selectedProject)
  return (

    <div className=" w-full  lg:my-[120px] relative  z-30 ">
      <h1
        className="text-white text-5xl md:text-7xl lg:text-8xl pl-2 pb-6 pt-10 md:p-10 font-aeonik"
      >
        ALUMNI
      </h1>
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject}  setSelectedProject={setSelectedProject} />
    </div>
  );
}
