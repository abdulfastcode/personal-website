'use client';
import LandingScreen from "./component/LandingScreen"
import Description from "./component/Description"
import { useEffect } from 'react'
import { Element } from 'react-scroll';
export default function Home() {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          
      }
    )()
  }, [])
  return (
    <>
    <LandingScreen/>
    <Element className="bg-[#000b2d]" name="about" >
    <Description/>
    </Element>
    </>

  );
}
