import React, { useState, useEffect } from 'react';
import { ReactComponent as Arrow } from '../assets/images/arrow.svg';
import { animateScroll as scroll } from 'react-scroll';
import { scrollToTopButton, scrollToTopButtonIcon } from '../assets/styles/styleComponents';

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
      className={`${scrollToTopButton} ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <Arrow className={scrollToTopButtonIcon} />
    </button>
  );
};

export default ScrollToTopButton;
