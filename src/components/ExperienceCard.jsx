import { experienceCardContainer, experienceCardCompany, experienceCardRole , experienceCardDate, experienceCardDescription, experienceCardCertificate} from "./styleComponents";
import { FormattedMessage } from "react-intl";

const ExperienceCard = ( { company, role, date, description, certificate } ) => {
    return(
        <div className={experienceCardContainer}>
            <p className={experienceCardCompany}>{company}</p>
            <p className={experienceCardRole}>{role}</p>
            <p className={experienceCardDate}>{date}</p>
            <p className={experienceCardDescription}>{description}</p>
            {certificate ?
                <a 
                    href={certificate} target="_blank" rel="noreferrer"
                    className={experienceCardCertificate}
                >
                    <>
                        <FormattedMessage 
                            id="experienceCard.button" 
                            defaultMessage="Certificado" 
                        />
                    </>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                        <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                    </svg>
                </a>
            :null}
        </div>
    )
}

export default ExperienceCard;