import { useEffect, useState } from "react";
import { Nav } from "../Nav/Nav";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import aprov from "../clips/approuve.png";
import SubmitFlags from "./components/SubmitFlgs";
import SubmitCorrection from "./components/ui/SubmitCorrection";
import SheetHeader from "./components/SheetHeader";
import "./sheets.css";
import {
  SheetBonusHeader,
  SheetMandatoryHeader,
} from "./components/ui/SheetSectionHeader";
import Markdown from "react-markdown";
import sheetsData from "./data/sheetsdata";

const SheetSection = ({ header = "", subHeader = "", content = "" }) => {
  return (
    <div className="w-full">
      <h3 className="text-black text-2xl font-extrabold mb-1">{header}</h3>
      <h4 className="text-black text-xl font-extrabold mb-1">{subHeader}</h4>
      <div className="flex flex-col gap-2 text-black font-normal text-sm">
        {content.split("\\n").map((line, index) => (
          <Markdown key={index}>{line}</Markdown>
        ))}
      </div>
      <SubmitCorrection />
    </div>
  );
};

const SheetContent = ({ sheetContent }) => {
  return (
    <div className="container mx-auto w-[100%] max-w-[1130px] flex items-center flex-col justify-center bg-white rounded-md">
      <div className="text-black w-[90%] mx-3 h-[100%] max-w-[900px] flex flex-col items-center gap-2">
        {/* Sheet: Introduction and Guidelines */}
        <SheetHeader
          projectName={sheetContent.projectName}
          numEvaluation={sheetContent.numEvaluation}
          SubjectLink={sheetContent.subjectLink}
        />

        {/* Mandatory Section Header */}
        <SheetMandatoryHeader content={sheetContent.mandatoryheaderContent} />

        {/* Mandatory Section */}
        {sheetsData}
        <SheetSection
          header="Header"
          subHeader=""
          content="
          ### Available Scripts. \n

          In the project directory, you can run: \n

          ### `npm start` \n

          Runs the app in the development mode. \n
          Open [http://localhost:3000](http://localhost:3000) to view it in your browser. \n
          "
        />

        <SheetBonusHeader content="You must test the functions present in the libft, either with your own set of tests or with those of the person being evaluated." />
        {/* <SubmitCorrection /> */}
        {/* <SubmitFlags /> */}
      </div>
    </div>
  );
};
const Sheet = ({
  name = "",
  sheetData = {},
  clicked,
  setClicked,
  setSheetContent,
}) => {
  return (
    <div className="w-[100%] mb-2 h-[100px] flex items-center  justify-start max-w-[800px] rounded-[10px] bg-white border-solid border-[5px] border-gray-300">
      <div className="w-[65%] p-2 flex items-center  justify-start ml-2 rounded-md h-[80%]">
        <div className="w-[50px] h-[50px] flex items-center justify-center">
          <BsFileEarmarkCodeFill size={30} color="black" />
        </div>
        <div className="flex items-center p-3 justify-center h-[80%]">
          <p className="font-bars3 text-black font-semibold">{name}</p>
        </div>
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          <img src={aprov} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-end w-[35%] mr-2 rounded-md h-[80%]">
        <div className="w-[100px] flex items-center justify-center h-[80%]">
          <p className="text-gray-400 font-bars2 font-light">20002002</p>
        </div>
        <div
          onClick={() => {
            setSheetContent((oldSheetContent) => {
              setClicked(true);
              return { ...sheetData };
            });
          }}
          className="flex items-center hover:scale-110 cursor-pointer duration-150 border-solid border-green-600 border-[3px] justify-center w-[40px] h-[40px] rounded-full mr-2 bg-green-500"
        >
          <MdArrowOutward size={20} color="white" />
        </div>
      </div>
    </div>
  );
};

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
            <Sheet
              key={index}
              name={sheet.name}
              sheetData={sheet.sheetData}
              setClicked={setClicked}
              setSheetContent={setSheetContent}
            />
          ))
        )}
      </div>
    </div>
  );
}
