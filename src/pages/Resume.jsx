import ExperienceCard from "../components/ExperienceCard";
import { education, workExperience } from "../components/lists/ExperienceList";

const Resume = () => {
    return (
        <div id="resume" className="bg-[rgba(0,0,75,1.0)] text-[#ffffff] text-center p-[20px] flex flex-col">
            <p className="desktop:text-[40px] smartphone:text-[30px]">Resume</p>
            <div className="desktop:grid grid-cols-2 justify-items-center smartphone:flex flex-col items-center">
                <div>
                    <p className="text-[25px] text-center w-[500px] py-[25px]">Education</p>
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                        {education?.map(ele => {
                            return(
                                <ExperienceCard company={ele.company} role={ele.role} date={ele.date} description={ele.description} certificate={ele.certificate} />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <p className="text-[25px] text-center w-[500px] py-[25px]">Work experience</p>
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                        {workExperience?.map(ele => {
                            return(
                                <ExperienceCard company={ele.company} role={ele.role} date={ele.date} description={ele.description} />
                                )
                            })}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center my-[20px]">
                <a 
                    href={"#"} className="flex flex-row text-center items-center mt-[10px] bg-[rgba(0,0,0,1)] justify-center w-[200px] p-[5px] rounded-[30px] border-[2px] border-[rgba(255,255,255,1)] hover:bg-[rgba(75,75,255,1)] transition duration-500"
                    >
                    <text>Download Resume</text>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"> 
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/> 
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Resume;