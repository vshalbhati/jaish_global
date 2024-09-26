import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Menu, X, Phone, Mail, MapPin, Instagram, Linkedin, Facebook,Paperclip } from 'lucide-react';
import './Homepage.css';
import logo from "../../assets/logo/logo_name.png"
import axios from 'axios';
import { Link } from 'react-router-dom';

const VideoCarousel = () => {
  const videos = [
    require("../../assets/videos/vapt.mp4"),
    require("../../assets/videos/cloud.mp4"),
    require("../../assets/videos/identity.mp4"),
    require("../../assets/videos/microsoft.mp4"),
    require("../../assets/videos/risk.mp4"),
    require("../../assets/videos/soc.mp4"),

  ];

  return (
    <Carousel 
      autoPlay 
      interval={10000} 
      infiniteLoop 
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
      swipeable={true}
    >
      {videos.map((video, index) => (
        <div key={index}>
          <video width="100%" height="900" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </Carousel>
  );
};


const Content = () => (
  <section className="content-section">
    <div className="container content-container">
      <div className="content-text">
        <h2>Jaish Global Private Limited</h2>
        <p>
          We are dedicated to providing top-notch services and innovative solutions for our clients.
          With years of experience and a team of experts, we're ready to tackle any challenge.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Learn More
        </motion.button>
      </div>
      <div className="content-image">
        <img src={require('../../assets/logo/logo_name.png')} alt="Company Image" />
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    organization: '',
    message: ''
  });
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const [remchar, setremchar] = useState(1500)
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));

    if (id === 'message') {
      setremchar(1500 - value.length); 
    }
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFileName(selectedFile.name);
      setFile(selectedFile);
    } else {
      setFileName('');
      setFile(null);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setResult(null);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      if (file) {
        formDataToSend.append('attachment', file);
      }

      const response = await axios.post('http://localhost:3001/api/send-email', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setResult({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error.response ? error.response.data : error);
      setResult({ success: false, message: 'Failed to send email. Please try again.' });
    } finally {
      setSending(false);
    }
  };
  

  return (
    <section className="contact-form-section">
      <div className="container">
      <img src={require('../../assets/imgs/contact_form.jpg')} alt="Company Logo" className="contactformsideimage" />
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" required value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" required value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number *</label>
            <input type="tel" id="contact" required value={formData.contact} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input type="text" id="organization" value={formData.organization} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" rows="4" required value={formData.message} onChange={handleInputChange}></textarea>
            <text>{remchar} characters remaining</text>
          </div>
          <div className="form-group">
            <label htmlFor="document" className="file-upload-label">
              <Paperclip size={18} />
              <span>{fileName || 'Attach Document'}</span>
              <input
                type="file"
                id="document"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt"
              />
            </label>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-button"
            type="submit"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </motion.button>
          {result && (
            <p className={result.success ? 'success-message' : 'error-message'}>
              {result.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="footer-section">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <p>Enhance protection with cyber security, Automate with AI identity.</p>
      </div>
      <div className="footer-section">
        <ul>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Services</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Info</h3>
        <ul className="contacticons">
          <li className="contacticons"><Phone size={18} /> (123) 456-7890</li>
          <li className="contacticons"><Mail size={18} /> info@jaishglobal.in</li>
          <li className="contacticons"><MapPin size={18} /> 449, 4th floor JMD Megapolis, Sector-48, Gurugram, Haryana - 122018</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <ul>
            <li><Instagram/> jaishglobal.tech</li>
            <li><Linkedin/> jaishglobal.tech</li>
            <li><Facebook/> jaishglobal.tech</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Jaish Global Private Limited. All rights reserved.</p>
    </div>
  </footer>
);

const Homepage = () => {
  return (
    <div className="homepage">
      <main>
        <VideoCarousel />
        <Content />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;