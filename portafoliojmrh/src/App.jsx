import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import nightSkyImage from './assets/night-sky-Milky-Way-Galaxy.webp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundImage: `url(${nightSkyImage})`, backgroundSize: 'cover' }} className="container-fluid vw-100 min-vh-100">
      {/* NavBar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-white'>My Portfolio</h1>
            <p className="lead text-white">Welcome to my portfolio. Here you can find information about my projects.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <h2 className= 'text-white'id="projects">My Projects</h2>
            <div className="list-group">
              <a href="https://project1.com" className="list-group-item list-group-item-action">
                Project 1
              </a>
              <a href="https://project2.com" className="list-group-item list-group-item-action">
                Project 2
              </a>
              {/* Add more project links as needed */}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <h2 className='text-white' id="about">About Me</h2>
            <p className='text-white'>
              Insert a brief description about yourself here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;