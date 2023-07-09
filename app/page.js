"use client"
import { Contact, Explore, Hero, Navbar, Work } from '@/components'
import { useEffect } from 'react'
import Image from 'next/image'
export default function Home() {
  return (
  
    <main className="flex flex-col w-full ">
      <Navbar />
      <Hero />
      <Work />
      <Explore />
      <Contact />
    </main>
  )
}
