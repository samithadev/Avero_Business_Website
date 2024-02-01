import React, { useState } from "react";
import img1 from "../../../assets/solution1.png";
import img2 from "../../../assets/solution2.png";
import img3 from "../../../assets/solution3.png";
import img4 from "../../../assets/solution4.png";
import img5 from "../../../assets/solution5.png";
import img6 from "../../../assets/solution6.png";

export default function SolutionSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const solutions = [
    { title: "Embedded Systems Development", img: img1 },
    { title: "System Integration", img: img2 },
    { title: "Test Automation", img: img3 },
    { title: "Professional Services", img: img4 },
    { title: "Application Development", img: img5 },
    { title: "Verification and Validation", img: img6 },
  ];

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center text-center w-full gap-8 mb-16 2xl:pt-[85px] 2xl:pb-[103px] 2xl:px-[246px] 2xl:justify-between">
      {/* title tabs */}
      <div className="flex flex-col gap-3">
        <h1 className=" text-5xl mb-6 2xl:mb-14 2xl:text-start">
          Lorem ipsum
          <br />
          <span className=" font-bold">connecter</span> Auctor
        </h1>
        {solutions.map((items, index) => (
          <div
            className={`cursor-pointer flex flex-row justify-between pb-8 border-solid 2xl:w-[558px] 2xl:mb-12 text-ash border-ash border-b hover:text-black hover:border-black text-2xl font-normal ${
              hoveredIndex === index ? "text-black border-black" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)}
          >
            <h1>{`${index + 1}`}</h1>
            <h1>{items.title}</h1>
          </div>
        ))}
      </div>

      {/* image & description */}
      <div className="flex flex-col items-center text-center 2xl:text-start 2xl:items-start ">
        <img
          src={solutions[hoveredIndex].img}
          alt="img"
          className="transition-all duration-500 2xl:w-[320px] mb-[20px] 2xl:mb-[51px]"
        />
        <p className=" text-xl font-normal leading-8 w-[570px]">
          Access to the right engineering staff and embedded control systems
          expertise to design and integrate your product correctly, the first
          time.
        </p>
      </div>
    </div>
  );
}
