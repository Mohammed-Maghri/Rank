import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
const context = createContext();

const MycontextProvider = ({children}) =>{
    const [logs, setLogs] = useState(true);
    const all = [];
    const [tok, setTok] = useState("");
    return (
        <context.Provider value={{all , logs, setLogs, tok, setTok}}>
            {children}
        </context.Provider>
    );
};
export {context, MycontextProvider};