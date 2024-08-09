import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { IoMdLogOut } from "react-icons/io";
import {functionVisible, Nav} from "../Nav/Nav";
import { FaChevronDown } from "react-icons/fa";
import { Selector } from "../Selector/Slector";
import taj from "../clips/crown.png";
import redirect from "../clips/maximize.png";
import { context } from "../context";
import { PiInstagramLogoFill } from "react-icons/pi";
import "./Scrol.css";
import me from "../clips/this.png";
import loua from "../clips/loua.png";
import asad from "../clips/asad.png";
import Cookies from "js-cookie";
import mma from "../clips/mmaghri.jpg"
import cat from "../clips/taj.jpeg"
import first from "../clips/crown.png"
import sec from "../clips/22.png"
import third from "../clips/33.png"
import king from "../clips/pass.png"
import moz from "../clips/moz.png"
export default function Scrol({objectvalue}) {
    const [visible, setVisible] = useState(false);
    const {logs, setLogs} = useContext(context);
    const [visible2, setVisible2] = useState(false);
    const [value, setValue] = useState(80);
    const {all, setAll} = useContext(context);
    const {pages, setPages} = useContext(context);
    const [wait, setWait] = useState(false);

    const obj = {pageNumber : pages};
    let color = "white";
  const functionClick = (path) => {
    // window.open(path, '_blank');
    console.log(path);
  };


  const fuctionFetchmore = async (url) => {
    setWait(true);
    const tok = Cookies.get('access_token');
    setPages(pages + 1);
    await fetch(`${url}?pageNumber=${pages}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${tok}`
      }
      }).then((res) => {
        if (res.status >= 400 && res.status < 600) {
          setLogs(false);
          Cookies.remove('access_token');
          window.location.href = "https://1337leet.vercel.app/";
        }
        return  res.json();
      }).then((data) => {
        console.log(data);
        const newObject = {...all, ...data};
        setAll(all.concat(data));
        setWait(false);
      }).catch((err) => {
        console.log("Error has been occured", err);
      })
  }
  console.log(all);
  const cardSlect = (id) => {
    console.log(id + 1);
    console.log(all[id].profileImage);
    console.log(all[id].login);
    console.log(all[id].firstName);
    console.log(all[id].lastName);
    console.log(all[id].level);
    console.log(all[id].location);
  }
  console.log('Is all an array?', Array.isArray(all)); // Should log true if all is an array
    return(
        <div className="flex items-center justify-center border-solid overflow-auto w-[100%] h-[100%] mt-[10px] rounded-[10px]">
        <div className="border-solid flex items-center justify-start flex-col duration-300 gap-[15px] lg:w-[70%]   md:w-[70%] h-[100%] max-w-[800px] rounded-[10px] xs:w-[100%]">
        <div className=" border-solid border-white border-white  flex items-center justify-center gap-[10px] flex-col  w-[100%] h-[50px] "></div>

        {
          all.slice(0).map((item, index) => (
            <div onClick={() => (cardSlect(index))}  key={index} style={{ backgroundColor : `transparent`}} className=" bg-gray-400 duration-500 flex items-center justify-start w-[100%] max-w-[800px] h-[135px]  rounded-[20px] duration-500 cursor-pointer hover:w-[102%] h-[140px]">
              {/* <div className=" absolute w-[70px] h-[70px] border-solid z-100    top-[150px]">
                <img style={{transform: "rotate(-45deg)"}} src={taj}/>
              </div> */}
            <div style={{borderRight : '0px'}} className=" ml-[5px] flex items-center border-solid border-yellow-500 border-[3px] justify-center   xs:w-[118px] xs:min-w-[118px] rounded-l-[20px] md:w-[118px] md:min-w-[118px] h-[120]">
              {item.login == "mmaghri" ? (
                <img  className="w-[97%] h-[111px] min-h-[105px] rounded-l-[20px]" src={me}/>
                ):item.login == "mlouazir" ? (
                <img  className="w-[97%] h-[111px] min-h-[105px] rounded-l-[20px]" src={loua}/>
                ):item.login == "asnaji" ?(
                <img  className="w-[97%] h-[111px] min-h-[105px] rounded-l-[20px]" src={asad}/>
                ):item.login == "mozennou" ? (
                <img  className="w-[97%] h-[111px] min-h-[105px] rounded-l-[20px]" src={moz}/>
                ):(
                <img  className=" h-[100%] w-[100%] max-h-[110px] rounded-l-[20px] object-cover" src={item.profileImage}/>
                )
              }
            </div>
            <div style={{boxShadow: '0px 0px 5px black'}} className="flex pan items-center  flex-col justify-center h-[115px] max-h-[130px] rounded-r-[10px]  xs:w-[260px] xm:w-[520px] sm:w-[660px] md:w-[600px] lg:w-[670px] mr-[5px] bg-white">
              <div className="w-[90%] h-[100%] rounded-[10px] flex   items-center justify-start flex-row">
                <div className=" xs:w-[70%] xf:w-[100%] sm:w-[70%] md:w-[70%] h-[100%]">
                  <div  className="w-[100%] h-[60%] flex items-start justify-center flex-col " > <p className="font-bars3 text-black gap-[10px] font-extrabold flex"> {item.login} 
                  {item.login == "mmaghri" || item.login == "mlouazir" ? (

                    <img className="w-[22px] h-[22px]  rounded-[50%] object-cover z-10 " src={king}/>
                  ):(
                    <></>
                  )
                    }
                </p>
                  <p  className="font-bars3 text-[15px] xm:text-xs xs:text-xs  text-black font-normal"> {item.firstName + " " + item.lastName} </p> </div>
                  <div className="w-[100%] gap-[10px] h-[30%] flex items-center justify-start flex-row" >
                    <p className="text-black font-bold "> Lvl : </p> 
                    {/* {(index + 1) == 1 ? color = "rgb(255, 247, 0)" : (index == 2) ? color = "rgb(135, 135, 135)" : (index + 1) == 3 ? color = "rgb(204, 102, 0)" : color = "white"} */}
                      <div  style={{backgroundColor : {color}}} className="w-[30px] border-solid border-[2px] border-black flex items-center justify-center h-[30px]  rounded-[50%]">
                        {String(item.level).includes(".") ?(
                          <p className="text-black font-extrabold font-bars3"> {String(item.level).split(".")[0]}</p>
                        ):(
                          <p className="text-black font-extrabold font-bars3"> {item.level}</p>
                        )
                        }
                    </div>
                  </div>
                </div>
                <div className="flex  flex-col  items-center justify-around  md:w-[30%] xf:w-[30%] xm:w-[30%] xs:w-[30%] sm:w-[30%]  duration-300 lg:w-[30%] h-[100%]">
                  <div className="w-[45px] flex items-center bg-yellow-300 justify-center gap-[2px] h-[20px] duration-200 cursor-pointer rounded-[5px] hover:scale-105">
                    <p  className="text-black font-bars3 font-extrabold"> {index + 1} </p>
                    {index + 1 == 1 ? (
                    <img className="w-[19px] h-[19px]  rounded-[50%] object-cover z-10 " src={first}/>
                    ): index + 1 == 2 ? (
                      <img className="w-[19px] h-[19px]  rounded-[50%] object-cover z-10 " src={sec}/>
                    ):index + 1 == 3 ?(
                      <img className="w-[19px] h-[19px]  rounded-[50%] object-cover z-10 " src={third}/>
                    ):
                    (
                      <></> 
                    )
                    }
                  </div>

                  <div className="border-solid gap-1 w-[100%] h-[30px] flex items-center justify-center ">
                    {item.location != "unavailable" ?(
                    <>
                      <div className="w-[10px] h-[10px] rounded-[50%] border-solid border- bg-green-500 border-[2px]"></div>
                    <p className="text-black font-bars2 font-medium text-[13px]">{item.location}</p>
                    </>) :(
                      <>
                       <div className="w-[10px] h-[10px] rounded-[50%] border-solid border- bg-red-500 border-[2px]"></div>
                       <p className="text-black font-bars2 font-medium text-[13px]">unav</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[90%] h-[20%] rounded-[10px] flex flex-row items-center justify-start">
                <div className="flex items-center justify-start w-[80%] h-[100%]">
                  <div  className="w-[100%] mb-[4px] bg-yellow-200  flex items-center justify-start rounded-[20px] h-[70%]">
                    {String(item.level).includes(".") ?(
                      String(item.level).split(".")[1].substring(0, 2).length == 1 ? (
                      <div style={{width : `${String(item.level).split(".")[1].substring(0, 2)}0%`}} className="bg-yellow-400 rounded-[20px]  h-[100%]"> </div>
                      ):
                      <div style={{width : `${String(item.level).split(".")[1].substring(0, 2)}%`}} className="bg-yellow-400 rounded-[20px]  h-[100%]"> </div>
                    ):(
                    <div style={{width : `${0}%`}} className="bg-yellow-400 rounded-[20px]  h-[100%]"> </div>
                    )
                    }
                  </div>
                </div>
                <div className="w-[20%] max-w-[70px] ml-[10px] mb-[5px] flex items-center justify-center h-[100px]">
                  {String(item.level).includes(".") ?(
                    String(item.level).split(".")[1].substring(0, 2).length == 1 ? (
                    <p className="text-2xl font-bars3 text-black font-black "> {String(item.level).split(".")[1].substring(0, 2) + "0" + "%"} </p>
                    ):
                    <p className="text-2xl font-bars3 text-black font-black "> {String(item.level).split(".")[1].substring(0, 2) + "%"} </p>
                  ):(
                    <p className="text-2xl font-bars3 text-black font-black "> {0 + "%"} </p>
                  )
                  }
                </div>
              </div>
            </div>
          </div>
          ))
        }
        <div className="h-[100px] w-[100%] flex items-center justify-center">
          {!wait &&
            <button onClick={() => fuctionFetchmore("https://leets1337-3f387c570577.herokuapp.com/api/v1/home")} className="btn btn-outline btn-warning">Load More</button>
          }
          {wait &&
          <span className="loading loading-dots bg-yellow-500 loading-lg"></span>
          }
        </div>
        </div>
        </div>
    );
}