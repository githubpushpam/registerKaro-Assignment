import React from 'react'
import './Navbar.css'
import linkImage from '../../assets/Link.png';
import group from '../../assets/Group 1000005903.png';
import logo from '../../assets/logo.png';
import link1 from "../../assets/Link (1).png";
import search from "../../assets/search.png";

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='navtop'>
                <div className='navtop-item'>
                    <div className='navtop-item-info'>
                        <img src={linkImage} alt="" />
                        <img src={link1} alt="" />
                    </div>
                    <img id="navicon" src={group} alt="" />
                </div>
            </div>
            <div className='navdown'>
                <div className='left'>
                    <img id="logo" src={logo} alt="" />
                </div>
                <div className='right'>
                    <div className='right-nav-content'>
                        <p>Home </p>
                        <p>Our Services</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                    <img id="search" src={search} alt="" />
                    <button className='btntalk'>Talk An Expert</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
