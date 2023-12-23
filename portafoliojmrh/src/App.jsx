
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './views/home';
import Proyects from './views/proyects';
import About from './views/about';
import NavBar from './components/NavBar';
import nightSkyImage from './assets/night-sky-Milky-Way-Galaxy.webp';

function App() {
  return (
    <Router>
    <div style={{ backgroundImage: `url(${nightSkyImage})`, backgroundSize: 'cover' }} className="container-fluid vw-100 min-vh-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/proyects' element={<Proyects />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;