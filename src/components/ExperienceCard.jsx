const ExperienceCard = ( { company, role, date, description, certificate } ) => {
    return(
        <div className=" bg-[rgba(0,0,50,1.0)] flex flex-col p-[30px] border-r-[4px] border-b-[4px] border-[rgba(75,75,255,1)] rounded-[10px] desktop:w-[500px] smartphone:w-[300px]">
            <p className="text-[rgba(255,255,255,1)] text-[20px] text-start">{company}</p>
            <p className="text-[rgba(75,75,255,1)] text-[25px] text-start">{role}</p>
            <p className="text-[rgba(75,75,255,1)] text-[13px] text-start">{date}</p>
            <p className="text-[rgba(255,255,255,1)] text-[15px] text-start my-[5px]">{description}</p>
            {certificate ?
                <a 
                    href={certificate} target="_blank"
                    className="flex flex-row text-center items-center mt-[10px] bg-[rgba(0,0,0,1)] justify-center w-[130px] p-[5px] rounded-[30px] border-[2px] border-[rgba(255,255,255,1)] hover:bg-[rgba(75,75,255,1)] transition duration-500"
                >
                    <text>Certificate</text>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                    </svg>
                </a>
            :null}
        </div>
    )
}

export default ExperienceCard;