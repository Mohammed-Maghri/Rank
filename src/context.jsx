import React, { createContext } from "react";
import { use } from "react";
import { useContext } from "react";
import { useState } from "react";
const context = createContext();

// Bzffff TA3 values Cz Nssiit Chno Knt kandir The half of them 
// Mkhdamch bih but i hv No jhd to Clear Thing's hihih
const MycontextProvider = ({children}) => {
    const [forloads, setForloads] = useState(false);
    const [Empty, setEmpty] = useState(true)
    const [LocalCampus, setLocalCampus] = useState(1) // Local Scope For the Search
    const [LocalDepa, setLocalDepart] = useState(1) // Local Scope 
    const [LocalMonth, setLocalmonth] = useState(1)
    const [LocalYear, SetYearLocal] = useState(1)
    const [LoadMore, SetLoadMore] = useState(1)
    const [Month, setMonth] = useState(0)
    const [Year, SetYear] = useState(0)
    const [Campus, setCampus] = useState('')
    const [Student_State, setState] = useState('')
    const [Connection, setConnection] = useState(false)
    const [GlobalData, setGlobalData] = useState([])
    const [StoreExist, setStoreExist] = useState([])
    const [logs, setLogs] = useState(false)
    const [ObjectData, setObjectData] = useState({})
    const [all, setAll] = useState({})
    const [tok, setTok] = useState("")
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
    const [campusScope, setCompusScope] = useState(0)
    
    return (
        <context.Provider value={{LocalCampus, setLocalCampus, campusScope, setCompusScope, LoadMore, SetLoadMore, Month, setMonth , Student_State, setState, Campus, setCampus, Connection, 
            setConnection, Year, SetYear, StoreExist, setStoreExist, ObjectData, setObjectData,Empty, setEmpty,
             username, forloads, setForloads, LocalDepa, setLocalDepart ,LocalMonth, setLocalmonth,
            seTusername, iftr, setIftr, othload, setOthload, peertracker, setPeertracker, LocalYear, SetYearLocal,
            peerfinder , setPeerfinder, prf, setPrf, loadingstate , setLoadingstate, 
            pol, setPol,campusId ,setCampusId, cursusId , setCursusId ,setPoolYear, 
            poolYear  ,enable , setEnable, pages, setPages, all, setAll, logs, 
            setLogs, tok, setTok, GlobalData, setGlobalData}}>
            {children}
        </context.Provider>
    );
};
export {context, MycontextProvider};