import React, { useEffect } from "react";
import "../Scrol/Scrol.css";
import Starfield from 'react-starfield';
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function Model() {
    const [setthis, setThis] = useState("");
    const [model, setModel] = useState([]);
    const [fill , setFill] = useState("");
    const [respond, setRespond] = useState([]);
    const [flg, setFlg] = useState(false);
    const [value, setValue] = useState(1);
    const [old, setOld] = useState(0);
    const [seeen , setSeen] = useState(false);
    const [api, setApi] = useState("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDj3X9KrzfNFv_Yd-UvTtLeFMlMB_Jbwec");

    const navigate = useNavigate();
    if (Cookies.get('log') == undefined) {
        navigate("/");}
    
    const addAns = (te) => {
        const tdel = {
            id: Date.now(), 
            Ai : te
        };
        setModel([...model, tdel]);
    }
    const fetchModel = async (api) => {
        await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
        },
        body: JSON.stringify({"contents":[
            {
                "role": "user",
                "parts":[{"text": fill}]
            }]
        })})
        .then(response => response.json()).then(data => {setSeen(false); addAns(data.candidates[0].content.parts[0].text)}).catch((err) => {console.log(err);});
    }

    useEffect(() => {
        if (value > old)
            fetchModel(api);
        setOld(value);
    }, [value])

    const functionAddmodel = (th) => {
        setThis("");
        setSeen(true);
        const newModl = {
            id: Date.now(),
            text: th
        };
        setModel([...model, newModl]);
        setTimeout(() => {
            setValue((prev) => prev + 1);
        }, 1000);
    }
    const fillInput = (e) => {
        setThis(e.target.value);
        setFill(e.target.value);
    }
    const onKey = (e) => {
        if (e.key === "Enter")
            functionAddmodel(fill);
      }
    return (
        <div className="flex items-center justify-start flex-col bg-black h-[100vh]">
            <Starfield
            starCount={700}
            starColor={[255, 255, 0]}
            speedFactor={0.04}                                                                                    
            backgroundColor="black"
            />
             <div className="md:w-[60%] flex flex-col  gap-5  rounded-[20px]  h-[80%] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="w-[80%] h-[90%]"> </div>
    {
        model.map((item, index) => (
            <>
            {item.text &&
                <div key={index} className="w-[100%] flex items-center justify-end ">
                    <div className="chat chat-end w-[60%]">
                        <div className="chat-bubble text-white">{item.text}</div>
                    </div>
                </div>
            }
            {item.Ai &&
                <div key={index} className="w-[100%] flex items-center justify-start ">
                    <div className="chat chat-start w-[60%]">
                        <div className="chat-bubble bg-slate-800 text-white font-bold font-bars2">{item.Ai}</div>
                    </div>
                </div>
            }
            </>
        ))
    }
</div>
            {
                seeen &&
                <div className="flex items-center justify-center  w-[100%] h-[40px]">
                <span className="loading loading-infinity bg-white loading-[80px]"></span>
            </div>
            }
            <div className="md:w-[60%] mt-[20px]  gap-2 flex items-center justify-center h-[60px] rounded-[15px]">
                <input onKeyDown={(e) => (onKey(e))} onChange={(e) => (fillInput(e))} value={setthis} type="text" placeholder="Type here" className="input w-[100%] bg-slate-900 placeholder-white text-white input-bordered " />
                <div className="w-[40px] h-[40px] flex items-center justify-center ">
                    <IoSend onClick={() => (functionAddmodel(fill))} className="w-[40px] cursor-pointer duration-200 text-white hover:scale-105 h-[40px]" />
                </div>
            </div>
        </div>
    );
}