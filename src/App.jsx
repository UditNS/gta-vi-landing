import { useState } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Hero from './sections/Hero'
import Nav from './sections/Nav'
import Video from './sections/Video'
import JasonContent from './sections/JasonContent'
import LuciaVideo from './sections/LuciaVideo'
import LuciaContent from './sections/LuciaContent'
import PostCard from './sections/PostCard'
import FinalVideo from './sections/FinalVideo'
import Outro from './sections/Outro'
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
      <PostCard />
      <FinalVideo />
      <Outro />
    </>
  )
}

export default App
