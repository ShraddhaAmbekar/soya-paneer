import React from 'react'; 


const Home = () => {
  return (
    <div>
      <div className='section1 container-fluid'>
        <div id="overlay"></div>
        <div className='text-center'>
          <h5>The Vegan Food</h5>
          <h1>SOYA PANEER • HEALTHY & DESI</h1>
          <h4>JAHAN SWAAD MILE SEHAT KE SAATH </h4>
          <p>  Halke, protein-rich bites <br /> jo ghar ke khaane jaisa sukoon bhi de, aur body ko strength bhi.
          </p>
        </div>
      </div>


      <div className='section2 container-fluid'>
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Image Section */}
            <div className="container col-md-6 position-relative mb-5 mb-md-0 main-image-container">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP._X83FCgFYPzOtwFPm6cRUgHaHb?pid=Api&P=0&h=180"
                alt="restaurant" className="img-fluid rounded shadow main-image" />

            </div>

            {/* Right Text Section */}
            <div className="col-md-6 right-section">
              <p className="text-black small">PLANT-BASED PERFECTION</p>
              <h1 className="mb-4">SAVOR THE FLAVORS OF OUR <br /> WHOLESOME SOYA PANEER!</h1>
              <p className="text-muted">
                Made for mindful meals. No cholesterol, no compromise — just clean, protein-packed comfort that’s kind to your health and the planet.

              </p>
              <p className="text-muted mt-3">MON-FRI: <span className="text-muted">9 AM – 22 PM</span></p>
              <p className="text-muted">SATURDAY: <span className="text-muted">9 AM – 20 PM</span></p>
              <div className='action-div'>
                <button className="action-btn mt-3">ABOUT US &nbsp; &nbsp; &nbsp; &nbsp;→</button>
              </div>
              <h3 className="signature mt-5"></h3>
            </div>
          </div>
        </div>

      </div>

      <div className="section3 container-fluid">

        <div className="row">
          <h5 className=' text-center'> WE OFFER</h5>
          <h1 className='pb-5  text-center'>OUR MENU OF VEGAN GOODNESS</h1>
          <div className="row">

            <div className="col-md-6 col-sm-12">

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
            </div>
          </div>
        </div>
      </div>

      <div className="section4 container-fluid">
        <div className='row'>
          <h2>
            Newsletter Sign up</h2>
          <div className='row'>
            <div className='col-md-6 col-sm-12 newsletter'>
              <input type="text" placeholder='Enter your email here' />
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
