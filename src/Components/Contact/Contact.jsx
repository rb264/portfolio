import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "96c524e7-1e11-4523-85b4-e34b5f9458ce");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm currently available to work, so feel free to contact with me</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon}></img>
              <p>dipenrb9@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon}></img>
              <p>9823344751</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon}></img>
              <p>Tokha,Kathmandu</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name'></input>
          <label>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email'></input>
          <label>Write your message here</label>
          <textarea name='message' rows='8' placeholder='Enter Your message'></textarea>
          <button type='submit'className='contact-submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact