import React, { Component, useState } from 'react';
import './sheets.css'
import { Nav } from '../Nav/Nav'
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import aprov from "../clips/approuve.png"
import { MdArrowOutward } from "react-icons/md";
import { Submit_Flags }from './SheetsComp'
import {Submit_Corection} from './SheetsComp'
import { LiaPasteSolid } from "react-icons/lia";
import { List_comp  } from './SheetsComp';

export function Sheets() {
    const [clicked , setClicked] = useState(false);
    const [subjects, setSubject] = useState([{name : "ft_irc", date : "15-01-2025"},{name : "webserve", date : "15-01-2025"} ,{name : "ft_trencendese", date : "15-01-2025"}
    ,{name : "ft_irc", date : "15-01-2025"}]);
    const [ObjectComp, setObjComp] = useState([{component : <Submit_Corection />}, {component : <Submit_Corection/>}, {component : <Submit_Flags/>}, {component : <Submit_Corection/>}, {component : <Submit_Corection/>},{component : <Submit_Corection/>}, {component : <Submit_Corection/>}]);
    return (
        <div className="bg-black w-[100%]  h-[100vh] flex items-center justify-start flex-col" >
            <Nav/>
            {clicked && 
                <div className='w-[100%] max-w-[1130px] h-[100vh] flex items-center justify-center '>
                    <div className='xs:w-[100%] sm:w-[100%] duration-150 md:w-[70%] min-w-[350px] overflow-scroll bg-white rounded-md h-[100%]'>
                        <div className='w-[100%] h-[200px] mt-4'>
                            <div className="w-[100%] h-[40px] flex items-center justify-center">
                                <p className='font-bars2 text-black font-bold text-xl'>SCALE FOR PROJECT</p>
                                <p className='font-bars2 ml-1 text-teal-500 font-extrabold text-xl'> FT_TRANSCENDENCE </p>
                            </div>
                            <div className='h-[30px] w-[100%] flex items-start justify-center' >
                                <p className='font-bars2 text-black font-normal text-sm'>You should evaluate 5 students in this team</p>
                            </div>
                            <div className='flex items-center justify-center w-[100%] h-[60px]'>
                                <div className='w-[50px] h-[50px] bg-gray-400 rounded-full'></div>
                            </div>
                            <div className='w-[100%] flex items-center justify-center h-[50px]'>
                                <div className='w-[270px] h-[40px] flex flex-row  bg-gray-100'>
                                    <div className='w-[85%] h-full'></div>
                                    <div className='flex items-center justify-center w-[15%] bg-gray-200 h-full'>
                                        <LiaPasteSolid width={30}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    <List_comp comp={ObjectComp}/>
                    </div>
                </div>
            }
            {!clicked && 
                <div className="flex-col flex items-center justify-start w-[80%] h-[100%] pt-10">
                {subjects.map((item, index) => (
                    <div key={index} className="w-[100%] mb-2 h-[100px] flex items-center  justify-start max-w-[800px] rounded-[10px] bg-white border-solid border-[5px] border-gray-300">
                    <div className="w-[65%] p-2 flex items-center  justify-start ml-2 rounded-md h-[80%]">
                        <div className='w-[50px] h-[50px] flex items-center justify-center'>
                            <BsFileEarmarkCodeFill size={30} color='black' />
                        </div>
                        <div className='flex items-center p-3 justify-center h-[80%]'>
                            <p className='font-bars3 text-black font-semibold' > {item.name} </p>
                        </div>
                        <div className='w-[30px] h-[30px] flex items-center justify-center'>
                            <img src={aprov}/>
                        </div>
                    </div>
                    <div className='flex items-center justify-end w-[35%] mr-2 rounded-md h-[80%]'>
                        <div className='w-[100px] flex items-center justify-center h-[80%]'>
                            <p className='text-gray-400 font-bars2 font-light'> {item.date} </p>
                        </div>
                        <div onClick={() => {setClicked(true)}} className='flex items-center hover:scale-110 cursor-pointer duration-150 border-solid border-green-600 border-[3px] justify-center w-[40px] h-[40px] rounded-full mr-2 bg-green-500'>
                            <MdArrowOutward size={20} color='white'/>
                        </div>
                    </div>
                </div>
                ))}

            </div>
            }
        </div>
    );
}