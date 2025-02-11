import React , {useContext, useEffect, useRef, useSyncExternalStore} from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { TiThMenu } from "react-icons/ti";
import { FaRankingStar } from "react-icons/fa6";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GrCalculator } from "react-icons/gr";
import { CiMenuBurger } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import { RiVipCrown2Fill } from "react-icons/ri";
import { DropDowns } from "../Dropdown/Dropdown";
import { SiBitcoinsv } from "react-icons/si";
import { RiTokenSwapLine } from "react-icons/ri";
import { MdOutlinePool } from "react-icons/md";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { context } from "../context";

//  This Comp Is too Long I Kept Testing Some StufF then i find My Self Hard Coding this Comp o Mb9ch 3ndi jhd So Khalito hhhhhhhh
const CardMuchComp = ({MeData}) => {
    return (
        <div className="w-[350px] flex-col items-center justify-center rounded-3xl h-[450px] border-solid bg-white bg-opacity-80 backdrop-blur-md border-yellow-500 border-[3px]">
            <div className="flex items-center pt-3 justify-center">
                <div className="w-[200px] h-[200px] border-solid border-[5px] border-yellow-500 rounded-full bg-slate-600">
                    <img className="w-full h-full rounded-full" src={MeData.profileImage}></img>
                </div>
            </div>
            <div className="w-full h-[40px] items-end justify-center flex">
                <p className="font-bars2 text-black text-lg ">{MeData.Full_name }</p>
            </div>
            <div className="w-full h-[50px] flex flex-row items-center justify-center">
                <div className="w-[50%] h-full flex items-center justify-end">
                    <div className="flex-col w-[80px] h-[50px] items-center justify-center">
                        <div className="w-full h-[60%] flex items-center justify-center">
                            <p className="font-bars2 text-black text-lg flex font-extrabold items-center justify-center"> {MeData.Wallet}</p>
                        </div>
                        <div className=" flex items-center justify-center w-full h-[40%]">
                            <p className="font-bars2 text-slate-400 mr-1 font-semibold text-sm"> Wallet </p>
                            <SiBitcoinsv color="#eab308" />
                            </div>
                                </div>
                            </div>
                            <div className="w-[50%] h-full flex items-center justify-start">
                                <div className="flex-col w-[80px] h-[50px] items-center justify-center">
                                    <div className="w-full h-[60%] flex items-center justify-center">
                                        <p className="font-bars2 text-black text-lg flex font-extrabold items-center justify-center"> {MeData.point}</p>
                                    </div>
                                    <div className=" flex items-center justify-center w-full h-[40%]">
                                        <p className="font-bars2 text-slate-400 mr-1 font-semibold text-sm"> Point's </p>
                                        <RiTokenSwapLine color="green" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[135px] mt-2 rounded-b-3xl p-6 bg-slate-100">
                            <div className="w-full flex items-center justify-start mb-3 h-[20px] ">
                                <p className="font-bars4 text-black mr-2"> Campus : </p>
                                <p className="font-bars2 text-black font-medium mr-2"> {MeData.campus}</p>
                            </div>
                            <div className="w-full flex items-center justify-start  h-[20px] ">
                                <p className="font-bars4 text-black text-sm mr-2"> Pool : </p>
                                <p className="font-bars2 text-black font-medium  text-sm mr-6"> {MeData.poolMonth + " " + MeData.poolYear}</p>
                            </div>
                            <div className="w-full flex items-center justify-start mt-3 h-[20px] ">
                                <p className="font-bars4 text-black text-lg mr-2"> Email : </p>
                                <p className="font-bars2 text-black font-medium text-sm mr-2"> {MeData.email}</p>
                            </div>
                        </div>
                        
                </div>
    )
}
const StateDropMenu = ({Seter}) => {
  const navigate = useNavigate()
  const ObjectMenu = [{text : 'Rank', icon :<FaRankingStar color='#ca8a04'/>, navi : "/home"},
   {text : 'Peer-Finder', icon : <FaUsersViewfinder color='#ca8a04'/>, navi : "/PeerFinder"},
   {text : 'XP-Calculator', icon : <GrCalculator color='#ca8a04'/>, navi : "/calculator"},
   {text : 'Vip-Pass', icon : <RiVipCrown2Fill color='#ca8a04'/>}]
  return (
      <div className=' bg-black ml-4 flex-col items-center justify-center top-14 absolute border-solid border-gray-800 border-[2px] rounded-md w-[180px] z-50'>
              {ObjectMenu.map((item, index) => (
                  <>
                  <div key={index} className='w-full mt-3 mb-3 flex items-center justify-center '>
                      <div onClick={() => (navigate(item.navi), Seter(false))} className='flex hover:scale-105 duration-200 cursor-pointer pl-2 items-cemter justify-start gap-2  w-[90%] rounded-md h-[30px] hover:bg-gray-900 bg-black'>
                          <div className='h-full  flex items-center justify-start w-[80%]'>
                              <p className='font-bars2 text-white font-semibold text-md'> {item.text}</p> 
                          </div>
                          <div  className='w-[20%] flex items-center justify-center'>
                              {item.icon}
                          </div>
                      </div>
                  </div>
                  </>
              ))
              }
      </div>
  )
}

