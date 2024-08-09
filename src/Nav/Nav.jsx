import React , {useContext} from "react";

import { IoMdLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { useState } from "react";
import {context } from "../context";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import taj from "../clips/taj.jpeg";
export const functionVisible = (thevis, setthe) => {
    setthe(!thevis);
}
export function Nav() {
  const {logs, setLogs} = useContext(context);
  const {all, setAll} = useContext(context);
  const {enable, setEnable} = useContext(context);

  const navigate =  useNavigate();
  const functionLogout = () => {
    setLogs(false);
    window.location.href = "/";
    Cookies.remove('access_token');
    Cookies.remove('campusId');
    Cookies.remove('cursusId');
    Cookies.remove('poolYear');
    Cookies.remove('month');
    console.log("Logout");
  }
  const object = [{bars: 'Rank'}, {bars: 'Soon'}, {bars: 'Soon'}];
  const [visible, setVisible] = useState(false);
  const obj = [{year : 2013}, {year : 2014}, {year : 2015}, {year : 2016}, {year : 2017}, 
    {year : 2018}, {year : 2019}, {year : 2020}, {year : 2021}, {year : 2022}, {year : 2023}, {year : 2024}];
    const functioLOGOUT = (seter) => {
      seter(false);
      setEnable(false);
      navigate("/");
    }
    return ( 
      <div className="flex items-center justify-ithems-center h-[80px] gap-[5px] max-w-[1800px]  w-[100%]">
      <div className="flex items-center  justify-center rounded-[5px] h-[95%] w-[25%]">
        <div className="flex items-center justify-center w-[50px] h-[50px] ml-[10px]  bg-yellow-200 border-solid border-yellow-500 border-[3px] rounded-[10px]">
          <IoSettings className=" text-black  w-[34px] h-[35px] duration-200 cursor-pointer hover:scale-105" />
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-center h-[95%]  rounded-[5px] h-[95%]">
        <div style={{boxShadow: '0px 0px 10px yellow'}} className="flex items-center xs:gap-1 gap-5 justify-center duration-300 lg:w-[800px] 
        sm:w-[400px] xs:w-[200px] custom-yellow h-[60%] bg-yellow-200 border-solid border-yellow-500 border-[3px] rounded-[15px]">
          {object.map((item, index) => (
            <div className="font-bars2  text-lg text-black font-bold xs:text-sm flex items-center cursor-pointer justify-center w-[150px] h-[90%] duration-300 hover:scale-110">
              <p key={index}> {item.bars} </p>
            </div>
            ))
          }

        </div>
      </div>
      <div className=" flex items-center justify-center flex-row rounded-[5px] h-[95%] w-[25%]">
        <div style={{boxShadow: '0px 0px 5px yellow'}}  className="cursor-pointer w-[50px] h-[50px] border-solid border-white border-[2px] rounded-[50%]">
          <img src={taj} onClick={() => (functionVisible(visible, setVisible))} className="rounded-[50%] h-[100%] w-[100%] object-cover" />
        </div>
          {visible &&
              <div onClick={() => functionLogout} className="absolute cursor-pointer flex top-[60px] font-bars2 items-center justify-center  w-[100px] h-[30px] rounded-[20px] bg-white duration-300 hover:bg-slate-300">
                <p  className="text-black font-extrabold"> Logout </p>
              </div>
          }
      </div>
    </div>
    );
}