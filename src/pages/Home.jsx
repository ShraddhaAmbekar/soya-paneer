import React from 'react';

const Home = () => {
  return (
    <div>
      <div className='section1 container-fluid'>
        {/* <div id="overlay"></div> */}
        {/* <div className='text-center'>
          <h5>The Vegan Food</h5>
          <h1>SOYA PANEER • HEALTHY & DESI</h1>
          <h4>JAHAN SWAAD MILE SEHAT KE SAATH </h4>
          <p>  Halke, protein-rich bites <br /> jo ghar ke khaane jaisa sukoon bhi de, aur body ko strength bhi.
          </p>
        </div> */}
      </div>


      <div className='section2 container-fluid'>
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Image Section */}
            <div className="container col-md-6 position-relative mb-5 mb-md-0 main-image-container">
              <img
                src="/assets/images/section2.jpg"
                alt="restaurant" className="img-fluid rounded main-image" />

            </div>

            {/* Right Text Section */}
            <div className="col-md-6 right-section " id='about'>
              <p className="text-black small">PLANT-BASED PERFECTION</p>
              <h1 className="mb-4">WE DON'T JUST SAY 'PURE'<br /> WE MEAN IT</h1>
              <p className="text-muted">
                Our Soya Paneer is a plant-based powerhouse of nutrition, crafted for those who care about purity, health, and sustainable choices. Whether you're vegan, lactose-intolerant, or simply conscious about clean eating, Pure for Sure brings you a safe, protein-rich alternative- without compromise.
              </p>

              <div className='action-div'>
                <button className="action-btn mt-3">ABOUT US &nbsp; &nbsp; &nbsp; &nbsp;→</button>
              </div>
              <h3 className="signature mt-5"></h3>
            </div>
          </div>
        </div>

      </div>

      <div className="section3 container-fluid">
        <div id="overlay"></div>
        <div className="container text-center">
          <h5 className=' text-white small'> WE OFFER</h5>
          <h1 className=' text-center pb-4'>OUR MENU OF VEGAN GOODNESS</h1>
          <div className="row container">

            <div className="col-md-6 col-sm-12 px-5">

              <h3>PLANT-POWERED WELLNESS</h3>
              <p>Boosts energy, immunity &  overall health— packed with essential nutrients.</p>
              <h3>LIGHT ON CALORIES, FULL ON FLAVOR</h3>
              <p>Naturally low in fat, high in satisfaction — your guilt-free indulgence.</p>
              <h3>GOOD FOR YOU. GOOD FOR EARTH.</h3>
              <p>Every bite helps reduce your carbon footprint and supports sustainability.</p>

            </div>
            <div className="col-md-6 col-sm-12">
              <h3>NOURISH  WITHOUT  INFLAMMATION</h3><p>Helps reduce joint pain & inflammation — backed by plant-based science.</p>
              <h3>PURE. CLEAN. COMPASSIONATE.</h3><p>No additives. No hormones.<br /> Just pure plant goodness, cruelty-free.</p>
              <h3>No Preservatives. No Chemicals.</h3><p>Absolutely clean label.<br />We believe in transparency — what you see is what you get.</p>
            </div>

          </div>
        </div>
      </div>
      <div className="container dishes p-3">
        <h5 className='text-black small text-center pt-5'> Our Dishes</h5>
        <h1 className=' text-center'>Versatile in the Kitchen : Pure for Sure<br/> Soya Paneer fits effortlessly into every meal</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img src='/assets/images/web-05.jpg' />
              {/* <h6 className='text-center'>Lorem, ipsum dolor.</h6> */}

            </div>
            <div className="col-md-4 col-sm-12">
              <img src='/assets/images/web-06.jpg' />
              {/* <h6 className='text-center'>Lorem, ipsum dolor.</h6> */}

            </div>
            <div className="col-md-4 col-sm-12">
              <img src='/assets/images/web-07.jpg' />
              {/* <h6 className='text-center'>Lorem, ipsum dolor.</h6> */}
            </div>
          </div>

        </div>
      </div>

      <div className='secrete container-fluid'>

        <div className='secrete-content'>
          <h5>Primium Selection</h5>
          <h1>Good for You. <br />Good for the Planet.
          </h1>
          {/* <button className="action-btn mt-3">View More &nbsp; &nbsp; &nbsp; &nbsp;→</button> */}

        </div>

      </div>
      <div className="section4 container-fluid">
        <div className='row'>
          <div className="col"><h2>
            Newsletter Sign up</h2></div>

          <div className='row'>
            <div className='col-md-6 col-sm-12 newsletter d-flex'>
              <input type="text" placeholder='Enter your email here' />
              <button className="action-btn mt-3">Submit &nbsp; &nbsp;→</button>
            </div>
            <div className="d-flex align-items-center mt-3 col-md-6 col-sm-12">
              <input type="checkbox" className="me-2 p-2" />
              <span className='privacy-policy'>I agree to the <a href="#" className="text-dark fw-bold text-decoration-underline">Privacy Policy</a>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home    
