import react from 'react';
import { useEffect } from "react";
import Cookies from "js-cookie";
import "../Scrol/Scrol"
import { Nav } from '../Nav/Nav';
import { useContext } from 'react';
import { context } from '../context';
import Starfield from 'react-starfield';
import { useState } from 'react';
import Listpeer from "./Listpeer";
import { useNavigate } from 'react-router-dom';
const FunctionDiv = () => {
    const {peerfinder, setPeerfinder} = useContext(context);
    const [projectName, setProjectName] = useState("Enter Project Name ? ");
    const [list, setList] = useState([]);
    const [event, setEvent] = useState("");
    const [seem , setSeem] = useState(false);
    const {peertracker, setPeertracker} = useContext(context);
    const {othload, setOthload} = useContext(context);
    const [iftr, setIftr] = useState(false);


    const [value , setValue] = useState("");
    const [id, setId] = useState("");

    const functionCallApi = async (theid) => {
            try {
                const res = await fetch(`https://leets1337-3f387c570577.herokuapp.com/api/v1/peer-finder?campusId=${Cookies.get('campusId')}&projectId=${theid}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get('access_token')}`
                    }
                });
                await res.json().then((data) => {
                    setPeerfinder(data);
                    setIftr(true);
                    setPeertracker(true);
                    setOthload(false);
                })
            }
    catch (error) {
        console.log("Error", error);
    }
}
    const eventFunction = (e) => {
        setEvent(e.target.value);
        setProjectName(e.target.value);
    }
    const functionFetchjson = async (text) => {
        try {
            const res = await fetch("/Project_lvl.json");
            const data = await res.json();
            setList(data);
        }
        catch (error) {
            console.log("Error", error);
        }
    }
    useEffect(() => {
        functionFetchjson("ft_transcendence");
    }, [])
    const printArg = (ind) => {

        list.forEach((item, index) => {
            if (item.name === ind) {
                functionCallApi(item.project_id);
            }
        })
    }
    return (

        <div className="flex items-center justify-center w-[100%]  h-[50px]">
            <div className="w-[300px] h-[100%] ">
                <input onClick={() => (setSeem(true), setProjectName(""))} onChange={(e) => eventFunction(e)}  type="text"  value={projectName} className="outline-none w-[100%]
                bg-transparent border-solid border-[1px] border-yellow-200 placeholder-white text-xs font-bars2 h-[80%] pl-2 rounded-[5px] text-white" />
                <div className="absolute w-[300px] h-[170px] flex items-center justify-center z-50">
                    {seem &&
                        <div className='dropdown-content mt-3 flex-col rounded-[10px] flex items-start gap-1 justify-start  w-[50%] h-[100%] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                            {list.filter((item) => {
                                const lower = item.name.toLowerCase();
                                const filter = event.toLowerCase();

                                return (lower.startsWith(filter));
                            }).map((item, index) => (
                                <div  key={index} onClick={() => (setSeem(false), printArg(item.name), setOthload(true) ,setProjectName(item.name))} className="w-[100%] cursor-pointer h-[40px] pt-3 pb-3 text-white bg-slate-900  rounded-[10px] flex items-center justify-center text-xs font-bars2"> <p>
                                    {item.name}</p></div>
                            ))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
        );
}


export function Peer() {
    const navigate = useNavigate();
    if (Cookies.get('log') == undefined) {
        navigate("/");}
    const {peerfinder, setPeerfinder} = useContext(context);
    const {peertracker, setPeertracker} = useContext(context);
    const {othload, setOthload} = useContext(context);
    const [iftr, setIftr] = useState(false);
    return (
        <div className="flex items-center flex-col justify-start w-[100%] h-[100vh] bg-black">
            <Starfield
            starCount={700}
            starColor={[255, 255, 0]}
            speedFactor={0.04}                                                                                    
            backgroundColor="black"
            />
            <div className='w-[100%] items-center justify-start min-h-[120px] flex flex-col h-[18%] mb-3'>
                <Nav />
            <FunctionDiv />
            </div>
            <div className='w-[100%] overflow-auto'>
                {peertracker &&
                    <Listpeer />
                }
                {
                    !peertracker && !othload &&
                    <div className=' w-[100%] h-[90%]  flex items-center flex-col justify-center '>
                        <span className="loading loading-ball loading-lg bg-yellow-400 text-[40px]"></span>
                        <p  className='text-white font-bold font-bars2 text-xs '> To comply with the 42 API's data caching rules, we need to minimize</p>
                        <p className='text-white font-bold font-bars2 text-xs '>minimize the number of API requests as much as possible.</p>
                        <p className='text-white font-bold font-bars2 text-xs '>So Please Search For the Project to Get Data </p>

                    </div>
                }
                {
                    !iftr && othload && 
                    <div className=' w-[100%] h-[90%]  flex items-center flex-col justify-center '>
                        <span className="loading loading-ring w-[200px] h-[200px] bg-yellow-500"></span>
                    </div>
                }
            </div>
        </div>
    );
}