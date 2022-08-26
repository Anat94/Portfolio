import React from 'react'
import "./home.css"
import "./home.scss"
import LOGO from "../assets/logo.png"
import AVATAR from "../assets/avatar.png"


const home = () => {
  return (
    <div id="home" className="container">
        <div className="navbar">
            <div className="logo">
                <img className="logo_img"src={LOGO} alt="" />
            </div>
            <div className="menu_items">
                <a href="#home" >Présentation</a>
                <a href="#competences" >Compétences</a>
                <a href="#experience" >Expériences</a>
                <a href="#projets" >Projets</a>
                <a href="#contact" >Contact</a>
            </div>
        </div>
        <div className="about">
            <div className="name">
                ANATOLE BABIN
            </div>
            <div className="typing-slider">
                <p>Etudiant EPITECH Paris</p>
                <p>Developpeur Web</p>
            </div>
            <div className="presentation">
                <div className="avatar">
                    <img className="avatar_img" src={AVATAR} alt="" />
                </div>
                <div className="right">
                    <div className="descriptif">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <div className="download">
                        <span className="text">Télécharger mon CV</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default home