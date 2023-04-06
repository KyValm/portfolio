import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container } from 'react-bootstrap';

const Contact = () => {
  const [emailStatus, setEmailStatus] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b9c6668', 'template_u5qxqfs', e.target, 'PENTjkTA3jWIPu7uJ')
      .then((result) => {
        setEmailStatus('Email successfully sent!');
      }, (error) => {
        setEmailStatus('Failed to send email. Try again.');
      });

    e.target.reset();
  };


  return (
    <div className="contact-container" id='connect'>
      <Container className="form-wrapper">
        <div className="contact-form-wrapper">
        <h2>Let's Chat
          <span className="wave">👋</span>
        </h2>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Initiate</button>
          {emailStatus && <p className="email-status">{emailStatus}</p>}
        </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;