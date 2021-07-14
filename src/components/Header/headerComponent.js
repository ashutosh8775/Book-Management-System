import React, { useState } from 'react';
import FormModal from "../Forms/FormModal.jsx";
function Header(){
  const [show, setShow] = useState(false); 
  const [showLoginForm, setshowLoginForm] = useState(true);

    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom_nav">
              <div className="container">
                  <div className="navbar-left">
                  <h4 className="text-class">Book Management System</h4>
                  </div>
                  <a className="navbar-brand" href="#">
                        <form>
                          <div className="input-group">
                              <input type="search" className="form-control form-control-md" placeholder="Search for.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                              <button className="btn btn-success" type="submit">
                                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                      <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                  </svg>
                              </button>
                          </div>
                        </form>
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 mr-auto">
                      {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li> */}
                      
                      {/* <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li> */}
                    </ul>
                  
                    
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-success" onClick={() =>setShow(true)}>Sign In / Sign Up</button>
                      <FormModal show={show} showLoginForm= {showLoginForm} setshowLoginForm={setshowLoginForm} setShow={setShow}/>
                    </div>
                  </div>
              </div>
          </nav>
        </div>
    )
}

export default Header;