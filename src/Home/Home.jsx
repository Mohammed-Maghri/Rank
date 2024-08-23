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
	let test = {code: ""};
	const obj = {token: ""};
	const {all, setAll} = useContext(context);
	const [thetrue, seTrue] = useState(false);
	const navigate = useNavigate();
	const val =  new  URLSearchParams(window.location.search).get('code');
		test.code = val;

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
				console.log("error has been in res");
			}
			return res.json();
		}).then((data) => {
			setAll(data);
			setTimeout(() => {
				Cookies.set('log', 1337);
				setLogs(true);
			});
		}).catch((err) => {
			Cookies.remove('access_token');
			console.log("erro has been occured", err);
			window.location.href = "https://1337leets.com";
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
		.then(async (data) => {
			Cookies.set('access_token', data.token);
			localStorage.setItem('profileImage', data.profileImage);
			Cookies.set("month", data.poolMonth);
			Cookies.set("campusId", data.campusId);
			Cookies.set("cursusId", data.cursusId);
			Cookies.set("pageNumber", data.pageNumber);
			Cookies.set("poolYear", data.poolYear);
			Cookies.set("profileImage", data.profileImage);
			await getapi("https://leets1337-test-af8d38d88919.herokuapp.com/api/v1/home", Cookies.get('access_token'));
			seTrue(true);
		}).catch((error) => {
			console.log("Error in fetching ", error);
			window.location.href = "https://1337leets.com";
		});
	}
	
useEffect(() => {
	setTimeout( async () => {
		if (Cookies.get('access_token') == undefined || !Cookies.get('access_token')) {
			functionapi('https://leets1337-test-af8d38d88919.herokuapp.com/api/v1/authenticate');
		}
	}, 300);
}, [])

useEffect( async () => {
	setTimeout(async () => {
		Cookies.get('access_token') &&
			await getapi("https://leets1337-test-af8d38d88919.herokuapp.com/api/v1/home", Cookies.get('access_token'));
	}, 1200);
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
            starCount={800}
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