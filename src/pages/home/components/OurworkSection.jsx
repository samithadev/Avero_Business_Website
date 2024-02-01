import React from "react";
import work1 from "../../../assets/work1.png";
import work2 from "../../../assets/work2.png";
import work3 from "../../../assets/work3.png";
import work4 from "../../../assets/work4.png";
import OurWorkCard from "../../../components/OurWorkCard";

export default function OurworkSection() {
  const imagesData = [
    {
      image: work1,
      title:
        "Consent Directive for provincial Integrated Client Management System",
    },
    {
      image: work2,
      title: "Cancer Screen Reporting Portal Implementation in Sharepoint",
    },
    {
      image: work3,
      title: "Automated Test Equipment for Landing Gear System Production",
    },
    {
      image: work4,
      title: "Automated Test Equipment for Landing Gear System Production",
    },
    {
      image: work1,
      title:
        "Consent Directive for provincial Integrated Client Management System",
    },
    {
      image: work2,
      title: "Cancer Screen Reporting Portal Implementation in Sharepoint",
    },
    {
      image: work3,
      title: "Automated Test Equipment for Landing Gear System Production",
    },
    {
      image: work4,
      title: "Automated Test Equipment for Landing Gear System Production",
    },
  ];

  const scrollbarHideStyles = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": { display: "none" },
  };

  return (
    <div className="flex flex-col mb-16 gap-3 text-center 2xl:text-start 2xl:gap-16 2xl:pb-[188px]">
      <div className="flex flex-col 2xl:gap-3 2xl:ml-[245px]">
        <h2 className="text-base">OUR WORK</h2>
        <p className="text-5xl 2xl:text-[64px] pb-5">
          vital component of global transportation,
          <br />
          connecting people and goods
        </p>
      </div>
      <div
        className="flex overflow-x-auto overflow-hidden"
        style={scrollbarHideStyles}
      >
        <div className="flex space-x-4 px-4 2xl:pl-[245px] 2xl:gap-[96px]">
          {imagesData.map((item, index) => (
            <OurWorkCard key={index} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
