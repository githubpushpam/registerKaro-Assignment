import React from 'react'
import './Footer.css'
import footerImg from "../../assets/Group 1000005903.png" 
import rightArrow from "../../assets/uparrow.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-div'>
                <div className='footer-div1'>
                    <p className='footer-div1-ptag'>Design outstanding interfaces</p>
                    <p className='footer-div1-ptag'>with advanced Figma features in</p>
                    <p className='footer-div1-ptag'>a matter of minutes.</p>
                    <img className="footer-div1-img" src={footerImg} alt="" />
                </div>
                <div>
                    <p className='footer-div2-header'>START A BUSINESS</p>
                    <p className='footer-div2-ptag'>Features</p>
                    <p className='footer-div2-ptag'>Solutions</p>
                    <p className='footer-div2-ptag'>Integrations</p>
                    <p className='footer-div2-ptag'>Enterprise</p>
                    <p className='footer-div2-ptag'>Solutions</p>
                </div>
                <div>
                    <p className='footer-div2-header'>GOVERNMENT REGISTRATION</p>
                    <p className='footer-div2-ptag'>Partners</p>
                    <p className='footer-div2-ptag'>Community</p>
                    <p className='footer-div2-ptag'>Developers</p>
                    <p className='footer-div2-ptag'>App</p>
                    <p className='footer-div2-ptag'>Blog</p>
                </div>
                <div>
                    <p className='footer-div2-header'>COMPLIANCE & TAX</p>
                    <p className='footer-div2-ptag'>Channels</p>
                    <p className='footer-div2-ptag'>Scale</p>
                    <p className='footer-div2-ptag'>Watch the Demo</p>
                    <p className='footer-div2-ptag'>Our Competition</p>
                </div>
                <div>
                    <p className='footer-div2-header'>BIS & CDSCO</p>
                    <p className='footer-div2-ptag'>About Us</p>
                    <p className='footer-div2-ptag'>News</p>
                    <p className='footer-div2-ptag'>LeaderShip</p>
                    <p className='footer-div2-ptag'>Media Kit</p>
                </div>
            </div>
            <div>
                <img className="uparrow" src={rightArrow} alt="" />
            </div>
            <p className='footer-div2-ptag'>© 2024 Registerkaro. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
