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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           {/* <Route path="/contact" element={<Contact />}/> */}
            {/* <Route path="/products" element={<Products />}/> */ }
          
          <Route />
        </Routes>
        <NewsletterFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
