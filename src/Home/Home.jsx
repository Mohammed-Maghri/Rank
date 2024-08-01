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
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(true);
  const [value, setValue] = useState(80);
  const navigate = useNavigate();
  const [timer , setTimer] = useState(false);
  const test = {code: ""};
  const [token, setToken] = useState("");
  const [number, setNumber] = useState(0);
  const obj = {access_token: ""};
  const {all} = useContext(context);
  const getapi = (api, testtok) => {
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
      all.push(data);
    }).catch((err) => {
      console.log(err);
    })
  }
  const functionapi = (api) => {
    // const url = new URLSearchParams(window.location.search);
    // console.log("this  "  + url.get('code'));
    // test.code = url.get('code');
    console.log(test);
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(test),
  }).then(response => response.json())
    .then(data => {
      Cookies.set('access_token', data.access_token);
    }).catch((error) => {
      console.log("waaa error ");
    });
  }
  test.code = new URLSearchParams(window.location.search).get('code');
  useEffect(() => {
    functionapi('http://10.32.100.25:8080/api/v1/authenticate');
      getapi("http://10.32.100.25:8080/api/v1/campus/users", Cookies.get('access_token'));
    setTimeout(() => {
      if (logs == true){
        setVisible(true);                                                                                                                                                                                                                                                                                                    
      }
      else
      navigate('/');
      setVisible2(false);
  }, 1000);
  }, [logs]);

  console.log("this is the code " + Cookies.get('access_token'));
  setTok(Cookies.get('access_token'));
  getapi("http://10.32.100.25:8080/api/v1/campus/users ", Cookies.get('access_token'));
  const student = [{pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 80, rank : 4, promo : "2023", campus : "Khouribga"}, 
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 80, rank : 3, promo : "2023", campus : "Khouribga"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 70, rank : 3, promo : "2023", campus : "Khouribga"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 20, rank : 3, promo : "2023", campus : "Khouribga"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 90, rank : 2, promo : "2023", campus : "Khouribga"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 99, rank : 1, promo : "2023", campus : "Khouribga"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 99, rank : 1, promo : "2023", campus : "Khouribga"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 20, rank : 1, promo : "2023", campus : "Khouribga"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 20, rank : 1, promo : "2023", campus : "Khouribga"}
  ];
  return (
    <div className="flex items-center w-[100%]  flex-col justify-center h-screen bg-black ">
        {visible2 &&
          <Load/>
        }
        {visible &&
        <>
          <Nav />
          <Selector />
          <Scrool />
        </>
        }
    </div>
  );
}