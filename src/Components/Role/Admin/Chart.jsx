import React from "react";
import chart from "../Admin/chart.png";

export default function Chart() {
  return (
    <div className="absolute left-1/3 bottom-2 w-[33vw] h-[68vh] flex justify-center items-center">
      <div className="w-[90%] h-[95%] flex justify-center items-center bg-main rounded-2xl">
        <div className="relative w-[90%] h-[95%]">
          <img src={chart} alt="" className="w-full h-full" />
          <div className="absolute top-[47.5%] -left-5 w-[110%] z-10 h-5 bg-main"></div>
        </div>
      </div>
    </div>
  );
}
