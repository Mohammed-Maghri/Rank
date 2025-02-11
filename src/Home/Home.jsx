import React, { useContext } from "react";
import "./Home.css";
import Scrool from "../Scrol/Scrol";
import Starfield from 'react-starfield';
import { context } from "../context";
import { useEffect } from "react";
import { FuncFetch } from "../Func_Help/helper";
import { useNavigate } from "react-router-dom";

export function Home() {
	const {StoreExist, setStoreExist} = useContext(context) // Data Stored Here < - Student's Data
	const {Connection, setConnection} = useContext(context) // Checking the State of the Loading Rank
	const {forloads, setForloads} = useContext(context);
	
	const {Empty, setEmpty} = useContext(context)
	const { campusScope, setCompusScope } = useContext(context) // Local
	const {Year, SetYear} = useContext(context) // Year 
	const {Campus, setCampus} = useContext(context) // Cursus Id 
	const {Student_State, setState} = useContext(context) // Campus Id  
	const {Month, setMonth} = useContext(context) // Month 
	const {LoadMore, SetLoadMore} = useContext(context)

	const navigate = useNavigate()
	useEffect(() => {
		const Domain = "http://localhost:8001/Users"
		let Mo
		if (Month.length > 1) Mo = Month
		else Mo = "0" + Month 
		if (Connection){
			SetLoadMore(2)
			let Obj = {
				From  : 'Home' ,
				CampID: Student_State,
				Year  : Year , 
				Month  : Month ,
				CurId : campusScope ,
				Load : 1
			}
			setTimeout(() => {
				FuncFetch(Domain, setStoreExist, StoreExist, Obj, 'Home', navigate,  setEmpty, setForloads);
			}, 1000);
		}
	}, [Connection])
return (
	<div className="flex items-center w-[100%]   flex-col justify-start h-screen bg-black ">
		<Starfield
		starCount={800}
		starColor={[255, 255, 0]}
		speedFactor={0.04}                                                                                    
		backgroundColor="black"
	  />
	  <Scrool />
    </div>
  );
}