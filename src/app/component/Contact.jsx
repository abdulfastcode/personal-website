import React from "react";
import { FiMail, FiLinkedin, FiGithub, FiUsers } from "react-icons/fi";
import { TbBrandGoogle } from "react-icons/tb";
const Contact = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="LinkedIn"
          //   subtitle="Manage profile"
          href="https://www.linkedin.com/in/arjunjain/"
          Icon={FiLinkedin}
        />
        <Card
          title="Email"
          subtitle=""
          href="mailto:arjunjain@gmail.com"
          Icon={FiMail}
        />
        <Card
          title="Google Scholar"
          subtitle=""
          href="https://scholar.google.co.in/citations?user=elmWdycAAAAJ&hl=en"
          Icon={TbBrandGoogle}
        />
        <Card
          title="Github"
          subtitle=""
          href="https://github.com/stencilman/"
          Icon={FiGithub}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#2dc1c36a] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#12214d] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Contact;
