// NewsletterFooter.js
import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Newsletter Sign-Up */}
    

      {/* Footer */}
      <footer className="text-white py-5 px-4 container-fluid footer">
        <div className="row p-5" >
          <div className="col-md-3 pb-5">
            <h4 className="mb-5">Working Hours</h4>
            <p>Mon-Fri: 9 AM – 6 PM</p>
            <p>Saturday: 9 AM – 4 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="col-md-3 pb-5">
            <h4 className="mb-5">Address</h4>
            <p> —<br /> </p>
            <p>Email: <a href="mailto:info@email.com" className="text-white text-decoration-underline">info@email.com</a></p>
            <p>Phone: <a href="tel:+18408412569" className="text-white text-decoration-underline">+</a></p>
          </div>

          <div className="col-md-3 pb-5">
            <h4 className="mb-5">Links</h4>
            <ul className="list-unstyled footer-links">
              <li><a href="#" className="text-white">Home</a></li>
            
              <li><a href="#" className="text-white">About</a></li>
       
              <li><a href="#" className="text-white">Contacts</a></li>
                     <li><a href="#" className="text-white">Our products</a></li>
            </ul>
          </div>

          
          <div className="col-md-3 pb-5">
             <h4 className="mb-5">Social Media</h4>
            <ul className="list-unstyled d-flex">
            <li ><a  style={{ color: 'white',border:'1px white solid', margin:'10px', padding:'10px' }} href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a  style={{ color: 'white',border:'1px white solid', padding:'10px'  ,margin:'10px'}} href="#"><i className="fab fa-instagram"></i></a></li>
            <li ><a  style={{ color: 'white',border:'1px white solid', padding:'10px',  margin:'10px'}} href="#"><i className="fab fa-twitter"></i></a></li>
          </ul>
          </div>
        </div>

        <hr />
        <p className='text-center'>All right reserved 2025</p>
      </footer>

    </>
  );
};

export default Footer;
