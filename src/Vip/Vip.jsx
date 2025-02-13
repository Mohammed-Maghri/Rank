import {React , useContext, useEffect, useRef, useState } from "react";
import Starfield from 'react-starfield';
import { context } from "../context";
import Cookies from "js-cookie";
import { TbLockAccess } from "react-icons/tb";
import { RiDashboardLine } from "react-icons/ri";
import { FaUsersGear } from "react-icons/fa6";
import { RiApps2AddLine } from "react-icons/ri";
import { FaBan } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { TbClockHour7Filled } from "react-icons/tb";
import { HiUsers } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import kta from "../clips/cat.png"
import { IoNavigateCircleOutline } from "react-icons/io5";
import { SiDiscogs } from "react-icons/si";
import { FaUserSecret } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Bar = ({ROLE, ACT, INDEX}) => {
    const Bar = [
        {name : 'Board', icon : RiDashboardLine, ID : 1} , 
        {name : 'Users', icon : FaUsersGear, ID : 2} ,
        {name : 'Add', icon : RiApps2AddLine , ID : 4}]

    return (
        <div className="w-full h-14 flex items-center justify-start flex-row ">
            <div className="w-[20%] max-w-[160px] min-w-[160px] h-full  bg-yellow-500 flex items-center justify-start">
                <p className="font-bars5 font-extrabold text-white pl-4"> Role : </p>
                {!ACT ? (
                    <span color="#eab308" className="loading ml-6 text-yellow-500 bg-white loading-ring loading-lg"></span>
                ): (
                    <p className="font-bars5 font-medium text-black pl-4"> {ROLE} </p>)
                } 
            </div>
            <div className="w-[100%] flex items-center justify-center h-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500">
                {!ACT ? (
                    <>
                        <p className="text-black font-bars2 pr-2 font-extrabold"> Cheking User Role And Permision's </p>
                        <span color="#eab308" className="loading text-yellow-500 bg-white loading-bars loading-md"></span>
                    </>
                    ): (
                        <>
                        <div className="w-full h-full  items-center justify-center flex">
                            {Bar.map((item, index) => (
                                <div key={index} onClick={() => {INDEX(item.ID)}} className="flex items-center justify-center hover:bg-yellow-500 hover:scale-105 duration-200 cursor-pointer  h-full w-[80px]">
                                    <item.icon color="white"/>
                                    <p className="ml-2 font-bars2 text-white hover:text-white duration-200 text-sm font-extrabold"> {item.name}</p>
                                </div>
                                ))
                            }
                        </div>
                        {/* <div className="flex items-center justify-end w-full  md:hidden h-[40px]">
                            <div className="w-[30px] h-[30px] bg-black mr-2 "></div>
                        </div> */}
                        </>
                    )
                }
                
            </div>
            </div>
    );
}

const ContentBanned = () => {
    return (
        <div className="w-full h-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center flex-col">
                <TbLockAccess color="white" size={200} className="animate-bounce"/>
                <p className="font-bars2 text-white mt-2 font-extrabold text-2xl"> You,re Access has Been </p>
                <p className="font-bars2 text-white mt-2 font-extrabold text-2xl"> Denied To the Vip !</p>
            </div>
            <p className="font-bars2 text-black mt-10 font-extrabold text-xs"> The Only Users With Given Permission </p>
            <p className="font-bars2 text-black  font-extrabold text-xs"> Can Use The Vip Option's </p>
        </div>
    )
}

