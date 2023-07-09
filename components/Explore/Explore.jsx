"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './explore.css'
const Explore = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show);
  }
  const iconStyles = {
      fontSize: '20px', // Change the size as per your requirement// Change the color as per your requirement
    };
  return (
    <div className='flex justify-center items-center mt-10'>
            
            {
              show ? (<div className="w-full rounded-lg flex flex-col justify-center items-center"  id='explore-container'>
                <div className="grid grid-cols-3 gap-6 cards-grid">
                {/* Card 1 */}
                <div className="bg-white p-4 shadow hover:shadow-lg ">
                  <a href="/mehndi-1.jpg" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/mehndi-1.jpg"
                      width={300}
                      height={300}
                      alt="logo"
                    />
                  </a>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-4 shadow hover:shadow-lg">
                  <a href="/mehndi-2.jpg" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/mehndi-2.jpg"
                      width={300}
                      height={300}
                      alt="logo"
                    />
                  </a>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-4 shadow hover:shadow-lg">
                  <a href="/mehndi-3.jpg" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/mehndi-3.jpg"
                      width={300}
                      height={300}
                      alt="logo"
                    />
                  </a>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-4 shadow hover:shadow-lg">
                  <a href="/mehndi-4.jpg" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/mehndi-4.jpg"
                      width={300}
                      height={300}
                      alt="logo"
                    />
                  </a>
                </div>

                {/* Card 5 */}
                <div className="bg-white p-4 shadow hover:shadow-lg">
                  <a href="/mehndi-6.jpg" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/mehndi-6.jpg"
                      width={300}
                      height={300}
                      alt="logo"
                    />
                  </a>
                </div>

                {/* Card 6 */}
                <div className="bg-white p-4 shadow hover:shadow-lg">
                  <a href="/mehndi-5.jpg" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/mehndi-5.jpg"
                      width={300}
                      height={300}
                      alt="logo"
                    />
                  </a>
                </div>
              </div>

                <button
              onClick={handleShow}
              className="rounded-full text-black border-2 border-solid border-gray-900 hover:bg-gray-900  hover:text-white px-5 mt-4 py-3 mb-3">
              <span className="flex flex-row gap-3">Show Less
              <FaArrowUp style={iconStyles}/></span>
              
              
      
            </button>
              </div>
              
              ):(
                <button
              onClick={handleShow}
              className="rounded-full text-black border-2 border-solid border-gray-900 hover:bg-gray-900  hover:text-white px-5 py-3 mb-3">
              <span className="flex flex-row gap-3">Show More
              <FaArrowDown style={iconStyles}/></span>
              
              
      
            </button>
              )
            }
    </div>
  )
}

export default Explore
