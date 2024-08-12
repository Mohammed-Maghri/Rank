import React, { useContext } from "react";
import { useState } from "react";
import "./Home.css";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { IoMdLogOut } from "react-icons/io";
import {functionVisible, Nav} from "../Nav/Nav";
import { FaChevronDown } from "react-icons/fa";
import { Selector } from "../Selector/Slector";
import taj from "../clips/crown.png";
import redirect from "../clips/maximize.png";
import { PiInstagramLogoFill } from "react-icons/pi";
import Scrool from "../Scrol/Scrol";
import Starfield from 'react-starfield';
import { context } from "../context";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Load from "../Loader/Loader";


export function Home() {
	const {logs, setLogs} = useContext(context);
	const {tok, setTok} = useContext(context);
	let test = {code: ""};
	const obj = {token: ""};
	const {all, setAll} = useContext(context);
	const [thetrue, seTrue] = useState(false);
    const token = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-6734cea9d925c671f887c117afed7807dfa8e7d9796b1f68084b6b9d1db6bb25&redirect_uri=https%3A%2F%2Fwww.1337leets.com%2Fhome&response_type=code";
	const navigate = useNavigate();
	const {enable, setEnable} = useContext(context);
	const {poolYear, setPoolYear} = useContext(context);
	const {campusId, setCampusId} = useContext(context);
	const {cursusId, setCursusId} = useContext(context);
	const {prf, setPrf} = useContext(context);


	const  getapi =  (api, testtok) => {
		obj.access_token = testtok;
		if (testtok == undefined) {
			setLogs(false);
			navigate("/");
		}
		fetch(`${api}?campusId=${Cookies.get('campusId')}&cursusId=${Cookies.get('cursusId')}&pageNumber=${1}&poolYear=${Cookies.get('poolYear')}&month=${Cookies.get('month')}` ,{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${testtok}`
			}
		}).then((res) => {
			if (res.status >= 400 && res.status < 600) {
				setLogs(false);
				Cookies.remove('access_token');
				window.location.href =  "https://1337leets.com";
			}
			return res.json();
		}).then((data) => {
			setAll(data);
			setTimeout(() => {
				setLogs(true);
			});
		}).catch((err) => {
			// window.location.href =  "https://1337leet.vercel.app/";
			console.log("erro has been occured", err);
		})
	}
	
	const functionapi = async (api) => {
		await fetch(api, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: await JSON.stringify(test),
		}).then(response =>  response.json())
		.then(data => {
			setPrf(data.profileImage);
			setPoolYear(data.poolYear);
			setCampusId(data.campusId);
			setCursusId(data.cursusId);
			console.log(" ++++ ");
			Cookies.set("month", data.poolMonth);
			Cookies.set("campusId", data.campusId);
			Cookies.set("cursusId", data.cursusId);
			Cookies.set("pageNumber", data.pageNumber);
			Cookies.set("poolYear", data.poolYear);
			Cookies.set("profileImage", data.profileImage);
			if (data.access_token == undefined) {
				setLogs(false);
				window.location.href =  "https://1337leets.com/";
			}
			Cookies.set('access_token', data.token);
			seTrue(true);
		}).catch((error) => {
			console.log("Error in fetching ", error);
		});
	}
	
useEffect(() => {
	const val  =  new URLSearchParams(window.location.search).get('code');
	test.code = val;
	if (Cookies.get('access_token') == undefined || Cookies.get('campusId') == "" || Cookies.get('month') == ""
	|| Cookies.get('cursusId') == "" || Cookies.get('pageNumber') == "" || Cookies.get('poolYear') == "") {
		functionapi('https://leets1337-3f387c570577.herokuapp.com/api/v1/authenticate');
	}
}, [])

useEffect( async () => {
	setTimeout(async () => {
		await getapi("https://leets1337-3f387c570577.herokuapp.com/api/v1/home", Cookies.get('access_token'));
	}, 1000);

}, [])

return (
	<div className="flex items-center w-[100%]  flex-col justify-center h-screen bg-black ">
        {!logs &&
          <Load/>
        }
        {logs &&
          <>
            <Nav />
            <Selector />
			<Starfield
            starCount={7000}
            starColor={[255, 255, 0]}
            speedFactor={0.04}                                                                                    
            backgroundColor="black"
          />
            <Scrool  />
          </>
        }
    </div>
  );
}