const BoardRender = ({item, ALL}) => {
    const FindProjct = (ID) => {
        const value = ALL.find((user) => {
            if (user.id == ID)
                return (user.name)
        })
        if (value != undefined)
            return (value.name)
        if (value === undefined) return ('UNKOWN')
    }
    const FunctionRedirect = (item) => {
        window.open(`https://profile.intra.42.fr/` + item)
    }
    return (
        <div  className=" min-w-[330px] max-w-[800px] h-[200px] bg-slate-50 border-solid border-[3px] border-yellow-500 rounded-sm ">
                    <div className="w-[100%] h-[40px]  flex items-center justify-start">
                        <p className="font-bars5 text-sky-400 font-semibold sm:text-xs md:text-sm lg:text-md ml-3">{item.title}</p>
                    </div>
                    <div className="pl-1 w-full h-[20px] flex-row flex items-center justify-start">
                        <div className="w-[80%] flex-row flex items-center justify-start h-full">
                            <p className="text-black ml-2 font-bars5 text-xs"> {`This Team was closed at : `}</p>
                            <p className="text-black mr-2 ml-2 font-bars2 text-md font-semibold"> {item.close.substring(item.close.indexOf('T') + 1, item.close.indexOf('T') + 6)}</p>
                            <TbClockHour7Filled color="#eab308"/>
                        </div>
                        <div onClick={() => (FunctionRedirect("users/" + item.Who))} className="w-[20%] flex items-center  rounded-md justify-center hover:bg-yellow-400 duration-200 cursor-pointer h-[30px]  bg-yellow-200">
                            <p className="text-black font-bars2 mr-1 text-xs font-normal"> View</p>
                            <IoNavigateCircleOutline color="black" size={20}/>
                        </div>
                    </div>

                    <div className="pl-3 w-full h-[20px] flex-row flex mt-1 items-center justify-start">
                        <HiUsers size={15} color="#eab308"/>
                        <p className="text-black ml-2 font-bars3 text-xs"> User's -</p>
                        <p className="text-black ml-2 font-bars5 font-semibold text-sm"> {item.Users.length}</p>
                        <p className="text-black ml-2 font-bars3 text-xs"> in this Team </p>
                     </div>
                     <div className="w-full h-[40px] items-center justify-start gap-1 flex flex-row pl-2 mt-2 bg-slate-100">
                        {item.Users.map((items, ind) => (
                            <div key={ind} onClick={() => (FunctionRedirect("users/"+ items.login))} className="w-[35px] h-[35px] border-solid hover:scale-105 duration-200 cursor-pointer border-[2px] border-yellow-400 rounded-full bg-black">
                                <img className="w-full h-full rounded-full" src={kta} />
                            </div>
                        ))
                        }
                     </div>
                     <div className="w-full h-[60px] flex items-center justify-center ">
                        <div className="w-[70%] h-full bg-white flex items-center justify-start">
                            <div  className="flex items-center cursor-pointer justify-center ml-3 w-[80%] h-[60%] rounded-sm bg-yellow-500">
                                <p className="font-bars5 mr-2 font-semibold text-sm text-white"> {item.status} </p>
                            </div>
                        </div>
                        <div className="w-[30%] h-full bg-white flex items-center justify-center">
                            <p className="text-black font-bars3 font-semibold"> {FindProjct(item.Id)}</p>
                        </div>
                     </div>
                 </div>
    )
}

const UserGET = ({role}) => {
    const EndPo = "https://api.1337leets.com/Vip/Users"
    const EndDel = "https://api.1337leets.com/Vip/Delete"
    const [err, setErr] = useState(false)
    const [thedata, setdata] = useState([])
    const [refetch, setRefetch] = useState(0)
    const FetchReq = async (End) => {
        const Req = await fetch(End, {
            method : 'GET' , 
            headers : {
                authorization : `${Cookies.get('access_token')}`
            } 
        })
        if (!Req.ok){
            console.log('Error !')
            return 
        }
        const Data = await Req.json()
        console.log(Data)
        setdata(Data)
    }

    const functionDeleteEl = async (ENDPOINT, ID) => {
        const fet = await fetch(ENDPOINT, {
            method : 'POST' ,
            headers : {
                authorization : `${Cookies.get('access_token')}`
            },
            body : JSON.stringify({
                id : ID ,
                role : role
            })
        })
        if (!fet.ok) {
            setErr(true)
            return 
        }
        setRefetch((refetch) => (refetch + 1))
    }
    useEffect(() => {
        FetchReq(EndPo)
    }, [refetch])
    return (
        <div className="w-full h-full flex-col bg-black flex items-center pt-2 justify-start gap-1 overflow-y-auto ">
            {err && 
                <div className="w-[200px] flex items-center justify-center rounded-lg h-[30px] bg-red-500">
                    <p className="text-white text-sm font-bars5"> Not Authorized !</p>
                </div>
            }
            {thedata.map((item, index) => (
                <div className="w-[80%] max-w-[800px] min-w-[360px] h-[70px] rounded-md bg-white border-solid flex-row flex items-center justify-center border-[4px] border-yellow-600">
                        <div className="items-center justify-center bg-white flex w-[20%] h-full">
                            <p className="font-bars2 text-black font-extrabold text-sm mr-2"> ID: </p>
                            <p className="font-bars4 text-black font-extrabold  text-sm mr-2"> {item.ID} </p>
                            <SiDiscogs color="black"/>
                        </div>
                        <div className="items-center justify-start bg-white flex w-[50%] h-full">
                            <div  className="w-[50px] flex items-center justify-center h-full">
                                <ImCross onClick={() => (functionDeleteEl(EndDel, item.ID))} className="cursor-pointer" color="red"/>
                            </div>
                            <p className="font-bars5 text-black font-extrabold mr-2"> {item.USER} </p>
                        </div>
                        <div className="items-center flex-row justify-center bg-white flex w-[30%] h-full">
                            <FaUserSecret />
                            <p className="font-bars5 text-black font-normal text-md ml-2 mr-2"> {item.ROLE} </p>
                        </div>
                    </div>
                ))
                    }
                </div>
    )
}

