import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {SiCodechef} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kamal-anand-935901227/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/kamal030803" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com/kamal3.8/" target="_blank"><GrInstagram/></a>
        <a href="https://www.codechef.com/users/kamal03" target="_blank"><SiCodechef/></a>
    </div>
  )
}

export default HeaderSocials