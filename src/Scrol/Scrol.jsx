import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { IoMdLogOut } from "react-icons/io";
import {functionVisible, Nav} from "../Nav/Nav";
import { FaChevronDown } from "react-icons/fa";
import { Selector } from "../Selector/Slector";
import taj from "../clips/crown.png";
import redirect from "../clips/maximize.png";
import { context } from "../context";
import { PiInstagramLogoFill } from "react-icons/pi";
import "./Scrol.css";

export default function Scrol({objectvalue}) {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [value, setValue] = useState(80);
    const {all, setAll} = useContext(context);
  const functionClick = (path) => {
    // window.open(path, '_blank');
    console.log(path);
  };

  console.log(all);
  console.log('Is all an array?', Array.isArray(all)); // Should log true if all is an array
    return(
        <div className="flex items-center justify-center border-solid overflow-auto w-[100%] h-[100%] mt-[10px] rounded-[10px]">
        <div className="border-solid flex items-center justify-start flex-col duration-300 gap-[15px] lg:w-[70%]   md:w-[70%] h-[100%] max-w-[800px] rounded-[10px] xs:w-[100%]">
        <div className=" border-solid border-white border-white  flex items-center justify-center gap-[10px] flex-col  w-[100%] h-[50px] "></div>

        {
          all.slice(1).map((item, index) => (
            <div  key={index} style={{ backgroundColor : `transparent`}} className=" bg-gray-400 flex items-center justify-start w-[100%] max-w-[800px] h-[135px]  rounded-[20px] duration-500 cursor-pointer">
              {/* <div className=" absolute w-[70px] h-[70px] border-solid z-100    top-[150px]">
                <img style={{transform: "rotate(-45deg)"}} src={taj}/>
              </div> */}
            <div style={{borderRight : '0px'}} className=" ml-[5px] flex items-center border-solid border-yellow-600 border-[3px] justify-center   xs:w-[118px] xs:min-w-[118px] rounded-l-[20px] md:w-[118px] md:min-w-[118px] h-[120]">
              <img  className="w-[97%] h-[111px] min-h-[105px] rounded-l-[20px]" src={item.profileImage}/>
            </div>
            <div style={{boxShadow: '0px 0px 5px black'}} className="flex pan items-center  flex-col justify-center h-[115px] max-h-[130px] rounded-r-[10px] rounded-l-[2px] xs:w-[260px] xm:w-[520px] sm:w-[660px] md:w-[600px] lg:w-[670px] mr-[5px] bg-white">
              <div className="w-[90%] h-[100%] rounded-[10px] flex   items-center justify-start flex-row">
                <div className=" xs:w-[70%] xf:w-[100%] sm:w-[70%] md:w-[70%] h-[100%]">
                  <div  className="w-[100%] h-[60%] flex items-start justify-center flex-col" > <p className="font-bars3 text-black font-extrabold"> {item.login} </p>
                  <p  className="font-bars3 text-[15px] text-black font-normal"> test </p> </div>
                  <div className="w-[100%] gap-[10px] h-[30%] flex items-center justify-start flex-row" >
                    <p className="text-black font-bold "> Lvl : </p>
                    <div  className="w-[30px] border-solid border-[2px] border-black flex items-center justify-center h-[30px]  rounded-[50%]">
                      <p className="text-black font-extrabold font-bars3"> {item.level}</p>
                    </div>
                  </div>
                </div>
                <div className="flex  flex-col  items-center justify-around  md:w-[30%] xf:w-[30%] xm:w-[30%] xs:w-[30%] sm:w-[30%]  duration-300 lg:w-[30%] h-[100%]">
                  <div className="w-[29px] flex items-center bg-yellow-300 justify-center  h-[17px] duration-200 cursor-pointer rounded-[5px] hover:scale-105">
                    <p  className="text-black font-bars3 font-extrabold"> {index} </p>
                  </div>
                  <div className="border-solid gap-1 w-[100%] h-[30px] flex items-center justify-center ">
                    {item.location != "unavailable" ?(
                    <>
                      <div className="w-[10px] h-[10px] rounded-[50%] border-solid border- bg-green-500 border-[2px]"></div>
                    <p className="text-black font-bars2 font-medium text-[15px]">{item.location}</p>
                    </>) :(
                      <>
                       <div className="w-[10px] h-[10px] rounded-[50%] border-solid border- bg-red-500 border-[2px]"></div>
                       <p className="text-black font-bars2 font-medium text-[15px]">unavailable</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[90%] h-[20%] rounded-[10px] flex flex-row items-center justify-start">
                <div className="flex items-center justify-start w-[80%] h-[100%]">
                  <div  className="border-solid w-[100%] mb-[4px] border-black border-[2px] flex items-center justify-start rounded-[20px] h-[70%]">
                    <div style={{width : `${item.level}%`}} className="bg-yellow-400 rounded-[20px]  h-[100%]"> </div>
                  </div>
                </div>
                <div className="w-[20%] max-w-[70px] ml-[10px] mb-[5px] flex items-center justify-center h-[100px]">
                  <p className="text-2xl font-bars3 text-black font-black "> {item.level + "%"} </p>
                </div>
              </div>
            </div>
          </div>
          ))
        }
        {/* <div></div> */}
        </div>
        </div>
    );
}