import { useState } from "react";
import SkillsCard from "./SkillsCard";

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
    <div className="flex justify-center my-[20px]">
      <div className="flex items-center text-center">
        <button
          className="text-white w-[40px] h-[40px] flex items-center"
          onClick={handlePrevSlide}
        >
          <span className="text-[40px]">&lt;</span>
        </button>
        <div className="flex items-center text-center w-[600px] justify-center">
        {data.map((link, index) => {
            const distance = Math.abs(index - activeIndex);
            let className = "hidden";
            if (distance <= 1 || (distance === 2 && activeIndex === 0) || (distance === 2 && activeIndex === data.length - 1)) {
                className = `mx-[40px] ${
                    distance === 0 ? "opacity-100" : "opacity-50"
                } mx-2 transform ${distance === 0 ? "scale-100" : "scale-90"}`;
                if (index === activeIndex + 1 || index === activeIndex - 1) {
                    className += " scale-x-[1]";
                }
            }
            return (
              <div key={index} className={`transition-all duration-1000 ${className}`}>
                <SkillsCard svg={link.svg} text={link.text} />
              </div>
          );
        })}
        </div>
        <button
          className="text-white w-[40px] h-[40px] flex items-center"
          onClick={handleNextSlide}
        >
          <span className="text-[40px]">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Carrucel;