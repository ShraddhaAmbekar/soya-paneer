// NewsletterFooter.js
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <>
      {/* Newsletter Sign-Up */}
      
      {/* Footer */}
      <footer className="text-white py-5 px-4 container-fluid footer">
        <div className="row p-5" >
          <div className="col-md-3 pb-5">
            <h4 className="mb-5">Working Hours</h4>
            <p>Mon-Fri: 9 AM – 8 PM</p>
            
          </div>

          <div className="col-md-3 pb-5">
            <h4 className="mb-5">Address</h4>
            <p> Vegan Foods<br />
            277 Omkar Road, Dehradun, Uttarakhand, Pin -248001 </p>
            <p>Email: <a href="mailto:info@theveganfood.com" className="text-white text-decoration-underline">info@theveganfoods.com</a></p>
            <p>Phone: 
              <a className="text-white text-decoration-underline"> +91 8755259301</a><br />
              <a className="text-white text-decoration-underline">  +91 8755259302 (Founder)</a><br /> &nbsp; &nbsp; &nbsp;
                <a className="text-white text-decoration-underline"> +91 8755259303</a><br /> &nbsp; &nbsp; &nbsp;
      <a className="text-white text-decoration-underline">+91 8755259304</a><br /> &nbsp; &nbsp;    <a className="text-white text-decoration-underline"> +91 8755259305 (Sales) </a><br />

                </p>

          </div>

          <div className="col-md-3 pb-5">
            <h4 className="mb-5">Links</h4>
            <ul className="list-unstyled footer-links">
              <li><Link to="/" className="text-white"> <i className='fas fa-angle-right'> </i> Home</Link></li>

              <li><Link to="/about" className="text-white"><i className='fas fa-angle-right'></i> About</Link></li>

              <li><Link to="/contact" className="text-white"><i className='fas fa-angle-right'></i> Contacts </Link></li>
              <li><Link to="/product" className="text-white"><i className='fas fa-angle-right'></i > Our products</Link></li>
            </ul>
          </div>


          <div className="col-md-3 pb-5">
            <h4 className="mb-5">Social Media</h4>
            <ul className="list-unstyled d-flex">
              
              <li >
                <a style={{ color: 'white', border: '1px white solid', margin: '10px', padding: '15px' }} href=""><i className='fab fa-whatsapp'></i></a>
              </li>
              <li >
                <a style={{ color: 'white', border: '1px white solid', margin: '10px', padding: '15px' }} href="https://www.facebook.com/profile.php?id=61578200260052"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a style={{ color: 'white', border: '1px white solid', padding: '15px', margin: '10px' }} href="https://www.instagram.com/theveganfoodz?igsh=MXVscnRoZmo1MHFmMA=="><i className="fab fa-instagram"></i></a>
              </li>
              <li >
                <a style={{ color: 'white', border: '1px white solid', padding: '15px', margin: '10px' }} href="https://x.com/"><i className="fab fa-twitter"></i></a>
              </li>
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
