import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import NewsletterFooter from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Home/>
    <NewsletterFooter/>
    </div>
  );
}

export default App;
