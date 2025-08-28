import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const valid = true;

    if (valid) {
      alert("Message submitted successfully!");

      // Clear form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div>
      <section className="contact-hero">
        <div className="overlay">
          <div className="container text-center">
            <h1>Contact Us</h1>
            <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="container py-2">
              <div className="d-flex">
                <div className="icon-box text-center">
                  <div>
                    <i className="fa fa-phone icon"></i>
                    <br /><br />
                    <h5>Phone</h5>
                    <p>+91 8755259301</p>
                  </div>
                </div>

                <div className="icon-box text-center">
                  <div>
                    <a href="https://wa.me/918755259301?text=Hello%20I%20want%20to%20know%20more" target="_blank"> <i className='fab fa-whatsapp whatsapp icon'></i></a>

                    <br /><br />
                    <h5>Whatsapp</h5>
                    <p>+91 8755259301</p>
                  </div>
                </div>
              </div>

              <div className='d-flex'>
                <div className="icon-box text-center">
                  <div>  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@theveganfoods.com&su=Hello&body=I%20want%20to%20connect%20with%20you." target="_blank" className='text-success'>
                    <i className='fa fa-envelope icon'></i></a>

                    <br /><br />
                    <h5>E-mail</h5>
                    <p>info@theveganfoods.com</p>
                  </div></div>
                <div className="icon-box  text-center"><div><i className="fa fa-address-card icon " aria-hidden="true"></i>
                  <br />
                  <h5>
                    Address
                  </h5><br />
                  <p>277 Omkar Road, Dehradun, <br />Uttarakhand, Pin -248001</p>
                </div></div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h1 className=''>Get in Touch</h1>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Description"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-success">Send Message</button>
          </form>
        </div>

        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3443.8367128414125!2d78.03948557556464!3d30.32716207478241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE5JzM3LjgiTiA3OMKwMDInMzEuNCJF!5e0!3m2!1sen!2sin!4v1756380191359!5m2!1sen!2sin" max-width="1000" width='100%' height="450" ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
