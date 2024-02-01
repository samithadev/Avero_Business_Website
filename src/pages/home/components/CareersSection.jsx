import React from "react";
import img1 from "../../../assets/careers1.png";
import img2 from "../../../assets/careers2.png";
import Button from "../../../components/Button";

export default function CareersSection() {
  return (
    <div className="flex flex-col xl:flex-row  justify-center lg:text-start xl:gap-10 2xl:px-[245px] 2xl:justify-between 2xl:py-[112px]">
      <div className="flex flex-col gap-3 items-center my-8 xl:items-start">
        <text className=" text-base">CAREERS</text>
        <text className=" text-6xl">
          Be a part of <br /> our story
        </text>
        <text className=" text-xl text-ash leading-9">
          At Avero, we're always looking for creative
          <br /> problem solvers to join our team
        </text>
        <div className="mt-[30px] 2xl:mt-[60px]">
          <Button title="Join Now" />
        </div>
      </div>

      <div className="flex flex-row gap-5 justify-center my-8">
        <img
          src={img2}
          alt="img2"
          className=" w-[225px] md:w-[325px] 2xl:w-[415px] 2xl:h-[577px]"
        />
        <img
          src={img1}
          alt="img1"
          className=" w-[225px] md:w-[325px] 2xl:w-[415px] 2xl:h-[577px]"
        />
      </div>
    </div>
  );
}
