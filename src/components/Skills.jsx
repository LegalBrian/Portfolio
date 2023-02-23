
import CarrucelSoft from "./CarrucelSoft";
import CarrucelTech from "./CarrucelTech";

const Skills = () => {
    return (
        <div id="skills" className="bg-[rgba(0,0,50,1.0)] text-[#ffffff] text-center flex flex-col gap-[20px] p-[20px] ">
            <p className="flex flex-col text-[40px] text-center">Skills</p>
            <div className="flex flex-col">
                <p className="text-[25px]">Tech Skills</p>
                <CarrucelTech/>
                <p className="text-[25px]">Soft Skills</p>
                <CarrucelSoft/>
            </div>
        </div>
    )
}

export default Skills;
