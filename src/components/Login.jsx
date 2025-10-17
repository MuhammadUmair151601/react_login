import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="h-100 w-110 rounded-[30px] bg-yellow-600">
      <form action="" className="ml-10 mr-10 bg-yellow-600 font-bold">
        <h1 className="text-4xl font-bold flex justify-center mt-5 text-black">
          Welcome Back!
        </h1>
        <div className="relative">
          <input
            className="w-full py-3 px-10 rounded-[30px] text-black text-xl mt-4 border border-gray-400 focus:outline-none focus:ring-0"
            type="text"
            placeholder="Username"
            required
          />
          <FaUser className="absolute top-8 left-82 text-black" />
        </div>
        <div className="relative">
          <input
            className="w-full py-3 px-10 rounded-[30px] text-black text-xl mt-4 border border-gray-400 focus:outline-none focus:ring-0"
            type="password"
            placeholder="Password"
            required
          />
          <FaLock className="absolute top-8 left-82 text-black" />
        </div>
        <div className="flex justify-between text-white mt-5 px-10">
          <label className="text-black">
            <input type="checkbox" />
            Remember me
          </label>
          <a className="text-black" href="#">forgot password?</a>
        </div>
        <button
          className="mt-5 text-black px-38 rounded-[20px] text-xl font-bold border border-gray-400 focus:outline-none focus:ring-0 cursor-pointer hover:bg-yellow-800"
          type="submit"
        >
          Login
        </button>
        <div className="flex justify-center gap-4 mt-5 text-black ">
          <p className="cursor-pointer">Don't have an account?</p>
          <a className="font-bold" href="#">
            Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
