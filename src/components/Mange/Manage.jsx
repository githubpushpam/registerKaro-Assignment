import React from 'react'
import './Manage.css'
import phone from "../../assets/smallphone.png"
import appstore from "../../assets/appstore.png"
import googleplay from "../../assets/googleplay.png"

const Manage = () => {
  return (
    <div className='manage'>
        <div className='manage-left'>
           <div>
            <p className='manage-left-header'>Manage Your Services by your</p>
            <p className='manage-left-header'>Mobile Phone</p>
           </div>
           <div>
            <p className='manage-left-ptag'>Download our app to manage and track your services. Our app </p>
            <p className='manage-left-ptag'>enables you to stay in touch with our experts and aids you in tracking </p>
            <p className='manage-left-ptag'>your progress. </p>
           </div>
           <div>
            <p className='manage-left-ptag2'>Get the App</p>
            <div>
                <img src={appstore} alt="" />
                <img src={googleplay} alt="" />
            </div>
           </div>
        </div>
        <div className='manage-right'>
           <img className='manage-right-img1'src={phone} alt="" />
           <img className='manage-right-img2' src={phone} alt="" />
        </div>
    </div>
  )
}

export default Manage
