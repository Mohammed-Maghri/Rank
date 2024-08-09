import React, {useContext} from "react";
import { IoIosClose } from "react-icons/io";
import { context } from "../context";

export default function About() {
    const {show, setShow} = useContext(context);
    return (
        <div  className="flex duration-1000 items-center mt-8 justify-center backdrop-blur-sm rounded-[25px] absolute w-[100%]   h-[91%]  z-50">
            <div style={{boxShadow: '0px 0px 20px black'}}  className="w-[90%] rounded-[20px] h-[500px]  max-w-[500px]  bg-white " >
              <div className=" flex items-center justify-start h-[35px] rounded-tl-[20px] rounded-tr-[20px] bg-slate-900">
                <div className="flex items-center justify-start  rounded-tl-[20px]  w-[100px] h-[100%]">
                    <div onClick={() => (setShow(false))} className="w-[15px] flex items-center justify-center rounded-[50%] h-[15px] ml-3 cursor-pointer bg-red-500">
                        <IoIosClose className="text-white duration-200 w-[13px] h-[13px] hover:w-[15px] hover:h-[15px]" />
                    </div>
                    <div  className="w-[15px] rounded-[50%] h-[15px] ml-3 bg-slate-500"></div>
                    <div className="w-[15px] rounded-[50%] h-[15px] ml-3 bg-slate-500"></div>
                </div>
              </div>
              <div  className=" w-[100%] flex-col bg-yellow-100 rounded-bl-[20px] flex items-center justify-start rounded-br-[20px] h-[35%]">
                <div className="w-[100%] h-[80%] border-[1px] flex items-center justify-start border-black">
                    <div className="border-black border-[1px] w-[100px]  h-[100px]"></div>
                </div>
                <div className="w-[80%] h-[20%] border-[1px] border-black"></div>
              </div>
              <div className=" w-[100%] rounded-br-[20px] rounded-bl-[20px] h-[58%]"></div>

            </div>
          </div>
    );
}