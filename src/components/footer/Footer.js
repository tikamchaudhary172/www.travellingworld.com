import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component
{
  render()
  {
    return(
      <>
        <div className="container-fluid  mt-5 back-foot" >
          <div className="row pt-4 ">
            <div className="col-md-3 col-sm-6">
            <img src="assets/logo.svg" alt="" width="70" height="50" className="d-inline-block mr-3"/>
              <span className="h4 mt-3">Travelling World</span>
            </div>

            <div className="col-md-3  col-sm-6">
            <i className="fa-solid fa-chart-column mx-2 icon-size"></i>
            <span className="h4">Services</span>
            <p className="ms-4 mt-3">
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link>
              </p>
            </div>

            <div className=" col-sm-6 col-md-3 ">
            <i className="fa-solid fa-gem mx-2 icon-size"></i>
              <span className="h4">Useful Links</span>
              <p className="ms-4 mt-3">
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link>
              </p>
            </div>

            <div className="col-md-3 col-sm-6">
            <i className="fa-solid fa-anchor  mx-2 icon-size"></i>
              <span className="h4">Contact Us</span>
              
              <p className="ms-4 mt-3">
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link><br/>
              <Link to="#"> Service-1</Link>
              </p>
            </div>

          </div>
          
        </div>

        <div className="container-fluid bg-dark text-white">
        <div className="row p-3">
            <div className="col-lg-6">
              <h5 className="text-lg-start text-center">© 2022 Copyright: www.travellingworld.com</h5>
            </div>
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
            
              <span className="h5">Follow Us :</span>
              <span className="h4">
              <i className="fa-brands fa-facebook ms-2"></i>
              <i className="fa-brands fa-twitter ms-2"></i>
              <i className="fa-brands fa-linkedin-in ms-2"></i>
              <i className="fa-brands fa-instagram ms-2"></i>
              <i className="fa-brands fa-whatsapp ms-2"></i>
              <i className="fa-brands fa-youtube ms-2"></i>
              <i className="fa-brands fa-google ms-2"></i>
              </span>
            
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;