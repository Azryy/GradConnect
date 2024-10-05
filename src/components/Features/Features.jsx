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

            <div className="features-header">

            </div>

            <div className="featured-jobs">
                <div className="featured-jobs-label">
                    <h1>Featured Jobs</h1>
                </div>
                <div className="featured-jobs-container">
                    <div className="job-container">
                        <div className="top-container">
                            <img className='icon' src="" alt="icon" />
                            <button className="full-time">Full Time</button>
                        </div>

                        <h2 className='job-label'>Email Marketing</h2>
                        <p className="address"> Batangas</p>
                        <p className='job-description'>We are looking for email marketing to help secure...</p>
                        <div className="category-button-container">
                            <button className='category-btn marketingg'>Marketing</button>
                            <button className='category-btn designn'>Design</button>
                        </div>

                    </div>

                    <div className="job-container">
                        <div className="top-container">
                            <img className='icon' src="" alt="icon" />
                            <button className="full-time">Full Time</button>
                        </div>

                        <h2 className='job-label'>Brand Designer</h2>
                        <p className="address">Batangas</p>
                        <p className='job-description'>You are good in designing?Come and join us here for...</p>
                        <div className="category-button-container">
                            <button className='category-btn designn'>Design</button>
                            <button className='category-btn businesss'>Business</button>
                        </div>
                    </div>

                    <div className="job-container">
                        <div className="top-container">
                            <img className='icon' src="" alt="icon" />
                            <button className="full-time">Full Time</button>
                        </div>

                        <h2 className='job-label'>Email Marketing</h2>
                        <p className="address">Batangas</p>
                        <p className='job-description'>We are looking for email that can market the product by...</p>
                        <div className="category-button-container">
                            <button className='category-btn marketingg'>Marketing</button>

                        </div>

                    </div>
                    <div className="job-container">
                        <div className="top-container">
                            <img className='icon' src="" alt="icon" />
                            <button className="full-time">Full Time</button>
                        </div>

                        <h2 className='job-label'>Novel Designer</h2>
                        <p className="address">Manila</p>
                        <p className='job-description'>We are looking for a novel designer that can utilizethe...</p>
                        <div className="category-button-container">

                            <button className='category-btn designn'>Design</button>
                        </div>

                    </div>
                    <div className="job-container">
                        <div className="top-container">
                            <img className='icon' src="" alt="icon" />
                            <button className="full-time">Full Time</button>
                        </div>

                        <h2 className='job-label'>Product Designer</h2>
                        <p className="address">Laguna</p>
                        <p className='job-description'>We are looking for product designer that can designs...</p>
                        <div className="category-button-container">
                            <button className='category-btn marketingg'>Marketing</button>
                            <button className='category-btn designn'>Design</button>
                        </div>

                    </div>
                    <div className="job-container">
                        <div className="top-container">
                            <img className='icon' src="" alt="icon" />
                            <button className="full-time">Full Time</button>
                        </div>

                        <h2 className='job-label'>Lead Designer</h2>
                        <p className="address">Manila</p>
                        <p className='job-description'>We need a lead designer that can lead our team in...</p>
                        <div className="category-button-container">

                            <button className='category-btn designn'>Design</button>
                            <button className='category-btn businesss'>Business</button>
                        </div>

                    </div>
                    <div className="job-container">
                        <div className="top-container">
                            <img className='icon' src="" alt="icon" />
                            <button className="full-time">Full Time</button>
                        </div>

                        <h2 className='job-label'>Brand Strategist</h2>
                        <p className="address">Batangas</p>
                        <p className='job-description'>Our brand are growing we need someone that can ha...</p>
                        <div className="category-button-container">
                            <button className='category-btn marketingg'>Marketing</button>

                        </div>

                    </div>
                    <div className="job-container">
                        <div className="top-container">
                            <img className='icon' src="" alt="icon" />
                            <button className="full-time">Full Time</button>
                        </div>

                        <h2 className='job-label'>Data Analyst</h2>
                        <p className="address">Cavite</p>
                        <p className='job-description'>We are looking for email marketing to help secure...</p>
                        <div className="category-button-container">
                            <button className='category-btn technologyy'>Technology</button>

                        </div>

                    </div>
                </div>

            </div>
            <div className="third-features">
                <div className="latest">
                    <h1 className='latest-label'>Latest Jobs Open</h1>
                </div>
                <div className="latest-jobs">
                    <div className="latest-jobs-container">
                        <img src="" className='latest-icon' alt="icon" />

                        <h2 className='latest-job-label'>Social Media Assistant</h2>
                        <p className="latest-address">Batangas</p>


                        <div className="latest-buttons">
                            <button className='latest-button full-timee'>Full Time</button>
                            <button className='latest-button marketingg'>Marketing</button>
                            <button className='latest-button technologyy'>Technology</button>
                        </div>

                    </div>
                    <div className="latest-jobs-container">
                        <img src="" className='latest-icon' alt="icon" />

                        <h2 className='latest-job-label'>Social Media Assistant</h2>
                        <p className="latest-address">Batangas</p>


                        <div className="latest-buttons">
                            <button className='latest-button full-timee'>Full Time</button>
                            <button className='latest-button marketingg'>Marketing</button>
                            <button className='latest-button technologyy'>Technology</button>
                        </div>
                    </div>

                    <div className="latest-jobs-container">
                        <img src="" className='latest-icon' alt="icon" />

                        <h2 className='latest-job-label'>Brand Designer</h2>
                        <p className="latest-address">Batangas</p>


                        <div className="latest-buttons">
                            <button className='latest-button full-timee'>Full Time</button>
                            <button className='latest-button marketingg'>Marketing</button>
                            <button className='latest-button designn'>Design</button>
                        </div>
                    </div>

                    <div className="latest-jobs-container">
                        <img src="" className='latest-icon' alt="icon" />

                        <h2 className='latest-job-label'>Brand Designer</h2>
                        <p className="latest-address">Batangas</p>


                        <div className="latest-buttons">
                            <button className='latest-button full-timee'>Full Time</button>
                            <button className='latest-button marketingg'>Marketing</button>
                            <button className='latest-button designn'>Design</button>
                        </div>
                    </div>

                    <div className="latest-jobs-container">
                        <img src="" className='latest-icon' alt="icon" />

                        <h2 className='latest-job-label'>Interactive Developer</h2>
                        <p className="latest-address">Batangas</p>


                        <div className="latest-buttons">
                            <button className='latest-button full-timee'>Full Time</button>
                            <button className='latest-button technologyy'>Technology</button>
                            <button className='latest-button designn'>Design</button>
                        </div>
                    </div>

                    <div className="latest-jobs-container">
                        <img src="" className='latest-icon' alt="icon" />

                        <h2 className='latest-job-label'>Interactive Developer</h2>
                        <p className="latest-address">Batangas</p>


                        <div className="latest-buttons">
                            <button className='latest-button full-timee'>Full Time</button>
                            <button className='latest-button technologyy'>Technology</button>
                            <button className='latest-button designn'>Design</button>
                        </div>
                    </div>

                    <div className="latest-jobs-container">
                        <img src="" className='latest-icon' alt="icon" />

                        <h2 className='latest-job-label'>HR Manager</h2>
                        <p className="latest-address">Batangas</p>


                        <div className="latest-buttons">
                            <button className='latest-button full-timee'>Full Time</button>
                            <button className='latest-button marketingg'>Marketing</button>
                            <button className='latest-button businesss'>Business</button>
                        </div>
                    </div>

                    <div className="latest-jobs-container">
                        <img src="" className='latest-icon' alt="icon" />

                        <h2 className='latest-job-label'>HR Manager</h2>
                        <p className="latest-address">Batangas</p>


                        <div className="latest-buttons">
                            <button className='latest-button full-timee'>Full Time</button>
                            <button className='latest-button marketingg'>Marketing</button>
                            <button className='latest-button businesss'>Business</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Features
