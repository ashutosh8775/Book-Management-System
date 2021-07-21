import React,{Component} from "react";
import ReactFormInputValidation, { Lang } from "react-form-input-validation";
import axios from "axios";
class Register extends Component {
    constructor(props){
        super(props);

        this.state = { 
            fields: {
                username: '',
                email: '',
                mobile_no: '',
                password: ''
                
            },
            password_confirmation:'',
            errors : '',
            confirmPasswordErr: '',
            successMsg: '',
            errorMsg:''
        }

        this.form = new ReactFormInputValidation(this);
        
        /*TO set custom messages*/
        ReactFormInputValidation.setMessages(Lang.en, {
            required: ':attribute is required.',
            alpha: ':attribute must contain only alphabets',
            between: ':attribute must contain minimun 3 and maximum 20 charcters',
            email: 'Please enter valid email address',
            alpha_num: ':attribute must contain alpha numeric characters',
            alpha_dash: ':attribute can contain only alphabets, numbers, dashes(-) & underscores( _ )',
            min: ':attribute must contain atleast 8 characters',
            max: ':attribute must contain maximum of 15 characters',
            numeric: ':attribute must contain only digits from 0-9',
            digits: ':attribute must contain 10 digits'
            //confirmed: 'Password did not match'
        });

        /*to create custom password validation*/
        ReactFormInputValidation.register(
            "custompassword",
            function(value, requirement, attribute) {
                const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
                return value.match(
                    strongRegex
                );
            },
            "The password must contain atleast 1 uppercase character(A-Z), atleast 1 numeric character (0-9) and one special character(@,#,%,&)"
        );

        this.form.useRules({
            username: "required|alpha_dash|between:3,20",
            email: "required|email",
            mobile_no: "required|numeric|digits:10",
            password: "required|min:8|max:15|custompassword",
            
        });

        this.form.onformsubmit = (fields) => {
            this.setState({errorMsg : '', successMsg: ''});
            // Do you ajax calls here.  
            if(this.state.confirmPasswordErr){
                this.confirmPasswordValidation();
            } else {
                axios.post("http://localhost:3002/register", {
                    username: this.state.fields.username,
                    email: this.state.fields.email,
                    mobile: this.state.fields.mobile_no,
                    password: this.state.fields.password,
                })
                .then(response => {
                    if(response.data[0].status == "success") {
                        //resetting the fields and setting successmessage
                        this.setState(prevState => ({
                            fields: {
                                ...prevState.fields,
                                username: '',
                                email: '',
                                mobile_no: '',
                                password: ''
                            },
                            successMsg: response.data[0].message,
                            password_confirmation: ''
                        }));
                    } else {
                        this.setState({errorMsg : response.data[0].message});
                    }
                })
                .catch(error => error);
            }
        }
    }

    confirmPasswordValidation = () => {
        let password = this.state.fields.password;
        let confirmPassword = this.state.password_confirmation;
        if(confirmPassword == '') {
            this.setState({confirmPasswordErr: 'Confirm Password is required'});
        } else if(confirmPassword !== password) {
            this.setState({confirmPasswordErr: 'Password did not match'});
        } else {
            this.setState({confirmPasswordErr: ''});
        }
    }

    handleBlur = () => {
        this.confirmPasswordValidation();
    }   
    
    handleChange = (event) => {
        this.setState({password_confirmation: event.target.value});
    } 
    

    render() { 
        return ( 
            <div className="form-wrapper">
                {
                    this.state.successMsg ? 
                    <div className="alert alert-success" role="alert">
                        {this.state.successMsg}. Click <a href={void(0)} className="alert-link" onClick={() => this.props.switchForms(true)} style={{"cursor":"pointer"}}>here</a> to sign in.
                    </div> : ''
                }
                {
                    this.state.errorMsg ? 
                    <div className="alert alert-danger" role="alert">
                        {this.state.errorMsg}.
                    </div> : ''
                }
                <form onSubmit={this.form.handleSubmit} autoComplete="off">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" name="username" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.username} data-attribute-name="Username" />

                        <small className="error">
                            {this.state.errors.username ? this.state.errors.username : ""}
                        </small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.email} data-attribute-name="Email"/>

                        <small className="error">
                            {this.state.errors.email ? this.state.errors.email : ""}
                        </small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile_no" className="form-label">Mobile</label>
                        <input type="tel" className="form-control" id="mobile_no" name="mobile_no" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.mobile_no} data-attribute-name="Mobile number"/>

                        <small className="error">
                            {this.state.errors.mobile_no ? this.state.errors.mobile_no : ""}
                        </small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.password} data-attribute-name="Password"/>

                        <small className="error">
                            {this.state.errors.password ? this.state.errors.password : ""}
                        </small>
                    </div>
                   <div className="mb-3">
                        <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.password_confirmation} data-attribute-name="Confirm password"/>

                         <small className="error">
                            {this.state.confirmPasswordErr  ? this.state.confirmPasswordErr  : ""}
                        </small>
                    </div>
                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                    </form>
            </div>
        )
    }
}
 
export default Register;