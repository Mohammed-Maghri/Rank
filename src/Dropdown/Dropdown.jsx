import React, { useContext, useEffect } from "react";
import pic from "../clips/mmaghri.jpg";
import pas from "../clips/pass.png";
import kta from "../clips/taj.jpeg";

import { useState } from "react";
import { context } from "../context";
import Cookies from "js-cookie";

import "../Nav/Nav.css";
import { functionVisible } from "../Nav/Nav";

const ob = [{}];


const names = [{pico : [ pic , pic], project : "Minishell", status : "Waiting For Eval !"}, 
{pico : [pic ], project : "CPP Module 06", status : "Waiting For Eval !"}, 
{pico : [pic ,  pic , pic, pic , pic], project : "Transdense", status : "Waiting For Eval !"}];
const Componnent = ({on}) => {
  const {username, seTusername} = useContext(context);
  const [empty, setEmpty] = useState(false);
  const [obv, seTobv] = useState(false);
  const [values, setValues] = useState([]);
  const [check, setCheck] = useState(true);
  if (on == false)
      setCheck(false);
  setInterval(() => {
    setCheck(false);
  }, [40000])

  const fetchCorections = async (link) => {
    const dataDate = new Date() ;
    const year = dataDate.getFullYear();
    const month =  dataDate.getMonth() + 1;
    const day = dataDate.getDate();
  
    const tomorow = new Date(dataDate);
    tomorow.setDate(dataDate.getDate() + 1);
    const tomyear = tomorow.getFullYear();
    const tomday = tomorow.getDate();
    const tommonth = tomorow.getMonth() + 1;
    
    console.log((year + "-" + month + "-" + day), (tomyear + "-" + tommonth + "-" + tomday));
    const obj = {dateOne :(year + "-" + month + "-" + day), dateTwo : (tomyear + "-" + tommonth + "-" + tomday)};
    await fetch(link , {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
				'Authorization': `Bearer ${Cookies.get('access_token')}`
      }, body : await JSON.stringify(obj),
    }).then((response) => response.json()).then((data) => {
      (data) ? seTobv(true) : seTobv(false) ;
      (Object.keys(data).length == 0) ? setEmpty(true) : setEmpty(false);
      console.log(data);
      setValues(data);
    }).catch((err) => {
      console.log("Error 0" , err);
      setCheck(false);
    })
  };

  const functionRedirect = (value) => {
      window.open("https://profile.intra.42.fr/users/" + value , '_blank');
  };

  useEffect(() => {
    fetchCorections("https://leets-third-app-c520ce36bcdd.herokuapp.com/api/v1/test");
  }, [])

  return (
    <div className=" rounded-[10px]  [&::-webkit-scrollbar]:hidden gap-1 [-ms-overflow-style:none] [scrollbar-width:none] flex-col flex  items-center pt-1 h-[100%] w-[100%] bg-slate-800 overflow-auto">
      {empty &&
        <div className="w-[100%] h-[100%] flex items-center justify-center">
          <p className="text-white text-md font-bold font-bars2"> No Push For the Day </p>
        </div>
      }
        {obv && values.map((items, index) => (
          <div className="w-[98%] h-[65px] flex items-center justify-center flex-col border-solid border-yellow-400 border-[2px] hover:cursor-pointer hover:bg-slate-600  rounded-[10px]">
          <div className="flex items-center justify-center w-[100%] rounded-[10px]  h-[50%]">
          {items.users.map((it, index ) => (
            <div onClick={() => (functionRedirect(it.login))} style={{boxShadow : "0px 0px 3px white "}} className="border-solid z-20 border-white hover:scale-110 hover:duration-150 cursor-pointer  border-[2px] w-[37px] h-[37px] rounded-[50%]">
                  <img src={kta} className="object-cover rounded-[50%] h-[100%] w-[100%]" />
                </div>
              ))
            }
            </div>
            <div className="rounded-[8px] w-[100%] h-[50%] bg-slate-900">
            <div className="flex items-center pt-2 justify-center   h-[50%]">
              {(items.project_gitlab_path == null) ? <p  className="font-bars2 text-white z-20 font-bold "> EXAM </p> :
              <p  className="font-bars2 text-white z-20 font-bold "> {items.project_gitlab_path.substring(items.project_gitlab_path.lastIndexOf('/') + 1)} </p>
              }
            </div>
            <div className=" h-[50%] rounded-[10px] flex items-center justify-center" >
            <p className="font-bars2 text-xs text-red-500 font-bold"> {items.status} </p>
            </div>
            </div>
            </div>
          ))
      }
      {!obv && 
        <div className="w-[100%] h-[100%] border-[4px] flex items-center justify-center rounded-[5px] border-solid border-yellow-300">
          {check &&
            <span className="loading loading-infinity loading-lg text-yellow-300"></span>
          }
          {!check &&
          <>
            <p className="text-white font-bars2 text-sm"> See How Weak U ar </p>
            <p className="text-white font-bars2 text-sm"> Reading the Code-Base To </p>
            <p className="text-white font-bars2 text-sm"> By-pass the Front-end ... ohh </p>
            <p className="text-white font-bars2 text-sm"> I mean Copying Other's People Stupidity </p>
            <p className="text-white font-bars2 text-sm"> Cause U aint Smart Enough To Read the Code Base !!!</p>
            <p className="text-white font-bars2 text-sm"> Poooor Baby Go Cry </p>
          </>
          }
        </div>
      }
    </div>
  )
};

