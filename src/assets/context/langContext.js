import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import MessagesEnglish from "../lang/en-US.json";
import MessagesSpanish from "../lang/es-AR.json";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    let localeDefalut;
    let messagesDefault;

    const lang = localStorage.getItem("lang");

    if(lang){
        localeDefalut = lang;
        
        if(lang === "es-AR"){
            messagesDefault = MessagesSpanish;
        } else if(lang === "en-US"){
            messagesDefault = MessagesEnglish;
        } else {
            localeDefalut = "es-AR"
            messagesDefault = MessagesSpanish;
        }
    }

    const [ messages, setMessages ] = useState(messagesDefault);
    const [ locale, setLocale ] = useState(localeDefalut)
    
    const setLang = (lang) => {
        switch(lang){
            case "es-AR":
                setMessages(MessagesSpanish);
                setLocale("es-AR");
                localStorage.setItem("lang", "es-AR")
                break;
            case "en-US":
                setMessages(MessagesEnglish);
                setLocale("en-US");
                localStorage.setItem("lang", "en-US")
                break;
            default : 
                setMessages(MessagesSpanish);
                setLocale("es-AR");
                localStorage.setItem("lang", "es-AR")
        }
    }
    return (
        <langContext.Provider value={{setLang: setLang, currentLang: locale}}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { LangProvider, langContext };