import Header from "../components/Header";
import Home from "./Home";
import Skills from "./Skills";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const MainPage = () => {
    return(
        <div className="flex flex-col gap-5 transition-all duration-500 font-yanone bg-blanco text-negro dark:bg-azul-oscuro dark:text-blanco">
            <ScrollToTopButton/>
            <Header/>
            <Home/>
            <Skills/>
            <Resume/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default MainPage;