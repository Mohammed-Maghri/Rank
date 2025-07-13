import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { context } from "../context";
import Cookies from "js-cookie";
import { RiArrowDropDownFill } from "react-icons/ri";
import { TbWorldSearch } from "react-icons/tb";
import "../Nav/Nav.css";
import { functionVisible } from "../Nav/Nav";
import { GrDocumentOutlook } from "react-icons/gr";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { use } from "react";
import { FuncFetch } from "../Func_Help/helper";
import { useNavigate } from "react-router-dom";

const CampusButton = ({ setCampus }) => {
  const [Cliked, SetClicked] = useState(false)
  const [Camp, setCam] = useState("Campus")
  const Ref = useRef(null)

  const [Campuses, setCampuses] = useState([

    { name: "Khouribga", id: 16 },
    { name: "Bengrir", id: 21 },
    { name: "Tetouan", id: 55 },
    { name: "Rabat", id: 75 },
    {name : "Paris" , id : 1},
    {name : "Lyon" , id : 9} ,
    {name : "Barcelona" , id : 46},
    {name : "Mulhouse" , id : 48},
    {name : "Lausanne" , id : 47},
    {name : "Istanbul" , id : 49},
    {name : "Berlin" , id : 51},
    {name : "Florence" , id : 52},
    {name : "Vienna" , id : 53},
    {name : "Prague" , id : 56},
    {name : "London" , id : 57},
    {name : "Porto" , id : 58},
    {name : "Luxembourg" , id : 59},
    {name : "Perpignan" , id : 60},
    {name : "Tokyo" , id : 26},
    {name : "Moscow" , id : 17},
    {name : "Madrid" , id : 22},
    {name : "Seoul" , id : 29},
    {name : "Rome" , id : 30},
    {name : "Bangkok" , id : 33},
    {name : "Amman" , id : 35},
    {name : "Malaga" , id : 37},
    {name : "Nice" , id : 41},
    {name : "Abu Dhabi" , id : 43},
    {name : "Wolfsburg" , id : 44},

  ])

  const FunctionCheck = (event) => {
    if (Ref) {
      if (Ref.current && !Ref.current.contains(event.target))
        SetClicked(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', (event) => FunctionCheck(event))
    return () => {
      document.removeEventListener('mousedown', FunctionCheck);
    };
  }, [])

  return (
    <div ref={Ref} onClick={(event) => SetClicked(!Cliked)} className={` cursor-pointer hover:bg-opacity-10 flex items-center justify-center w-[220px] h-full ${!Cliked ? "hover:bg-yellow-600 hover:bg-opacity-10 border-solid border-opacity-25 border-[1px] border-yellow-500" : ""} rounded-md`}>
      {/* <div className="w-[10px] h-[10px] rounded-sm bg-yellow-600"></div> */}
      <p className="font-bars3 mr-2 text-white ml-2"> {Camp} </p>
      <RiArrowDropDownFill size={25} color="#ca8a04" />
      {Cliked &&
        <div className={`absolute  overflow-x-hidden overflow-y-auto h-[300px] top-32 w-[130px] flex-col items-center justify-center rounded-md  bg-slate-950 border-solid border-yellow-500 border-opacity-50 border-[1px] z-50`}>
          {Campuses.map((item, index) => (
            <div onClick={() => (setCampus(item.id), setCam(item.name))} key={index} className="flex items-center justify-center w-[90%] h-[25px] m-2 bg-slate-950 hover:bg-slate-900">
              <p className="font-bars3 text-white "> {item.name} </p>
            </div>
          ))
          }
        </div>
      }
    </div>
  )
}
const CursusButton = ({ Cursus, Number, SetNumber }) => {
  const Ref = useRef(null)
  const [Cliked, SetClicked] = useState(false)
  const [Max, setMax] = useState(12)
  const [Min, SetMin] = useState(1)

  useEffect(() => {
    if (Cursus === 'Mo') {
      setMax(12)
      SetMin(1)
      SetNumber(8)
    }
    else {
      setMax(2025)
      SetMin(2019)
      SetNumber(2024)
    }
  }, [Cursus])

  const AddPlusFunction = (AD) => {
    if (AD === 1)
      if (Number > Min) SetNumber((Number) => Number - 1)
    if (AD === 2)
      if (Number < Max) SetNumber((Number) => Number + 1)
  }

  const ClickedInside = (event) => {
    if (Ref.current && !Ref.current.contains(event.target))
      SetClicked(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', (event) => (ClickedInside(event)))
  }, [])

  return (
    <div ref={Ref} className={` cursor-pointer hover:bg-opacity-10 flex items-center justify-center w-[220px] ${!Cliked ? "hover:bg-yellow-600 hover:bg-opacity-10 border-solid border-opacity-25 border-[1px] border-yellow-500" : ""} rounded-md`}>
      {/* <div className="w-[10px] h-[10px] rounded-sm bg-yellow-600"></div> */}
      <div onClick={() => (SetClicked(!Cliked))} className="w-full h-[40px] flex items-center justify-center flex-row ">
        <p className="font-bars3 mr-2 text-white text-md "> {Cursus + ' ' + Number} </p>
        <RiArrowDropDownFill size={25} color="#ca8a04" />
      </div>
      <>
        {Cliked &&
          <div className={`absolute  top-32 w-[130px] h-[40px] flex flex-row items-center justify-center rounded-md  bg-slate-950 border-solid border-yellow-500 border-opacity-50 border-[1px] z-50`}>
            <div onClick={() => (AddPlusFunction(1))} className="w-[20%] hover:scale-110 duration-200 rounded-md flex items-center justify-center h-full">
              <CiCircleMinus color="white" />
            </div>
            <div className="w-[60%] flex items-center justify-center bg-slate-950 h-full">
              <p className="font-bars3 mr-2 text-white ml-2"> {Number} </p>
            </div>
            <div onClick={() => (AddPlusFunction(2))} className="w-[20%] hover:scale-110 duration-200 rounded-md flex  items-center justify-center h-full">
              <CiCirclePlus color="white" />
            </div>
          </div>
        }
      </>
    </div>
  )
}

const PromoButton = ({Camp, CampusSeter}) => {
  const Ref = useRef(null)
  const [Cliked, SetClicked] = useState(false)

  const [Curs, seTcurs] = useState([
    { Curs: 'Pool', id: 9 },
    { Curs: 'Cursus', id: 21 }])
    
  const checkClick = (event) => {
    if (Ref.current && !Ref.current.contains(event.target))
      SetClicked(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', (event) => (checkClick(event)))
  }, [])

  return (
    <div ref={Ref} onClick={(event) => (SetClicked(!Cliked))} className={` cursor-pointer hover:bg-opacity-10 flex items-center justify-center w-[220px] h-full ${!Cliked ? "hover:bg-yellow-600 hover:bg-opacity-10 border-solid border-opacity-25 border-[1px] border-yellow-500" : ""} rounded-md`}>
      {(Camp == 21) ? 
        <p className="font-bars3 mr-2 text-white ml-2"> Cursus </p> : 
        <p className="font-bars3 mr-2 text-white ml-2"> Pool </p>
      }
      <RiArrowDropDownFill size={25} color="#ca8a04" />
      {Cliked &&
        <div className={`absolute   top-32 w-[130px] flex-col items-center justify-center rounded-md  bg-slate-950 border-solid border-yellow-500 border-opacity-50 border-[1px] z-50`}>
          {Curs.map((item, index) => (
            <div onClick={() => (CampusSeter(item.id))} key={index} className="w-[90%] m-2 hover:bg-slate-900 flex items-center justify-center  h-[25px]">
              <p className="font-bars3 text-white"> {item.Curs} </p>
            </div>
          ))
          }
        </div>
      }
    </div>
  )
}

const DropDowns = () => {


  //--------------- 
  
  
  const { Year, SetYear } = useContext(context) // Year 
  const { Student_State, setState } = useContext(context) // Campus Id 
  const { campusScope, setCompusScope } = useContext(context)
  const { Month, setMonth } = useContext(context) // Month 

  const {Empty, setEmpty} = useContext(context)
  const { LoadMore, SetLoadMore } = useContext(context) // lOAD 
  const { StoreExist, setStoreExist } = useContext(context)
  const { forloads, setForloads } = useContext(context)
  //---------------

  const [CursId, SetCursID] = useState('Cursus')
  const [MonthScope, SetMonthScope] = useState(8)

  const {LocalCampus, setLocalCampus} = useContext(context) // Local Scope Id Cur 
  const {LocalDepa, setLocalDepart} = useContext(context)  // Local Scope  Id Camp
  const {LocalMonth, setLocalmonth} = useContext(context) // Local Scope Month 
  const {LocalYear, SetYearLocal} = useContext(context)
  const navigate = useNavigate()
  const ReqMore = () => {

    setState(LocalCampus) // local Scope Id Setter 
    setCompusScope(LocalDepa)
    SetYear(LocalYear) // Year Set Local
    setMonth(LocalMonth) // Setting the Month When Submitiing 

    SetLoadMore(2) // Setting the page To 2 To Req A new One !
  
    if (forloads) {
      let ObjectSend = {
        CampID: LocalCampus,
        CurId: LocalDepa,
        Year: LocalYear,
        Month : LocalMonth,
        Load : 1
      }

      setEmpty(true)
      setForloads(false)
      setStoreExist([])
      FuncFetch("https://api.1337leets.com/Users", setStoreExist, [], ObjectSend, 'DropDown', navigate , setEmpty, setForloads);
    }
  }
  return (
    <div className="items-center mb-3 justify-center flex w-full h-[45px]">
      <div className="hidden md:block w-[22%] h-full"></div>
      <div className="flex gap-2 items-center justify-between rounded-md h-full w-full pr-2 pl-2 max-w-[790px]">
        <CampusButton  setCampus={setLocalCampus}/>
        <PromoButton  Camp={LocalDepa} CampusSeter={setLocalDepart}/>
        <CursusButton Cursus='' Number={LocalYear} SetNumber={SetYearLocal} />
        {LocalDepa === 9 &&
          <CursusButton Cursus='Mo' Number={LocalMonth} SetNumber={setLocalmonth} />
        }

        <div onClick={() => (ReqMore())} className="w-[40px] cursor-pointer border-opacity-60 items-center justify-center flex min-w-[40px] h-[40px] border-yellow-600 rounded-full border-solid border-[1px]">
          <TbWorldSearch color="#ca8a04" />
        </div>
      </div>
      <div className="hidden md:block w-[22%] h-full"></div>
    </div>
  )
}

export { DropDowns }