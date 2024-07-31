import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
const context = createContext();

const MycontextProvider = ({children}) =>{
    const [logs, setLogs] = useState(true);
    return (
        <context.Provider value={{logs, setLogs}}>
            {children}
        </context.Provider>
    );
};
export {context, MycontextProvider};