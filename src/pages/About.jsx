import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay">
          <div className="container text-center">
            <h1>About Us – The Vegan Foods</h1>
            <p> Pure bhi, Healthy bhi — Pure for Sure.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0 about-img-container">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.9gbUFXimHCxDhpTsMmBNsQHaFj?pid=Api&P=0&h=180"
              alt="Our Mission"
              className="about-img"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="mb-3">Our Mission</h1>
            <p className="text-muted px-3">
       To empower individuals to make healthier, ethical, and sustainable food choices by delivering pure, guilt-free, and vegan products that offer unmatched nutritional value and taste — starting with our Pure for Sure Soya Paneer.

            </p>
          </div>
        </div>

        <div className="row align-items-center flex-lg-row-reverse">
          <div className="col-lg-6 mb-4 mb-lg-0 about-img-container">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.uKvb1Xj7iXZSM5bY0Q7nwQHaFj?pid=Api&P=0&h=180"
              alt="Our Vision"
              className="about-img"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="mb-3">Our Vision</h1>
            <p className="text-muted px-3">
To become a trusted name in plant-based nutrition by leading the shift from adulterated and unhealthy food options to clean, sustainable, and cruelty-free alternatives — making a healthier planet and healthier people a reality.

            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="about-why pb-5">
        <div className="container">
          
          <div className="row">
            <div className="col-md-6">
              <h2 className=" mb-3">Why Choose Soya Paneer & Vegan?</h2>
              <ul>
                <li>Power Protein, Low Fat — fuel your body, not your waistline.</li>
                <li>Heart & Gut Friendly — no cholesterol, no lactose.</li>
                <li>Weight Wise — keeps you fit, light, and active.</li>
                <li>Gluten-Free Goodness — safe for sensitive diets.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2 className="mb-3">Why Vegan Over Adulterated Paneer?</h2>
              <ul>
                <li>No Nasties — zero chemicals or fillers.</li>
                <li>Pure & Honest — only natural ingredients.</li>
                <li>Planet-Friendly — cruelty-free & sustainable.</li>
                <li>Taste Without Guilt — flavour meets ethics.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="about-closing">
        <div className="container text-center">
          <p className="">
            At The Vegan Foods, we’re not just selling food; we’re starting a
            movement towards a healthier, cleaner, and more compassionate world.
          </p>
                  <h4 className="closing-tagline">Pure bhi, Healthy bhi — Pure for Sure.</h4>
        </div>
      </section>
    </>
  );
};

export default About;
