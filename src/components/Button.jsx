import React from "react";

export default function Button(props) {
  return (
    <div>
      <button className="py-4 px-8 border border-solid border-black  justify-center cursor-pointer items-center rounded-[40px]">
        {props.title}
      </button>
    </div>
  );
}
