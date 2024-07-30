import React from "react";
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

export function Home() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [value, setValue] = useState(80);
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
      <Nav />
      <Selector />
      <Scrool />
    </div>
  );
}