const LeftBar = ({DataObject, seter}) => {
  const navigate = useNavigate()
  const FunctionLogout = () => {
      Cookies.remove('access_token')
      navigate('/')
  }
  return (
      <div className='md:w-[30%] w-[50%] flex items-center justify-end h-full'>
          <div onClick={() => {FunctionLogout()}} className='w-[30px] cursor-pointer hover:scale-125 duration-200 flex mr-3 items-center justify-center h-[30px]'>
              <BiLogOutCircle size={20} color='#eab308' />
          </div>
          <div onClick={() => seter(true)} className='flex cursor-pointer items-center justify-center mr-2 h-[50px]'>
                  {DataObject.login != undefined && 
              <p className='font-bars3  text-white font-semibold'>
                      {DataObject.login}
                  </p>
                  }
          </div>
          <div onClick={() => seter(true)} className='w-[50px] cursor-pointer h-[50px] border-[2px] border-yellow-500  rounded-full'>
                  <img className='w-full h-full rounded-full' src={DataObject.profileImage}></img>
          </div>
          <div className='w-[20px] md:hidden bg-slate-300 '></div>
          <div className='w-[20%] hidden bg-white md:block'></div>
      </div>
  )
}

const ElementsNav = () => {
  const navigate = useNavigate()
  const ObjectMenu = [{text : 'Peer-Finder', icon : <FaUsersViewfinder color='#ca8a04'/>, navi : "/PeerFinder"},
          {text : 'XP-Calculator', icon : <GrCalculator color='#ca8a04'/>, navi : "/calculator"},
          {text : 'Live-Rank', icon :<FaRankingStar color='#ca8a04'/>, navi : "/home"},
   {text : 'Vip-Pass', icon : <RiVipCrown2Fill color='#ca8a04'/>}]
  return (
      <div className='items-center  flex-row justify-start md:w-[70%]  h-full hidden md:flex'>
          <div className='w-[2%] h-full'></div>
          {ObjectMenu.map((item, index) => (
              <div  onClick={() => {navigate(item.navi)}} key={index} className='w-[170px] cursor-pointer hover:scale-105 duration-200  border-opacity-25  rounded-md  h-[35px] flex items-center justify-center'>
                  <div key={index} className='w-[5px] h-[5px] rounded-full bg-yellow-600 mr-4'></div>
                      {item.icon}
                      <p className='ml-2 font-bars2 hover:text-yellow-500 font-light text-sm text-white'> {item.text}</p>
                  </div>
              ))
          }
      </div>
  )
}


//  ID : 
// Year 
// Campus 
// Page  

const HeaderNav = () => {
  const [MeData, setMeData] = useState({login : 'Tsna HH'})
  const [Fetched, setFetched] = useState(false)
  const [DropMenu, SetDropMenu] = useState(false)
  const [Profile, setProfile] = useState(false)

  const {Connection, setConnection} = useContext(context)
  const {Student_State, setState} = useContext(context)
  const {Campus, setCampus} = useContext(context)
  const {Month, setMonth} = useContext(context)
  const {Year, SetYear} = useContext(context)
  const {campusScope, setCompusScope} = useContext(context)
  
  
  const {LocalCampus, setLocalCampus} = useContext(context) // Local Scope ID Curs 
  const {LocalDepa, setLocalDepart} = useContext(context) // Local Scope  Id of schol
  const {LocalMonth, setLocalmonth} = useContext(context)
  const {LocalYear, SetYearLocal} = useContext(context)

  const { forloads, setForloads } = useContext(context)
  const {Empty, setEmpty} = useContext(context)


  const navigate = useNavigate()
  const FunctionGet = async () => {

    const RouteFetch = "https://api.1337leets.com/Me"
    const Token = Cookies.get('access_token')
    let FetchMe 
    try {

        FetchMe = await fetch(RouteFetch, {
            method : 'GET' ,
            headers : {
                'authorization' : `${Token}`
            }
        })
        if (!FetchMe.ok){
            Cookies.remove('access_token')
            navigate('/')
        }
        if (FetchMe.ok){
            if (FetchMe.status > 400 && FetchMe.status < 460)
                return 
            const DataGet = await FetchMe.json()
            SetYear(parseInt(DataGet.Year)) // Begin Year
            
            setLocalmonth(DataGet.poolMonth) // Local Month
            setLocalDepart(DataGet.cursusId) // Local Scope
            
            SetYearLocal(parseInt(DataGet.Year))
    
            setState(DataGet.campusId) // Cursus State
        setLocalCampus(DataGet.campusId) // Cursus State local
        
        setCampus(DataGet.campusId) // Campus Student
        
        setCompusScope(DataGet.cursusId)
        setMonth(DataGet.poolMonth) // Month Pool
        setMeData(DataGet) // 
        setConnection(true) // Flag To Show Data When It Get Fetched 
        setFetched(true) // 
    }
    } catch (e) {
        console.log(e)
        Cookies.remove('access_token')
        navigate('/')
    }
}
  useEffect(() => {
      if (Cookies.get('access_token') === undefined)
          navigate('/')

      if (Year == 0)
          FunctionGet()
  })
  return (
      <div className='w-full  bg-black flex h-[60px] flex-row'>
        {Profile && 
            <div onClick={() => (setProfile(false))} className="flex items-center justify-center absolute  z-50 w-full h-[100vh] bg-white bg-opacity-10 backdrop-blur-sm">
                <CardMuchComp MeData={MeData}/>
            </div>
        }
          <div className='flex items-center  duration-200 md:hidden justify-start w-[50%] h-full '>
              <div onClick={() => SetDropMenu(!DropMenu)} className='w-[35px] ml-3 flex items-center justify-center  h-[35px] cursor-pointer'>
                  <CiMenuBurger color='#ca8a04' className='h-[35px] w-[35px]'/>
              </div>
              {
                DropMenu && 
                    <StateDropMenu  Seter={SetDropMenu} />
              }
           </div>
           <ElementsNav />
           <LeftBar DataObject={MeData} seter={setProfile}/>
      </div>
  )
}

export {HeaderNav}