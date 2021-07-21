import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import FormModal from "../Forms/FormModal.jsx";
import { connect } from 'react-redux';
import { previewDetails } from "../action";

function Header(props){

  const [show, setShow] = useState(false); 
  const [showLoginForm, setshowLoginForm] = useState(true);
  const history = useHistory();
  const handleOnClick = () => history.push("/");
  const logOut = () =>{
    sessionStorage.removeItem("user");
    window.location.reload(false);
  }
  const searchHandler = (event) =>{
    let data = event.target.value;
    props.previewDetails(data);
  }

    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom_nav">
              <div className="container">
                  <h5 className="navbar-left color-text" onClick={handleOnClick}>Book Review System</h5>
                  {/* <div></div> */}
                  <div className="col-lg-4 col-md-4">
                    <div className="input-group mb-1 ml-5">
                        <input type="search" className="form-control form-control-sm" placeholder="Search by book name..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={searchHandler}/>
                    </div>
            </div>
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
                      { sessionStorage.getItem("user") != undefined ? 
                      <ul className="list-group list-group-horizontal remove-bullet">
                        <li className="d-flex align-items-center">
                        
                        <span className="user-icon-h d-flex align-items-center justify-content-center">  
                          <i className="fa fa-user-o"></i>
                        </span>
                         
                        <span className="user-stl">{JSON.parse(sessionStorage.getItem("user")).username}</span>
                        </li>
                        <li>
                        <button type="button" className="btn btn-sm btn-success" onClick={logOut}>Sign Out</button>
                        </li>
                      </ul>
                      :
                        <button type="button" className="btn btn-sm btn-success" onClick={() =>setShow(true)}>Sign In</button>
                      }
                      
                      <FormModal show={show} showLoginForm= {showLoginForm} setshowLoginForm={setshowLoginForm} setShow={setShow}/>
                    </div>
                  </div>
              </div>
          </nav>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
      previewDetails: data => dispatch(previewDetails(data))
  }
}
// const mapStateToProps = state => {
//   return {
//     BookData:state.BookData
//   }
// }
export default connect(null, mapDispatchToProps)(Header);