import React from "react";
import { useState } from "react";
import "../Scrol/Scrol.css";
import { Nav } from "../Nav/Nav";
import Starfield from 'react-starfield';
import { useEffect } from "react";
import Loads from "../Loader/Loader";
import { BsFillLightningFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useContext } from "react";
import { context } from "../context";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ImCross } from "react-icons/im";

export function Calculator() {
    const {StoreExist, setStoreExist} = useContext(context)
    const [color, setColor] = useState("rgb(255, 51, 0)");
    const [coalition, setCoalition] = useState("Coalition off");
    const [desplay, setDesplay] = useState("Current Level 0.0 ?");
    const [cols, setCols] = useState("off");
    const [las , setLas] = useState("");
    const [getproject, setProject] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [Loader, setLoader] = useState(false);
    const [setjson, setJson] = useState([]);
    const [setobv, setObv] = useState(true);
	const {logs, setLogs} = useContext(context);
    const [setvalt, setValt] = useState("");
    const [setdif, setDif] = useState("");
    const [sename, setSename] = useState("Please Write the Project Name  ?");
    const {forloads, setForloads} = useContext(context);
	const {Empty, setEmpty} = useContext(context)
    
    const [vel, setVel] = useState({
        level : '',
        score : ''
    });

    const navigate = useNavigate();
    function levelCalculator(startLevel, plannedXp, score, switchValue) {
        const levelsXp = [0, 462, 2688, 5885, 11777, 29217, 46255, 63559, 74340, 85483, 95000, 105630, 
                           124446, 145782, 169932, 197316, 228354, 263508, 303366, 348516, 399672, 457632, 
                           523320, 597786, 682164, 777756, 886074, 1008798, 1147902, 1305486, 1484070];
        let xp = plannedXp * (score / 100);
        if (switchValue === 'on') {
            xp += xp * 0.042;
        }
        const levelDown = Math.floor(startLevel);
        const levelUp = levelDown + 1;
    
        const levelXpTotal = levelsXp[levelUp] - levelsXp[levelDown];
        const currentXp = levelsXp[levelDown] + (levelXpTotal * (startLevel - levelDown));
        
        let finalXp = currentXp + xp;
    
        let i;
        for (i = 0; i < levelsXp.length; i++) {
            if (levelsXp[i] > finalXp) {
                break;
            }
        }
    
        const maxXp = levelsXp[i] - levelsXp[i - 1];
        finalXp -= levelsXp[i - 1];
    
        return (i - 1) + (finalXp / maxXp);
    }
    
    const result = levelCalculator(4.20, 5775, 125, 'off');
    const functioHandlechange = (e) => {
        setVel({...vel, [e.target.name] : e.target.value});
        if (e.target.name == "project") {
            setjson.forEach((item, index) => {
                if (item.name == e.target.value) {
                    console.log(item.difficulty);
                }
            });
        }
    }

    const getdif = (get) => {
        setjson.forEach((item, index) => {
            if (get == item.name) {
                setDif(String(item.difficulty));
            }
        });
    }
    useEffect(() => {
        setEmpty(true)
        setForloads(false)


        setStoreExist([])
        fetch("/Project_lvl.json").then((response) => {
        return response.json();
        }).then((data) => {
            setJson(data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const funcAdd = () => {
        vel.level = las;
        if (las != "fill the form" || las != "NaN" || las != "") {
            setDesplay(las);
        }
    }
    const Calculate = () => {
        setjson.map((item, index) => {
        });
        if (String(vel.level).length == 0 || String(vel.score).length == 0 || sename == "Please Write the Project Name  ?" || sename == "") {
            setLas("fill the form");
            return;
        }
        setLas(String(levelCalculator(vel.level, setdif, vel.score, cols)).substring(0, 4));
    }
    setTimeout(() => {
        setLoader(true);
    }, 1000);

    setTimeout(() => {
        setObv(false);
    }, 8000);
    const functionGet = (e) => {
        setSename(e.target.value);
        setValt(e.target.value);
    }
    const [ButtonOff, SetButtonOff] = useState(false)

    const FunctionSetCol = () => {
        SetButtonOff(!ButtonOff)
        if (cols === 'off') setCols('on')
        else setCols('off')
    }
    // Col All maters Is this --> cols
    return (
        <div className="flex items-center flex-col justify-start w-[100%] overflow-scroll h-[100vh] bg-black">
            <Starfield
            starCount={700}
            starColor={[255, 255, 0]}
            speedFactor={0.05}                                                                                    
            backgroundColor="black"
          />
                <div className=" duration-300 border-solid border-[1px] bg-white flex-col  bg-opacity-20  border-yellow-600
                  w-[100%] h-[95%] m-2 rounded-md flex justify-start pt-5 items-center">
                    <div className="border-solid flex items-center justify-center mt-20 bg-black  rounded-md border-[1px] border-yellow-600 w-[80%] h-24">
                        <p className="text-white font-bars4 font-semibold text-6xl "> XP-Calculator </p>
                    </div>
                        <div className="gap-[6px] p-1  flex items-center w-[80%]  justify-center bg-transparent rounded-[10px] mt-5 flex-row h-[60px]">
                            <input  type="text" name="level" onChange={(e) => functioHandlechange(e)} value={vel.level} placeholder={desplay} className="input text-white w-[50%] font-bars2 border-solid border-[1px] placeholder-white border-yellow-500 bg-black  " />
                            <input type="text" name="score" onChange={(e) => functioHandlechange(e)} value={vel.score} placeholder=" Score 100 - 125 ?" className="input text-white w-[50%] font-bars2 border-solid placeholder-white border-[1px]  border-yellow-500 bg-black" />
                        </div>
                        <div className="w-[79%] rounded-[10px] mt-5 ">
                            <div className="font-bars2 border-solid placeholder-white border-[1px] w-full  border-yellow-500 bg-black h-14 rounded-lg ">
                            <div className="dropdown rounded-lg w-[100%] flex flex-col items-center justify-center bg-black h-[100%] dropdown-bottom">
                                <input  onClick={() => (setSename(""))} onChange={(e) => functionGet(e)} inputMode="text" value={sename} className="w-[100%] pl-5 rounded-lg text-white z-40  placeholder-white bg-black placeholder-yellow-600 font-bars2 outline-none h-[100%]" placeholder={sename}/>
                                <div className= "dropdown-content gap-2 bg-black overflow-y-auto overflow-x-hidden flex-col rounded-[10px] w-[100%] absolute top-16 max-h-[300px] flex items-start justify-start">
                                    {setjson.filter(item => {
                                        const vao = item.name.toLowerCase();
                                        const sec = setvalt.toLowerCase();
                                        return (vao.startsWith(sec));

                                    }).map((item, index) => 
                                    <div onClick={() => (setSename(item.name), getdif(item.name))} key={index} className="w-[100%] flex-row h-10 pt-2 pb-2 rounded-md cursor-pointer flex pl-4 items-center duration-300 justify-start hover:bg-yellow-600 hover:bg-opacity-15">
                                        <p className="text-white text-sm font-bars2">{item.name}</p>
                                        </div>
                                )}
                                </div>
                                    </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="w-[79%] h-[35px] flex items-center justify-center flex-row border-solid mt-5 bg-yellow-600 rounded-lg border-[1px] border-yellow-500">
                            <div className="w-[50%] rounded-l-lg h-full flex items-center p-5 justify-start">
                                <p className="text-white font-bars5 font-extrabold">Coalition</p>
                                <p className="text-black font-bars2 font-extrabold ml-1"> {cols}</p>
                            </div>
                            <div className="w-[50%] items-center justify-end flex rounded-l-lg h-full">
                                <div onClick={() => FunctionSetCol()} className={`w-[50px] cursor-pointer flex items-center rounded-lg duration-500  h-[25px] mr-1 border-solid border-black border-[2px] bg-white`}>
                                    <div className={`transition-all absolute duration-300 ease-in-out mr-[3px] ${ButtonOff ? "bg-yellow-500 translate-x-0"  : "bg-black translate-x-[24px]"} ml-[3px] w-4 h-4  rounded-md`}></div>
                                </div>
                            </div>
                        </div>
                        <div  className=" flex items-center justify-center   w-[100%] h-[170px]">
                            <div  onClick={() => (Calculate())} className="bg-yellow-500 hover:scale-105 flex items-center 
                            text-black font-bars2 font-bold cursor-pointer duration-200 hover:bg-yellow-400 justify-center h-[100px] w-[100px] rounded-[50%]" >
                                <p> Calculate </p>
                            </div>
                        </div>
                            <div className="flex gap-[10px] bg-black items-center justify-center w-[79%] h-[60px] rounded-[10px] ">
                                    {las == "NaN" ? 
                                    ( <p className="font-bars2  text-[30px] font-extrabold text-white"> Please Provide An Input ! </p>) : 
                                    las == "" ? 
                                    (<p className="font-bars2  text-[30px] font-extrabold text-white"> 0.0 </p>) : 
                                        (<p className="font-bars2  text-[30px] font-extrabold text-white"> {las} </p>)}
                                    {
                                        !vel.level == "" && 
                                        <div onClick={() => (funcAdd())} className="w-[30px] cursor-pointer duration-300 hover:scale-110 h-[30px] ">
                                       <IoMdAddCircle className="text-yellow-500 w-[100%] h-[100%]" />
                                    </div>
                                    }
                                </div>
                        {/* <div className="w-[90%] max-h-[400px] flex items-start justify-center h-[400px] overflow-auto rounded-lg p-5 mt-5">
                            <div className="bg-yellow-600 flex-row border-solid border-yellow-500 border-[1px] flex items-center justify-center w-[90%] h-[40px]">
                                <div className="items-center justify-start pl-4 flex w-[50%] h-full">
                                    <p className="font-bars5 font-bold text-white">{sename}</p>
                                </div>
                                <div className="items-center justify-end flex w-[50%] pr-5 h-full">
                                    <ImCross />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
    );
}