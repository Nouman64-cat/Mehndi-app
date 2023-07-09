"use client";
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import FlipCard from 'react-card-flip';
import { BsSend } from 'react-icons/bs';
import Link from 'next/link';
import './work.css'
const Work = () => {
   const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped1, setIsFlipped1] = useState(false);
  
  const [showHoverMessage, setShowHoverMessage] = useState(false);
  const [showHoverMessage1, setShowHoverMessage1] = useState(false);

  let hoverMessageTimeout;
  let hoverMessageTimeout1;

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1);
  };
  const iconStyles = {
      fontSize: '20px', // Change the size as per your requirement// Change the color as per your requirement
    };
    const handleCardMouseEnter = () => {
    hoverMessageTimeout = setTimeout(() => {
      setShowHoverMessage(true);
    }, 3000);
  };

  const handleCardMouseLeave = () => {
    clearTimeout(hoverMessageTimeout);
    setShowHoverMessage(false);
  };

  const handleCardMouseEnter1 = () => {
    hoverMessageTimeout1 = setTimeout(() => {
      setShowHoverMessage1(true);
    }, 2000);
  };

  const handleCardMouseLeave1 = () => {
    clearTimeout(hoverMessageTimeout1);
    setShowHoverMessage1(false);
  };
  return (
    <div className='work-container' id='work-section'>
      <div className='work-title'>
        <h1>My Work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia voluptatem, voluptatum, quibusdam quos voluptate, quod quae voluptatibus quas doloribus quidem. Quisquam quia voluptatem, voluptatum, quibusdam quos voluptate, quod quae voluptatibus quas doloribus quidem.
        </p>
      </div>
      <div className='work-content'>
        
        <div className='card-section'>
        <FlipCard isFlipped={isFlipped} flipDirection="vertical">
          {/* Front side of the card */}
          <div 
            onClick={handleClick}
            className="card-front"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            >
            <Image 
              src='/mehndi-7.jpg'
              width={300}
              height={300}
              alt='logo'
            
            />
          </div>
        
          {/* Back side of the card */}
          <div onClick={handleClick} className="card-back">
            {/* <Image 
              src='/image-2.png'
              width={300}
              height={300}
              alt='logo'
              className='mt-20 ml-20 hover:opacity-0.7 front'
            /> */}
            <h1 className="text-black font-semibold text-2xl  text-gray-900">Bridal Mehndi Design</h1>
            <p className="text-black text-center text-gray-700 mt-10">Get your brides get ready for ceremony!</p>
            <Link href="https://www.instagram.com/mehndiandmeee/" target='_blank'>
            <button className="relative rounded-full text-black border-2 border-solid border-gray-900 hover:bg-gray-900  hover:text-white px-8 py-3 mt-10 ">
              <span className="flex flex-row gap-5">Visit on Instagram
              <BsSend style={iconStyles}/></span>
              
            </button>
            </Link>
          </div>
        </FlipCard>
        <FlipCard isFlipped={isFlipped1} flipDirection="vertical">
          {/* Front side of the card */}
          <div 
            onClick={handleClick1}
            className="card-front"
            onMouseEnter={handleCardMouseEnter1}
            onMouseLeave={handleCardMouseLeave1}
            >
            <Image 
              src='/mehndi-7.jpg'
              width={300}
              height={300}
              alt='logo'
            
            />
            
          </div>
        
          {/* Back side of the card */}
          <div onClick={handleClick1} className="card-back">
            {/* <Image 
              src='/image-2.png'
              width={300}
              height={300}
              alt='logo'
              className='mt-20 ml-20 hover:opacity-0.7 front'
            /> */}
            <h1 className="text-black font-semibold text-2xl  text-gray-900">Bridal Mehndi Design</h1>
            <p className="text-black text-center text-gray-700 mt-10">Get your brides get ready for ceremony!</p>
            <Link href="https://www.instagram.com/mehndiandmeee/" target='_blank'>
            <button className="relative rounded-full text-black border-2 border-solid border-gray-900 hover:bg-gray-900  hover:text-white px-8 py-3 mt-10 ">
              <span className="flex flex-row gap-5">Visit on Instagram
              <BsSend style={iconStyles}/></span>
              
            </button>
            </Link>
          </div>
        </FlipCard>
        </div>
        <Image 
              src='/layer-2.svg'
              width={300}
              height={300}
              alt='logo'
              className="logo-side"
            />
      </div>
    </div>
  )
}

export default Work
