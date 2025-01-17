import React, { useState } from "react";
import { Nav } from "../Nav/Nav";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import aprov from "../clips/approuve.png";
import SubmitFlags from "./components/SubmitFlgs";
import SubmitCorrection from "./components/ui/SubmitCorrection";
import SheetHeader from "./components/SheetHeader";

import "./sheets.css";

export function Sheets() {
  const [clicked, setClicked] = useState(false);
  const [subjects, setSubject] = useState([
    { name: "ft_irc", date: "15-01-2025" },
    { name: "webserve", date: "15-01-2025" },
    { name: "ft_trencendese", date: "15-01-2025" },
    { name: "ft_irc", date: "15-01-2025" },
  ]);
  return (
    <div className=" bg-black w-[100%] flex items-center justify-start flex-col">
      <Nav />
      {clicked && (
        <div className="container mx-auto w-[100%] max-w-[1130px] flex items-center justify-center bg-white rounded-md">
          <div className="w-[90%] min-w-[350px]  h-[100%] max-w-[900px] flex flex-col items-center gap-2">
            <SheetHeader
              projectName={"Libft"}
              numEvaluation={2}
              SubjectLink="https://cdn.intra.42.fr/pdf/pdf/147564/en.subject.pdf"
            />
            <SubmitCorrection />
            <SubmitFlags />
          </div>
        </div>
      )}
      {!clicked && (
        <div className="container flex-col flex items-center justify-start w-[80%] h-[100%] pt-10">
          {subjects.map((item, index) => (
            <div
              key={index}
              className="w-[100%] mb-2 h-[100px] flex items-center  justify-start max-w-[800px] rounded-[10px] bg-white border-solid border-[5px] border-gray-300"
            >
              <div className="w-[65%] p-2 flex items-center  justify-start ml-2 rounded-md h-[80%]">
                <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <BsFileEarmarkCodeFill size={30} color="black" />
                </div>
                <div className="flex items-center p-3 justify-center h-[80%]">
                  <p className="font-bars3 text-black font-semibold">
                    {item.name}
                  </p>
                </div>
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <img src={aprov} />
                </div>
              </div>
              <div className="flex items-center justify-end w-[35%] mr-2 rounded-md h-[80%]">
                <div className="w-[100px] flex items-center justify-center h-[80%]">
                  <p className="text-gray-400 font-bars2 font-light">
                    {item.date}
                  </p>
                </div>
                <div
                  onClick={() => {
                    setClicked(true);
                  }}
                  className="flex items-center hover:scale-110 cursor-pointer duration-150 border-solid border-green-600 border-[3px] justify-center w-[40px] h-[40px] rounded-full mr-2 bg-green-500"
                >
                  <MdArrowOutward size={20} color="white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
