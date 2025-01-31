import React from 'react'
import './Company.css'
import coinbase from "../../assets/coinbase.png"
import spotify from "../../assets/spotify.png" 
import slack from "../../assets/slack.png"
import dropbox from "../../assets/dropbox.png"
import webflow from "../../assets/webflow.png"
import zoom from "../../assets/zoom.png"


const Company = () => {
  return (
    <div className='company'>
      <img className="company-img" src={coinbase} alt="" />
      <img className="company-img" src={spotify} alt="" />
      <img className="company-img" src={slack} alt="" />
      <img className="company-img" src={dropbox} alt="" />
      <img className="company-img webflow" src={webflow} alt="" />
      <img className="company-img zoom " src={zoom} alt="" />
    </div>
  )
}

export default Company
