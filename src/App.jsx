import { useState } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Hero from './sections/Hero'
gsap.registerPlugin(ScrollTrigger)

function App() {

  return (
    <>
      <nav>
        <img src="../public/images/nav-logo.svg" alt="logo" className='scale-90' />
        <img src="/images/menu.svg" className='w-10' alt="" />
      </nav>
      <Hero />
    </>
  )
}

export default App
