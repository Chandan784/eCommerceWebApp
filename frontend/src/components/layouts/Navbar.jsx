import React from "react";
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  return (
    <div
      style={{
        height: "10vh",

        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "blue",
        padding: "10px",
        fontSize: "15px",
      }}
    >
      <div className="flex items-center gap-2 text-black">
        <FaBars />
        <h1 className="text-black">MACRAME</h1>
      </div>

      <div className="right p-1 font-serif flex items-center gap-2">
      <a href="/cart" className="relative inline-block">
  {/* Cart icon */}
  <IoCart className="text-3xl" />

  {/* Badge */}
  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white transform translate-x-1/4 -translate-y-1/4 shadow-sm">
    42
  </span>
</a>


        <a href="/Login" className="text-xs">
          <button className="rounded-lg mt-1 text-white border-1 border-amber-100 bg-blue-700 px-6 py-2">
            LogIn
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
