import { FormattedMessage } from "react-intl";

const ExperienceCard = ( { company, role, date, description, certificate } ) => {
    return(
        <div className="flex flex-col bg-negro-azul p-[30px] border-r-[4px] border-b-[4px] border-azul-hover rounded-[10px] gap-[5px] desktop:w-[500px] smartphone:w-[300px] smartphone-r:w-[460px] tablet:w-[300px]">
            <p className="text-start text-blanco text-[20px]">{company}</p>
            <p className="text-start text-azul-hover text-[25px]">{role}</p>
            <p className="text-start text-azul-hover text-[13px]">{date}</p>
            <p className="text-start text-blanco text-[15px]">{description}</p>
            {certificate ?
                <a 
                    href={certificate} target="_blank" rel="noreferrer"
                    className="flex flex-row justify-center text-center items-center gap-[5px] mt-[10px] bg-negro w-[130px] p-[5px] rounded-[30px] border-[2px] border-blanco hover:bg-azul-hover transition duration-500"
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