import React from "react";
import {Link} from 'react-router-dom';


class Home extends React.Component
{
  render()
  {
    return(
      <> 
<div className="container position-relative"style={{zIndex:'1'}} >
  <div className="row">
    <div className="col-5 mx-auto mt-5 pe-0 position-absolute top-100 start-50 translate-middle border border-4 rounded"style={{backgroundColor:'white'}}>

      <form className="d-flex">
      <span><i className="fa-solid fa-magnifying-glass mt-2"></i></span>
      <input className="form-control border border-0" type="text" placeholder="Where do you want to go?"/>
      <Link to="#" className="btn btn-danger" type="submit"><i className="fa-solid fa-angle-right"></i></Link>
      </form>

    </div>
    </div>
    </div>
      
      
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="assets/b1.jpg" className="d-block w-100" alt="img"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="assets/b2.jpg" className="d-block w-100" alt="img"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="assets/b3.png" className="d-block w-100" alt="img"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="assets/b4.jpg" className="d-block w-100" alt="img"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>fourth slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



{/* <form className="inlineform">
<div className="row" style={{border:0}}>
    <div className="col-3">
      <input type="text" className="form-control" placeholder="Enter email" name="email"/>
    </div>
    <div className="col-3">
      <input type="password" className="form-control" placeholder="Enter password" name="pswd"/>
    </div>
    <div className="col-2">
      <Link to="#" className="btn btn-danger" >submit</Link>
    </div>
  </div>
</form> */}


<div className="container-fluid my-2">
  <h3 className="text-center text-danger">India Tour Packages</h3>
<div className="row row-cols-2 row-cols-md-4 g-4 mt-1">
  <div className="col">
    <div className="card">
      <img src="assets/shimla.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Himachal Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="assets/rajasthan.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">Rajasthan Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="assets/tajmahal.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">UP Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="assets/delhi-tours.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">delhi Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">delhi Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">delhi Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">delhi Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">delhi Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">delhi Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">delhi Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">delhi Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
      <h4 className="card-title">delhi Packages</h4>
        <h5 className="card-text">Starting@ Rs.22 990.00.</h5>
        <button className="btn btn-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>
</div>
</div>
      </>
    );
  }
}
export default Home;