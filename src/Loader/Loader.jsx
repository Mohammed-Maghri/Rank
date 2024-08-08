import React from "react";
import "./Loader.css";

export default function Loads() {
    return (
        <div className="w-[400px] h-[400px] flex items-center justify-center">
            <span className="loading loading-infinity w-[100%] h-[100%] bg-yellow-500  loading-lg"></span>
        </div>
    );
}