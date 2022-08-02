import React from 'react'
import Video from '../../images/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg, 
    HeroContent,
    HeroH1,
    HeroP
} from './HeroElements'

const Hero = () => {
  return (
    <>
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Win This Nvidia GeForce RTX 3060 Ti Graphics Card For Only £1!</HeroH1>
                <HeroP>Guaranteed Winner - Live Draw 30th August 2022 @ 12pm </HeroP>
            </HeroContent>
        </HeroContainer>
    </>
  )
}

export default Hero;