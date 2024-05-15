import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/fullpp.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className='about-section'>
        <div className='about-left'>
          <img src={profile_img}></img>
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>Hey there! 👋 I'm Dipen Rajbhandari, a frontend developer with a passion for crafting captivating digital experiences. 
             With a bachelor degree in CSIT, I've developed a keen interest for design
             and turning ideas into reality.
            My toolbox includes proficiency in HTML, CSS, JavaScript, and various frontend frameworks like React.I'm also committed to staying updated with the latest technologies and best practices to deliver cutting-edge solutions.I've also got a bit of Python knowledge too!</p>
            
          </div>
          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS</p><hr style={{width:"70%"}}></hr>
            </div>
            <div className='about-skill'>
              <p>JavaScript</p><hr style={{width:"70%"}}></hr>
            </div>
            <div className='about-skill'>
              <p>ReactJS</p><hr style={{width:"60%"}}></hr>
            </div>
            <div className='about-skill'>
              <p>Python</p><hr style={{width:"50%"}}></hr>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About