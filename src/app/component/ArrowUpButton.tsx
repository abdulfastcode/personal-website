// components/ArrowUpButton.js

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const ArrowUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };

  return (
    <div className={`fixed bottom-5 right-5 z-50 ${isVisible ? 'translate-y-[-10px]' : 'translate-y-[100px]'} transition-translate duration-700 ease-in-out`}>
      <button
         title="Scroll to top"
         aria-label="Scroll to top"
        type="button"
        onClick={scrollToTop}
        
        className="p-3 arrow_up_gradient border border-[#152151] text-white rounded-md shadow-lg  focus:outline-none"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default ArrowUpButton;
