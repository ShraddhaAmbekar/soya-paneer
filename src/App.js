import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import NewsletterFooter from './component/Footer';
import { BrowserRouter } from 'react-router';
import { Routes, Route } from 'react-router';
import About from './pages/About';
import ScrollToTop from './pages/ScrollToTop';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />}/> 
            {/* <Route path="/products" element={<Products />}/> */ }
          
          <Route />
        </Routes>
        {/* <!-- WhatsApp Floating Button --> */}
<a href="https://wa.me/918755259301" className="whatsapp-float" target="_blank" title="Chat with us on WhatsApp">
    <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp"/>
</a>


        <NewsletterFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
