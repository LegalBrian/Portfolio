import React, { useState } from "react";

const themeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    let localeDefault;

    const storedTheme = localStorage.getItem("theme");
    
    if(storedTheme){
        if(storedTheme === "dark"){
            localeDefault = "dark";
        }else if(storedTheme === "light"){
            localeDefault = "light";
        }else{
            localeDefault = "dark"
        }
    }else{
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localeDefault = "dark";
        } else {
            localeDefault = "light";
        }
    }
                
    const [ locale, setLocale ] = useState(localeDefault);
    
    const setTheme = (theme) => {
        switch(theme){
            case "dark":
                setLocale("dark")
                localStorage.setItem("theme", "dark")
                break;
            case "light":
                setLocale("light");
                localStorage.setItem("theme", "light");
                break;
            default:
                setLocale("dark");
                localStorage.setItem("theme", "dark");
                return "dark"

        }
    }

    return (
        <themeContext.Provider value={{ currentTheme: locale, setTheme: setTheme }}>
            {children}
        </themeContext.Provider>
    );
}

export { ThemeProvider, themeContext };
