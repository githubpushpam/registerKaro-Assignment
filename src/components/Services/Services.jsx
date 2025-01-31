import React from 'react'
import './Services.css'
import card1 from "../../assets/card1.png"
import learnmore from "../../assets/learnmore.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"
import card5 from "../../assets/card5.png" 
import card6 from "../../assets/card6.png" 

const Services = () => {
    return (
        <div className='service-main'>
            <div className='services'>
                <p className='services-header-top'>WELCOME TO REGISTERKARO.IN</p>
                <p className='services-header-bottam'>Explore Our Services</p>
                <div className='cards'>
                    <div className="card">
                        <img src={card1} alt="" />
                        <p className='card-header'>Company Formation</p>
                        <div >
                            <p className='card-content'>Build web-based solutions that</p>
                            <p className='card-content'>enhance customer experience.</p>
                        </div>
                        <div className="learnmore">
                            <p>Learn more</p>
                            <img src={learnmore} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <img src={card2} alt="" />
                        <p className='card-header'>Company Secretarial Services</p>
                        <div>
                            <p className='card-content'>Make data-driven decisions and</p>
                            <p className='card-content'>utilize technology to reach</p>
                            <p className='card-content'>business goals.</p>
                        </div>
                        <div className="learnmore">
                            <p>Learn more</p>
                            <img src={learnmore} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <img src={card3} alt="" />
                        <p className='card-header'>Virtual Office Address</p>
                        <div >
                            <p className='card-content'>Foster customer relationships by</p>
                            <p className='card-content'>effectively serving your market.</p>
                        </div>
                        <div className="learnmore">
                            <p>Learn more</p>
                            <img src={learnmore} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <img src={card4} alt="" />
                        <p className='card-header'>Annual Compliance Services</p>
                        <div >
                            <p className='card-content'>Turn your ideas into modern</p>
                            <p className='card-content'>products with our design experts.</p>  
                        </div>
                        <div className="learnmore">
                            <p >Learn more</p>
                            <img src={learnmore} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <img src={card5} alt="" />
                        <p className='card-header'>Payroll Services</p>
                        <div >
                            <p className='card-content'>Expand your business across the</p>
                            <p className='card-content'>globe with minimal effort</p>
                        </div>
                        <div className="learnmore">
                            <p>Learn more</p>
                            <img src={learnmore} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <img src={card6} alt="" />
                        <p className='card-header'>Bookkeeping Services</p>
                        <div  >
                            <p className='card-content'>Steering user behaviours with</p>
                            <p className='card-content'>creative design, data insights &</p>
                            <p className='card-content'>technology</p>
                        </div>
                        <div className="learnmore">
                            <p>Learn more</p>
                            <img src={learnmore} alt="" />
                        </div>
                    </div>
                </div>
                <button className='services-btn'>See All Services</button>
            </div>
        </div>
    )
}

export default Services
