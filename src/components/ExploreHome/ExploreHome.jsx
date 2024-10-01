import React from 'react'
import './ExploreHome.css'
import { assets } from '../../assets/assets'
const ExploreHome = () => {
    return (
        <div className='explore-home'>
            <div className="explore-left">
                <h1 className='title'>BSU Graduates Jobs <br /> Application Portal</h1>
                <hr className='line' />
                <p className='description'>Manage all employees,payrolls,and other <br />human resource operations.</p>
                <button className='learn-more'>Learn More</button>
                <button className='our-features'>Our Features</button>
            </div>
            <div className="explore-right">
                <img src={assets.picture} alt="" />
            </div>

        </div>


    )
}

export default ExploreHome
