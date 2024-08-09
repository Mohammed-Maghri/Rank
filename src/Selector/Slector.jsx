import React, { useContext } from "react";
import { useState } from "react";
import "./Sekector.css";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { IoMdLogOut } from "react-icons/io";
import {functionVisible, Nav} from "../Nav/Nav";
import { FaChevronDown, FaLeaf } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { context } from "../context";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Cookies from "js-cookie";
export function Selector() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [ value, setValue ] = useState(false);
    const {pol, setPol} = useContext(context);
    const [addyear, setAddyear] = useState(2018);
    const [campus, setCampus] = useState(Cookies.get('campusId'));
    const [month, setMoth] = useState(1);
    const {pages, setPages} = useContext(context);
    const {loadingstate, setLoadingstate} = useContext(context);

    const {all, setAll} = useContext(context);
    const object = [{promo: 2018}, {promo: 2019}, {promo: 2020}, {promo: 2021}, {promo: 2022}, {promo: 2023}, {promo: 2024}];
  
    const functionGet =  (url) => {
      setPages(() => (0));
      Cookies.set('poolYear', addyear);
      Cookies.set('cursusId', pol);
      Cookies.set('month', month);
      Cookies.set('campusId', campus);
      setPages((prev) => (prev + 1));
      fetch(`${url}?campusId=${Cookies.get('campusId')}&cursusId=${Cookies.get('cursusId')}&pageNumber=${1}&poolYear=${Cookies.get('poolYear')}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('access_token')}`
        }
      }).then((res) => {
        return res.json();
      }).then((data) => {
        console.log(data);
        setAll(data);
        setLoadingstate(false);
      }).catch((err) => {
        console.log(err);
      })
    }
    return (
      <div className="w-[100%] h-[40px] flex items-center justify-center">
      <div className="flex items-center gap-[10px] justify-around min-w-[400px]w-[40%] h-[100%]">
        <div  onClick={() => (visible == false ? (setVisible(true) , setVisible2(false), setValue(false)) : (setVisible(false)))} className="w-[120px] h-[100%]  rounded-[20px]  flex items-center justify-center text-sm font-bars2 text-white  cursor-pointer  
        duration-300 gap-1 border-solid border-white border-[2px] border-opacity-20  font-extrabold duration-700 hover:bg-yellow-500 hover:border-opacity-100"> <p> Campus </p> <FaChevronDown className="w-[10px] h-[10px]" />
        {visible &&
          <div style={{boxShadow : '0px 0px 3px black'}} className="w-[100px] h-[100px] flex items-center  flex-col justify-center bg-slate-50 absolute z-20 top-[125px] rounded-[10px]">
            <div onClick={() => (setCampus(16))} className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
              <p className="text-black"> Khouribga </p>
            </div>
            <div onClick={() => (setCampus(21))}  className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
              <p className="text-black"> Bengrir </p>
            </div>
            <div onClick={() => (setCampus(55))} className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
              <p className="text-black"> Tetouan </p>
            </div>
          </div>
          }
        </div>
        <div  className="w-[110px] h-[100%]  rounded-[20px]  flex items-center justify-center text-sm font-bars2 text-white  cursor-pointer  
        duration-300 gap-1 border-solid border-white border-[2px] font-extrabold border-opacity-20  duration-700 hover:bg-yellow-500 hover:border-opacity-100"> <p  onClick={() => (value == false ? (setValue(true), setVisible(false), setVisible2(false)) : setValue(false))}> Promo </p> 
        <FaChevronDown onClick={() => (value == false ? (setValue(true), setVisible(false), setVisible2(false)) : setValue(false))} className="w-[10px] h-[10px]" />
          {
            value &&
            <div  style={{boxShadow : '0px 0px 3px black'}}  className="w-[100px]  overflow-auto flex items-center  flex-col justify-center bg-white absolute z-20 top-[125px] rounded-[10px]">
              
              {pol == 21 ? (
                    <div  className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer ">
                       <div className="w-[100%] flex-row flex items-center justify-center  ">
                    <div onClick={() => (addyear < 2018 ? (setAddyear(2024)) : (setAddyear(addyear + 1)))} className="w-[30%] cursor-pointer h-[100%] flex items-center justify-center">
                        <FaChevronLeft className="text-black"/>
                    </div>
                    <div className="w-[50%] text-black flex items-center justify-center h-[100%]">
                      <p>{addyear}</p>
                    </div>
                    <div onClick={() => ((setAddyear(addyear - 1)))} className="w-[30%] cursor-pointer h-[100%] flex items-center justify-center">
                        <FaChevronRight className="text-black"/>
                    </div>
                  </div>
                  </div>
              ):(
                <div className=" w-[95%] felx items-center justify-start mt-1 rounded-[10px]">
                  <div className="w-[100%] flex-row flex items-center justify-center  ">
                    <div onClick={() => (setAddyear(addyear + 1))} className="w-[30%] cursor-pointer h-[100%] flex items-center justify-center">
                        <FaChevronLeft className="text-black"/>
                    </div>
                    <div className="w-[50%] text-black flex items-center justify-center h-[100%]">
                      <p>{addyear}</p>
                    </div>
                    <div onClick={() => (addyear < 2018 ? (setAddyear(2024)) : (setAddyear(addyear - 1)))} className="w-[30%] cursor-pointer h-[100%] flex items-center justify-center">
                        <FaChevronRight className="text-black"/>
                    </div>
                  </div>
                  <div className="w-[100%] flex-row flex items-center justify-center h-[30px]">
                    <div onClick={() => (month == 0 ? (setMoth(12)) : (setMoth(month - 1)))} className="w-[30%] cursor-pointer h-[100%] flex items-center justify-center">
                        <FaChevronLeft className="text-black"/>
                    </div>
                    <div className="w-[40%] text-black flex items-center justify-center h-[100%]">
                      <p>{month}</p>
                    </div>
                    <div onClick={() => (month <= 12 ? (setMoth(0)) : (setMoth(month + 1)))} className="w-[30%] cursor-pointer h-[100%] flex items-center justify-center">
                        <FaChevronRight className="text-black"/>
                    </div>
                  </div>
                </div>
              )
              }
          </div>
          }
        </div>
        <div   onClick={() => (visible2 == false ? (setVisible2(true), setValue(false), setVisible(false)) : (setVisible2(false)))}  className="w-[110px] h-[100%]  rounded-[20px]  flex items-center justify-center text-sm font-bars2 text-white  cursor-pointer  
        duration-300 gap-1 border-solid border-white border-[2px] border-opacity-20 font-extrabold duration-700 hover:bg-yellow-500 hover:border-opacity-100 "> <p> Cursus </p> <FaChevronDown className="w-[10px] h-[10px]" />
          {visible2 &&
          <div style={{boxShadow : '0px 0px 3px black'}}  className="w-[100px] h-[70px] flex items-center  flex-col justify-center bg-white absolute z-20 top-[125px] rounded-[10px]">
            <div onClick={() => (setPol(9))}  className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
              <p  className="text-black"> Pool </p>
            </div>
            <div  onClick={() => (setPol(21))}  className="w-[90%] flex items-center justify-center h-[30px] rounded-[5px] duration-300 cursor-pointer hover:bg-slate-300 ">
              <p className="text-black"> Cursus </p>
            </div>
          </div>
          }
        </div>
      </div>
      <div onClick={() => (setLoadingstate(true), functionGet("https://leets1337-3f387c570577.herokuapp.com/api/v1/home"))} className="ml-4 w-[30px] h-[30px] flex items-center justify-center  border-solid border-white duration-200 bg-slate-900 rounded-[10px] border-[2px] cursor-pointer border-opacity-20 hover:scale-105">
          <FaSearch   className="w-[15px] h-[15px] text-white" />
          </div>
    </div>
    );
}