import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import About from './components/About/About'
import Happyclient from './components/Happyclient/Happyclient'
import ChooseKaro from './components/ChooseKaro/ChooseKaro'
import VideoIntroduction from './components/VideoIntroduction/VideoIntroduction'
import Digitalpage from './components/Digitalpage/Digitalpage'
import Faq from './components/Faq/Faq'
import Contactform from './components/Contactform/Contactform'
import Company from './components/Company/Company'
import Footer from './components/Footer/Footer'
import Manage from './components/Mange/Manage'
import Numbers from './components/Numbers/Numbers'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <ChooseKaro/>
    <VideoIntroduction/>
    <Digitalpage/>
    <Happyclient/>
    <Faq/>
    <Manage/>
    <Numbers/>
    <Contactform/>
    <Company/>
    <Footer/>
    </div>
  )
}

export default App
