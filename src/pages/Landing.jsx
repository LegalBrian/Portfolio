import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Landing = () => {
    return(
        <div>
            <ScrollToTopButton/>
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Resume/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Landing;