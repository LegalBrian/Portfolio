import { useState } from "react";
import { soft } from "./SkillsList";

const CarrucelSoft = () => {
  const [activeI, setActiveI] = useState(0);

  const handleNext = () => {
    setActiveI((prevI) =>
      prevI === soft.length - 1 ? soft.length - 1 : prevI + 1
    );
  };

  const handlePrev = () => {
      setActiveI((prevI) =>
        prevI === 0 ? 0 : prevI - 1
    );
  };


  return (
    <div className="flex justify-center my-[20px]">
      <div className="flex items-center text-center">
        <button
          className="text-white w-[40px] h-[40px] flex items-center"
          onClick={handlePrev}
        >
          <span className="text-[40px]">&lt;</span>
        </button>
        <div className="flex items-center text-center w-[600px] h-[130px] justify-center">
        {soft.map((link, index) => {
            const distance = Math.abs(index - activeI);
            let className = "hidden";
            if (distance <= 1 || (distance === 2 && activeI === 0) || (distance === 2 && activeI === soft.length - 1)) {
                className = `mx-[40px] ${
                    distance === 0 ? 'opacity-100' : 'opacity-50'
                } mx-2 transform ${distance === 0 ? "scale-100" : "scale-90"}`;
                if (index === activeI + 1 || index === activeI - 1) {
                    className += " scale-x-[1]";
                }
            }
            return (
                <div key={index} className={`transition-all duration-1000 ${className}`}>
                    {link}
                </div>
          );
        })}
        </div>
        <button
          className="text-white w-[40px] h-[40px] flex items-center"
          onClick={handleNext}
        >
          <span className="text-[40px]">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default CarrucelSoft;