import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-left'>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nihil consectetur et nesciunt iusto a ipsa quas quo amet possimus eum facere minima vero nulla neque optio? Quasi, optio labore.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook} alt="" />
                    <img src={assets.twitter} alt="" />
                </div>
            </div>
            <div footer-center>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+639667462936</li>
                    <li>gradconnect_bsu@gmail.com</li>
                </ul>
            </div>
            
        </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 GradConnect.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
