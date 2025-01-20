import React from "react";
import "./Loader.css";

export default function Loads() {
    return (
        <div className="w-full max-w-[400px] aspect-square flex items-center justify-center z-40 px-4">
            <span className="loading loading-ring w-full h-full bg-yellow-500 loading-md"></span>
        </div>
    );
}