export function Dropdown(name, pic) {
    // const [all , setall] = useContext(context);
    
    const [visiblity, setvisibility] = useState(false);
    const [checkseen, setCheckSeen] = useState(true);
    useEffect(() => {
      (Cookies.get("PoorLittleMan") == "CRYINTHECORNER")? setvisibility(true) : setvisibility(false);
      (Cookies.get("PoorLittleMan") == "CRYINTHECORNER" && Cookies.get("125365486365864788498945187484584184451284518484168456848452487687846846868456879684688548") != "648645684468463565341684565331546845168456531686843486")? setCheckSeen(false) : setCheckSeen(true);
    }, []);
  
    const [vip, setVip] = useState(false);
    return (
        <div className=" absolute flex items-start justify-end top-[65px] w-[400px] h-[200px] ">
          <div className="flex items-start justify-start bg-black flex-col z-50 w-[55%] rounded-[10px] h-[100%]">
            <div className="w-[100%] h-[40px] rounded-[10px] flex items-center justify-center flex-row  border-solid bg-slate-900">
              <div onClick={() => (setVip(false))} className="w-[100%] h-[100%] flex items-center justify-center font-bars2 text-white gap-[5px] font-bold duration-200 text-sm hover:bg-slate-800 cursor-pointer rounded-[10px]"><p> Vip-Option's </p> 
              <div  className="flex items-center justify-center"> <img className="w-[15px] h-[15px]" src={pas} /></div> </div>
            </div>
            <div className="h-[159px] w-[100%] flex items-center  p-[10px]  justify-center">
                {!vip &&
              <div className="w-[100%] h-[100%] flex items-center overflow-y-auto gap-[2px] flex-col  justify-start">
                {
                    ob[0].name == "mmaghri" ? (
                        ob.map((item, index) => (
                            <div key={index} className="w-[80%] p-[2px] rounded-[10px] duration-200 cursor-pointer hover:scale-105 bg-yellow-400 h-[25px]  flex items-center justify-center flex-row ">
                            <div className="w-[30%]  flex items-center justify-center  h-[100%]">
                            <div className="w-[20px] h-[20px] rounded-[50%]">
                            <img src={item.pic} className="w-[100%] h-[100%] rounded-[50%] object-cover" />
                            </div>
                            </div>
                            <div className="w-[70%] flex items-center justify-start text-sm text-black font-bars2 h-[100%]">
                            <p> {item.name}</p>
                            </div>
                            </div>
                        ))
                ):(
                    <div className="w-[100%] text-white flex-col h-[100%] flex font-bars2 text-sm items-center justify-center">
                      {visiblity && 
                        <Componnent on={checkseen} />
                      }
                      {!visiblity && 
                        <>
                        <p> Sorry ! The Vip Option only</p>
                        <p> Accessible</p>
                        <p> To the Owners Of the</p>
                        <p> VIP-PASS </p> 
                       <img className="w-[22px] h-[22px]" src={pas} /> 
                        </>
                      }
                    </div>
                )
            }
              </div>
                }
                {
                    vip &&
                    <div className="w-[100%] h-[100%] flex items-center justify-center">

                    </div>
                }
            </div>
          </div>
        </div>
    );
}