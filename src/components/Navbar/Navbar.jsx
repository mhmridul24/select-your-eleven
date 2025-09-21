import React from "react";
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar.png";

const Navbar = () => {
  return (
    
      <div className="navbar max-w-[1200px] mx-auto ">
        <div className="flex-none"></div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-1">6000000 </span>
          <span className="mr-1">Coin</span>
          <img className="w-[20px] h-[20px]" src={dollarImg} alt="" />
        </div>
      </div>
    
  );
};

export default Navbar;
