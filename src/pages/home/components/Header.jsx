import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.png";
import logowhite from "../../../assets/logoWhite.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  let [open, setOpen] = useState(false);

  let [isLargeScreen, setIsLargeScreen] = useState(false);

  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handler = (event) => setIsLargeScreen(event.matches);
    mediaQuery.addEventListener("change", handler);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      mediaQuery.removeEventListener("change", handler);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`lg:${
        isScrolled ? "bg-white" : "bg-transparent shadow-none text-white"
      } text-black shadow-md fixed w-full z-10 bg-white `}
    >
      <div className="flex lg:flex items-center justify-between py-4 lg:px-10 px-5 pt-6 2xl:px-20 xl:px-[60px] h-20">
        <div className="flex flex-row items-center gap-[100px]">
          {isLargeScreen ? (
            <img
              src={isScrolled ? logo : logowhite}
              alt="Logo"
              id="Logo"
              className="mt-[-11.11px] lg:mt-0"
            />
          ) : (
            <img
              src={logo}
              alt="Logo"
              id="Logo"
              className="mt-[-11.11px] lg:mt-0"
            />
          )}

          <ul
            className={` bg-white lg:bg-transparent  gap-12 lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static  lg:z-auto z-[-1] left-0 w-full lg:w-auto   ${
              open
                ? "top-20 text-center text-black"
                : "top-[-490px] text-center"
            }`}
          >
            <li className=" text-base lg:my-0 my-7 cursor-pointer">About</li>
            <li className=" text-base lg:my-0 my-7 cursor-pointer">
              Solutions
            </li>
            <li className="text-base lg:my-0 my-7 cursor-pointer">Our Work</li>
            <li className=" text-base lg:my-0 my-7 cursor-pointer">
              Resources
            </li>
          </ul>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-black  right-8 top-6 cursor-pointer lg:hidden absolute"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <div>
          <button
            className={`text-base py-4 px-8 border border-solid  justify-center  cursor-pointer items-center rounded-[40px] mr-16 lg:mr-0 ${
              isLargeScreen
                ? isScrolled
                  ? "border-black text-black"
                  : "border-white text-white"
                : "border-black text-black"
            } `}
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
}
