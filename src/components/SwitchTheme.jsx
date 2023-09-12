import { useEffect, useState } from "react";
import { ReactComponent as Sun } from '../assets/images/sun.svg';
import { ReactComponent as Moon } from '../assets/images/moon.svg';

const SwitchTheme = ( ) => {

    const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    } else {
        return "light";
    }});

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <button onClick={handleChangeTheme} className={`flex w-16 h-8 rounded-full transition-all duration-500 cursor-pointer ${theme === "light" ? "bg-negro" : "bg-blanco"}`}>
            {
                theme === "light" ?
                <Sun fill="black" className={`bg-blanco shadow-2xl h-8 w-8 rounded-full`}/>
                :
                <Moon fill="white" className={`bg-negro shadow-2xl h-8 w-8 rounded-full ml-8`}/>
            }
        </button>
    );
};

export default SwitchTheme;