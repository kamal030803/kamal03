import React from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_54nux2d', 'template_0u4ennn', form.current, 'oaeLXfpp-LQA3RrMQ')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kanand032003@gmail.com</h5>
            <a href="mailto:kanand032003@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Kamal Anand</h5>
            <a href="https://www.linkedin.com/in/kamal-anand-935901227/" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+917069216202</h5>
            <a href="https://api.whatsapp.com/send?phone+917069216202" target='_blank'>Send a Message</a>
          </article>
        </div>

        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' reqired></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact