import React from 'react'
import './header.css'
import CTA from './CTA'
import FEMI from '../../assets/Femi.png'
import HeaderSocials from './HeaderSocials'


const Header = ()  => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Femi Oyeniyi</h1>
        <h5 className='text-light'>Fullstack Developer </h5>
        <h6 className='text-light'>(in view)</h6>
        <CTA />
        <div className='me'>
          <img src= {FEMI} alt ="Femi" />
        </div>
        <HeaderSocials/>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;
