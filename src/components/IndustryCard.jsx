import React from "react";
import arrow from "../assets/Arrow.png";

export default function IndustryCard(props) {
  return (
    <div className="group relative w-[360px] h-[480px] 2xl:w-[426px] 2xl:h-[573px] overflow-hidden inline-block hover:rounded-2xl transition-all duration-500 ">
      <img
        src={props.image}
        alt="img"
        className=" group-hover:scale-105 transform transition duration-300"
      />

      <div class="absolute inset-0 bg-black/40  group-hover:bg-transparent transition-all duration-500  "></div>

      <div className="absolute bg-white inset-0  translate-y-[100%] transition-all duration-500 group-hover:translate-y-[390px] 2xl:group-hover:translate-y-[483px] flex items-start flex-row justify-between ">
        <div className="w-full flex flex-row justify-between my-8 px-4">
          <p className="text-black text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-start">
            {props.title}
          </p>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
