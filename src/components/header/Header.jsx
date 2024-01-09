import React from 'react'
import './Header.css'
import CTA from './CTA'
import People from '../../assets/1.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kamal Anand</h1>
        <h5 className="text-light">Web Developer</h5>
        <h5 className="text-light">ML Enthusiast</h5>
        <h5 className="text-light">Competitive Programmer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={People} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header