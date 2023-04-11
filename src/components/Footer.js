import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiIndeed } from 'react-icons/si'

const Footer = () => {
  return (
  <footer className='footer'>
    <a href='https://github.com/coltonsmith135'><i id='socials'><FaGithub /></i></a>
    <a href='https://www.linkedin.com/in/colton-smith-b6b93b271/'><i id='socials'><FaLinkedin /></i></a>
    <a href='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend'><i id='socials'><SiIndeed /></i></a>
 </footer>
  )
}

export default Footer