import React from "react";
import { useState } from "react";
import "./Sekector.css";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { IoMdLogOut } from "react-icons/io";
import {functionVisible, Nav} from "../Nav/Nav";
import { FaChevronDown, FaLeaf } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export function Selector() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [ value, setValue ] = useState(false);
    const [pool , setPool] = useState(false);

    const object = [{promo: 2018}, {promo: 2019}, {promo: 2020}, {promo: 2021}, {promo: 2022}, {promo: 2023}, {promo: 2024}];
    return (
      <div className="w-[100%] h-[40px] flex items-center justify-center">
      <div className="flex items-center gap-[10px] justify-around min-w-[400px]w-[40%] h-[100%]">
        <div  onClick={() => (visible == false ? (setVisible(true) , setVisible2(false), setValue(false)) : (setVisible(false)))} className="w-[120px] h-[100%]  rounded-[20px]  flex items-center justify-center text-sm font-bars2 text-white  cursor-pointer  
        duration-300 gap-1 border-solid border-white border-[2px] border-opacity-20  font-extrabold duration-700 hover:bg-yellow-500 hover:border-opacity-100"> <p> Campus </p> <FaChevronDown className="w-[10px] h-[10px]" />
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
        <div  onClick={() => (value == false ? (setValue(true), setVisible(false), setVisible2(false)) : setValue(false))} className="w-[110px] h-[100%]  rounded-[20px]  flex items-center justify-center text-sm font-bars2 text-white  cursor-pointer  
        duration-300 gap-1 border-solid border-white border-[2px] font-extrabold border-opacity-20  duration-700 hover:bg-yellow-500 hover:border-opacity-100"> <p> Promo </p> <FaChevronDown className="w-[10px] h-[10px]" />
          {
            value &&
            <div  style={{boxShadow : '0px 0px 3px black'}}  className="w-[100px] h-[150px] overflow-auto flex items-center  flex-col justify-center bg-white absolute z-20 top-[125px] rounded-[10px]">
              {object.map((item, index) => (
                <div key={index}  className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
                  <p className="text-black"> {item.promo} </p>
                  </div>
                ))
                  }
          </div>
          }
        </div>
        <div   onClick={() => (visible2 == false ? (setVisible2(true), setValue(false), setVisible(false)) : (setVisible2(false)))}  className="w-[110px] h-[100%]  rounded-[20px]  flex items-center justify-center text-sm font-bars2 text-white  cursor-pointer  
        duration-300 gap-1 border-solid border-white border-[2px] border-opacity-20 font-extrabold duration-700 hover:bg-yellow-500 hover:border-opacity-100 "> <p> Cursus </p> <FaChevronDown className="w-[10px] h-[10px]" />
          {visible2 &&
          <div style={{boxShadow : '0px 0px 3px black'}}  className="w-[100px] h-[70px] flex items-center  flex-col justify-center bg-white absolute z-20 top-[125px] rounded-[10px]">
            <div   className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
              <p  className="text-black"> Pool </p>
            </div>
            <div className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
              <p className="text-black"> Cursus </p>
            </div>
          </div>
          }
        </div>
        <div className="w-[50px] h-[50px] flex items-center justify-center border-solid border-white border-[2px] border-opacity-100 ">
          <FaSearch className="w-[40px] h-[40px]" />
          </div>
      </div>
    </div>
    );
}