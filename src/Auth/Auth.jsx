import React , {useContext} from "react";
import { useNavigate } from "react-router-dom";
import Starfield from 'react-starfield';
import me from "../clips/this.png"
import lou from "../clips/loua.png"
import Cookies from "js-cookie";
import { context } from "../context";
import { BsFillLightningFill } from "react-icons/bs";
import meme from "../clips/memem.jpeg";

export default function Auth() {
    const navigate = useNavigate();
    const {enable, setEnable} = useContext(context);
    const api = "https://leets1337-test-af8d38d88919.herokuapp.com/api/v1/authenticate";
    const functionNavigate = (path) => {
        window.open(path, '_blank');
    }
    const cally = (thepath) => {
        setTimeout(() => {
            window.location.href = thepath;
        }, 1000);
    }


    Cookies.remove('access_token');
    Cookies.remove('campusId');
    Cookies.remove('cursusId');
    Cookies.remove('poolYear');
    Cookies.remove('month');
    Cookies.remove('log');
    localStorage.setItem('pics', me);
    localStorage.setItem('lou', lou);
    const token = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-6734cea9d925c671f887c117afed7807dfa8e7d9796b1f68084b6b9d1db6bb25&redirect_uri=https%3A%2F%2Fwww.1337leets.com%2Fhome&response_type=code";
    return (
        <div className="w-[100%] bg-black h-[100vh] flex items-center justify-center">
          <Starfield
            starCount={10000}
            starColor={[255, 255, 0]}
            speedFactor={0.05}                                                                                    
            backgroundColor="black"
          />
          <div className="w-[100%] h-[100%] 
          flex items-center justify-start  flex-col absolute z-50">
            <div className="  w-[100%] flex items-start justify-end h-[10%]">
                <div style={{boxShadow : "0px 0px 10px rgb(255, 234, 0)"}} className=" w-[100px] h-[30px] flex-row items-center justify-center flex rounded-[10px] bg-yellow-400 m-[20px]">
                    <div className="w-[70%] font-medium text-white text-sm font-bars2 flex items-center  justify-center h-[100%]">
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
                    <div style={{boxShadow: '0px 0px 5px red'}} onClick={() => (cally(token))} className=" cursor-pointer w-[200px] flex items-center 
                     justify-center h-[60px] border-solid rounded-[20px] border-yellow-400 border-[2px] duration-300 hover:scale-105">
                        <p className="text-yellow-400 font-bars3"> Login </p>
                    </div>
                    <div className="flex flex-col items-center justify-center  h-[100px]">
                        <p className="font-bars2 text-white font-black text-xs">Welcome to the School Rankings Board</p>
                        <p className="text-white text-[15px] font-bars3"> By : mmaghri && mlouazir </p>
                    </div>
                    <div className="flex items-center justify-around w-[200px] h-[50px]">
                        <div  className="border-solid border-white border-[1px] cursor-pointer w-[50px] h-[50px] rounded-[50%] duration-200 hover:scale-110" onClick={() => functionNavigate('https://github.com/MohammedMaghri')}> <img className="h-[100%] w-[100%] object-cover rounded-[50%]" src={meme}/> </div>
                        <div className="border-solid border-white border-[1px] cursor-pointer w-[50px] h-[50px] rounded-[50%] duration-200 hover:scale-110" onClick={() => functionNavigate('https://profile.intra.42.fr/users/mlouazir')} > <img className="h-[100%] w-[100%] rounded-[50%]" src={localStorage.getItem('lou')}/> </div>
                    </div>
                </div>
             </div>
             <div className="w-[100%] flex items-center  justify-end flex-col h-[20%] ">
            <p className="font-bars2 text-[8px] text-white"> We are still in the process of approving this website. If you encounter any issues or have </p>
            <p className="font-bars2 text-[8px] text-white "> any improvement suggestions , please contact me on Discord : </p>
            <p className="text-[10px] font-extrabold  font-bars2 text-white"> tr1ple.x.x.x </p>
          </div>
          </div>
        </div>
      );
}