const AddUser = ({ROLE}) => {
    const [Object, setObject] = useState([{name: 'SUPER' , id : 1}, {name : 'Admin' , id : 2}, {name : "User" , id : 3}])
    const [RoleSe , SetRole] = useState('Role')
    const [succes, setSuccess] = useState(false)
    const [erro, setErr] = useState(false)
    const [TheSet, SetTheSet] = useState(false)
    const [auth, setAuth] = useState(false)
    const Ref = useRef(null)
    const EndPoint = "https://api.1337leets.com/Vip/Add"
    const [Value, setValue] = useState('')
    const [state, SetState] = useState({})
    const functionClick = async (ENDPOINT) => {
        console.log(' ====> ', ROLE)
        if (Value.length === 0 || RoleSe === 'Role' || ROLE == undefined) {
            setErr(true)
            return 
        }
        setErr(false)
        let val = {
            fun : RoleSe ,
            role : ROLE ,
            value : Value 
        }
        const fet = await fetch(ENDPOINT, {
            method : 'POST' ,
            headers : {
                authorization : `${Cookies.get('access_token')}`
            },
            body : JSON.stringify(val)
        })
        if (!fet.ok){
            setAuth(true)
            return
        }
        setErr(false)
        setAuth(false)
        setSuccess(true)
   }
   return (
        <div className="flex items-center justify-center flex-col w-full h-full  bg-yellow-500">
            <div className="w-[300px] mb-4 h-[50px] bg-yellow-600 border-solid border-white  border-[4px] rounded-lg">
                <input value={Value} onChange={(e) => (setValue(e.target.value))} className="w-full h-full pl-2 placeholder:font-bars5 bg-transparent placeholder:text-white text-white font-bars5" placeholder=" User Name !"/>
            </div>
            <div onClick={() => (functionClick(EndPoint))} className="mb-3 w-[300px] rounded-full cursor-pointer hover:bg-yellow-300 duration-200 border-solid border-[4px] border-yellow-100 bg-yellow-400 h-[300px] flex items-center justify-center ">
                <p className="font-bars5 text-yellow-500 text-4xl"> ADD </p>
            </div>
            <div>
                <div onClick={() => (SetTheSet(!TheSet))} className="flex items-center justify-center w-[100px] rounded-lg h-[30px] bg-white">
                    <p className="font-bars5 text-black"> {RoleSe} </p>
                    <IoMdArrowDropdown  color="black"/>
                </div>
                {TheSet &&
                    <div ref={Ref} className="w-[100px] absolute ">
                    {
                        Object.map((item, index) => (
                            <div onClick={() => (SetRole(item.name), SetTheSet(false))} className="border-solid border-[1px] cursor-pointer hover:scale-105 duration-200 border-black mb-1 w-full h-[20px] flex  items-center justify-center bg-yellow-400 rounded-sm">
                                <p className="font-bars2 text-sm text-black"> {item.name}</p>
                            </div>
                        ))
                    }
                    </div>
                }
            </div>
            {erro && 
                <div className="flex items-center justify-center w-[200px] h-[30px] bg-red-500 rounded-lg mt-2">
                    <p className="font-bars5 text-sm text-white">Missing a Value !</p>
                </div>
            }
            {auth && 
                <div className="flex items-center justify-center w-[200px] h-[30px] bg-red-500 rounded-lg mt-2">
                    <p className="font-bars5 text-sm text-white">Not Authorized !</p>
                </div>
            }
            {succes && 
                <div className="flex items-center justify-center w-[200px] h-[30px] bg-green-500 rounded-lg mt-2">
                    <p className="font-bars5 text-sm text-white"> Added !</p>
                </div>
            }
        </div>
   ) 
}

