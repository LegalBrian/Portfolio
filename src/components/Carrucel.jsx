import { useState } from "react";
import SkillsCard from "./SkillsCard";
import { carrucelContainer, carrucelButton, carrucelButtonText, carrucelItems } from "./styleComponents";

const Carrucel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? data.length - 1 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  };


  return (
    <div className={carrucelContainer}>
        <button
          className={carrucelButton}
          onClick={handlePrevSlide}
        >
          <span className={carrucelButtonText}>&lt;</span>
        </button>
        <div className={carrucelItems}>
          {data.map((link, index) => {
              const distance = Math.abs(index - activeIndex);
              let className = "hidden";
              if (distance <= 1 || (distance === 2 && activeIndex === 0) || (distance === 2 && activeIndex === data.length - 1)) {
                  className = `${
                      distance === 0 ? "opacity-100" : "opacity-50"
                  } transform ${distance === 0 ? "scale-100" : "scale-50 blur-sm"}`;
              }
              return (
                <div key={index} className={`transition-all duration-700 ${className}`}>
                  <SkillsCard svg={link.svg} text={link.text} />
                </div>
            );
          })}
        </div>
        <button
          className={carrucelButton}
          onClick={handleNextSlide}
        >
          <span className={carrucelButtonText}>&gt;</span>
        </button>
    </div>
  );
};

export default Carrucel;