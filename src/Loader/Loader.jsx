import React from "react";
import "./Loader.css";

export default function Loads() {
    return (
        <div className="w-[400px] h-[400px] flex items-center justify-center">
            <span className="loading w-[100%] h-[100%] loading-ring loading-lg"></span>
        </div>
    );
}