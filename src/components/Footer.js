import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
  <footer className='footer'>
    <a href='https://github.com/coltonsmith135'><i id='socials'><FaGithub /></i></a>
    <a href='https://www.linkedin.com/in/colton-smith-b6b93b271/'><i id='socials'><FaLinkedin /></i></a>
 </footer>
  )
}

export default Footer