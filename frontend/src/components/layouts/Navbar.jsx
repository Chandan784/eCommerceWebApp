import React from "react";

function Navbar() {
  return (
    <div style={{ height: "10vh", 
    backgroundColor: "blue",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    color:"white",
    padding:"30px",
    fontSize:"30px" }}>
      <div className="left">
        <h1 className="">Macramee</h1>
      </div>
      <div className="right p-8">
        <a href="/home" className="p-8">Home</a>
        <a href="/about"className="p-8">About</a>
        <a href="/contact"className="p-8">Contact</a>
        <a href="/service"className="p-8">Service</a>
      </div>
    </div>
  );
}

export default Navbar;
