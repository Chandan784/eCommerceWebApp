import React from "react";

function Login() {
  return (
    <>
      <div className="flex flex-col m-auto mt-3 p-5 h-70 w-70 border-1 border-gray-500 text-xs text-gray-700 font-serif">
        <div>
          <div className="flex justify-center text-xl">Sign in</div>
          <div>
            <div className="mb-1">
              Name :
              <br />
              <input
                type="Text"
                placeholder="Enter Your Name"
                className="border-1 border-gray-500 w-full h-7"
              />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <input
                type="Text"
                placeholder="Enter Your Email"
                className="border-1 border-gray-500 w-full h-7 mb-1"
              />
            </div>
            <div>
              <label>Password:</label>
              <br />
              <input
                type="Text"
                placeholder="Enter Your Password"
                className="border-1 border-gray-500 w-full h-7"
              />
            </div>
            <button className="justify-center bg-blue-600 text-white w-full mt-3 h-7">
              Sign in
            </button>
          </div>
          <div className="m-2 flex flex-col items-center">
            <div className="mb-1">
              Forget
              <a href="" className="text-blue-500">
                {" Password"}
                
              </a>
            </div>
            <div>
              Creat New /
              <a href="" className="text-blue-500">
                {"Sign in"}
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
