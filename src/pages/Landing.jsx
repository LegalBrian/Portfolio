import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Proyects from "./Proyects";
import Contact from "./Contact"
import Footer from "../components/Footer"

const Landing = () => {
    return(
        <div>
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Resume/>
            <Proyects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Landing;