import React, { useContext, useState } from "react";
import "./Sekector.css";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { IoMdLogOut } from "react-icons/io";
import {functionVisible, Nav} from "../Nav/Nav";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaSearch, FaLeaf } from "react-icons/fa";
import { context } from "../context";
import Cookies from "js-cookie";

export function Selector() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [value, setValue] = useState(false);
  const { pol, setPol } = useContext(context);
  const [addyear, setAddyear] = useState(2023);
  const [campus, setCampus] = useState(Cookies.get('campusId'));
  const [month, setMoth] = useState(1);
  const { pages, setPages } = useContext(context);
  const { loadingstate, setLoadingstate } = useContext(context);
  const [changed, setChange] = useState("Cursus");
  const [camp, setCamp] = useState("Campus");
  const { all, setAll } = useContext(context);
  const [onlyprom, setOnlyprom] = useState("Promo");
  const [logs, setLogs] = useState(false);

  const object = [{promo: 2018}, {promo: 2019}, {promo: 2020}, {promo: 2021}, {promo: 2022}, {promo: 2023}, {promo: 2024}];

  // { name: "Khouribga", id: 16 },
  // { name: "Bengrir", id: 21 },
  // { name: "Tetouan", id: 55 },
  // { name: "Rabat", id: 75 }
  return (
    <div className="w-full bg-yellow-50 h-10">
      
    </div>
  );
}
// <div className="w-full px-4 sm:px-6 md:px-8 py-2 z-40">
//   <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-3xl mx-auto">
//     <div className="relative w-full sm:w-auto">
//       <button
//         onClick={() => visible ? closeAllDropdowns() : (setVisible(true), setVisible2(false), setValue(false))}
//         className="w-full sm:w-[120px] h-10 rounded-xl bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center gap-2 text-white font-medium border border-white/20 hover:border-yellow-500 hover:bg-yellow-500/20 transition-all duration-300"
//       >
//         <span className="truncate">{camp}</span>
//         <FaChevronDown className="w-3 h-3" />
//       </button>
      
//       {visible && (
//         <div className="absolute mt-2 w-full sm:w-[140px] bg-black/90 backdrop-blur-md border border-yellow-500/30 rounded-xl shadow-xl shadow-black/20 py-2 z-50">
//           {[
//             { name: "Khouribga", id: 16 },
//             { name: "Bengrir", id: 21 },
//             { name: "Tetouan", id: 55 },
//             { name: "Rabat", id: 75 }
//           ].map((item) => (
//             <button
//               key={item.id}
//               onClick={() => {
//                 setCamp(item.name);
//                 setCampus(item.id);
//                 closeAllDropdowns();
//               }}
//               className="w-full px-4 py-2 text-left text-white hover:bg-yellow-500/20 transition-colors"
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>

//     <div className="relative w-full sm:w-auto">
//       <button
//         onClick={() => value ? closeAllDropdowns() : (setValue(true), setVisible(false), setVisible2(false))}
//         className="w-full sm:w-[120px] h-10 rounded-xl bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center gap-2 text-white font-medium border border-white/20 hover:border-yellow-500 hover:bg-yellow-500/20 transition-all duration-300"
//       >
//         <span className="truncate">{onlyprom}</span>
//         <FaChevronDown className="w-3 h-3" />
//       </button>

//       {value && (
//         <div className="absolute mt-2 w-full sm:w-[180px] bg-black/90 backdrop-blur-md border border-yellow-500/30 rounded-xl shadow-xl shadow-black/20 p-3 z-50">
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center justify-between">
//               <button onClick={() => (addyear == 2018 ? (setAddyear(2024)) : (setAddyear(addyear - 1)), funcSeter(addyear - 1, "-", "not"))} className="p-2 hover:bg-yellow-500/20 rounded-lg">
//                 <FaChevronLeft className="text-yellow-500 w-3 h-3" />
//               </button>
//               <span className="text-white font-medium">{addyear}</span>
//               <button onClick={() => ((setAddyear(addyear + 1)), funcSeter(addyear, "+", "not"))} className="p-2 hover:bg-yellow-500/20 rounded-lg">
//                 <FaChevronRight className="text-yellow-500 w-3 h-3" />
//               </button>
//             </div>
            
//             {pol !== 21 && (
//               <div className="flex items-center justify-between mt-2 pt-2 border-t border-yellow-500/20">
//                 <button onClick={() => (month == 1 ? (setMoth(12)) : (setMoth(month - 1)), funcSeter((month), "-", "pool"))} className="p-2 hover:bg-yellow-500/20 rounded-lg">
//                   <FaChevronLeft className="text-yellow-500 w-3 h-3" />
//                 </button>
//                 <span className="text-white font-medium">Month: {month}</span>
//                 <button onClick={() => (month == 12 ? (setMoth(1)) : (setMoth(month + 1)), funcSeter((month), "+", "pool"))} className="p-2 hover:bg-yellow-500/20 rounded-lg">
//                   <FaChevronRight className="text-yellow-500 w-3 h-3" />
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>

//     <div className="relative w-full sm:w-auto">
//       <button
//         onClick={() => visible2 ? closeAllDropdowns() : (setVisible2(true), setValue(false), setVisible(false))}
//         className="w-full sm:w-[120px] h-10 rounded-xl bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center gap-2 text-white font-medium border border-white/20 hover:border-yellow-500 hover:bg-yellow-500/20 transition-all duration-300"
//       >
//         <span className="truncate">{changed}</span>
//         <FaChevronDown className="w-3 h-3" />
//       </button>

//       {visible2 && (
//         <div className="absolute mt-2 w-full sm:w-[140px] bg-black/90 backdrop-blur-md border border-yellow-500/30 rounded-xl shadow-xl shadow-black/20 py-2 z-50">
//           <button
//             onClick={() => {
//               setOnlyprom("Month : " + month);
//               setChange("Pool");
//               setPol(9);
//               closeAllDropdowns();
//             }}
//             className="w-full px-4 py-2 text-left text-white hover:bg-yellow-500/20 transition-colors"
//           >
//             Pool
//           </button>
//           <button
//             onClick={() => {
//               setOnlyprom(addyear);
//               setChange("Cursus");
//               setPol(21);
//               closeAllDropdowns();
//             }}
//             className="w-full px-4 py-2 text-left text-white hover:bg-yellow-500/20 transition-colors"
//           >
//             Cursus
//           </button>
//         </div>
//       )}
//     </div>

//     <button
//       onClick={() => {
//         setLoadingstate(true);
//         setPages(2);
//         functionGet("https://api.1337leets.com/api/v1/home");
//         closeAllDropdowns();
//       }}
//       className="w-10 h-10 flex items-center justify-center rounded-xl bg-black bg-opacity-20 backdrop-blur-sm border border-white/20 hover:border-yellow-500 hover:bg-yellow-500/20 transition-all duration-300"
//     >
//       <FaSearch className="w-4 h-4 text-yellow-500" />
//     </button>
//   </div>
// </div>