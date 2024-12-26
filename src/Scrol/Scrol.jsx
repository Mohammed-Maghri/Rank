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
import mma from "../clips/memem.jpeg"
import cat from "../clips/taj.jpeg"
import first from "../clips/crown.png"
import sec from "../clips/22.png"
import third from "../clips/33.png"
import king from "../clips/pass.png"
import moz from "../clips/moz.png"
import { WiDaySnow } from "react-icons/wi";
import promo from "../clips/18.png"
import kta from "../clips/kta.png"
import meme from "../clips/memem.jpeg";
import abdel from "../clips/abel.jpeg";
import notab from "../clips/notab.png";
import hamza from "../clips/pas.png";
import yas from "../clips/yas.png";
import pilo from "../clips/pilo.png";
import mod from "../clips/mod.png";
import mso from "../clips/maso.png";
import bou from "../clips/bou.png";
import zech from "../clips/zech.png";
import obihi from "../clips/obih.png";
import thecat from "../clips/nopic.png"
import frat from "../clips/frat.png"
import fnj from "../clips/fnj.png";
import ala from "../clips/ala.png"
import rd from "../clips/rd.png"
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import ad from "../clips/ad.png"
import abk from "../clips/abk.png"
import asir from "../clips/asir.png"
import redex from '../clips/redex.png'
import Ahmed from '../clips/newahm.png'
import rid from '../clips/rid.png'

