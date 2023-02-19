
import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://github.com/Alve2000">
        <div>
          <AiFillGithub />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/alvin-nayak-9614bb211/">
        <div>
          <AiFillLinkedin />
        </div>
      </a>
      <a href="https://twitter.com/Alve___">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://www.instagram.com/alve__07/">
        <div>
          <BsInstagram />  
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
