import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import MessagesEnglish from "../lang/en-US.json";
import MessagesSpanish from "../lang/es-AR.json";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    const [ messages, setMessages ] = useState(MessagesSpanish);
    const [ locale, setLocale ] = useState('es-AR')
    
    const setLang = (lang) => {
        switch(lang){
            case "es-AR":
                setMessages(MessagesSpanish);
                setLocale("es-AR");
                break;
            case "en-US":
                setMessages(MessagesEnglish);
                setLocale("en-US");
                break;
            default : 
                setMessages(MessagesSpanish);
                setLocale("es-AR");
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