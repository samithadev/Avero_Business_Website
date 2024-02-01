import React from "react";
import Button from "./Button";

export default function BlogCard(props) {
  return (
    <div className="flex-shrink-0 mr-4 text-start">
      <div className="my-3 hover:scale-105 transform transition duration-300">
        <img
          src={props.image}
          alt="img"
          className=" rounded-xl w-[415px] h-[350px] object-cover "
        />
      </div>
      <h1 className=" font-normal text-xl leading-10">{props.title}</h1>
      <p className=" text-ash">{props.description}</p>
      <div className="mt-5">
        <Button title="Learn More" />
      </div>
    </div>
  );
}
