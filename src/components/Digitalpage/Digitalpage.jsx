import React from 'react'
import './Digitalpage.css'
import digitalImg1 from "../../assets/digitalimage1.png"
import arrow from "../../assets/arrow.png"
import digitalImg2 from "../../assets/digitalimg2.png"
import digitalImg4 from "../../assets/digitalimg4.png"
import digitalImg5 from "../../assets/digitalimg5.png"
import digitalImg6 from "../../assets/digitalimg6.png"

const Digitalpage = () => {
    return (
        <div>
            <div className='digital'>
                <p className='digital-header1'>EXPLORE OUR BLOGS </p>
                <p className='digital-header2'>Accelerate Digital Transformation</p>
                <div className='digital-div-container' >
                    <div className='digital-div-container-content'>
                        <img className="digital-div-container-img" src={digitalImg1} alt="" />
                        <p className='digital-ptag1'>Prabhash Mishra • 1 Jan 2023 • Today</p>
                        <div className='digtal-arrow'>
                            <p className='digtal-arrow-ptag'>Small business & Startup </p>
                            <img src={arrow} alt="" />
                        </div>
                        <div>
                            <p className='digital-div-container-content-ptag'>Like to know the secrets of transforming a 2-14 team into a 3x </p>
                            <p className='digital-div-container-content-ptag'>Super Bowl winning Dynasty?</p>
                            
                        </div>
                        <div className='digital-div-container-content-footer'>
                           
                            <p className='footer-ptag'>Management</p>
                        </div>
                    </div>
                    <div className='digital-div-container-content'>
                        <img className="digital-div-container-img" src={digitalImg2 } alt="" />
                        <p className='digital-ptag1'>Mahesh Kumar • 1 Jan 2023</p>
                        <div className='digtal-arrow'>
                            <p className='digtal-arrow-ptag'>Scale-Up Company Offer </p>
                            <img src={arrow} alt="" />
                        </div>
                        <div>
                            <p className='digital-div-container-content-ptag'>Mental models are simple expressions of complex </p>
                            <p className='digital-div-container-content-ptag'>processes or relationships. </p>  
                        </div>
                        <div className='digital-div-container-content-footer'>
                            <p className='footer-ptag'>Tax </p>
                            <p className='footer-ptag'>Research</p>
                            <p className='footer-ptag'>Complience</p>
                        </div>
                    </div>
                    <div className='digital-div-container-content'>
                        <img  className="digital-div-container-img" src={digitalImg1} alt="" />
                        <p className='digital-ptag1'>Rakhi Verma • 1 Jan 2023</p>
                        <div className='digtal-arrow'>
                            <p className='digtal-arrow-ptag'>Growing Business Package </p>
                            <img src={arrow} alt="" />
                        </div>
                        <div>
                            <p className='digital-div-container-content-ptag'>Introduction to Wireframing and its Principles.</p> 
                            <p className='digital-div-container-content-ptag'>Learn from the best in the industry. </p> 
                        </div>
                        <div className='digital-div-container-content-footer'>
                            <p  className='footer-ptag'>Audit </p>
                            <p className='footer-ptag'>Money Back</p>
                        </div>
                    </div>
                    <div className='digital-div-container-content'>
                        <img className="digital-div-container-img" src={digitalImg4} alt="" />
                        <p className='digital-ptag1'>Karan Kumar • 1 Jan 2023</p>
                        <div className='digtal-arrow'>
                            <p className='digtal-arrow-ptag'>Scale-Up Company Offer </p>
                            <img src={arrow} alt="" />
                        </div>
                        <div>
                            <p className='digital-div-container-content-ptag'>Collaboration can make our teams stronger, and our </p>
                            <p className='digital-div-container-content-ptag'>individual designs better.</p> 
                        </div>
                        <div className='digital-div-container-content-footer'>
                            <p className='footer-ptag'>Money </p>
                            <p className='footer-ptag'>Management</p>
                        </div>
                    </div>
                    <div className='digital-div-container-content'>
                        <img className="digital-div-container-img" src={digitalImg5} alt="" />
                        <p className='digital-ptag1'>Richa Singh • 1 Jan 2023</p>
                        <div className='digtal-arrow'>
                            <p className='digtal-arrow-ptag'>Scale-Up Company Offer </p>
                            <img src={arrow} alt="" />
                        </div>
                        <div>
                            <p className='digital-div-container-content-ptag'>JavaScript frameworks make development easy with extensive </p>
                            <p className='digital-div-container-content-ptag'>features and functionalities. </p>
                            
                        </div>
                        <div className='digital-div-container-content-footer'>
                            <p className='footer-ptag'>Tax Return  </p>
                            <p className='footer-ptag'>Tax</p>
                            <p className='footer-ptag'>Audit</p>
                        </div>
                    </div>
                    <div className='digital-div-container-content'>
                        <img className="digital-div-container-img" src={digitalImg6} alt="" />
                        <p className='digital-ptag1'>Miss Nora• 1 Jan 2023</p>
                        <div className='digtal-arrow'>
                            <p className='digtal-arrow-ptag'>Scale-Up Company Offer </p>
                            <img src={arrow} alt="" />
                        </div>
                        <div>
                            <p className='digital-div-container-content-ptag'>Starting a community doesn’t need to be complicated,</p> 
                            <p className='digital-div-container-content-ptag'>but how do you get started? </p> 
                        </div>
                        <div className='digital-div-container-content-footer'>
                            <p className='footer-ptag'>Private Limited Company  </p>
                            <p className='footer-ptag'>Customer Success</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digitalpage
