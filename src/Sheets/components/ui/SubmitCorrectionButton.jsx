import React, { useState } from "react";
import { LiaCheckCircleSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";

export default function SubmitCorrectionButton() {
  const [clickIthem, setClickIthem] = useState("");
  return (
    <div className="flex items-center gap-3 justify-center flex-row w-[100%] my-4">
      <div
        onClick={() => {
          setClickIthem("green");
        }}
        className={`flex items-center gap-1 rounded-sm justify-center  duration-200 w-[45%] h-[45px] ${clickIthem === "green" ? "bg-green-400" : "bg-green-100"} cursor-pointer`}
      >
        <LiaCheckCircleSolid
          className={`${clickIthem === "green" ? "text-white" : "text-green-400"}`}
          size={20}
        />
        <p
          className={`font-bars2 ${clickIthem === "green" ? "text-white" : "text-green-400"} font-semibold`}
        >
          Yes
        </p>
      </div>
      <div
        onClick={() => {
          setClickIthem("red");
        }}
        className={`flex gap-1 items-center rounded-sm  cursor-pointer duration-300 justify-center ${clickIthem === "red" ? "bg-red-500" : "bg-red-100"} w-[45%] h-[45px]`}
      >
        <RxCross1
          className={`${clickIthem === "red" ? "text-white" : "text-red-500"}`}
        />
        <p
          className={`font-bars2 ${clickIthem === "red" ? "text-white" : "text-red-500"} font-semibold`}
        >
          No
        </p>
      </div>
    </div>
  );
}
