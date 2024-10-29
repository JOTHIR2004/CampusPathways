import React from 'react';
import './contact.css';
import NavBar from '../components/nav';

const Contact = () => {
  return (
    <>
     <NavBar/>
    <div className="contact-page">
    

      {/* Main Content */}
      <main>
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Reach out to us using the information below.</p>
        
        <div className="contact-info">
          <p><strong>Address:</strong> 123 Main St, Citytown, CT 12345</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contact@yourcompany.com</p>
        </div>
      </main>

      {/* Footer */}
      <footer>
            <h4>Thank You</h4>
      </footer>
    </div>
    </>
  );
};

export default Contact;
