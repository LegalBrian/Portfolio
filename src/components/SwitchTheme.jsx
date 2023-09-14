import React, {useEffect} from "react";
import { ReactComponent as Sun } from '../assets/images/Sun.svg';
import { ReactComponent as Moon } from '../assets/images/Moon.svg';

const SwitchTheme = ( { theme } ) => {

    useEffect(() => {
        if (theme.currentTheme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else if (theme.currentTheme === "light") {
            document.querySelector("html").classList.remove("dark");
        } else {
            document.querySelector("html").classList.add("dark");
        }
    }, [theme.currentTheme]);

    const changeTheme = () => {
        if (theme.currentTheme === "dark"){
            theme.setTheme("light");
        }
        else{
            theme.setTheme("dark");
        }
    }
    
    return (
        <button onClick={() => changeTheme()} className={`flex w-16 h-8 rounded-full transition-all duration-500 cursor-pointer ${theme.currentTheme === "light" ? "bg-element-dark" : "bg-element-light"}`}>
            {
                theme.currentTheme === "light" ?
                <Sun fill="rgba(0,0,25,1)" className={`bg-element-light shadow-2xl h-8 w-8 rounded-full`}/>
                :
                <Moon fill="rgba(128,191,255,1)" className={`bg-element-dark shadow-2xl h-8 w-8 rounded-full ml-8`}/>
            }
        </button>
    );
};

export default SwitchTheme;
