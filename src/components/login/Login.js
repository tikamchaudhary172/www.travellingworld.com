import React from "react";
class Login extends React.Component
{
  render()
  {
    return(
      <>
     

  {/* <!-- Modal --> */}
<div className="modal fade mt-5  " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{marginLeft:'400px'}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Contact Us Form</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4"/>
    </div>
    <div className="form-group col-md-6">
      <label htmFor="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div className="form-group">
    <label htmFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label htmFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label htmFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      </>
    );
  }
}
export default Login;