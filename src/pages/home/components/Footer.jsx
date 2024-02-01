import React from "react";
import instagram from "../../../assets/instagram.png";
import linkedin from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";

export default function Footer() {
  return (
    <div className="bg-text flex flex-col justify-between w-full items-center pt-[100px] pb-[80px] 2xl:px-[228px]">
      <div className="flex flex-col w-full 2xl:flex-row justify-between">
        <div className="text-2xl leading-[40px] text-white mt-[40px] text-center 2xl:text-start">
          Avero Inc. is a multi-service engineering firm
          <br />
          specializing in design, build, testing, certification,
          <br />
          and support services for embedded flight systems
          <br />& software, health technology, and advanced IT.
        </div>
        <div className="flex flex-col gap-8  mt-[40px] text-center 2xl:text-start">
          <div className="leading-[40px] text-white">What we do</div>
          <ul className="flex flex-col justify-between gap-2 w-full text-xl leading-[40px] text-[#b3b3b3]">
            <li>Product development</li>
            <li>System Integration</li>
            <li>Test Automation</li>
            <li>Independent Verification & Validation</li>
            <li>Application development</li>
            <li>Professional Services</li>
          </ul>
        </div>
        <div className="flex flex-col gap-8  mt-[40px] text-center 2xl:text-start">
          <div className="leading-[40px] text-white">industries</div>
          <ul className="flex flex-col justify-between gap-2 w-full text-xl leading-[40px] text-[#b3b3b3]">
            <li>Aerospace & Defense</li>
            <li>Medical Devices</li>
            <li>Digital Health</li>
            <li>Rail & Transportation</li>
          </ul>
        </div>
      </div>

      <div className=" flex flex-col 2xl:flex-row items-center justify-between w-full mt-[40px] 2xl:mt-[200px] gap-5">
        <div className=" 2xl:justify-between flex flex-row gap-[60px] ">
          <text className="text-xs text-white">Terms & Conditions</text>
          <text className="text-xs  text-white">Privacy Policy</text>
        </div>
        <div className="flex flex-col 2xl:flex-row  items-center gap-5 2xl:justify-between 2xl:w-1/2 ">
          <div className="flex flex-row gap-[60px] ">
            <div className="text-xl  text-[#b3b3b3]">Culture</div>
            <div className="text-xl  text-[#b3b3b3]">Careers</div>
          </div>
          <div className="flex flex-row justify-between w-[128px]">
            <img src={linkedin} alt="linkedin" className="w-6 h-6" />
            <img src={instagram} alt="instagram" className="w-6 h-6" />
            <img src={twitter} alt="twitter" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
