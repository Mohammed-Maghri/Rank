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
	const obj = {access_token: ""};
	const {all, setAll} = useContext(context);
	const [thetrue, seTrue] = useState(false);
    const token = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-6734cea9d925c671f887c117afed7807dfa8e7d9796b1f68084b6b9d1db6bb25&redirect_uri=https%3A%2F%2F1337leet.vercel.app%2Fhome&response_type=code";
	const navigate = useNavigate();
	const {enable, setEnable} = useContext(context);
	const {poolYear, setPoolYear} = useContext(context);
	const {campusId, setCampusId} = useContext(context);
	const {cursusId, setCursusId} = useContext(context);

	const  getapi =  (api, testtok) => {
		obj.access_token = testtok;
		console.log("Tok From : ", testtok);
		console.log(`${api}?campusId=${Cookies.get('campusId')}&cursusId=${Cookies.get('cursusId')}&pageNumber=${Cookies.get('pageNumber')}&poolYear=${Cookies.get('poolYear')}`);
		if (testtok == undefined) {
			setLogs(false);
			navigate("/");
		}
		fetch(`${api}?campusId=${Cookies.get('campusId')}&cursusId=${Cookies.get('cursusId')}&pageNumber=${Cookies.get('pageNumber')}&poolYear=${Cookies.get('poolYear')}` ,{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${testtok}`
			}
		}).then((res) => {
			if (res.status >= 400 && res.status < 600) {
				setLogs(false);
				Cookies.remove('access_token');
				window.location.href =  "https://1337leet.vercel.app/";
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
			console.log(data);
			setPoolYear(data.poolYear);
			setCampusId(data.campusId);
			setCursusId(data.cursusId);
			console.log(data.poolYear, data.campusId, data.cursusId);
			console.log(" ++++ ");
			Cookies.set("campusId", data.campusId);
			Cookies.set("cursusId", data.cursusId);
			Cookies.set("pageNumber", data.pageNumber);
			Cookies.set("poolYear", data.poolYear);
			if (data.access_token == undefined) {
				setLogs(false);
				window.location.href =  "https://1337leet.vercel.app/";
			}
			Cookies.set('access_token', data.access_token);
			console.log(Cookies.get('access_token'));
			seTrue(true);
		}).catch((error) => {
			console.log("Error in fetching ", error);
		});
	}
	
useEffect(() => {
	const val  =  new URLSearchParams(window.location.search).get('code');
	test.code = val;
	console.log(test.code);
	if (Cookies.get('access_token') == undefined || Cookies.get('campusId') == "" 
	|| Cookies.get('cursusId') == "" || Cookies.get('pageNumber') == "" || Cookies.get('poolYear') == "") {
		functionapi('https://leets1337-3f387c570577.herokuapp.com/api/v1/authenticate');
	}
}, [])

useEffect( async () => {
	setTimeout(async () => {
		await console.log("ee test " , Cookies.get('access_token'));
		await getapi("https://leets1337-3f387c570577.herokuapp.com/api/v1/home", Cookies.get('access_token'));
		console.log(poolYear);
	}, 2000);
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
            <Scrool  />
          </>
        }
    </div>
  );
}