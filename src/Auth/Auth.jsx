import React , {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import Starfield from 'react-starfield';
import me from "../clips/this.png"
import lou from "../clips/loua.png"
import Cookies from "js-cookie";
import { context } from "../context";
import { BsFillLightningFill } from "react-icons/bs";
import meme from "../clips/memem.jpeg";
import { VscGithubAlt } from "react-icons/vsc";
import kta from "../clips/cat.png"
import { RxCross2 } from "react-icons/rx";
import { PiWarningOctagonLight } from "react-icons/pi";
import { ImCross } from "react-icons/im";

export default function Auth() {
    const navigate = useNavigate();
    const {enable, setEnable} = useContext(context);
    const token = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-39d663e4409f75359ed40f93604b1492f29cc61d16f1eced3f7b7b81ee1dcb78&redirect_uri=https%3A%2F%2Fwww.1337leets.com%2FConnect&response_type=code";
    const functionNavigate = (path) => {
        window.open(path, '_blank');
    }
    const cally = (thepath) => {
        setTimeout(() => {
            window.location.href = thepath;
        }, 1000);
    }
    localStorage.setItem('pics', meme);
    const [button_Deselect, set_ButtonDeselect] = useState(true);
    useEffect(() => {
        if (Cookies.get('access_token') != null && Cookies.get('access_token') != undefined)
            navigate('/Home')
        console.log(' ===== === < ' , Cookies.get('close'))
        if (Cookies.get('close') === "false") 
            {
                console.log("rest");
                set_ButtonDeselect(false)
            }
    }, [])
    return (
        <>
        {
            button_Deselect &&
            <div className={`w-full absolute h-[100vh] flex items-center justify-center bg-white bg-opacity-25 backdrop-blur-sm z-50`}>
            <div className="w-[370px] rounded-lg border-solid border-[2px] border-yellow-500 bg-black h-[450px]">
                <div className="w-full mt-2 h-[25px] rounded-md ">
                    <div onClick={() => (set_ButtonDeselect(false) , Cookies.set('close', false))} className=" cursor-pointer hover:scale-105 duration-150 h-[25px] flex items-center justify-center ml-2 w-[25px] rounded-full bg-red-600">
                        <ImCross size={10} color="white"/>
                    </div>
                </div>
                <div className="w-full h-[50%] flex flex-col items-center justify-end">
                    <p className="font-bars2 text-white font-bold"> Do You Find 1337Leets Useful ? </p>
                    <p className="text-white font-bars3"> Give the Project A star 🌟 </p>
                    <p className="font-bars3 text-white "> And Drop a Follow On Github 🌝 </p>
                    <p className="font-bars2 text-white text-sm font-bold "> If u want No (one Will Force U) </p>
                    <p className="font-bars2 text-red-500 text-sm ">     Click The Button Above To cancel  </p>
                </div>
                <div className="w-full h-[70px]  flex items-center justify-center ">
                    <div className="w-[50px] h-[50px] border-solid border-[2px] border-yellow-500 bg-white rounded-full">
                        <img className="w-full h-full rounded-full" src={kta}></img>
                    </div>
                </div>
                <div className="w-full flex flex-row items-center justify-around h-[115px] ">
                    <div  onClick={() => (functionNavigate('https://github.com/Mohammed-Maghri'))} className="flex hover:scale-105 items-center bg-yellow-400 bg-opacity-25 duration-200 cursor-pointer justify-center w-[40%] h-[50%] rounded-lg border-solid border-[1px] border-yellow-500">
                        <p className="text-white font-bars2"> Follow ❤️ </p>
                    </div>
                    <div onClick={() => (functionNavigate('https://github.com/Mohammed-Maghri/Rank'))} className="flex hover:scale-105 items-center bg-yellow-400 bg-opacity-25 duration-200 cursor-pointer justify-center w-[40%] h-[50%] rounded-lg border-solid border-[1px] border-yellow-500">
                        <p className="text-white font-bars2"> Drop a star 🌟 </p>
                    </div>
                </div>
            </div>
        </div>
        }
        <div className="w-[100%] bg-black h-[100vh] flex flex-col items-center justify-center">
          <Starfield
            starCount={10000}
            starColor={[255, 255, 255]}
            speedFactor={0.02}                                                                                    
            backgroundColor="black"
            />
          <div className="w-[100%] h-[100%]  flex items-center justify-center  flex-col ">
                <div  className=" rounded-3xl bg-opacity-15 flex flex-col items-center justify-center  w-[250px] h-[500px]">
                    <div  className="w-[80%] mb-2 flex items-center justify-center  rounded-[10px]  ">
                        <p className="font-bars4 font-bold text-6xl   text-white"> 1337Leets </p>
                    </div>
                        {/* <div className="text-red-500 text-sm font-bars2   w-[100%] h-[100px] flex items-center justify-center flex-col">
                        <span className="loading loading-spinner text-error"></span>
                        <p> site on maintenance </p>
                        <p> Try Later </p>
                    </div> */}
                     <div  onClick={() => (cally(token))} className=" cursor-pointer w-[225px] flex items-center 
                        justify-center h-[60px] border-solid rounded-md border-yellow-500  border-[2px] border-opacity-80 duration-300   hover:bg-yellow-500 hover:bg-opacity-20  hover:scale-105">
                            <div className="bg-black w-[10px] h-[10px] rounded-full border-solid border-[2px] border-yellow-400 mr-2"></div>
                            <p className="text-white font-semibold font-bars3"> Login </p>
                        </div>
                 </div>
          </div>
          <div className="w-full h-[100px] flex items-center flex-col justify-center ">
            <p className="text-slate-200 text-sm font-bars2"> By :  mmaghri  </p>
          </div>
        </div>
                            </>
      );
}
