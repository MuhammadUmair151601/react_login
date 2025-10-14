import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='wrapper bg-purple-500 h-100 w-100'>
      <form action="">
        <h1 className='text-3xl font-bold flex justify-center mt-5 text-white'>Login</h1>
        <div className='relative'>
          <input className='bg-sky-300 w-full py-3 px-10 rounded-[30px] text-white text-xl mt-4 border border-gray-400 bg-transparent focus:outline-none focus:ring-0' type="text" placeholder='Username' required />
          <FaUser className='absolute top-8 left-93 text-white' />
        </div>
        <div className='relative'>
          <input className='bg-sky-300 w-full py-3 px-10 rounded-[30px] text-white text-xl mt-4 border border-gray-400 bg-transparent focus:outline-none focus:ring-0' type="password" placeholder='Password' required />
          <FaLock className='absolute top-8 left-93 text-white' />
          </div>
          <div>
            <label><input type="checkbox"/>Remember me</label>
            <a href="#">forgot password?</a>
          </div>
          <button type='submit'>Login</button>
          <div>
            <p>Don't have an account?</p> <a href="#">Register</a>
          </div>
      </form>
    </div>
  )
}

export default Login