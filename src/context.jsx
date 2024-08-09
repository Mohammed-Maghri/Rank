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
<<<<<<< HEAD
    const [pol, setPol] = useState(0);
    return (
        <context.Provider value={{pol, setPol, show, setShow,  enable , setEnable, pages, setPages, all, setAll, logs, setLogs, tok, setTok}}>
=======
    const [campusId, setCampusId] = useState("");
    const [cursusId, setCursusId] = useState("");
    const [poolYear, setPoolYear] = useState("");
    const [loadingstate, setLoadingstate] = useState(false);
    const [pol, setPol] = useState(0);
    
    return (
        <context.Provider value={{loadingstate , setLoadingstate, pol, setPol,campusId ,setCampusId, cursusId , setCursusId ,setPoolYear, 
        poolYear  ,enable , setEnable, pages, setPages, all, setAll, logs, setLogs, tok, setTok}}>
>>>>>>> 99840bee757f7702d19121bfb5c68f342dcc5e32
            {children}
        </context.Provider>
    );
};
export {context, MycontextProvider};


6250da40e4400f267e897c429435cf0eab9b6c43