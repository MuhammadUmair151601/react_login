import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1 className='text-3xl font-bold'>Login</h1>
        <div>
          <input type="text" placeholder='Username' required />
          <FaUser />
        </div>
        <div>
          <input type="password" placeholder='Password' required />
          <FaLock />
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