import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RiStarFill } from "react-icons/ri";
import { FaExplosion } from "react-icons/fa6";
import { FaFileExcel } from "react-icons/fa";
import { GiWalrusHead } from "react-icons/gi";

export default function SubmitFlags() {
  const [check, setCheck] = useState("ok");
  const [flags, setFlags] = useState([
    { name: "Empty Work", icons: "", size: 210 },
    {
      name: "Incomplete Work",
      icons: <FaFileExcel className="text-red-500" />,
      size: 210,
    },
    {
      name: "Invalid Compilation",
      icons: <GiWalrusHead className="text-red-500" />,
      size: 210,
    },
    {
      name: "Cheat",
      icons: <FaExplosion className="text-red-500" />,
      size: 210,
    },
    {
      name: "Crash",
      icons: <FaExplosion className="text-red-500" />,
      size: 210,
    },
    {
      name: "Can't Explain ",
      icons: <FaExplosion className="text-red-500" />,
      size: 210,
    },
    {
      name: "Leacks",
      icons: <FaExplosion className="text-red-500" />,
      size: 210,
    },
    {
      name: "Forbidden Function",
      icons: <FaExplosion className="text-red-500" />,
      size: 210,
    },
  ]);
  const [clickedColor, setClickedColor] = useState(-1);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-[100%] bg-white p-3">
      <div className="h-[50px] w-[100%] flex items-end justify-start">
        <p className="text-black font-bars3 text-2xl font-extrabold">
          {" "}
          Ratings{" "}
        </p>
      </div>
      <div className="w-[100%] h-[30px] flex items-start justify-start ">
        <p className="p-0 m-0 text-xs font-extrabold text-black">
          Don’t forget to check the flag corresponding to the defense
        </p>
      </div>
      <div className=" w-[100%] gap-3 flex-row mt-1 flex items-center justify-start h-[40px]">
        <div
          onClick={() => {
            setCheck("ok");
            setClicked(false);
          }}
          className={`min-w-[80px] rounded-md cursor-pointer duration-300 flex items-center gap-1 justify-center ${check === "ok" ? "bg-green-500" : "bg-green-100"}  w-[40%] h-full`}
        >
          <IoCheckmarkOutline
            width={20}
            className={`${check === "ok" ? "text-white" : "text-green-500"}`}
          />
          <p
            className={`${check === "ok" ? "text-white" : "text-green-500"} font-bars2  font-semibold`}
          >
            {" "}
            Ok{" "}
          </p>
        </div>
        <div
          onClick={() => {
            setCheck("Outstanding");
            setClicked(false);
          }}
          className={`cursor-pointer duration-300 flex rounded-md items-center gap-1 justify-center ${check === "Outstanding" ? "bg-green-500" : "bg-green-100"} min-w-[140px] w-[60%] h-full`}
        >
          <RiStarFill
            className={`${check === "Outstanding" ? "text-white" : "text-green-400"}`}
          />
          <p
            className={`${check === "Outstanding" ? "text-white" : "text-green-500"} font-bars2  font-semibold`}
          >
            {" "}
            Outstanding{" "}
          </p>
        </div>
      </div>
      <div className="w-[100%] grid xs:grid-cols-2 md:grid-cols-3 mt-2 flex-1">
        {flags.map((item, index) => (
          <>
            <div
              onClick={() => {
                setCheck("");
                setClicked(true);
                setClickedColor(index);
              }}
              key={index}
              className={`${clicked && clickedColor === index ? "bg-red-500" : "bg-red-100"} ${clicked && clickedColor != index ? "bg-gray-100" : ""} flex cursor-pointer duration-150 gap-1 max-w-[${item.size}px] items-center justify-center mb-1 ml-1 min-w-[120px]  rounded-md h-[40px]`}
            >
              <>{item.icons}</>
              <p
                className={`${clicked && clickedColor === index ? "text-white" : "text-gray-400"} ${clicked == false ? "text-red-500" : ""} text-xs font-medium font-bars2`}
              >
                {item.name}
              </p>
            </div>
          </>
        ))}
      </div>
      <div className="w-[100%] h-[100px] border-solid border-[3px] rounded-md p-4 border-gray-100 bg-white">
        <input
          className="w-[100%] text-black  h-[100%] outline-none bg-transparent "
          placeholder="Comment Here"
        ></input>
      </div>
      <div className="cursor-pointer  w-[100%] h-[40px] flex items-center justify-center rounded-md mt-2  bg-teal-400">
        <p className=" font-bars2 text-white font-bold"> Finish Evaluation</p>
      </div>
    </div>
  );
}
