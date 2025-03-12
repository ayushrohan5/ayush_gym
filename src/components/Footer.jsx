import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Footer = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
          process.env.REACT_APP_SERVICE_KEY,
          process.env.REACT_APP_TEMPLATE_KEY,
          form.current,
          {
            publicKey: process.env.REACT_APP_PUBLIC_KEY, 
          }
        )
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
        
      };

  return (
    <footer id="footer">

      <div className="leftFooter">
        <h4>Get New Updates</h4>
        <div className="subscribe-container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="email" placeholder="Enter your Email*" />
          <input type="submit" value="Subscribe" />
          </form>
        </div>
        <p>Stay informed with our latest news and exclusive content.</p>
      </div>

      <div className="midFooter">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/logo.PNG" alt="NFC GYM" width="200px" height="200px" style={{ marginBottom: '15px' }} />
          <p>Empower Your Fitness Journey.</p>
          <p>© 2025 NFC Gym. All Rights Reserved.</p>
          <h4 className="mb-6">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ayush-rohan-227b31214/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ayushrohan5" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/thefantasticsoul" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="rightFooter">
        <h4>Our Location</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.410436460115!2d77.35368428715823!3d28.641670000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbcf85a5686b%3A0xd42b1c045fc5abc0!2sFitness365%20Gym!5e0!3m2!1sen!2sin!4v1741775524925!5m2!1sen!2sin" width="300" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </footer>
  );
};

export default Footer;