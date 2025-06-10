import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Kishore</b> and I am from Chennai.
            I'm a <b>MERN stack web developer</b> and a 4th year college student studying <b>Msc Integrated in IT</b>. <br/><br/>
            I'm always <strong>open to collaborations, internships, and opportunities</strong> where I can contribute, learn, and grow. 
    Whether it's backend logic, frontend polish, or full-stack application flow — I love taking ownership and solving problems end-to-end.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Python' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Mysql'/>
        
      </div>
    </>
  )
}

export default About