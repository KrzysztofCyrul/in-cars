// src/pages/Contact.js
import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us.</p>
      <ContactForm />
    </div>
  );
}

export default Contact;
