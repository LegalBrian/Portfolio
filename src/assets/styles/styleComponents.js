import bg404 from "../images/404-bg.gif"

//----------------------------------------------------------------------------------------------------------------------------------------
// Header

export const headerContainer = 'flex justify-between items-center h-[80px] px-4 text-white bg-[rgba(0,0,0,1)]';
export const headerDesktop = 'hidden desktop:flex laptop:flex';
export const headerNavOption = "px-4 py-2 hover:text-blue-500 transition duration-500";
export const headerSmartphone = 'block desktop:hidden laptop:hidden';
export const headerSmartphoneOpenButton = "p-[5px] border-[1px] border-white rounded-[6px]";
export const headerSmartphoneCloseButton = "absolute top-[25px] right-[15px] self-end p-[5px] border-[1px] border-white rounded-[6px]";
export const headerSmartphoneOpen = 'fixed right-0 top-0 w-[60%] h-full border-l border-l-gray-900 bg-[#000300] ease-in-out duration-1000 flex flex-col justify-center items-center gap-[15px] z-10';
export const headerSmartphoneClose = 'ease-in-out h-full top-0 duration-1000 fixed right-[-100%] flex flex-col justify-center items-center gap-[15px]';
export const headerButtonLangActive = "opacity-100 rounded-full border-[rgba(0,0,100,1)] border-[3px]";
export const headerLangs = "flex items-center gap-[10px] pr-[10px]";

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
export const experienceCardCertificate = "flex flex-row justify-center text-center items-center gap-[5px] mt-[10px] bg-[rgba(0,0,0,1)] w-[130px] p-[5px] rounded-[30px] border-[2px] border-[rgba(255,255,255,1)] hover:bg-[rgba(75,75,255,1)] transition duration-500";

//----------------------------------------------------------------------------------------------------------------------------------------
// ProjectCard

export const projectCardContainer = "flex flex-col justify-center items-center bg-[rgba(0,0,25,1.0)] p-[20px] border-r-[4px] border-b-[4px] border-[rgba(75,75,255,1)] rounded-[10px] gap-[20px] my-[20px] desktop:w-[500px] smartphone:w-[300px] smartphone-r:w-[460px] tablet:w-[300px]";
export const projectCardImage = "desktop:h-[300px] desktop:w-[460px] smartphone:h-[150px] smartphone:w-[260px] smartphone-r:h-[150px] smartphone-r:w-[260px]";
export const projectCardTitle = "text-center text-[rgba(75,75,255,1)] text-[25px]";
export const projectCardTechnologiesContainer = "flex flex-wrap justify-center gap-[20px]";
export const projectCardTechnologies = "flex flex-col items-center justify-center h-[60px] w-[80px]";
export const projectCardTechnologiesSvg = "w-[60px] h-[60px]";
export const projectCardTechnologiesText = "text-[10px] text-center";
export const projectCardButtonsContainer = "flex desktop:flex-row justify-between smartphone:flex-col gap-[20px]";
export const projectCardButton = "flex flex-row text-center items-center gap-[5px] mt-[10px] bg-[rgba(0,0,0,1)] justify-center w-[140px] p-[5px] rounded-[30px] border-[2px] border-[rgba(255,255,255,1)] hover:bg-[rgba(75,75,255,1)] transition duration-500";

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