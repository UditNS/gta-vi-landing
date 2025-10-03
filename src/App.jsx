import { useState } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Hero from './sections/Hero'
import Nav from './sections/Nav'
import Video from './sections/Video'
import JasonContent from './sections/JasonContent'
import LuciaVideo from './sections/LuciaVideo'
import LuciaContent from './sections/LuciaContent'
gsap.registerPlugin(ScrollTrigger)

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Video />
      <JasonContent />
      <LuciaVideo />
      <LuciaContent />
    </>
  )
}

export default App
