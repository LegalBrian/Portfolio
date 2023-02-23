import ExperienceCard from "../components/ExperienceCard";
import { education, workExperience } from "../components/lists/ExperienceList";

const Resume = () => {
    return (
        <div id="resume" className="bg-[rgba(0,0,75,1.0)] text-[#ffffff] text-center p-[20px] flex flex-col">
            <p className="text-[40px] text-center]">Resume</p>
            <div className="flex flex-row items-center justify-evenly">
                <p className="text-[25px] text-center w-[500px] py-[25px]">Education</p>
                <p className="text-[25px] text-center w-[500px] py-[25px]">Work experience</p>
            </div>
            <div className="flex flex-row justify-evenly items-center">
                <div className="flex flex-col justify-center items-center gap-[20px]">
                    {education?.map(ele => {
                        return(
                            <ExperienceCard company={ele.company} role={ele.role} date={ele.date} description={ele.description} certificate={ele.certificate} />
                        )
                    })}
                </div>
                <div className="flex flex-col justify-center items-center gap-[20px]">
                    {workExperience?.map(ele => {
                        return(
                            <ExperienceCard company={ele.company} role={ele.role} date={ele.date} description={ele.description} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Resume;


// rgba(0,0,0,1.0)
// rgba(0,0,25,1.0)
// rgba(0,0,50,1.0)
// rgba(0,0,75,1.0)
// rgba(75,75,255,1)
// rgba(255,255,255,1.0)

{/* <ExperienceCard company={""} role={""} date={""} description={""} certificate={""} /> */}