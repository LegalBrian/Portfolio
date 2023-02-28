import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Projects from "./Projects";
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
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Landing;

// rgba(0,0,0,1.0)
// rgba(0,0,25,1.0)
// rgba(0,0,50,1.0)
// rgba(0,0,75,1.0)
// rgba(0,0,100,1.0)
// rgba(75,75,255,1)
// rgba(255,255,255,1.0)