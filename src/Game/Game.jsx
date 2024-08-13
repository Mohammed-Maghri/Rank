import React from "react";
import { useState } from "react";
import "../Scrol/Scrol.css";
import Starfield from 'react-starfield';
import { Nav } from "../Nav/Nav";
import pic from "../clips/mmaghri.jpg";
import cat from "../clips/kta.png";
import keys from "../clips/game.png";
import click from "../clips/cli.png";
import { useContext } from "react";
import { context } from "../context";

export function Game() {

    const [game, setGame] = useState(false);
    const {logs, setLogs} = useContext(context);
    const studetns = [{pic : cat }];
    if (logs == false) {
        window.location.href = "www.1337leets.com";
    }
    return (
        <div className="flex items-center  flex-col justify-center w-[100%] h-[100vh] bg-black" >
            <Starfield
            starCount={600}
            starColor={[255, 255, 0]}
            speedFactor={0.04}                                                                                    
            backgroundColor="black"
            />
            <Nav />
            <div className="w-[100%] border-solid bg-black flex flex-col items-start justify-center h-[100%] overflow-auto ">
                    <div className=" xs:flex lg:hidden items-center justify-center  w-[100%] text-white h-[100%]">
                        <p> The Game Only playable On Big screens </p>
                    </div>
                <div className="w-[95%] h-[100%] flex items-center xs:hidden md:flex lg:flex justify-center flex-col gap-3">
                <iframe className="z-50 bg-black w-[900px] rounded-[10px] h-[550px]" allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true" id="game_drop"
                 src="https://html-classic.itch.zone/html/11169816/index.html" 
                 allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated;
                 web-share" msallowfullscreen="true" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>
                    <div className="w-[80%] text-[20px] font-bars2  flex-col flex items-center justify-center text-white h-[20%]">
                        <div className="w-[100%] flex items-center gap-6 justify-center mb-4">
                            {game &&
                                <img src={click} alt="keys" className="w-[50px]  h-[50px]" />
                            }
                        </div>
                        <div className="border-solid text-white gap-2 text-md flex items-center justify-center flex-col font-bars2  w-[800px] h-[30%]">
                            <p> Game Created By : </p>
                            <div className="w-[200px] flex items-center justify-center ">
                                <div style={{boxShadow : "0px 0px 10px blue"}} className="w-[60px] duration-500 cursor-pointer hover:scale-110 h-[60px] rounded-[50%] border-solid border-blue-500 border-[2px] ">
                                    <img onClick={() => (window.open("https://profile.intra.42.fr/users/mait-elk" ,"_blank"))} src="https://cdn.intra.42.fr/users/c805a96c4a7949026580c4796c19a1a9/mait-elk.jpg" alt="pic" className="w-[100%] h-[100%] rounded-[50%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};