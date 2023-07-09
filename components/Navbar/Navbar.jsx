import React from 'react'
import Link from 'next/link'
import './navbar.css'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className = 'navbar-logo'>
        {/* <Image 
          src='/mehndi.png'
          width={80}
          height={20}
        /> */}
        <h1>Mehndi & Meee</h1>
      </div>
      <Image 
          src='/mehndi-icon.png'
          width={60}
          height={10}
        />
      <div className = 'navbar-links'>
        <Link href='#work-section'>
          <button className='nav-btn1'>
            My Work
          </button>
        </Link>
        <Link href='#contact-section'>
          <button className='nav-btn1'>
            Contact us
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
