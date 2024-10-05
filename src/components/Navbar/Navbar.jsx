import React, { useState } from 'react'
import './Navbar.css'
 import {assets} from '../../assets/assets'
const Navbar = () => {

  const [home,setHome] =useState("announcement");
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
            <img src={assets.logo} alt="logo" className='img-logo' />
        </div>
        <div className="info">
        <h2 onClick={()=>setHome("home")} className={home==="home"?"active":""}>Home</h2>
          <h2 onClick={()=>setHome("features")} className={home==="features"?"active":""}>Features</h2>
          <h2 onClick={()=>setHome("about")} className={home==="about"?"active":""}>About </h2>
        </div>
        <div className="authentication-button">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
