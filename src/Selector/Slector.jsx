import React from "react";
import { useState } from "react";
import "./Sekector.css";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { IoMdLogOut } from "react-icons/io";
import {functionVisible, Nav} from "../Nav/Nav";
import { FaChevronDown } from "react-icons/fa";

export function Selector() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    return (
        <div className="w-[100%] h-[40px] flex items-center justify-center">
        <div className="flex items-center gap-[10px] justify-around min-w-[400px]w-[40%] h-[100%]">
          <div onClick={() => (functionVisible(visible, setVisible))} className="w-[100px] h-[100%]  rounded-[5px] bg-gray-900 flex items-center justify-center text-sm font-bars2 text-white cursor-pointer  
          duration-300 gap-1 hover:bg-gray-800"> <p> Campus </p> <FaChevronDown className="w-[10px] h-[10px]" />
          {visible &&
            <div className="w-[100px] h-[100px] flex items-center  flex-col justify-center bg-white absolute z-20 top-[125px] rounded-[10px]">
              <div className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
                <p className="text-black"> Khouribga </p>
              </div>
              <div className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
                <p className="text-black"> Bengrir </p>
              </div>
              <div className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
                <p className="text-black"> Tetouan </p>
              </div>
            </div>
            }
          </div>
          <div className="w-[100px] h-[100%]  rounded-[5px] bg-gray-900 flex items-center justify-center text-sm font-bars2 text-white cursor-pointer  
          duration-300 gap-1 hover:bg-gray-800"> <p> Promo </p> <FaChevronDown className="w-[10px] h-[10px]" /> </div>
          <div onClick={() => (functionVisible(visible2, setVisible2))}  className="w-[100px] h-[100%]  rounded-[5px] bg-gray-900 flex items-center justify-center text-sm font-bars2 text-white cursor-pointer  
          duration-300 gap-1 hover:bg-gray-800"> <p> Cursus </p> <FaChevronDown className="w-[10px] h-[10px]" />
            {visible2 &&
            <div className="w-[100px] h-[70px] flex items-center  flex-col justify-center bg-white absolute z-20 top-[125px] rounded-[10px]">
              <div className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
                <p className="text-black"> Khouribga </p>
              </div>
              <div className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
                <p className="text-black"> Bengrir </p>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    );
}