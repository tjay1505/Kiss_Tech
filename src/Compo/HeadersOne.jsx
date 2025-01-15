import React from 'react'
import '../AppOne.css'
import logo from '../assets/logo.png'
import { GoClick } from './Data'


export default function Header() {
  return (
    <div className='jk-head col-12 d-flex align-items-center justify-content-evenly' >
      <div className="col-md-4 ">
      <img src={logo} className='col-md-5 col-5' alt="" /> 
      </div>
      <ul className='col-md-5 d-none d-md-flex align-items-center justify-content-evenly list-unstyled  my-2' >
        <a href="#TESTY" className='text-black text-decoration-none' >our blog</a>
        <a href="#ABOUT" className='text-black text-decoration-none' >About</a>
        <a href="#SERVICE" className='text-black text-decoration-none'>Service</a>
        <a href="#PRO" className='text-black text-decoration-none'>portfolio</a>
      </ul>
      <a href="https://wa.me/917806969730" onClick={GoClick} target='_blank' className='btn border text-primary border-primary rounded-5 text-nowrap'> Contact us</a>
    </div>
  )
}
