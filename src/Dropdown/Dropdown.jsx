import React from "react";
import pic from "../clips/mmaghri.jpg";
import pas from "../clips/pass.png";
import { useState } from "react";

import "../Nav/Nav.css";

const ob = [{}];

export function Dropdown(name, pic) {
    const [vip, setVip] = useState(false);
    return (
        <div className=" absolute flex items-start justify-end top-[65px] w-[400px] h-[200px] ">
          <div className="flex items-start justify-start bg-black flex-col z-50 w-[55%] rounded-[10px] h-[100%]">
            <div className="w-[100%] h-[40px] rounded-[10px] flex items-center justify-center flex-row  border-solid bg-slate-900">
              <div onClick={() => (setVip(false))} className="w-[100%] h-[100%] flex items-center justify-center font-bars2 text-white gap-[5px] font-bold duration-200 text-sm hover:bg-slate-800 cursor-pointer rounded-[10px]"><p> Vip-Option's </p> 
              <div  className="flex items-center justify-center"> <img className="w-[15px] h-[15px]" src={pas} /></div> </div>
            </div>
            <div className="h-[159px] w-[100%] flex items-center  p-[10px]  justify-center">
                {!vip &&
              <div className="w-[100%] h-[100%] flex items-center overflow-y-auto gap-[2px] flex-col  justify-start">
                {
                    ob[0].name == "mmaghri" ? (
                        ob.map((item, index) => (
                            <div key={index} className="w-[80%] p-[2px] rounded-[10px] duration-200 cursor-pointer hover:scale-105 bg-yellow-400 h-[25px]  flex items-center justify-center flex-row ">
                            <div className="w-[30%]  flex items-center justify-center  h-[100%]">
                            <div className="w-[20px] h-[20px] rounded-[50%]">
                            <img src={item.pic} className="w-[100%] h-[100%] rounded-[50%] object-cover" />
                            </div>
                            </div>
                            <div className="w-[70%] flex items-center justify-start text-sm text-black font-bars2 h-[100%]">
                            <p> {item.name}</p>
                            </div>
                            </div>
                        ))
                ):(
                    <div className="w-[100%] flex-col h-[100%] flex font-bars2 text-sm items-center justify-center">
                    <p> Sorry ! The Vip Option only</p>
                    <p> Accessible</p>
                    <p> To the Owners Of the</p>
                    <p> VIP-PASS </p>
                    <img className="w-[22px] h-[22px]" src={pas} />
                    </div>
                )
            }
              </div>
                }
                {
                    vip &&
                    <div className="w-[100%] h-[100%] flex items-center justify-center">

                    </div>
                }
            </div>
          </div>
        </div>
    );
}