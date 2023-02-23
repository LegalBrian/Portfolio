
import Carrucel from "../components/Carrucel";
import { tech, soft } from "../components/lists/SkillsList";

const Skills = () => {
    return (
        <div id="skills" className="bg-[rgba(0,0,50,1.0)] text-[#ffffff] text-center flex flex-col gap-[20px] p-[20px] ">
            <p className="flex flex-col text-[40px] text-center">Skills</p>
            <div className="flex flex-col justify">
                <p className="text-[25px] text-center">Tech Skills</p>
                <Carrucel data={tech} />
                <p className="text-[25px] text-center">Soft Skills</p>
                <Carrucel data={soft} />
            </div>
        </div>
    )
}

export default Skills;
