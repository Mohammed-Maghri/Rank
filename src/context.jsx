import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
const context = createContext();

const MycontextProvider = ({children}) =>{
    const [logs, setLogs] = useState(false);
    const [all, setAll] = useState({});
    const [tok, setTok] = useState("");
    const [enable, setEnable] = useState(false);
    const [pages, setPages] = useState(2);
    const setDetails = {campusId : "", cursusId : "", pageNumber : "", poolYear : ""};
    return (
        <context.Provider value={{setDetails ,enable , setEnable, pages, setPages, all, setAll, logs, setLogs, tok, setTok}}>
            {children}
        </context.Provider>
    );
};
export {context, MycontextProvider};