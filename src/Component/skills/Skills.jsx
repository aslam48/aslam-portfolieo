import React from 'react'
import "./skills.css"
import FrontEnd from './FrontEnd'

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <span className='section__subtitle'>My Technical Level </span>

            <div className="skills__container container grid"></div>
            <FrontEnd/>
    </section>
  )
}

export default Skills