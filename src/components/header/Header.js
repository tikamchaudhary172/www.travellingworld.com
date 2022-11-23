import React from "react";

import {Link} from 'react-router-dom';
class Header extends React.Component
{
  render()
  {
    return(
      <>


<nav className="navbar navbar-expand-lg">
<div className="container-fluid">      


<Link className="navbar-brand mb-0 h1" to="#">
<img src="assets/logo.svg" alt="" width="60" height="40" className="d-inline-block align-text-top"/>Travelling World</Link>


          <button className="navbar-toggler ms-lg-0 ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/gallery">Destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Package</Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle" to="/service" id="navbarDropdown"    role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>


              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/news">Live News</Link>
              </li>

              
              <li className="nav-item">
              <button  className=" btn btn-dark ms-lg-4" data-bs-toggle="modal" data-bs-target="#Modal">Book Now</button>
              </li>
            </ul>
            <button className="btn btn-outline-danger ms-lg-auto ms-5 me-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
          </div>
          </div>
      </nav>
     
         
      </>
    );
  }
}
export default Header;