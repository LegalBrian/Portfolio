import inicioBg from '../images/Inicio-bg.gif';

//----------------------------------------------------------------------------------------------------------------------------------------
// Home

export const homeBackgroud = {
    backgroundImage: `linear-gradient(to top, rgba(75,75,255,0.3), rgba(0,0,25,0.7), rgba(0,0,0,0.9)), url(${inicioBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
export const homeContainer = "flex flex-col justify-evenly items-center";
export const homeCardContainer = "flex flex-col items-center justify-center bg-[rgba(0,0,25,0.7)] rounded-[40px] p-[20px] my-[20px] text-[#ffffff] gap-[10px]";
export const homeCardImage = "rounded-full border border-[rgba(0,0,75,1)] border-[10px] desktop:h-[250px] desktop:w-[250px] smartphone:w-[200px] smartphone:h-[200px]";
export const homeCardName = "text-center desktop:text-[40px] smartphone:text-[30px]";
export const homeCardTitle = "text-center text-[20px]";
export const homeCardContactContainer = "flex flex-row justify-around w-full";
export const homeCardContactButton = "flex justify-center items-center bg-[rgba(0,0,0,0.7)] rounded-full border-[2px] border-[#ffffff] hover:bg-[rgba(75,75,255,1)] duration-500 desktop:text-[25px] desktop:w-[50px] desktop:h-[50px] smartphone:text-[20px] smartphone:w-[40px] smartphone:h-[40px]";

//----------------------------------------------------------------------------------------------------------------------------------------
// About

export const aboutContainer = "flex flex-col justify-center items-center bg-[rgb(0,0,25)] text-[#ffffff] text-center py-[20px] desktop:px-[40px] smartphone:px-[20px]";
export const aboutTitle = "desktop:text-[40px] smartphone:text-[30px]";
export const aboutDescription = "desktop:text-[20px] smartphone:text-[15px]";

//----------------------------------------------------------------------------------------------------------------------------------------
// Skills

export const skillsContainer = "flex flex-col justify-center items-center text-center bg-[rgba(0,0,50,1.0)] text-[#ffffff] py-[20px]";
export const skillsTitle = "flex flex-col text-center desktop:text-[40px] smartphone:text-[30px]";
export const skillsListContainer = "flex flex-col justify-center items-center";
export const skillsListTitle = "text-center text-[20px]";

//----------------------------------------------------------------------------------------------------------------------------------------
// Resume

export const resumeContainer = "flex flex-col items-center text-center bg-[rgba(0,0,75,1.0)] text-[#ffffff] py-[20px]";
export const resumeTitle = "desktop:text-[40px] smartphone:text-[30px]";
export const resumeSubContainer = "desktop:grid grid-cols-2 justify-items-center desktop:gap-x-[100px] smartphone:flex flex-col tablet:grid grid-cols-2 justify-items-center tablet:gap-x-[50px] laptop:gap-x-[0px]";
export const resumeExperience = "flex flex-col gap-[10px] mt-[10px]"
export const resumeSubTitle = "text-[20px] text-center";
export const resumeExperienceCardContainer = "flex flex-col justify-center items-center gap-[20px]";
export const resumeButton = "flex flex-row text-center items-center mt-[10px] bg-[rgba(0,0,0,1)] justify-center gap-[10px] py-[10px] px-[10px] rounded-[30px] border-[2px] border-[rgba(255,255,255,1)] hover:bg-[rgba(75,75,255,1)] transition duration-500";

//----------------------------------------------------------------------------------------------------------------------------------------
// Projects

export const projectsContainer = "flex flex-col text-center items-center bg-[rgba(0,0,50,1.0)] text-[#ffffff] py-[20px]";
export const projectsTitle = "desktop:text-[40px] smartphone:text-[30px]";
export const projectsListContainer = "desktop:grid grid-cols-2 justify-items-center desktop:gap-x-[100px] smartphone:flex flex-col tablet:grid grid-cols-2 justify-items-center tablet:gap-x-[50px] laptop:gap-x-[100px]";

//----------------------------------------------------------------------------------------------------------------------------------------
// Contact

export const contactContainer = "flex flex-col justify-center items-center bg-[rgb(0,0,25)] text-[#ffffff] text-center py-[20px] gap-[10px] desktop:px-[40px] smartphone:px-[20px]";
export const contactTitle = "desktop:text-[40px] smartphone:text-[30px]";
export const contactDescription = "desktop:text-[20px] smartphone:text-[15px]";
export const contactButtonsContainer = "flex desktop:flex-row justify-evenly smartphone:flex-wrap gap-[20px]";
export const contactButton = "flex flex-row justify-evenly items-center text-[25px] w-[150px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,1)] transition duration-500";