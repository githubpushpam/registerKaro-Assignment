import React from 'react'
import './About.css'
import learnmore from "../../assets/learnmore.png";
import aboutpic from "../../assets/aboutpic.png";


const About = () => {
  return (
    <div>
        <div className='about'>
            <div className="about-left">
                <p className='about-welcome'>WELCOME TO REGISTERKARO.IN</p>
                <p className='about-welcome-header'>About <span className='about-welcome-header-span'>Register Karo</span></p>
                <div className="about-main-content-up">
                    <p className='about-main-content-ptag'>We have been using Intelegencia as our DevOps vendor for our field service </p>
                    <p className='about-main-content-ptag'>applications over the last couple of years and I’m extremely pleased with</p>
                    <p className='about-main-content-ptag'>their performance, ability to execute, and willingness to adapt in our ever changing</p>
                    <p className='about-main-content-ptag'>environment. Perry is an outstanding leader who is fanatical about</p>
                    <p className='about-main-content-ptag'>customer satisfaction. He has built a solid team which has consistently delivered </p>
                    <p className='about-main-content-ptag'>on projects thereby exceeding everyone’s expectations. </p>
                </div>
                <div className="about-main-content-down">
                    <p className='about-main-content-ptag'>I would strongly recommend their services to any organization that is</p>
                    <p className='about-main-content-ptag'>looking for solid, reliable, and predictable outcomes.</p>
                </div>
                <div className='about-btn'>
                    <p>Learn More</p>
                    <img className= "about-btn-logo" src={learnmore}alt="" />
                </div>
            </div>
           <img className="about-right" src={aboutpic} alt="" />
        </div>
      
    </div>
  )
}

export default About
