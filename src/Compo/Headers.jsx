import React from 'react'
import '../App.css'
import logo from '../assets/logo.png'


export default function Header() {
  return (
    <div className='jk-head col-12 d-flex align-items-center justify-content-evenly' >
      <div className="col-md-4 ">
      <img src={logo} className='col-md-5 col-5' alt="" /> 
      </div>
      <ul className='col-md-5 d-none d-md-flex align-items-center justify-content-evenly list-unstyled  my-2' >
        <a href="" className='text-black text-decoration-none' >our blog</a>
        <a href="" className='text-black text-decoration-none' >About</a>
        <a href="" className='text-black text-decoration-none'>Service</a>
        <a href="" className='text-black text-decoration-none'>Career</a>
      </ul>
      <a href="#" className='btn border text-primary border-primary rounded-5 text-nowrap'> Contact us</a>
    </div>
  )
}
