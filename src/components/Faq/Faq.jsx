import React from 'react'
import './Faq.css'
import rightArrow from "../../assets/right-arrow.png"

const Faq = () => {
    return (
        <div>
            <div className='Faq-main-div'>
                <p className='Faq-header1'>FAQ</p>
                <p className='Faq-header2'>Frequent Ask Questions </p>
                <div className='question-div'>
                    <p className='question-div-ptag'>Can I recover deleted files from desktop with this software?</p>
                    <img src={rightArrow} alt="" />
                </div>
                <div className='question-div'>
                    <p className='question-div-ptag'>Can I recover deleted files from desktop with this software?</p>
                    <img src={rightArrow} alt="" />
                </div>
                <div className='question-div'>
                    <p className='question-div-ptag'>Can I recover deleted files from desktop with this software?</p>
                    <img src={rightArrow} alt="" />
                </div>
                <div className='question-div'>
                    <p className='question-div-ptag'>Can I recover deleted files from desktop with this software?</p>
                    <img src={rightArrow} alt="" />
                </div>
                <div className='question-div'>
                    <p className='question-div-ptag'>Can I recover deleted files from desktop with this software?</p>
                    <img src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Faq
