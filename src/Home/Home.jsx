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
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(true);
  const [value, setValue] = useState(80);
  const navigate = useNavigate();
  const [timer , setTimer] = useState(false);

  console.log('this ' + logs);
  const functionapi = (api) => {
    fetch(api, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': "bearer 89ec76869ff03b80da5e91c9d6aaf87041bd9e509ea2ca5df653d46096ce0a51"
    }}).then(response => response.json())
    .then(data => {
      console.log(data);
    }).catch((error) => {
      console.error(error);
    });
  }

  functionapi('10.32.100.25:8080/api/v1/campus/users');
  useEffect(() => {
    setTimeout(() => {
      if (logs == true){
        setVisible(true);
      }
      else
        navigate('/');
      setVisible2(false);
  }, 1000);
  }, [logs, navigate, setVisible, setVisible2]);
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
      <Starfield
            starCount={40000}
            starColor={[255, 255, 0]}
            speedFactor={0.01}
            backgroundColor="black"
          />
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