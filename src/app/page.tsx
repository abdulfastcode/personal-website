'use client';
import LandingScreen from "./component/LandingScreen"
import About from "./component/About"
import {Education} from "./component/Education"
import Patents from "./component/Patents"
import Publications from "./component/Publications"
import Contact from "./component/Contact"
import Profession from "./component/Profession"
import { useEffect } from 'react'
import { Element } from 'react-scroll';
import Teaching from "./component/Teaching/Teaching"
import Alumni from "./component/Alumni/Alumni"


export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default as any;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });
    })();
  }, []);

 
  return (
    <>
    <LandingScreen/>

    <Element name="about" >
      <About/>
    </Element>

    <Element name="profession" >
    <Profession/>
    </Element>

    <Element name="alumni">
      <Alumni/>
    </Element>
  
    <Element name="education">
      <Education/>
    </Element>

    <Element name="patents">
      <Patents/>
    </Element>

    <Element name="publications" className="pt-[80px]">
      <Publications/>
    </Element>

    <Element name="contact" className="pt-[80px]">
      <Contact/>
    </Element>

   
    
    </>

  );
}
