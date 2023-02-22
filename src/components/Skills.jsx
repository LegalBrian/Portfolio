
import CarrucelSoft from "./CarrucelSoft";
import CarrucelTech from "./CarrucelTech";

const Skills = () => {
    return (
        <div id="skills" className="bg-[rgba(0,0,50,1.0)] text-[#ffffff] text-center p-[40px]">
            <div className="flex flex-col gap-[20px]">
                <p className="text-[40px]">Tech Skills</p>
                <CarrucelTech/>
                <p className="text-[40px]">Soft Skills</p>
                <CarrucelSoft/>
            </div>
        </div>
    )
}

export default Skills;
