import React from 'react'
import './about.css';
import FEMI from '../../assets/femi2.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { FiUsers } from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={FEMI} alt='About Image' />
          </div>

        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Coding</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Network</h5>
              <small>300+</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>14+ Completed</small>
            </article>
          </div>
          <p>
            I am a passionate and goal oriented
            Developer with kin interest in creative coding.
            Swift to learning new
            ideas and implementations to
            accomplish desired result.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About