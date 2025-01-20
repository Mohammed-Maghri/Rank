import { useState } from "react";
import { Nav } from "../Nav/Nav";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import aprov from "../clips/approuve.png";
import "./sheets.css";
import sheetsData from "./data/sheetsdata";
import SheetContent from "./components/SheetContent";

export function Sheets() {
  const [clicked, setClicked] = useState(false);
  const [sheetContent, setSheetContent] = useState({});
  return (
    <div className=" bg-black w-[100%] flex items-center justify-start flex-col">
      <Nav />
      <div className="container flex-col flex items-center justify-start w-[80%] h-[100%] pt-10">
        {clicked ? (
          <SheetContent sheetContent={sheetContent} />
        ) : (
          sheetsData.map((sheet, index) => (
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
                    {sheet.name}
                  </p>
                </div>
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <img src={aprov} alt="" />
                </div>
              </div>
              <div className="flex items-center justify-end w-[35%] mr-2 rounded-md h-[80%]">
                <div
                  onClick={() => {
                    setSheetContent((oldSheetContent) => {
                      setClicked(true);
                      return { ...sheet.sheetData };
                    });
                  }}
                  className="flex items-center hover:scale-110 cursor-pointer duration-150 border-solid border-green-600 border-[3px] justify-center w-[40px] h-[40px] rounded-full mr-2 bg-green-500"
                >
                  <MdArrowOutward size={20} color="white" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
