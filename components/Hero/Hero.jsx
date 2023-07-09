import React from 'react'
import Image from 'next/image'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-heading'>
        <h1>Mehndi & Meee</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia voluptatem, quibusdam voluptate, quod quae voluptatibus, quos doloribus quas voluptatum quae. Quisquam quia voluptatem, quibusdam voluptate, quod quae voluptatibus, quos doloribus quas voluptatum quae.
        </p>
        <Image 
          src='/layer-5.svg'
          width={80}
          height={20}
        />
      </div>
      <div className='hero-image'>
        <Image 
          src='/mehndi-4.jpg'
          width={350}
          height={350}
          alt='logo'
          className='rounded-lg'
        />
      </div>
    </div>
  )
}

export default Hero