export default function Scrol({objectvalue}) {
  const {loginGeter, setLoginGeter} = useContext(context);
    const {logs, setLogs} = useContext(context);
    const {all, setAll} = useContext(context);
    const {pages, setPages} = useContext(context);
    const [wait, setWait] = useState(false);
    const {loadingstate, setLoadingstate} = useContext(context);
    const [forloads, setForloads] = useState(false);
    const [getIntraSession, setIntraSession] = useState("");
    const obj = {pageNumber : pages};
    let color = "white";
  const functionClick = (path) => {
    // window.open(path, '_blank');
    console.log(path);
  };

  const fuctionFetchmore = async (url) => {
    setWait(true);
    const tok = Cookies.get('access_token');
    setPages((pages) => (pages + 1));
    await fetch(`${url}?campusId=${Cookies.get('campusId')}&cursusId=${Cookies.get('cursusId')}&pageNumber=${pages}&poolYear=${Cookies.get('poolYear')}&month=${Cookies.get('month')}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${tok}`
      }
      }).then((res) => {
        if (res.status >= 400 && res.status < 600) {
          setLogs(false);
          Cookies.remove('access_token');
          // window.location.href = "https://1337leets.com";
        }
        return  res.json();
      }).then((data) => {
        const newObject = {...all, ...data};
        setAll(all.concat(data));
        setWait(false);
      }).catch((err) => {
        console.log("Error has been occured", err);
      })
  }
  const cardSlect = (id) => {
    window.open(`https://profile.intra.42.fr/users/${all[id].login}`, '_blank');
  }
  
  const GetInterval = setInterval(() => {
    console.log("Here !");
    if (Cookies.get('_intra_42_session_production') != null){
      console.log(loginGeter + " | ", + Cookies.get('_intra_42_session_production'));
      clearInterval(GetInterval);
    }
  }, [1000]);

  useEffect(() => {
    {
      all.length == 0 ? (
        setForloads(false)
      ):(
        setForloads(true)
      )
      }
  },[all])

    return(
        <div className="flex items-center justify-center border-solid overflow-auto w-[100%] h-[100%] mt-[10px] z-30 rounded-[10px]">
        <div className="border-solid flex items-center justify-start flex-col duration-300 gap-[15px] lg:w-[70%]   md:w-[70%] h-[100%] max-w-[800px] rounded-[10px] xs:w-[100%]">
        <div className=" border-solid border-white  flex items-center justify-center gap-[10px] flex-col  w-[100%] h-[50px] "></div>
        {!forloads &&
          <div className="flex items-center justify-start  w-[100%] flex-col h-[100%]">
            {loadingstate == false ? (
            <div className=" flex items-center justify-center w-[100%]"> 
              <div className="divider  text-white w-[80%] h-[50px]  font-extrabold divider-warning">No resources found !</div>
              </div>
              ):(
              <div className=" flex items-center justify-center w-[100%] h-[200px]" >
                <span className="loading loading-spinner text-warning"></span>
                </div>
              )}
          </div>
        }
        {
          all.slice(0).map((item, index) => (
            <div onClick={() => (cardSlect(index))}  key={index} style={{ backgroundColor : `transparent`}} className="z-40 bg-gray-400 flex items-center justify-start w-[100%] max-w-[800px] rounded-[20px] duration-500 cursor-pointer  h-[140px]">
              {/* <div className=" absolute w-[70px] h-[70px] border-solid z-100    top-[150px]">
                <img style={{transform: "rotate(-45deg)"}} src={taj}/>
              </div> */}
            <div style={{borderRight : '0px'}}className=" ml-[5px] flex items-center border-solid border-yellow-500 border-[3px] justify-center   xs:w-[118px] xs:min-w-[118px] rounded-l-[25px] md:w-[118px] md:min-w-[118px] h-[115px]">
              
              {loadingstate == false ? (
                item.login == "adechaji" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={rid}/>
                ):
                item.login == "aghounam" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={Ahmed}/>
                ):
                item.login == "alaassir" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={asir}/>
                ):
                item.login == "aitaouss" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={redex}/>
                ):
                item.login == "abkacimi" ? (
                <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={abk}/>
                ):
                item.login == "amabrouk" ? (
                <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={ad}/>
                ):
                item.login == "amel-has" ? (
                <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={rd}/>
                ):
                item.login == "akoutate" ? (
                <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={ala}/>
                ):
                item.login == "oel-feng" ? (
                <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={fnj}/>
                ):
                item.login == "skasmi" ? (
                <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={frat}/>
                ):
                item.profileImage === "null" ? (
                <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={thecat}/>
                ):
              item.login == "youbihi" ? (
                <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={obihi}/>
              ):
                item.login == "zech-chi" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={zech}/>
                ):
                item.login == "aboukdid" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={bou}/>
                ):
                item.login == "ymassiou" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={mso}/>
                ):
                item.login == "mkimdil" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={mod}/>
                ):
                item.login == "mes-salh" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={pilo}/>
                ):
                item.login == "ymakhlou" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={yas}/>
                ):
                item.login == "hel-magh" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={hamza}/>
                ):
                item.login == "abel-all" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={notab}/>
                ):
                item.login == "ychahbi" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={abdel}/>
                ):
                item.login == "sel-jett" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={kta}/>
                ):item.login == "mmaghri" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={mma}/>
                ):item.login == "mlouazir" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={loua}/>
                ):item.login == "asnaji" ?(
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={asad}/>
                ):item.login == "mozennou" ? (
                  <img  className="w-[97%] h-[108px] min-h-[105px] object-cover rounded-l-[20px]" src={moz}/>
                ):(
                  <img  className=" h-[115px] w-[100%] max-h-[110px] rounded-l-[20px] object-cover" src={item.profileImage}/>
                )):(
                    <div className="skeleton bg-yellow-200 h-[100%] rounded-l-[20px] rounded-[0px] w-[100%]"></div>
                  )
              }
            </div>
            <div style={{boxShadow: '0px 0px 5px black'}} className="flex pan items-center  flex-col justify-center h-[115px] max-h-[130px] rounded-r-[10px]  xs:w-[260px] xm:w-[520px] sm:w-[660px] md:w-[600px] lg:w-[670px] mr-[5px] bg-white">
              <div className="w-[90%] h-[100%] rounded-[10px] flex   items-center justify-start flex-row">
                <div className=" xs:w-[70%] xf:w-[100%] sm:w-[70%] md:w-[70%] h-[100%]">
                  <div  className="w-[100%] h-[60%] flex items-start justify-center flex-col ">
                    <p className="font-bars3 text-black gap-[10px] font-extrabold flex"> {
                      item.login == "wabolles" ? (
                        "wabolles-Aka-theF"
                      ): item.login == "ael-mouz" ? (
                        "ael-mouz Aka-( MakeFile )"
                      ):(
                        `${item.login}`
                      )
                    }
                  {item.login == "mmaghri" || item.login == "mlouazir" || item.login == "abablil" ? (
                    <img className="w-[22px] h-[22px]  rounded-[50%] object-cover z-10 " src={king}/>
                  ):item.login == "amel-has" || item.login == "adechaji" ? (
                  <GiFullMotorcycleHelmet />
                  ):
                  (
                    <></>
                  )
                }
                </p>
                  <p  className="font-bars3 text-[15px] xm:text-xs xs:text-xs  text-black font-normal"> {item.firstName + " " + item.lastName} </p>
                  </div>
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
        {
          forloads &&
        <div className="h-[100px] w-[100%] flex items-center justify-center z-40">
          {!wait &&
            <button onClick={() => fuctionFetchmore("https://api.1337leets.com/api/v1/home")} className="btn btn-outline btn-warning">Load More</button>
          }
          {wait &&
          <span className="loading loading-dots bg-yellow-500 loading-lg"></span>
          }
        </div>
        }
        </div>
        </div>
    );
}