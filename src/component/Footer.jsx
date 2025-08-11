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
            <p>Mon-Fri: 9 AM – 8 PM</p>
            
          </div>

          <div className="col-md-3 pb-5">
            <h4 className="mb-5">Address</h4>
            <p> Vegan Foods<br />
            277 Omkar Road, Dehradun, Uttarakhand, Pin -248001 </p>
            <p>Email: <a href="mailto:info@theveganfood.com" className="text-white text-decoration-underline">info@theveganfoods.com</a></p>
            <p>Phone: <a href="t" className="text-white text-decoration-underline">+</a></p>
          </div>

          <div className="col-md-3 pb-5">
            <h4 className="mb-5">Links</h4>
            <ul className="list-unstyled footer-links">
              <li><a href="#" className="text-white"> <i className='fas fa-angle-right'> </i> Home</a></li>

              <li><a href="#about" className="text-white"><i className='fas fa-angle-right'></i> About</a></li>

              <li><a href="#" className="text-white"><i className='fas fa-angle-right'></i> Contacts </a></li>
              <li><a href="#" className="text-white"><i className='fas fa-angle-right'></i > Our products</a></li>
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
