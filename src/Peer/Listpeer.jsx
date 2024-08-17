import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { context } from "../context";
import me from "../clips/mmaghri.jpg";
import { redirect } from "react-router-dom";

export default function Listpeer() {
    const {peerfinder, setPeerfinder} = useContext(context);
    const {peertracker, setPeertracker} = useContext(context);
    const {othload, setOthload} = useContext(context);

    const Redirect = (text) => {
        window.open(text, "_blank");
    }
    return (
        <div className="w-[100%] h-[100%] flex items-center justify-start flex-col ">
                <div className=" w-[100%]  duration-500  rounded-[10px] xs:grid-cols-3 sm:grid-cols-4 tsa:grid-cols-6  grid balf:grid-cols-9 pb-7 bgs:grid-cols-12">
                    {
                        peerfinder.map((item, index) => (
                            item.final_mark  == null ? (

                                    <div onClick={() => (Redirect(`https://profile.intra.42.fr/users/${item.user.login}`))}  key={index} className="w-[140px] hover:scale-110 duration-300 cursor-pointer flex items-center justify-center h-[170px] mt-2 flex-col
                                        rounded-[50px]  ">
                                    <div style={{boxShadow : "0px 0px 20px green "}} className="border-solid  border-green-500 w-[100px] rounded-[50px] h-[100px] mt-2 border-[3px]">
                                        {othload == false ? (
                                            <img src={item.user.image.link} alt="me" className="w-[100%] h-[100%] ab rounded-[50%] object-cover "/>
                                        ):(
                                            <div className="skeleton w-[100%] h-[100%] rounded-[50%]"></div>
                                        )
                                    }
                                    </div>
                                    <div className="w-[90%]  h-[30%] flex items-center justify-center flex-col">
                                        <div className=" text-white text-sm font-bars2 font-bold rounded-[10px] flex items-center justify-center  w-[100%] h-[50%]">
                                            <p> {item.user.login}</p>
                                            </div>
                                            <div className="border-solid text-white text-[10px] font-bars3  flex items-center justify-center rounded-[5px] border-white border-[1px] w-[100px] h-[30px]">
                                                <p> {item.status} </p>
                                                </div>
                                            </div>
                                        </div>
                                    ):(
                                        <></>
                                    )))
                        } 
            </div>
        </div>
    );
}