import React from 'react'
import { FaInstagram, FaMailBulk, FaMailchimp, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image'
import './contact.css'
const Contact = () => {
  const iconStyles = {
    fontSize: '34px', // Change the size as per your requirement
    color: '#F2EAD3', // Change the color as per your requirement
  };
  return (
    <div className="contact-container" id='contact-section'>
      <h1>Contact us</h1>
      <div className="flex flex-col mt-20 ml-20 gap-5 contact-links">
        <Link href="https://www.instagram.com/mehndiandmeee/" target='_blank'>
          <div className='flex gap-5'>
            <FaInstagram style={iconStyles}/>
            <p className='mt-0.5'>@mehndiandmeee</p>
          </div>
        </Link>
        <div className='flex gap-5'>
          <FaWhatsapp style={iconStyles}/>
          <p className='mt-0.5'>0300-1610067</p>
        </div>
        <div className='flex gap-5'>
          <AiOutlineMail style={iconStyles}/>
          <p className='mt-0.5'>artistbeautitcian1@gmail.com</p>
        </div>
      </div>
      <Image 
       src="/group-2.svg"
       width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  )
}
AiOutlineMail
export default Contact