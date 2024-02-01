import React from "react";

export default function OurWorkCard(props) {
  return (
    <div className="group relative w-[360px] h-[380px] 2xl:w-[477px] 2xl:h-[510px] overflow-hidden inline-block rounded-2xl">
      <img
        src={props.image}
        alt="img"
        className=" group-hover:scale-105 transform transition duration-300"
      />

      <div className=" opacity-0 hover:opacity-100  bg-gradient-to-t from-black from-0% to-transparent to-30% absolute inset-0  translate-y-[20%] transition-all duration-500 group-hover:translate-y-0 flex items-end">
        <p className="text-white text-lg xl:text-xl xl:leading-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ml-4 mb-4 text-start xl:mb-8 xl:ml-8">
          {props.title}
        </p>
      </div>
    </div>
  );
}
