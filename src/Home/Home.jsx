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
import { useNavigate } from "react-router-dom";
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

	const  getapi =  (api, testtok) => {
		obj.access_token = testtok;
		fetch(api ,{
			method: 'POST',
			headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    }).then((res) => {
		return res.json();
    }).then((data) => {
		setAll(data);
		setTimeout(() => {
			setLogs(true);
		});
    }).catch((err) => {
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
		console.log(data.access_token);
		Cookies.set('access_token', data.access_token);
		seTrue(true);
    }).catch((error) => {
      console.log(error);
    });
}

useEffect(() => {
	const val  =  new URLSearchParams(window.location.search).get('code');
	test.code = val;
	functionapi('https://leets1337-3f387c570577.herokuapp.com/api/v1/authenticate');
}, [])

useEffect(() => {
	console.log("ee" , Cookies.get('access_token'));
	getapi("https://leets1337-3f387c570577.herokuapp.com/api/v1/campus/users", Cookies.get('access_token'));
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