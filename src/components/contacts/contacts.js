// ContactUs.js

import React from 'react';
import styles from './contacts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../navbar/navbar';


const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <Navbar/>
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>

      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>

        <div className={styles.contacticons}>
        <a href="tel:+254796168288" title="Call us">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href="mailto:beatechdynamics@gmail.com" title="Email us">
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
        </a>
        <a href="https://wa.me/+254796168288" title="WhatsApp us" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://www.facebook.com/example" title="Visit us on Facebook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/example" title="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
