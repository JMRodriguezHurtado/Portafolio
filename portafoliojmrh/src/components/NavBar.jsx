import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';
// import {homeIcon2} from "../../public/assets/homeIcon2.png"

function NavBar() { 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={"public/assets/homeIcon2.png"} alt="Home Icon" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proyects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;