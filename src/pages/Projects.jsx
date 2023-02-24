import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../components/lists/ProjectsList";

const Projects = () => {
    return (
        <div id="proyects" className="bg-[rgba(0,0,50,1.0)] text-[#ffffff] text-center p-[40px]">
            <p className="text-[40px] mb-[10px]">Projects</p>
            <div className="grid grid-cols-2 justify-items-center">
                {projects.map(ele => {
                    return(
                        <ProjectsCard title={ele.title} image={ele.image} repo={ele.repo} deploy={ele.deploy} />
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;