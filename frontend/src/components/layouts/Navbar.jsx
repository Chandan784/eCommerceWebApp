import React from "react";
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navbar() {

  

  return (
    <div
      style={{
        height: "10vh",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        padding: "10px",
        fontSize: "15px",
      }}
    >
      <div className="font-bold">
        <h1 className="">MACRAME</h1>
      </div>
      <div className="right p-5 font-serif flex">
        <a href="/home" className="p-3">
          Home
        </a>
        <a href="/about" className="p-3">
          About
        </a>
        <a href="/contact" className="p-3">
          Contact
        </a>
        <a href="/cart" className="p-3 text-xl"><IoCart />
        </a>
        <a href="/Login" className="p-3 text-xs">
          <button className="rounded-5xl mt-1 border-1 border-amber-100 ">LogIn</button>
        </a>
        
      </div>
    </div>
  
  );
}

export default Navbar;
