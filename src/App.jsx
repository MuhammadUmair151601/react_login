import React from 'react'
import Login from './components/login'
import BgImage from './assets/plan-webpage-layout-design.png'

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" 
    style={{ backgroundImage: `url(${BgImage})` }}
    >
      <Login/>
    </div>
  )
}

export default App