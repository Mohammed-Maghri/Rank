import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
const context = createContext();

const MycontextProvider = ({children}) => {
    const [logs, setLogs] = useState(false);
    const [all, setAll] = useState({});
    const [tok, setTok] = useState("");
    const [enable, setEnable] = useState(false);
    const [pages, setPages] = useState(2);
    const [campusId, setCampusId] = useState("");
    const [cursusId, setCursusId] = useState("");
    const [poolYear, setPoolYear] = useState("");
    const [loadingstate, setLoadingstate] = useState(false);
    const [pol, setPol] = useState(21);
    const [prf, setPrf] = useState("");
    const [peerfinder , setPeerfinder] = useState({});
    const [peertracker, setPeertracker] = useState(false);
    const [othload, setOthload] = useState(false);
    const [username, seTusername] = useState("");
    const [iftr, setIftr] = useState(false);
    return (
        <context.Provider value={{loginGeter, setLoginGeter ,  username, seTusername, iftr, setIftr, othload, setOthload, peertracker, setPeertracker, peerfinder , setPeerfinder, prf, setPrf, loadingstate , setLoadingstate, pol, setPol,campusId ,setCampusId, cursusId , setCursusId ,setPoolYear, 
        poolYear  ,enable , setEnable, pages, setPages, all, setAll, logs, setLogs, tok, setTok}}>
            {children}
        </context.Provider>
    );
};
export {context, MycontextProvider};