import React, { useState, useCallback } from 'react';
import { useHistory, useParams } from "react-router-dom";
import FormModal from "../Forms/FormModal.jsx";

function Header(){
  const [show, setShow] = useState(false); 
  const [showLoginForm, setshowLoginForm] = useState(true);
  const history = useHistory();
  const handleOnClick = () => history.push('/');
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom_nav">
              <div className="container">
                  <a className="navbar-brand" href="" onClick={handleOnClick}>Book Review System</a>
                  
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
                      <button type="button" className="btn btn-sm btn-success" onClick={() =>setShow(true)}>Sign In</button>
                      <FormModal show={show} showLoginForm= {showLoginForm} setshowLoginForm={setshowLoginForm} setShow={setShow}/>
                    </div>
                  </div>
              </div>
          </nav>
        </div>
    )
}

export default Header;