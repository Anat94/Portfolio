import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'



const footer = () => {
  return (
    <div className="container footer">
      <div className="footer_content">
        <div className="footer_droits">
          <span>@Anatole Babin 2022-Tous droits réservés</span>
        </div>
        <div className="footer_icons">
          <a href="#"><BsLinkedin className="icon" /></a>
          <a href="#"><BsGithub className="icon" /></a>
          <a href="#"><BsTwitter className="icon" /></a>
        </div>
      </div>
    </div>
  )
}

export default footer