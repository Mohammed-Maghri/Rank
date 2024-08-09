import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
const context = createContext();

const MycontextProvider = ({children}) =>{
    const [logs, setLogs] = useState(false);
    const [all, setAll] = useState({});
    const [tok, setTok] = useState("");
    const [enable, setEnable] = useState(false);
    const [show, setShow] = useState(false);
    const [pages, setPages] = useState(2);
    const [pol, setPol] = useState(0);
    return (
        <context.Provider value={{pol, setPol, show, setShow,  enable , setEnable, pages, setPages, all, setAll, logs, setLogs, tok, setTok}}>
            {children}
        </context.Provider>
    );
};
export {context, MycontextProvider};


6250da40e4400f267e897c429435cf0eab9b6c43