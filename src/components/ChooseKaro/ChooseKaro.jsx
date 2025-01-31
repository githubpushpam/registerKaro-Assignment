import React from 'react'
import './ChooseKaro.css'
import confidentialLogo from "../../assets/confidentiallogo.png";
import hiddenLogo from "../../assets/hiddenlogo.png";
import satisfactionLogo from "../../assets/satisfactionlogo.png" ;
import expertLogo from "../../assets/expertassistance.png" ;

const ChooseKaro = () => {
    return (
        <div>
            <div className='choosekaro'>
                <div className='choosekaro-header-div'>
                    <p className='choosekaro-header-div-ptag1'>WHY REGISTERKARO.IN</p>
                    <p className='choosekaro-header-div-ptag2'>Why Choose Register Karo</p>
                    <div>
                        <p className='choosekaro-header-div-ptag3'>It is with consistent services and results that build trust with the people and that in </p>
                        <p className='choosekaro-header-div-ptag3'>turn help us to serve the business better.</p>
                    </div>
                </div>
                <div className='choosekaro-main-div choosekaro-main-div1'>
                    <div className='choosekaro-main-div-content content1'>
                        <img className="choosekaroimg" src={confidentialLogo} alt="" />
                        <p className='choosekaro-main-div-content-ptag1'>Confidential & Safe</p>
                        <div>
                            <p className='choosekaro-main-div-content-ptag2'>All your private information is safe</p>
                            <p className='choosekaro-main-div-content-ptag2'> with us</p>
                        </div>
                    </div>
                    <div className='choosekaro-main-div-content content2  '>
                        <img className="choosekaroimg" src={hiddenLogo} alt="" />
                        <p className='choosekaro-main-div-content-ptag1'>No Hidden Fee</p>
                        <div>
                            <p className='choosekaro-main-div-content-ptag2'>Everything is put before you with</p>
                            <p className='choosekaro-main-div-content-ptag2'>no hidden charges or conditions</p>
                        </div>
                    </div>
                </div>
                <div className='choosekaro-main-div choosekaro-main-div3'>
                    <div className='choosekaro-main-div-content content3'>
                        <img className="choosekaroimg" src={satisfactionLogo} alt="" />
                        <p className='choosekaro-main-div-content-ptag1'>Guaranteed Satisfaction</p>
                        <div>
                            <p className='choosekaro-main-div-content-ptag2'>We ensure that you stay 100%</p>
                            <p className='choosekaro-main-div-content-ptag2'>satisfied with our offered services</p>
                        </div>
                    </div>
                </div>
                <div className='choosekaro-main-div'>
                    <div className='choosekaro-main-div-content content4'>
                        <img className="choosekaroimg" src={expertLogo} alt="" />
                        <p className='choosekaro-main-div-content-ptag1'>Expert CA/CS Assistance</p>
                        <div>
                            <p className='choosekaro-main-div-content-ptag2'>Prompt support from our in-house</p>
                            <p className='choosekaro-main-div-content-ptag2'> expert professionals</p>
                        </div>
                    </div>
                    <div className='choosekaro-main-div-content content5 '>
                        <img className="choosekaroimg"  src={confidentialLogo} alt="" />
                        <p className='choosekaro-main-div-content-ptag1'>Confidential & Safe</p>
                        <div>
                            <p className='choosekaro-main-div-content-ptag2'>All your private information is safe</p>
                            <p className='choosekaro-main-div-content-ptag2'>with us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseKaro
