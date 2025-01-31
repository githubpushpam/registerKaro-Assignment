import React from 'react'
import "./Trustedby.css"
import oracle from "../../assets/oracle.png"
import morpheus from "../../assets/morpheus.png"
import samsung from "../../assets/samsung.png"
import monday from "../../assets/monday.png"
import segment from "../../assets/segment.png"


const Trustedby = () => {
  return (
    <div className='trustedby'>
     <p className='trustedby-content'>Trusted By Over 100+ Startups and freelance business</p>
     <div className="company">
        <img className='companyimg' src={oracle} alt="" />
        <img className='companyimg' src={morpheus} alt="" />
        <img className='companyimg' src={morpheus} alt="" />
        <img className='companyimg' src={samsung} alt="" />
        <img className='companyimg' src={monday} alt="" />
        <img className='companyimg' src={segment} alt="" />
     </div>
    </div>
  )
}

export default Trustedby
