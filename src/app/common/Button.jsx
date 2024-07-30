import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({ to, name, target }) => {
  return (
    <Link
      target={target}
      href={to}
      className="main_cta_button rounded-[28px] relative z-[1] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg justify-between"
    >
      <div>{name}</div>
      <div>
        {/* <Image
          className="inline "
          src="/arrowRight.svg"
          alt="arrow"
          width="16"
          height="13"
        /> */}
        <span className="button__icon-wrapper ">
          <svg
            width="10"
            className="button__icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            ></path>
          </svg>

          <svg
            className="button__icon-svg  button__icon-svg--copy"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            ></path>
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default Button;
