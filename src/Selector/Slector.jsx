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
    const [ value, setValue ] = useState(false);
    const object = [{promo : 2013} , {promo : 2014}, {promo : 2015}, {promo : 2016}, {promo: 2017}, {promo: 2018}, 
      {promo: 2019}, {promo: 2020}, {promo: 2021}, {promo: 2022}, {promo: 2023}, {promo: 2024}];
    return (
        <div className="w-[100%] h-[40px] flex items-center justify-center">
        <div className="flex items-center gap-[10px] justify-around min-w-[400px]w-[40%] h-[100%]">
          <div onClick={() => (functionVisible(visible, setVisible))} className="w-[100px] h-[100%]  rounded-[5px] bg-gray-900 flex items-center justify-center text-sm font-bars2 text-white cursor-pointer  
          duration-300 gap-1 hover:bg-gray-800"> <p> Campus </p> <FaChevronDown className="w-[10px] h-[10px]" />
          {visible &&
            <div style={{boxShadow : '0px 0px 3px black'}} className="w-[100px] h-[100px] flex items-center  flex-col justify-center bg-slate-50 absolute z-20 top-[125px] rounded-[10px]">
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
          <div onClick={() => (functionVisible(value, setValue))} className="w-[100px] h-[100%]  rounded-[5px] bg-gray-900 flex items-center justify-center text-sm font-bars2 text-white cursor-pointer  
          duration-300 gap-1 hover:bg-gray-800"> <p> Promo </p> <FaChevronDown className="w-[10px] h-[10px]" />
            {
              value &&
              <div style={{boxShadow : '0px 0px 3px black'}}  className="w-[100px] h-[150px] overflow-auto flex items-center  flex-col justify-center bg-white absolute z-20 top-[125px] rounded-[10px]">
                {object.map((item, index) => (
                  <div key={index}  className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
                    <p className="text-black"> {item.promo} </p>
                    </div>
                  ))
                    }
            </div>
            }
          </div>
          <div  onClick={() => (functionVisible(visible2, setVisible2))}  className="w-[100px] h-[100%]  rounded-[5px] bg-gray-900 flex items-center justify-center text-sm font-bars2 text-white cursor-pointer  
          duration-300 gap-1 hover:bg-gray-800"> <p> Cursus </p> <FaChevronDown className="w-[10px] h-[10px]" />
            {visible2 &&
            <div style={{boxShadow : '0px 0px 3px black'}}  className="w-[100px] h-[70px] flex items-center  flex-col justify-center bg-white absolute z-20 top-[125px] rounded-[10px]">
              <div className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
                <p className="text-black"> Pool </p>
              </div>
              <div className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
                <p className="text-black"> Cursus </p>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    );
}