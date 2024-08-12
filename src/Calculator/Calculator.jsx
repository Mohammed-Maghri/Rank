import React from "react";
import { useState } from "react";
import "../Scrol/Scrol.css";
import { Nav } from "../Nav/Nav";
import Starfield from 'react-starfield';
import { useEffect } from "react";
import Loads from "../Loader/Loader";

export function Calculator() {
    const [color, setColor] = useState("rgb(0, 255, 0)");
    const [coalition, setCoalition] = useState("Coalition ON");
    const [cols, setCols] = useState("off");
    const [las , setLas] = useState("");
    const [getproject, setProject] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [Loader, setLoader] = useState(false);
    const [setjson, setJson] = useState([]);
    const [vel, setVel] = useState({
        level : '',
        score : ''
    });

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
                    setDifficulty(item.difficulty);
                }
            });
        }
    }

    useEffect(() => {
        console.log("here");
        fetch("/Project_lvl.json").then((response) => {
        return response.json();
        }).then((data) => {
            setJson(data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const logsS = (index) => {
        console.log(index);
    }
    console.log(setjson);
    const Calculate = () => {
        setjson.map((item, index) => {
        });
        if (String(vel.level).length == 0 || String(vel.score).length == 0) {
            setLas("fill the form");
            return;
        }

        setLas(String(levelCalculator(vel.level, difficulty, vel.score, cols)).substring(0, 8));
    }
    setTimeout(() => {
        setLoader(true);
    }, 1000);
    return (
        <div className="flex items-center flex-col justify-start w-[100%] h-[100vh] bg-black">
            <div className="h-[100px] flex items-start justify-center w-[100%]">
                <Nav />
            </div>
            <Starfield
            starCount={3000}
            starColor={[255, 255, 0]}
            speedFactor={0.05}                                                                                    
            backgroundColor="black"
          />
          {
            Loader &&
              <div className=" flex h-[80%]  flex-col items-center justify-start w-[100%] z-30">
            <div className=" h-[100%] duration-300  flex items-center justify-center w-[95%] max-w-[1000px] flex-col">
                <div className="mockup-browser  duration-300   w-[100%] bg-slate-900  ">
                </div>
                <div className="bg-black duration-300 border-solid mt-4 border-[2px] flex-col  max-w-[1000px] bg-opacity-70 pl-3 pr-3 border-yellow-200
                  w-[100%] rounded-[20px] flex justify-start items-center">
                     <div className=" flex items-center justify-center  w-[100%] rounded-[10px] h-[70px]">
                        <div onClick={() => (coalition == "Coalition ON" ? (setCoalition("Coalition OFF"), setColor("rgb(255, 51, 0)"), setCols("off")): 
                        (setColor("rgb(0, 255, 0)"), setCoalition("Coalition ON"), setCols("on")))} style={{boxShadow: `0px 0px 10px ${color}`, backgroundColor : `${color}`}}
                        className="font-bars2 text-black font-bold cursor-pointer duration-150 hover:scale-110   w-[140px] rounded-[10px] h-[40px]  flex items-center justify-center">
                            <p>{coalition}</p>
                        </div>
                     </div>
                        <div className="gap-[6px] p-1  flex items-center justify-center rounded-[10px] mt-4 flex-row 
                         w-[100%] h-[60px]">
                        <input  type="text" name="level" onChange={(e) => functioHandlechange(e)} value={vel.level} placeholder=" Current Level ?" className="input font-bars2 input-bordered bg-black border-[2px] border-yellow-200 input-warning w-full max-w-xs" />
                        <input type="text" name="score" onChange={(e) => functioHandlechange(e)} value={vel.score} placeholder=" Score 100 - 125 ?" className="input font-bars2 input-bordered bg-black border-[2px] border-yellow-200 input-warning w-full max-w-xs" />
                        </div>
                        <div className="min-w-[355px] xm:w-[100%] xs:100%  sm:w-[100%] md:w-[65%]  rounded-[10px] ">
                            <div className="flex items-center justify-center w-[100%]   h-[60px] rounded-[10px] ">
                                <select onChange={(e) => functioHandlechange(e)} name="project" className="select select-warning border-yellow-200 border-[2px] bg-black w-[100%] ">
                                    <option disabled selected> Select Project ?</option>
                                    {
                                        setjson.map((item, index) => (
                                            <option key={index} value={item.name} onClick={() => (console.log(index))}>{item.name}</option>
                                        ))
                                    }
                                    </select>
                            </div>
                            <div  className=" flex items-center justify-center   w-[100%] h-[170px]">
                                <div style={{boxShadow: "0px 0px 10px rgb(255, 247, 0)"}} onClick={() => (Calculate())} className="bg-yellow-200 flex items-center 
                                text-black font-bars2 font-bold cursor-pointer duration-200 hover:scale-110 justify-center h-[100px] w-[100px] rounded-[50%]" >
                                    <p> Calculate </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-center w-[100%] h-[60px] rounded-[10px] ">
                                    <p className="font-bars2  text-[30px] font-extrabold text-white"> {las} </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
          </div>
    }
    {!Loader &&
    <div className="w-[100%] flex items-center justify-center h-[100%] ">
        <span className="loading loading-spinner text-warning"></span>
    </div>
    }
        </div>
    );
}