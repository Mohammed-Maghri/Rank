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

const Componnent = () => {
	const {username, seTusername} = useContext(context);
  // seTusername(Cookies.get("Who"));
  const [obv, seTobv] = useState(false);
  const [values, setValues] = useState([]);

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
    console.log(JSON.stringify(obj));
    await fetch(link , {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
				'Authorization': `Bearer ${Cookies.get('access_token')}`
      }, body : await JSON.stringify(obj),
    }).then((response) => response.json()).then((data) => {
      (data) ? seTobv(true) : seTobv(false) ;
      setValues(data);
    }).catch((err) => {
      console.log("Error 0" , err);
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
            <p  className="font-bars2 text-white z-20 font-bold "> {items.project_gitlab_path.substring(items.project_gitlab_path.lastIndexOf('/') + 1)} </p>
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
          <span className="loading loading-infinity loading-lg text-yellow-300"></span>
        </div>
      }
    </div>
  )
};

export function Dropdown(name, pic) {
    // const [all , setall] = useContext(context);
    
    const [visiblity, setvisibility] = useState(false);

    useEffect(() => {
      (Cookies.get("Who") == "32500689")? setvisibility(true) : setvisibility(false);
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
                        <Componnent />
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