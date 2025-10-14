import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="wrapper  h-100 w-110 relative bg-purple-300 rounded-[30px]">
      <form action="" className="ml-10 mr-10">
        <h1 className="text-4xl font-bold flex justify-center mt-5 text-white">
          Login
        </h1>
        <div className="relative">
          <input
            className="bg-sky-300 w-full py-3 px-10 rounded-[30px] text-white text-xl mt-4 border border-gray-400 bg-transparent focus:outline-none focus:ring-0"
            type="text"
            placeholder="Username"
            required
          />
          <FaUser className="absolute top-8 left-82 text-white" />
        </div>
        <div className="relative">
          <input
            className="bg-sky-300 w-full py-3 px-10 rounded-[30px] text-white text-xl mt-4 border border-gray-400 bg-transparent focus:outline-none focus:ring-0"
            type="password"
            placeholder="Password"
            required
          />
          <FaLock className="absolute top-8 left-82 text-white" />
        </div>
        <div className="flex justify-between text-white mt-5 px-10">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">forgot password?</a>
        </div>
        <button
          className="mt-5  text-white px-40 ml-3 rounded-[20px] text-xl font-bold border border-gray-400 bg-transparent focus:outline-none focus:ring-0 cursor-pointer"
          type="submit"
        >
          Login
        </button>
        <div className="flex justify-center gap-4 mt-5 text-white ">
          <p className="cursor-pointer">Don't have an account?</p>{" "}
          <a className="font-bold" href="#">
            Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
