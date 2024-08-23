import React , {useContext} from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { useState } from "react";
import {context } from "../context";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import taj from "../clips/taj.jpeg";
import pas from "../clips/pass.png";
import { Dropdown } from "../Dropdown/Dropdown";
import { FaUserSecret } from "react-icons/fa";

export const functionVisible = (thevis, setthe) => {
    setthe(!thevis);
}
export function Nav() {
  const {logs, setLogs} = useContext(context);
  const {all, setAll} = useContext(context);
  const {enable, setEnable} = useContext(context);
	const {prf, setPrf} = useContext(context);
  const [thetrue, seTrue] = useState(false);

  const navigate =  useNavigate();
  const functionLogout = () => {
    Cookies.remove('access_token');
    console.log("Logout");
    window.location.href = "https://1337leets.com";
    setLogs(false);
  }
  const functionClick = ((index) => {
    index == 0 ? (navigate("/home")) : index == 1 ? (window.location.href = "https://www.1337leets.com/calculator"):  index == 2 ? (window.location.href = "https://www.1337leets.com/model") : (index == 3 ? (window.location.href = "https://www.1337leets.com/PeerFinder") : (<></>));
  })

  const object = [{bars: 'Rank'}, {bars: 'Xp-Cal'}, {bars: 'Ai'}, {bars: 'Peer-Fi'}];
  const [visible, setVisible] = useState(false);
  const obj = [{year : 2013}, {year : 2014}, {year : 2015}, {year : 2016}, {year : 2017}, 
    {year : 2018}, {year : 2019}, {year : 2020}, {year : 2021}, {year : 2022}, {year : 2023}, {year : 2024}];
    const functioLOGOUT = (seter) => {
      seter(false);
      setEnable(false);
      navigate("/");
    }
    return ( 
      <div className="flex items-center justify-ithems-center h-[80px] gap-[5px] max-w-[1800px] z-50  w-[100%]">
      <div className="flex items-center  justify-center rounded-[5px] h-[95%] w-[25%] flex-col">
        <div onClick={() => (thetrue == false ? (seTrue(true)) : (seTrue(false)))} className="flex items-center justify-center w-[50px] h-[50px] ml-[10px] 
         bg-yellow-200 border-solid border-yellow-500 border-[3px] rounded-[10px]">
          <FaUserSecret  className=" text-black  w-[20px] h-[20px] duration-200 cursor-pointer hover:scale-105" />
        </div>
        {thetrue &&
          <Dropdown />
        }
      </div>
      <div className="w-[50%] flex items-center justify-center h-[95%]  rounded-[5px] ">
        <div style={{boxShadow: '0px 0px 10px yellow'}} className="flex items-center xs:gap-1 gap-5 justify-center duration-300 lg:w-[800px] 
        sm:w-[400px] xs:w-[220px] custom-yellow h-[60%] bg-yellow-200 border-solid border-yellow-500 border-[3px] rounded-[15px]">
          {object.map((item, index) => (
            <div key={index} onClick={() => (functionClick(index))} className="font-bars2  text-lg text-black font-bold xs:text-sm flex items-center cursor-pointer justify-center w-[150px] h-[90%] duration-300 hover:scale-110">
              <p key={index}> {item.bars} </p>
            </div>
            ))
          }

        </div>
      </div>
      <div className=" flex items-center justify-center flex-row rounded-[5px] h-[95%] w-[25%]">
        <div style={{boxShadow: '0px 0px 10px yellow'}}  className="cursor-pointer w-[50px] h-[50px] border-solid border-yellow-200  border-[2px] rounded-[50%]">
          <img src={localStorage.getItem('profileImage')} onClick={() => (functionVisible(visible, setVisible))} className="rounded-[50%] h-[100%] w-[100%] object-cover" />
        </div>
          {visible &&
              <div onClick={() => functionLogout()} className="absolute cursor-pointer flex top-[66px] font-bars2 items-center justify-center  w-[100px] h-[30px] rounded-[20px] bg-white duration-300 hover:bg-slate-300">
                <p  className="text-black font-extrabold"> Logout </p>
              </div>
          }
      </div>
    </div>
    );
}