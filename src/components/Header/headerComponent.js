import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import FormModal from "../Forms/FormModal.jsx";
import UserIcon from "./user_icon.jpg";
function Header(){
  const [show, setShow] = useState(false); 
  const [showLoginForm, setshowLoginForm] = useState(true);
  // let userData = sessionStorage.getItem("user");
  const history = useHistory();
  const handleOnClick = () => history.push("/") 
  const [isLogged,setUserState] = useState(false);
  const [userData,getUserData] = useState('');
  const logOut = () =>{
    sessionStorage.removeItem("user");
    setUserState(false);
    window.location.reload(false);
  }
//   useEffect(()=>{
//     console.log('heyy')
//     getUserData(sessionStorage.getItem("user"));
//     console.log(userData,'jj')
// },[])
  // getUserData(sessionStorage.getItem("user"));
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
                      { isLogged ||  sessionStorage.getItem("user") != undefined? 
                      <ul className="list-group list-group-horizontal remove-bullet">
                        <li>
                        <img src={UserIcon} width="30"/>
                        <span className="user-stl">{JSON.parse(sessionStorage.getItem("user")).username}</span>
                        </li>
                        <li>
                        <button type="button" className="btn btn-sm btn-success" onClick={logOut}>Sign Out</button>
                        </li>
                      </ul>
                      :
                        <button type="button" className="btn btn-sm btn-success" onClick={() =>setShow(true)}>Sign In</button>
                      }
                      
                      <FormModal show={show} showLoginForm= {showLoginForm} setshowLoginForm={setshowLoginForm} setShow={setShow} setUserState={setUserState} getUserData ={getUserData}/>
                    </div>
                  </div>
              </div>
          </nav>
        </div>
    )
}

export default Header;