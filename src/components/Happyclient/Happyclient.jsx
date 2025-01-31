import React from 'react'
import './Happyclient.css'
import happyClientLogo from "../../assets/happyclientlogo.png"
import fileLogo from "../../assets/filelogo.png"
import contactFormLogo from "../../assets/contact-form.png"
import executive from "../../assets/executive.png"
import mailLogo from "../../assets/maillogo.png"

const Happyclient = () => {
    return (
        <div className='happyclient-main'>
            <p className='happyclient-main-head'>Our Happy Clients</p>
            <div>
                <p className='happyclient-main-header'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically </p>
                <p className='happyclient-main-header'>innovate resource-leveling customer service for state of the art customer service</p>
            </div>
           
            <img id="happyclient-main-img" src={happyClientLogo} alt="" />
            
            <div className='happyclient-feature'>
                <div className='happyclient-feature-maindiv'>
                    <div className='divcolor1'>
                        <img src={fileLogo} alt="" />
                    </div>
                    <p className='happyclient-feature-maindiv-content'>Fill up Application Form</p>
                </div>
                <div  className='happyclient-feature-maindiv'>
                    <div className='divcolor2'>
                        <img src={contactFormLogo } alt="" />
                    </div>
                    <p className='happyclient-feature-maindiv-content'>Make Online Payment</p>
                </div>
                <div  className='happyclient-feature-maindiv'>
                    <div className='divcolor3'>
                        <img src={executive} alt="" />
                    </div>
                    <p className='happyclient-feature-maindiv-content'>Executive will Process Application</p>
                </div>
                <div  className='happyclient-feature-maindiv'>
                    <div className='divcolor4'>
                        <img src={mailLogo} alt="" />
                    </div>
                    <p className='happyclient-feature-maindiv-content'>Get Confirm Mail</p>
                </div>
            </div>
        </div>
    )
}

export default Happyclient
