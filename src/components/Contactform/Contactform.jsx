import React from 'react'
import './Contactform.css'
import tick from "../../assets/tick.png"

const Contactform = () => {
  return (
    <div>
      <div className='contactform'>
        <p className='contactform-header1'>1% OF THE INDUSTRY</p>
        <p className='contactform-header2'>Welcome to your new digital reality. Now.</p>
        <div className='contactform-main-div'>
            <p className='contactform-main-div-ptag'>Enter Your Email</p>
            <button className='contactform-main-div-btn'>Submit</button>
        </div>
        <div className='contactform-main-content'>
            <img src={tick} alt="" />
            <p>Instant results</p>
            <img src={tick} alt="" />
            <p>User-friendly interface</p>
            <img src={tick} alt="" />
            <p>Personalized customization</p>
        </div>
      </div>
    </div>
  )
}

export default Contactform