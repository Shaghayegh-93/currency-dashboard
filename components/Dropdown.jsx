import React, { useState } from "react";

const Dropdown = () => {
  return (
    <div className="flex flex-col relative ">
      <label htmlFor="menu" className="border w-max py-2 px-5 rounded-md">
        <h2>select</h2>
      </label>

      <input
        type="checkbox"
        name="menu"
        id="menu"
        className=" w-[40px] h-5  peer hidden opacity-0"
      />
      <ul className="bg-yellow-400 absolute overflow-hidden px-3 rounded-md top-full max-h-0 peer-checked:max-h-[1000px] transition-all duration-300 ">
        <li>DAY</li>
        <li>WEEK</li>
        <li>MONTH</li>
        <li>YEAR</li>
      </ul>
    </div>
  );
};

export default Dropdown;
