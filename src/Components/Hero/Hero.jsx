import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pp-img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import cv from '../../assets/cv.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src= {profile_img}></img>
      <h1><span>I'm Dipen Rajbhandari,</span>Frontend Developer</h1>
     

      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>
          <a href={cv} download> My CV</a>
        </div>
      </div>
    </div>
  )
}

export default Hero