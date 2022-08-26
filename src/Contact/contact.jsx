import React, { useRef } from 'react';
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ab2vm9g', 'template_xuww1lr', form.current, 'paqIBw4UIpSYqF7-T')
        e.target.reset();
    };

  return (
    <div>
      <h1 id="contact" className="title contact_title">ME CONTACTER</h1>
      <div className="container">
      <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Nom complet" required />
          <input type="email" name='email' placeholder=" Adresse email" required />
          <textarea name="message" rows="7" placeholder="Le message" required ></textarea>
          <button type="submit" className="contact_button"> Envoyer le formulaire</button>
        </form>
      </div>
    </div>
  )
}

export default Contact