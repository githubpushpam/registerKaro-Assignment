import React from 'react'
import './Home.css'
import Trustedby from '../Trustedby/Trustedby'
import star from "../../assets/star.png"
import line from "../../assets/line.png"
import client from "../../assets/client.png"
import play from "../../assets/play.png"
import learner from "../../assets/learner.png"
import archery from "../../assets/archery.png"

const Home = () => {
  return (
    <>
    <div className='home'>
      <div className="left">
        <img className="star" src={star} alt="" />
        <p id='p-up'>Your trusted partner</p>
        <p id='p-down'>for compliance business needs</p>
        <img className="line" src={line} alt="" />
        <p className='left-mid-content'>An online business compliance platform that helps entrepreneurs and other individuals with various, <span className='left-mid-span'>registrations, tax filings,</span> and other <span className='left-mid-span'>legal matters.</span></p>
        <img className="client" src={client} alt="" />
        <div className="left-bottam">
          <button className='left-bottam-btn'>Talk An Expert</button>
          <div className="left-bottam-right">
            <img id='play' src={play} alt="" />
            <p>See how it works</p>
          </div>

        </div>
      </div>
      <div className='right'>
        <img className='mid' src={learner} alt="" />
        <div className='right-right'>
          <div className='home-mid-right'>
            <p className='home-mid-right-content'>Annual Compliance</p>
            <p className='home-mid-right-content'>Payroll Services</p>
            <p className='home-mid-right-content'>Company Formation</p>
            <p className='home-mid-right-content'>Annual Compliance</p>
          </div>
          <div className='archer'>
            <img id='archery' src={archery} alt="" />
          </div>
        </div>

      </div>
  
    </div>
    <Trustedby/>
    </>
  )
}

export default Home
