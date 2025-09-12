import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click
  const closeMenu = () => {
    const navbar = document.getElementById("mainNavbar");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/assets/images/logo.png" alt="Logo" className="logo" />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* All Menu Items */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu}>
                Our Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeMenu}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://wa.me/918755259301" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"> </i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/profile.php?id=61578200260052" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/theveganfoodz" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://x.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
