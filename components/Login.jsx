/* eslint-disable @next/next/no-img-element */
import React from "react";
import ArrowDown from "../public/assets/svg/arrow-down.svg";
import Search from "./SearchInput";
const Login = () => {
  return (
    <div className="p-[20px] flex items-center justify-between bg-yellow-200">
      <div className="flex-1">
        <h2 className="font-bold text-xl">Dashboard</h2>
      </div>
      <div className="flex items-center">
        <div className="mr-10">
          <Search />
        </div>

        <div className="flex items-center">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden mr-6">
            <img
              src="/assets/img/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mr-2">sfbshajhdfgfgdgrtfgbaj</p>
          <span className="w-5 flex items-center ">
            <ArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
