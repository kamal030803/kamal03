import React from 'react'
import './About.css'
import MePhoto from '../../assets/me.jpeg'
import { FaAward} from 'react-icons/fa'
import { FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MePhoto} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Year Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Open to Work</h5>
              <small>As Intern Now</small>
            </article>

          </div>

          <p>
          I am a Web Developer,ML enthusiast, competitive programmer. I am pursuing Bachelor of technology in Computer Science and Engineering at IIT (ISM) DHANBAD. I am also pursuing minor in Finance and interested in integrating Finance with Tech. Besides, I love singing and playing chess.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About