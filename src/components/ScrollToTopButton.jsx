import React, { useState, useEffect } from 'react';
import { ReactComponent as Arrow } from '../assets/images/arrow.svg';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,
      smooth: 'easeInOutQuad'
    });
  };  

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      id="btnScrollToTop"
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-2 rounded-full flex items-center justify-center bg-[rgba(75,75,255,1)] w-[50px] h-[50px] transition-opacity duration-1000 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <Arrow className='self-center w-[40px] h-[40px]' />
    </button>
  );
};

export default ScrollToTopButton;
