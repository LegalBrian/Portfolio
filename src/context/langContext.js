import React from "react";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    return (
        <langContext.Provider value={{hola: "uwu"}}>
            {children}
        </langContext.Provider>
    );
}

export { LangProvider, langContext };