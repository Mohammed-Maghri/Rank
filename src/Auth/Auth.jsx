import React , {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Starfield from 'react-starfield';
import me from "../clips/this.png"
import lou from "../clips/loua.png"
import Cookies from "js-cookie";
import { context } from "../context";
import { BsFillLightningFill } from "react-icons/bs";
import meme from "../clips/memem.jpeg";
import { VscGithubAlt } from "react-icons/vsc";
import kta from "../clips/cat.png"

export default function Auth() {
    const navigate = useNavigate();
    const {enable, setEnable} = useContext(context);
    const api = "https://api.1337leets.com/api/v1/authenticate";
    const token = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-39d663e4409f75359ed40f93604b1492f29cc61d16f1eced3f7b7b81ee1dcb78&redirect_uri=https%3A%2F%2Fwww.1337leets.com%2Fhome&response_type=code";
    const functionNavigate = (path) => {
        window.open(path, '_blank');
    }
    const cally = (thepath) => {
        setTimeout(() => {
            window.location.href = thepath;
        }, 1000);
    }
    Cookies.remove('access_token');
    Cookies.remove('log');
    Cookies.remove('campusId');
    Cookies.remove('cursusId');
    Cookies.remove('poolYear');
    Cookies.remove('month');
    localStorage.setItem('pics', meme);
    const [button_Deselect, set_ButtonDeselect] = useState('flex');
    useEffect(() => {
        console.log(Cookies.get('close'), "here !");
        if (Cookies.get('close') === "false") 
            {
                console.log("rest");
                set_ButtonDeselect('none')
            }
    }, [])
    return (
        <div className="w-[100%] bg-black h-[100vh] flex items-center justify-center">
          <Starfield
            starCount={10000}
            starColor={[255, 255, 255]}
            speedFactor={0.02}                                                                                    
            backgroundColor="black"
          />
          <div className="w-[100%] h-[100%] 
          flex items-center justify-start  flex-col absolute z-50">
            <div style={{display : button_Deselect}} className=" backdrop-blur-sm items-center justify-center absolute w-full h-[100vh]">
                <div className="flex-col rounded-[10px] flex items-start justify-start border-solid border-[5px] border-yellow-300 w-[400px] h-[400px] bg-slate-800">
                    <div className=" mt-2 w-full h-[20px]  flex items-center justify-start">
                        <div onClick={() => {set_ButtonDeselect('none');  Cookies.set('close', false); }} className="w-[16px] h-[16px] cursor-pointer hover:scale-105 bg-red-500 ml-2 rounded-full"></div>
                    </div> 
                        <div className="flex-col flex items-center justify-center  w-[100%] h-[70%]">
                            <p className="font-bars3 font-normal text-white"> Do you find 1337Leets useful? 🤔 </p>
                            <p className="font-bars3 font-extrabold text-white"> It would be Nice to Drop a Follow on GitHub! 🌟 </p>
                            <p className="font-bars3 font-bold text-white" >⭐ And Give the project a star if you like it!</p>
                            <p className="font-bars3 font-light text-white"> You can cancel if you want to. ❌</p>
                            <p className="font-bars2 font-light text-white"> No one will force you.  💪</p>
                            <p className="font-bars3 font-bold text-red-400"> Click the button above! ⬆️ </p>
                            <div className="w-[60px] mt-3 rounded-full h-[60px] border-solid border-white border-[2px] bg-white ">
                                <img className="w-full h-full  rounded-full"  src={kta}></img>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 w-full h-[20%]">
                            <div onClick={() => (functionNavigate("https://github.com/Mohammed-Maghri"))} className="w-[170px] flex items-center justify-center  h-[50px] cursor-pointer hover:scale-110 duration-200 border-solid border-[3px] border-green-500 bg-green-400 rounded-md">
                                <p  className="text-white font-extrabold font-bars3 "> Follow </p>
                            </div>
                            <div onClick={() => (functionNavigate("https://github.com/Mohammed-Maghri/Rank"))} className="w-[170px] cursor-pointer h-[50px] flex items-center hover:scale-110 duration-200 justify-center border-solid border-[3px] border-yellow-300 bg-yellow-400 rounded-md">
                                <p  className="text-white font-extrabold font-bars3 "> Drop a Star ⭐ </p>
                            </div>

                        </div>
                </div>
            </div>
            <div className="  w-[100%] flex items-start justify-end h-[10%]">
                <div style={{boxShadow : "0px 0px 10px rgb(255, 234, 0)"}} className=" w-[100px] h-[30px] flex-row items-center justify-center flex rounded-[10px] bg-yellow-400 m-[20px]">
                    <div  className="w-[70%] font-medium text-white text-sm font-bars2 flex items-center  justify-center h-[100%]" >
                        <p> Beta-V </p>
                    </div>
                    <div className="w-[20%] flex items-center justify-start text-white">
                        <BsFillLightningFill />
                    </div>
                </div>
            </div>
            <div  className="xs:w-[80%] flex items-center justify-start  rounded-[20px] h-[70%] max-w-[600px] gap-[20px] flex-col">
                <div  className="w-[80%] flex items-end justify-center h-[30%] rounded-[10px] bg-transparent">
                    <p className="font-bars4 font-bold text-6xl text-white"> 1337Leets </p>
                </div>
                    {/* <div className="text-red-500 text-sm font-bars2   w-[100%] h-[100px] flex items-center justify-center flex-col">
                    <span className="loading loading-spinner text-error"></span>
                    <p> site on maintenance </p>
                    <p> Try Later </p>
                    </div> */}
                <div className="flex items-center min-w-[300px] flex-col justify-start  w-[80%] h-[200px]">
                    <div style={{boxShadow: '0px 0px 5px yellow'}} onClick={() => (cally(token))} className=" cursor-pointer w-[200px] flex items-center 
                     justify-center h-[60px] border-solid rounded-[20px] border-yellow-400 border-[2px] duration-300 hover:scale-105">
                        <p className="text-yellow-400 font-bars3"> Login </p>
                    </div>
                    <div className="flex flex-col items-center justify-center  h-[100px]">
                        <p className="font-bars2 text-white font-black text-xs">Welcome to the School Rankings Board</p>
                        <p className="text-white text-[15px] font-bars3"> By : mmaghri && mlouazir </p>
                    </div>
                    <div className="flex items-center justify-around w-[200px] h-[50px]">
                        <div  className="border-solid border-white border-[1px] cursor-pointer w-[50px] h-[50px] rounded-[50%] duration-200 hover:scale-110" onClick={() => functionNavigate('https://profile.intra.42.fr/users/mlouazir')}> <img className="h-[100%] w-[100%] object-cover rounded-[50%]" src={lou}/> </div>
                        <div className="border-solid border-white border-[1px] cursor-pointer w-[50px] h-[50px] rounded-[50%] duration-200 hover:scale-110" onClick={() => functionNavigate('https://profile.intra.42.fr/users/mmaghri')} > <img className="h-[100%] w-[100%] rounded-[50%]" src={localStorage.getItem("pics")}/> </div>
                    </div>
                </div>
                        <div className="flex items-center justify-center top-[800px] text-white flex-col" >
                            <p className="text-[15px] font-bars2"> They Can't Stop US !</p>
                        </div>
             </div>
             <div className="w-[100%] flex items-center  justify-end flex-col h-[20%] ">
                <div className=" flex items-center justify-center  w-[100%]  text-white font-bold gap-2 font-bars2">
                    <p className="hover:underline cursor-pointer " onClick={() => functionNavigate('https://github.com/Mohammed-Maghri')}> Drop a Follow On Github --: </p>
                    <VscGithubAlt  onClick={() => functionNavigate('https://github.com/Mohammed-Maghri')} className="w-[30px] h-[30px] text-yellow-400 cursor-pointer hover:scale-110 duration-200" />
                </div>
          </div>
          </div>
        </div>
      );
}