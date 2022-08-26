import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <div>
      <h1 id="contact" className="title contact_title">ME CONTACTER</h1>
      <div className="container">
        <form >
          <input type="text" name='name' placeholder="Nom complet" required />
          <input type="email" name='email' placeholder=" Adresse email" required />
          <textarea name="message" rows="7" placeholder="Le message" required ></textarea>
          <button type="submit" className="contact_button"> Envoyer le formulaire</button>
        </form>
      </div>
    </div>
  )
}

export default contact