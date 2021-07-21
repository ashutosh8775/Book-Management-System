import React, {Component} from "react";
import { Modal, Button } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import './Form.css';

class FormModal extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    handleClose = () => {
        this.props.setShow(false);
        this.props.setshowLoginForm(true); //set it to initial
    }

    switchForms = (boolean) => {
        this.props.setshowLoginForm(boolean);
    }
    
    render() { 
        return ( 
            <div className="modal-wrapper">
                <Modal
                        show={this.props.show}
                        onHide={this.handleClose}
                        backdrop="static"
                        keyboard={true}
                        centered
                        animation={false}
                    >
                    <Modal.Body>
                        <div className="title pb-3">
                            {/* <div className="user-icon">
                                <i className="fa fa-user"></i>
                            </div> */}
                            <h3 className="text-center">
                                {
                                    this.props.showLoginForm ?  'Login' : 'Register'
                                }
                            </h3>
                            <button type="button" className="close" onClick={this.handleClose}>&times;</button>
                        </div>
                        {
                                this.props.showLoginForm ?  
                                <Login handleClose={this.handleClose}/> : 
                                <Register switchForms={this.switchForms}/>
                        }

                        <div className="footer-txt-wrp text-center pt-3">
                            <p>Or</p>
                             {
                                this.props.showLoginForm ? 
                                <p>New User? <button type="button" className="action-btn" onClick={() => this.switchForms(false)}>Sign up</button></p>:
                                <p>Already have an account? <button type="button" className="action-btn" onClick={() => this.switchForms(true)}>Sign in</button></p>
                             }     
                        </div>    
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
 
export default FormModal;