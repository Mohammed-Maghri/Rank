import { useState } from "react";
import "../../sheets.css";

const getRangeWidth = (rangeValue) => {
  if (rangeValue === 0) return 0;
  else if (rangeValue === 1) return 20;
  else if (rangeValue === 2) return 40;
  else if (rangeValue === 3) return 60;
  else if (rangeValue === 4) return 80;
  else return 100;
};

const getRangeColor = (rangeValue) => {
  if (rangeValue === 0) return "#eee";
  else if (rangeValue === 1) return "#bf746b";
  else if (rangeValue === 2) return "#A68567";
  else if (rangeValue === 3) return "#bE9664";
  else if (rangeValue === 4) return "#75a760";
  else return "#5cb85c";
};

const SubmitCorrectionSlider = () => {
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <div className="w-full my-4">
      <div className="w-full flex flex-col gap-2 items-center">
        <div className="text-center text-sm font-semibold">
          Rate it from 0 (failed) through 5 (excellent)
        </div>
        <div className="relative w-full h-[15px] bg-[#e3e3e3] rounded-lg mb-3 max-w-[800px]">
          <input
            className="submit-coreection-slider h-[50px] rounded-lg bg-[#e6e6e6] absolute range-input w-full z-30 opacity-0"
            type="range"
            min="0"
            max="5"
            onChange={(e) => {
              setRangeValue(parseInt(e.target.value));
            }}
          />
          <div
            style={{
              width: `${getRangeWidth(rangeValue)}%`,
              backgroundColor: getRangeColor(rangeValue),
              color: getRangeColor(rangeValue),
            }}
            className="h-[15px] text-sm absolute text-center rounded-lg"
          >
            -
          </div>
          <div
            style={{ left: `${getRangeWidth(rangeValue) - 2}%` }}
            className="absolute  w-[35px] h-[35px] bg-[#efefef] rounded-full bottom-[-7px] flex items-center justify-center text-sm font-extrabold"
          >
            {rangeValue}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default SubmitCorrectionSlider;
