'use client';
import NewLandingScreen from "./component/NewLandingScreen"
import About from "./component/About"
import {Education} from "./component/Education"
import Patents from "./component/Patents"
import Publications from "./component/Publications"
import ArrowUpButton from "./component/ArrowUpButton"
import Contact from "./component/Contact"
import Profession from "./component/Profession"
import { useEffect } from 'react'
import { Element } from 'react-scroll';
import Teaching from "./component/Teaching/Teaching"
import Alumni from "./component/Alumni/Alumni"
// import { FloatingNav } from "./component/ui/floating-navbar";
import dynamic from 'next/dynamic';

const FloatingNav = dynamic(() =>
  import('./component/ui/floating-navbar').then(mod => mod.FloatingNav), {
    
    ssr: false, // Disable server-side rendering if the component should only be loaded on the client side
  }
);

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
    <FloatingNav />

    <NewLandingScreen/>

    <Element name="about" >
      <About/>
    </Element>

    <Element name="education" >
    <Profession/>
    </Element>

    <Element name="alumni">
      <Alumni/>
    </Element>
  
    <Element name="profession">
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

   <ArrowUpButton/>
    
    </>

  );
}
