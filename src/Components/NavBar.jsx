import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-2">
        <div className="container">
          <div className="row " style={{display:"contents"}}>
            <div className="col-md-2 col-sm-6">
          <Link to="/" className="brand">
            Guvi
          </Link>
          </div>
          <div className="col-md-10 col-sm-6">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">All</Link>
              </li>
              <li className="nav-item">
                <Link to="/fsd">Full Stack Development</Link>
              </li>
              <li className="nav-item">
                <Link to="/ds">Data Science</Link>
              </li>
              <li className="nav-item">
                <Link to="/cyber">Cyber Security</Link>
              </li>
              <li className="nav-item">
                <Link to="/career">Career</Link>
              </li>
            </ul>
          </div>
          </div>
          </div>{/* row div */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
