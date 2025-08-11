import React, { useEffect, useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Final background logic
  const shouldBeBlack = isScrolled || isMenuOpen;

  const navbarStyle = {
    backgroundColor: shouldBeBlack ? ' #16200ee3' : 'transparent',
    transition: 'background-color 0.3s ease',
    padding: '20px 40px',
    color: 'white',
    zIndex: 1000,
 
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar" style={navbarStyle}>
      <div className="container-fluid">
        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Left Links */}
        <div className="collapse navbar-collapse justify-content-start" id="mainNavbar" onClick={() => setIsMenuOpen(false)}>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link"  href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            
            <li className="nav-item"><a className="nav-link" href="#contact">Contact us</a></li>
             <li className="nav-item"><a className="nav-link"  href="#contact">Our Products</a></li>
          </ul>
        </div>

        {/* Logo Center */}
        <a className="navbar-brand">
          <img src="/assets/images/lgo.png" alt="Logo" className='logo'/>
        </a>

        {/* Social Icons Right */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" style={{ color: 'white', }} href=""><i className="fab fa-whatsapp"></i></a></li>
            <li className="nav-item"><a className="nav-link" style={{ color: 'white', }} href="https://www.facebook.com/profile.php?id=61578200260052"><i className="fab fa-facebook-f"></i></a></li>
            <li className="nav-item"><a className="nav-link" style={{ color: 'white' }} href="https://www.instagram.com/theveganfoodz?igsh=MXVscnRoZmo1MHFmMA=="><i className="fab fa-instagram"></i></a></li>
            <li className="nav-item"><a className="nav-link" style={{ color: 'white' }} href="https://x.com/"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
