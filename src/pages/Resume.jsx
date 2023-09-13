import ExperienceCard from "../components/ExperienceCard";
import { education, workExperience } from "../assets/lists/ExperienceList";
import { FormattedMessage } from "react-intl";
import { ReactComponent as Download } from '../assets/images/Download.svg';
import Button from "../components/Button";


const Resume = () => {
    return (
        <div id="resume" className="flex flex-col items-center text-center">
            <p className="desktop:text-4xl smartphone:text-3xl">
                <FormattedMessage 
                    id="resume.title" 
                    defaultMessage="Curriculum" 
                />
            </p>
            <div className="desktop:grid grid-cols-2 justify-items-center gap-x-16 smartphone:flex flex-col tablet:grid">
                <div className="flex flex-col gap-5 smartphone:my-5">
                    <p className="text-xl">
                        <FormattedMessage 
                            id="resume.education" 
                            defaultMessage="Educación" 
                        />
                    </p>
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                        {education?.map((ele, index) => {
                            return(
                                <ExperienceCard key={index} company={ele.company} role={ele.role} date={ele.date} description={ele.description} certificate={ele.certificate} />
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-5 smartphone:my-5">
                    <p className="text-xl">
                        <FormattedMessage 
                            id="resume.workExperience" 
                            defaultMessage="Experiencia Laboral" 
                        />
                    </p>
                    <div className="flex flex-col justify-center items-center gap-5">
                        {workExperience?.map((ele, index) => {
                            return(
                                <ExperienceCard key={index} company={ele.company} role={ele.role} date={ele.date} description={ele.description} />
                                )
                            })}
                    </div>
                </div>
            </div>
            <Button 
                Href={"https://github.com/LegalBrian/Portfolio/raw/main/src/assets/files/Brian%20Legal%20Curriculum.pdf"} 
                TextId={"resume.button"} 
                defaultMessage={"Curriculum"} 
                Svg={Download} 
                SvgS={"20"} 
                SvgF={"white"}
            />
        </div>
    )
}

export default Resume;