const ProjectShow = ({ALL, ID, ROLE}) => {
    const EndPoint = "https://api.1337leets.com/Vip/Push"
    const [Objects, setObjects] = useState([{Users : [{}, {}] , close : 'LOA...', title : 'LOADING...', Id : 999, status : 'LOADING'}])
    const [MainObj, setMainObj] = useState([])
    const [Relod, SetReload] = useState(false)
    for (let index = 0; index < 20; index++)
        Objects.push({Users : [{}, {}] , close : 'LOA...', title : 'LOADING...', Id : 999, status : 'LOADING'})

    const FunctionGet = async () => {
        const DataGet = await fetch(EndPoint, {
            method : 'GET', 
            headers : {
                authorization : `${Cookies.get('access_token')}`
            }
        })
        if (!DataGet.ok){
            console.log('Error !')
        }
        const Data = await DataGet.json()
        setMainObj(Data)
        SetReload(true)
        console.log(' --> ', Data)
    }


    useEffect(() => {
        FunctionGet()
    }, [])

    return (
        <div className={`w-full  h-[90%]`}>
                    {ID === 1 && !Relod ? (
                        <div className={`w-full  bg-black ${ID === 1 ? "grid" : "flex "} md:grid-cols-2 lg:grid-cols-3  gap-2 overflow-y-auto  items-start pt-4 justify-center`}>
                            {
                                Objects.map((item, index) => (
                                    <BoardRender key={index} item={item} ALL={ALL}/>
                                ))
                            }
                            </div>
                    ): ID === 1 && Relod ? (
                        <div className={`w-full h-full bg-black ${ID === 1 ? "grid" : "flex "} md:grid-cols-2 lg:grid-cols-3  gap-2 overflow-y-auto  items-start pt-4 justify-center`}>
                            {
                                MainObj.map((item, index) => (
                                    <BoardRender key={index} item={item} ALL={ALL}/>
                                ))
                            }
                        </div>
                    ) : ID === 2 ? (
                        <UserGET role={ROLE}/>
                    ) : ID === 4 ? (
                        <AddUser  ROLE={ROLE} />
                    ) : (
                        <></>
                    )
                    }
        </div>
    )
}

const Vip = () => {
    const {GlobalData, setGlobalData} = useContext(context)
    const [role, setRole] = useState('')
    const [ACTIVE, setActive] = useState(false)
    const [rend, setrend] = useState(true)
    const [ACESS, setACCESS] = useState(false)
    const [Projects, setProjects] = useState([])
    const [ID, setId] = useState(1)
    const Url = 'https://api.1337leets.com/Vip/Auth'

    const FetchSubject = async () => {
        console.log('fFFFE')
        const Fet = await fetch("/Project_lvl.json")
        const Data = await Fet.json()
        const MapKey = Data.map((item) => ({
            id : item.project_id,
            name : item.name
        }))
        setProjects(MapKey)
    }

    const ReqMaker = async () => {
        let CheckReq = await fetch(Url,{
            method : 'POST' ,
            headers : {
                authorization : Cookies.get('access_token')
            },
            body : JSON.stringify(GlobalData)
        })
        if (CheckReq.ok) {
            const Data = await CheckReq.json()
            console.log(Data.Rows)
            if (Data.Rows.length > 0){
                setRole(Data.Rows[0].ROLE)
                setActive(true)
            }
        }
    }

    useEffect(() => {
        ReqMaker() 
        FetchSubject()
    }, [])

    return (
    <div className="items-center justify-start flex bg-black flex-col w-full h-[100vh]">
        <Bar ROLE={role} ACT={ACTIVE} INDEX={setId}/>
        {!ACTIVE ? (
            <ContentBanned />
            ) : (
                <ProjectShow ALL={Projects} ID={ID} ROLE={role}/>
            )
        }

    </div>
    )
}

export default Vip