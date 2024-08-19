import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Email: your.email@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Location: City, State, Country</p>
      </div>
      <div className="social-links">
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </section>
  );
}

export default Contact;