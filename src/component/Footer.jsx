
      import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-white footer">
        <div className="container">
          <div className="row py-5 gy-5">
            
            {/* Working Hours */}
            <div className="col-12 col-sm-6 col-md-3 text-center text-md-start">
              <h4 className="mb-4">Working Hours</h4>
              <p className="mb-2">Mon - Fri: 9 AM – 8 PM</p>
              <p className="mb-0">Sat - Sun: Closed</p>
            </div>

            {/* Address */}
            <div className="col-12 col-sm-6 col-md-3 text-center text-md-start">
              <h4 className="mb-4">Address</h4>
              <p className="mb-2">
                Vegan Foods <br />
                277 Omkar Road <br />
                Dehradun, Uttarakhand <br />
                Pin - 248001
              </p>
              <p className="mb-0">
                Email:{" "}
                <a
                  href="mailto:info@theveganfoods.com"
                  className="text-white text-decoration-underline"
                >
                  info@theveganfoods.com
                </a>
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-sm-6 col-md-3 text-center text-md-start">
              <h4 className="mb-4 ">Quick Links</h4>
              <ul className="list-unstyled footer-links">
                <li className="mb-2">
                  <Link to="/" className="footer-link">
                    <i className="fas fa-angle-right me-2"></i> Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="footer-link">
                    <i className="fas fa-angle-right me-2"></i> About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="footer-link">
                    <i className="fas fa-angle-right me-2"></i> Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="footer-link">
                    <i className="fas fa-angle-right me-2"></i> Our Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Numbers */}
            <div className="col-12 col-sm-6 col-md-3 text-center text-md-start">
              <h4 className="mb-4">Contact</h4>

              <div className="mb-3">
                <p className="fw-semibold mb-1">Founder</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="tel:+918755259301" className="footer-link">
                      +91 87552 59301
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918755259302" className="footer-link">
                      +91 87552 59302
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="fw-semibold mb-1">Sales</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="tel:+918755259303" className="footer-link">
                      +91 87552 59303
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918755259304" className="footer-link">
                      +91 87552 59304
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918755259305" className="footer-link">
                      +91 87552 59305
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-light" />

          {/* Footer Bottom */}
          <div className="text-center py-3">
            <p className="mb-0 small">
              © {new Date().getFullYear()} Vegan Foods. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
