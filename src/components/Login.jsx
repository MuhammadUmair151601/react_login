import React from 'react'

const Login = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div>
          <input type="text" placeholder='Username' required />
        </div>
        <div>
          <input type="password" placeholder='Password' required />
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