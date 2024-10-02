import React from 'react'
import './Features.css'
import { assets } from '../../assets/assets'
const Features = () => {
    return (
        <div className='top-div'>
            <div >
                <h1 className='title'>Explore Category</h1>
            </div>
            <div className="explore-category">

                <div className='design container'>
                    <img className='container-image' src={assets.designer} alt="" />
                    <h2 className='name'>Design</h2>
                    <p className='jobs'>Jobs Available</p>
                    <img src={assets.arrow} className='arrow' alt="" />
                </div>

                <div className='sales container'>
                    <img className='container-image' src={assets.graph} alt="" />
                    <h2 className='name'>Sales</h2>
                    <p className='jobs'>Jobs Available</p>
                    <img src={assets.arrow} className='arrow' alt="" />
                </div>

                <div className='marketing container'>
                    <img className='container-image' src={assets.mega} alt="" />
                    <h2 className='name'>Marketing</h2>
                    <p className='jobs'>Jobs Available</p>
                    <img src={assets.arrow} className='arrow' alt="" />
                </div>

                <div className='finance container'>
                    <img className='container-image' src={assets.money} alt="" />
                    <h2 className='name'>Finance</h2>
                    <p className='jobs'>Jobs Available</p>
                    <img src={assets.arrow} className='arrow' alt="" />
                </div>

                <div className='technology container'>
                    <img className='container-image' src={assets.computer} alt="" />
                    <h2 className='name'>Technology</h2>
                    <p className='jobs'>Jobs Available</p>
                    <img src={assets.arrow} className='arrow' alt="" />
                </div>

                <div className='engineering container'>
                    <img className='container-image' src={assets.engineer} alt="" />
                    <h2 className='name'>Engineering</h2>
                    <p className='jobs'>Jobs Available</p>
                    <img src={assets.arrow} className='arrow' alt="" />
                </div>

                <div className='business container'>
                    <img className='container-image' src={assets.bag} alt="" />
                    <h2 className='name'>Business</h2>
                    <p className='jobs'>Jobs Available</p>
                    <img src={assets.arrow} className='arrow' alt="" />
                </div>

                <div className='hr container'>
                    <img className='container-image' src={assets.people} alt="" />
                    <h2 className='name'>HR</h2>
                    <p className='jobs'>Jobs Available</p>
                    <img src={assets.arrow} className='arrow' alt="" />
                </div>

            </div>


        </div>
    )
}

export default Features
