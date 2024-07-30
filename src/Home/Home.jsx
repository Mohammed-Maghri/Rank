import React from "react";
import "./Home.css";

export function Home() {
  return (
    <div className="flex ithems-center w-[100%] justify-center h-screen bg-black">
      <div className="flex items-center justify-ithems-center h-[80px]   w-[100%]">
        <div className="border-solid border-white  border-[1px] rounded-[5px] h-[95%] w-[25%]"> </div>
        <div className="w-[50%] flex items-center justify-center h-[95%]  rounded-[5px] h-[95%]">
          <div className="w-[80%] bg-yellow-400 h-[70%] shadow-yello rounded-[30px]"></div>
        </div>
        <div className="border-solid border-white  border-[1px] rounded-[5px] h-[95%] w-[25%]"> </div>
      </div>
    </div>
  );
}