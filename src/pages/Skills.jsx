
import Carrucel from "../components/Carrucel";
import { tech, soft } from "../components/lists/SkillsList";

const Skills = () => {
    return (
        <div id="skills" className="bg-[rgba(0,0,50,1.0)] text-[#ffffff] text-center justify-center items-center flex flex-col gap-[20px] p-[20px] ">
            <p className="flex flex-col text-center desktop:text-[40px] smartphone:text-[30px]">Skills</p>
            <div className="flex flex-col justify-center items-center">
                <p className="text-center desktop:text-[25px] smartphone:text-[20px]">Tech Skills</p>
                <Carrucel data={tech} />
                <p className="text-center desktop:text-[25px] smartphone:text-[20px]">Soft Skills</p>
                <Carrucel data={soft} />
            </div>
        </div>
    )
}

export default Skills;
