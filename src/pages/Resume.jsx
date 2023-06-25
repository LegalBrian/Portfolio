import ExperienceCard from "../components/ExperienceCard";
import { education, workExperience } from "../components/lists/ExperienceList";
import { resumeContainer, resumeTitle, resumeSubContainer, resumeExperience, resumeSubTitle, resumeExperienceCardContainer, resumeButton } from "./stylePages";
import { FormattedMessage } from "react-intl";

const Resume = () => {
    return (
        <div id="resume" className={resumeContainer}>
            <p className={resumeTitle}>
                <FormattedMessage 
                    id="resume.title" 
                    defaultMessage="Curriculum" 
                />
            </p>
            <div className={resumeSubContainer}>
                <div className={resumeExperience}>
                    <p className={resumeSubTitle}>
                        <FormattedMessage 
                            id="resume.education" 
                            defaultMessage="Educación" 
                        />
                    </p>
                    <div className={resumeExperienceCardContainer}>
                        {education?.map((ele, index) => {
                            return(
                                <ExperienceCard key={index} company={ele.company} role={ele.role} date={ele.date} description={ele.description} certificate={ele.certificate} />
                            )
                        })}
                    </div>
                </div>
                <div className={resumeExperience}>
                    <p className={resumeSubTitle}>
                        <FormattedMessage 
                            id="resume.workExperience" 
                            defaultMessage="Experiencia Laboral" 
                        />
                    </p>
                    <div className={resumeExperienceCardContainer}>
                        {workExperience?.map((ele, index) => {
                            return(
                                <ExperienceCard key={index} company={ele.company} role={ele.role} date={ele.date} description={ele.description} />
                                )
                            })}
                    </div>
                </div>
            </div>
            <a href="https://github.com/LegalBrian/Portfolio/raw/main/src/files/Brian%20Legal%20Curriculum.pdf" download className={resumeButton}>
                <>
                    <FormattedMessage 
                        id="resume.button" 
                        defaultMessage="Descargar Curriculum" 
                    />
                </>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> 
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/> 
                </svg>
            </a>
        </div>
    )
}

export default Resume;