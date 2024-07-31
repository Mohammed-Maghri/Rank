import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { useState } from "react";

export const functionVisible = (thevis, setthe) => {
    setthe(!thevis);
}
export function Nav() {
    const object = [{bars: 'Rank'}, {bars: 'Soon'}, {bars: 'Soon'}];
    const [visible, setVisible] = useState(false);
    const obj = [{year : 2013}, {year : 2014}, {year : 2015}, {year : 2016}, {year : 2017}, 
        {year : 2018}, {year : 2019}, {year : 2020}, {year : 2021}, {year : 2022}, {year : 2023}, {year : 2024}];
    return ( 
        <div className="flex items-center justify-ithems-center h-[80px] gap-[5px] max-w-[1800px]  w-[100%]">
        <div className="flex items-center  justify-center rounded-[5px] h-[95%] w-[25%]">
          <div className="flex items-center justify-center w-[50px] h-[50px] ml-[10px]  bg-yellow-300 rounded-[10px]">
            <IoSettings className=" text-black  w-[34px] h-[35px] duration-200 cursor-pointer hover:scale-105" />
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center h-[95%]  rounded-[5px] h-[95%]">
          <div style={{boxShadow: '0px 0px 10px yellow'}} className="flex items-center xs:gap-1 gap-5 justify-center duration-300 lg:w-[600px] 
          sm:w-[400px] xs:w-[200px] custom-yellow h-[60%] bg-yellow-300 rounded-[30px]">
            {object.map((item, index) => (
              <div className="font-bars text-lg font-medium xs:text-sm flex items-center cursor-pointer justify-center w-[150px] h-[90%] duration-300 hover:scale-110">
                <p key={index}> {item.bars} </p>
              </div>
              ))
            }

          </div>
        </div>
        <div className=" flex items-center justify-center border-solid flex-row rounded-[5px] h-[95%] w-[25%]">
          <div style={{boxShadow: '0px 0px 5px yellow'}}  className="cursor-pointer w-[50px] h-[50px] border-solid border-white border-[2px] rounded-[50%]">
            <img src={pic} onClick={() => (functionVisible(visible, setVisible))} className="rounded-[50%]" />
            {visible &&
                <div className="absolute  w-[100px] h-[30px] rounded-[20px] bg-white"></div>
            }
          </div>
        </div>
      </div>
    );
}