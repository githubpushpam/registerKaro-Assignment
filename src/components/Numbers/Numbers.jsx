import React from 'react'
import './Numbers.css'
import plus from "../../assets/plus.png"

const Numbers = () => {
    return (
        <div className='numbers'>
            <p className='numbers-header1'>WHY REGISTER KARO</p>
            <p className='numbers-header2'>Some Numbers are important</p>
            <div className='numbers-content'>
                <div>
                    <div className='numbers-plus'>
                        <p className='numbers-plus-ptag'>1M</p>
                        <img className='numbers-plus-img' src={plus} alt="" />
                    </div>
                    <p className='numbers-plus-footer'> CUSTOMERS</p>
                </div>
                <div>
                    <div className='numbers-plus'>
                        <p className='numbers-plus-ptag'>12</p>
                        <img className='numbers-plus-img' src={plus} alt="" />
                    </div>
                    <p className='numbers-plus-footer'> YEARS OF EXCELLENCE</p>
                </div>
                <div>
                    <div className='numbers-plus'>
                        <p className='numbers-plus-ptag'>41</p>
                        <img className='numbers-plus-img' src={plus} alt="" />
                    </div>
                    <p className='numbers-plus-footer'> R&D ENGINEERS</p>
                </div>
                <div>
                    <div className='numbers-plus'>
                        <p className='numbers-plus-ptag'>78</p>
                        <img className='numbers-plus-img' src={plus} alt="" />
                    </div>
                    <p className='numbers-plus-footer'> COUNTRIES</p>
                </div>
                <div>
                    <div className='numbers-plus'>
                        <p className='numbers-plus-ptag'>3237</p>
                        <img className='numbers-plus-img' src={plus} alt="" />
                    </div>
                    <p className='numbers-plus-footer'> PARTNERS</p>
                </div>
                <div>
                    <div className='numbers-plus'>
                        <p className='numbers-plus-ptag'>41</p>
                        <img className='numbers-plus-img' src={plus} alt="" />
                    </div>
                    <p className='numbers-plus-footer'> AWARDS RECIEVED</p>
                </div>

            </div>
        </div>
    )
}

export default Numbers
