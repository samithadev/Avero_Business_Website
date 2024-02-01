import React from "react";
import aboutImg from "../../../assets/aboutImg.png";
import Button from "../../../components/Button";

export default function AboutSection() {
  return (
    <div className="flex flex-col xl:flex-row w-full justify-center mb-16 gap-3 items-center text-center 2xl:px-[228px] 2xl:justify-between  2xl:text-start 2xl:pb-[155px] ">
      <div className="flex flex-col gap-5 2xl:gap-10">
        <h1 className=" text-5xl leading-[64px]">
          The Avero
          <br /> Difference
          <span className=" font-bold">
            {" "}
            embedded
            <br /> finance engine
          </span>
        </h1>
        <p className=" font-normal text-xl leading-10 w-[570px]">
          Trusted experts who go the extra mile for customers to provide
          turn-key solutions, complete system integration, and comprehensive
          support.
        </p>
        <div>
          <Button title="Learn More" />
        </div>
      </div>

      <div className="w-[350px] 2xl:w-[560px]">
        <img src={aboutImg} alt="img" />
      </div>
    </div>
  );
}
