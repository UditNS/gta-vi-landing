import React from 'react'
import ComingSoon from './ComingSoon'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useMaskSettings } from '../../constants'
function Hero() {

    const {initialMaskPos, initialMaskSize, maskPos, maskSize} = useMaskSettings()

   

    return (
        <section className='hero-section'>
            <div className='size-full mask-wrapper'>
                 <img src="/images/hero-bg.webp" alt="" className='scale-out'/> {/*always use .webp images in animation due to its high optimization */}
                <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out" />
                <img  src="/images/watch-trailer.png" alt="trailer" className="trailer-logo fade-out" />
                <div className="play-img fade-out">
                    <img src="/images/play.png" alt="play" className="w-7 ml-1" />
                </div>
            </div>
            <div>
                <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo" />
            </div>

            <div className="fake-logo-wrapper">
                <img src="/images/big-hero-text.svg" className="overlay-logo" />
            </div>
            <ComingSoon />
        </section>
    )
}

export default Hero