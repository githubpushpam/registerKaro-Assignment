import React from 'react'
import './VideoIntroduction.css'
import ideaLogo from "../../assets/idealogo.png" 
import idealLife from "../../assets/idealife.png"
import introduction from "../../assets/introductionvideo.png"

const VideoIntroduction = () => {
  return (
    <div>
       <div className='introduction'>
        <div className="introduction-left">
            <div>
                <p className='introduction-left-header'>Our Video Introductions</p>
                <p className='introduction-left-content'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna</p>
                <p className='introduction-left-content'>vulputate pellentesque a diam tincidunt apis dui.</p>
            </div>
            <div className='introduction-left-div'>
                <img className='introduction-left-div-img' src={ideaLogo } alt="" />
                <div className='introduction-left-div-content'>
                    <p className='introduction-left-div-content-header'>Explore ideas together</p>
                    <p className='introduction-left-div-content-ptag'>Engage audience segments and finally create actionable insights.</p>
                    <p className='introduction-left-div-content-ptag'> Amplify vertical integration.</p>
                </div>
            </div>
            <div className='introduction-left-div'>
                <img className='introduction-left-div-img' src={idealLife} alt="" />
                <div className='introduction-left-div-content'>
                    <p className='introduction-left-div-content-header'>Bring those ideas to life</p>
                    <p className='introduction-left-div-content-ptag'>Engage audience segments and finally create actionable insights.</p>
                     <p className='introduction-left-div-content-ptag'>Amplify vertical integration.</p>
                    
                </div>
            </div>
        </div>
        <img  className="introduction-right" src={introduction} alt="" />

       </div>
    </div>
  )
}

export default VideoIntroduction
