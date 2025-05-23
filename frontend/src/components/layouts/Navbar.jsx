import React from "react";

function Navbar() {
  return (
    <div style={{ height: "10vh", 
    backgroundColor: "blue",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    color:"white",
    padding:"20px",
    fontSize:"13px" }}>
      <div className="font-bold">
        <h1 className="">MACRAME</h1>
      </div>
      <div className="right p-8 font-bold" >
        <a href="/home" className="p-7">HOME</a>
        <a href="/about"className="p-7">ABOUT</a>
        <a href="/contact"className="p-7">CONTACT</a>
        <a href="/service"className="p-7">SERVICES</a>
      </div>
    </div>
  );
}

export default Navbar;
