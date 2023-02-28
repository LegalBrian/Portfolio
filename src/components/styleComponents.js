import bg404 from "../images/404-bg.gif"

//----------------------------------------------------------------------------------------------------------------------------------------
// Header



//----------------------------------------------------------------------------------------------------------------------------------------
// Carrucel

export const carrucelContainer = "flex flex-row justify-evenly items-center text-white p-[5px]";

export const carrucelButton = "flex justify-center items-center text-[20px] w-[30px] h-[30px] bg-[rgba(0,0,0,0.7)] rounded-full border-[2px] border-[#ffffff] hover:bg-[rgba(75,75,255,1)] duration-500 ";

export const carrucelButtonText = "text-center text-[20px]";

export const carrucelItems = "flex items-center text-center justify-center";

//----------------------------------------------------------------------------------------------------------------------------------------
// SkillsCard

export const skillsCardContainer = "flex flex-col items-center justify-center desktop:h-[140px] desktop:w-[140px] smartphone:h-[80px] smartphone:w-[80px] smartphone-r:h-[90px] smartphone-r:w-[100px] tablet:h-[120px] tablet:w-[130px]";

export const skillsCardSvg = "desktop:w-[100px] desktop:h-[100px] smartphone:w-[60px] smartphone:h-[60px] smartphone-r:w-[70px] smartphone-r:h-[70px] tablet:h-[90px] tablet:w-[90px]";

export const skillsCardText = "text-center desktop:text-[20px] smartphone:text-[12px] smartphone-r:text-[15px] tablet:text-[20px]";

//----------------------------------------------------------------------------------------------------------------------------------------
// ExperienceCard

export const experienceCardContainer = "flex flex-col bg-[rgba(0,0,50,1.0)] p-[30px] border-r-[4px] border-b-[4px] border-[rgba(75,75,255,1)] rounded-[10px] gap-[5px] desktop:w-[500px] smartphone:w-[300px] smartphone-r:w-[460px] tablet:w-[300px]";

export const experienceCardCompany = "text-start text-[rgba(255,255,255,1)] text-[20px]";

export const experienceCardRole = "text-start text-[rgba(75,75,255,1)] text-[25px]";

export const experienceCardDate = "text-start text-[rgba(75,75,255,1)] text-[13px]";

export const experienceCardDescription = "text-start text-[rgba(255,255,255,1)] text-[15px]";

export const experienceCardCertificate = "flex flex-row justify-center text-center items-center mt-[10px] bg-[rgba(0,0,0,1)] w-[130px] p-[5px] rounded-[30px] border-[2px] border-[rgba(255,255,255,1)] hover:bg-[rgba(75,75,255,1)] transition duration-500";

//----------------------------------------------------------------------------------------------------------------------------------------
// ProjectCard

export const projectCardContainer = "flex flex-col justify-center items-center bg-[rgba(0,0,25,1.0)] p-[20px] border-r-[4px] border-b-[4px] border-[rgba(75,75,255,1)] rounded-[10px] gap-[20px] my-[20px] desktop:w-[500px] smartphone:w-[300px] smartphone-r:w-[460px] tablet:w-[300px]";

export const projectCardImage = "desktop:h-[300px] desktop:w-[460px] smartphone:h-[150px] smartphone:w-[260px] smartphone-r:h-[150px] smartphone-r:w-[260px]";

export const projectCardTitle = "text-center";

export const projectCardTechnologiesContainer = "flex flex-wrap justify-center gap-[20px]";

export const projectCardTechnologies = "flex flex-col items-center justify-center h-[60px] w-[80px]";

export const projectCardTechnologiesSvg = "w-[60px] h-[60px]";

export const projectCardTechnologiesText = "text-[10px] text-center";

export const projectCardButtonsContainer = "flex desktop:flex-row justify-between smartphone:flex-col gap-[20px]";

export const projectCardButton = "flex flex-row text-center items-center mt-[10px] bg-[rgba(0,0,0,1)] justify-center w-[140px] p-[5px] rounded-[30px] border-[2px] border-[rgba(255,255,255,1)] hover:bg-[rgba(75,75,255,1)] transition duration-500";

//----------------------------------------------------------------------------------------------------------------------------------------
// YoutubeVideo

export const youtubeVideoContainer = "flex justify-center items-center desktop:h-[300px] desktop:w-[460px] smartphone:h-[150px] smartphone:w-[260px]";

export const youtubeVideoButton = "bg-[rgba(0,0,50,1.0)] px-[20px] rounded-[20px] hover:bg-[rgba(75,75,255,1)] transition duration-500";

export const youtubeVideoButtonSvg = "w-[60px] text-[#ffffff]";

//----------------------------------------------------------------------------------------------------------------------------------------
// Footer

export const footerContainer = "flex justify-center items-center py-6 text-white bg-[rgba(0,0,0,1)]";

export const footerButton = "flex flex-col justify-center items-center gap-[20px]";

export const footerButtonImage = "desktop:w-[180px] desktop:h-[180px] smartphone:w-[90px] smartphone:h-[90px]";

//----------------------------------------------------------------------------------------------------------------------------------------
// Error404

export const error404Background = {
    backgroundImage: `linear-gradient(to top, rgba(150,0,0,0.3), rgba(75,0,0,0.6), rgba(0,0,0,0.9)), url(${bg404})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

export const error404Container = "flex flex-col items-center justify-center h-screen";

export const error404Title1 = " text-[#ffffff] animate-pulse text-center desktop:text-[80px] smartphone:text-[50px]";

export const error404Title2 = "text-[rgba(255,75,75,1)] animate-pulse text-center desktop:text-[80px] smartphone:text-[50px]"

