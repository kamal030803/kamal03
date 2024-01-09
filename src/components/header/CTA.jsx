import React from 'react'
import Mern_Resume from '../../assets/A2.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Mern_Resume} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA