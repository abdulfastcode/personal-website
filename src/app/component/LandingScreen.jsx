"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const LandingScreen = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.035 * direction;
  };

  return (
    <main className="relative flex h-[100dvh]  overflow-hidden">
      <div className="absolute z-10 w-full h-full bg-[#999d9e] inset-0"></div>
      <Image
        className="object-cover z-20"
        src="/Arjun-1.png"
        fill={true}
        alt="background"
      />

      <div className="absolute z-20 top-[calc(100vh-250px)] md:top-[calc(100vh-300px)] lg:top-[calc(100vh-350px)]">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            className="relative font-dmsans m-0 text-white text-[90px] md:text-[130px] lg:text-[240px] tracking-normal font-bold pr-[50px]"
            ref={firstText}
          >
            Founder & Chief Scientist -
          </p>
          <p
            className="absolute font-dmsans left-full top-0 m-0 text-white text-[90px] md:text-[130px] lg:text-[240px] tracking-normal font-bold pr-[50px]"
            ref={secondText}
          >
            Founder & Chief Scientist -
          </p>
        </div>
      </div>
    </main>
  );
};

export default LandingScreen;
