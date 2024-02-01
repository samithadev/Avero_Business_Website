import React from "react";
import background from "../../../assets/bg.png";

export default function Hero() {
  return (
    <div className="">
      <div className="">
        <div className="absolute inset-0 lg:bg-gradient-to-b from-black from-0% to-transparent to-30%"></div>
        <img src={background} alt="background" className="w-full" />
      </div>

      <div className="ml-[50px] gap-2 text-white mt-[-222px] mb-32 2xl:ml-[100px] 2xl:mb-[166px] 2xl:mt-[-422px]">
        <div>
          <text className="text-2xl leading-[40px] 2xl:text-[32px]">
            Extra Aspirational
          </text>
        </div>
        <div>
          <text className="font-[400px] text-[58px] lg:text-[88px] leading-[74px] 2xl:text-9xl 2xl:leading-[104px] ">
            Avero. Pushing
            <br />
            engineering forward.
          </text>
        </div>
      </div>
    </div>
  );
}
