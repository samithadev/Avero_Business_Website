import React from "react";
import img1 from "../../../assets/industry1.png";
import img2 from "../../../assets/industry2.png";
import img3 from "../../../assets/industry3.png";
import img4 from "../../../assets/industry4.png";
import IndustryCard from "../../../components/IndustryCard";

export default function IndustrySection() {
  return (
    <div>
      <div className=" mx-10 mb-20 2xl:w-[700px] 2xl:ml-[390px] 2xl:mt-[262px] 2xl:mb-[119px]">
        <p className=" text-2xl font-normal leading-10">
          Traditional: Aversan delivers leading-edge and reliable
          safety-critical electronics, software systems, expert resources and
          business-fortifying solutions.
        </p>
      </div>

      <div className=" flex flex-col mx-[50px] 2xl:flex-row 2xl:justify-center 2xl:mx-[100px] 2xl:gap-1">
        <div className="my-12">
          <div className=" text-base font-normal text-center p-3 gap-3 border-solid border-t border-black 2xl:text-start leading-[48px]">
            <h1>Nuclear</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-center 2xl:gap-1 gap-10">
            <IndustryCard image={img1} title="Aerospace & Defence" />

            <IndustryCard image={img2} title="Digital Health" />
          </div>
        </div>

        <div className="my-12">
          <div className=" text-base font-normal text-center p-3 gap-3 border-solid border-t border-black 2xl:text-start leading-[48px]">
            <h1>Automotive</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-center 2xl:gap-1 gap-10">
            <IndustryCard image={img3} title="Railway & Transportation" />

            <IndustryCard image={img4} title="Medical Devices" />
          </div>
        </div>
      </div>
    </div>
  );
}
