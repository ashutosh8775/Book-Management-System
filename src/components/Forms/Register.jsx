import React,{Component} from "react";
import ReactFormInputValidation, { Lang } from "react-form-input-validation";

class Register extends Component {
    constructor(props){
        super(props);

        this.state = { 
            fields: {
                username: '',
                lastname: '',
                email: '',
                mobile_no: '',
                password: '',
                //password_confirmation: ''
            },
            password_confirmation:'',
            errors : '',
            confirmPasswordErr: ''
        }

        this.form = new ReactFormInputValidation(this);
        /*TO set custom messages*/
        ReactFormInputValidation.setMessages(Lang.en, {
            required: ':attribute is required.',
            alpha: ':attribute must contain only alphabets',
            between: ':attribute must contain minimun 3 and maximum 20 charcters',
            email: 'Please enter valid email address',
            alpha_num: ':attribute must contain alpha numeric characters',
            min: ':attribute must contain atleast 8 characters',
            numeric: ':attribute must contain only digits from 0-9',
            digits: ':attribute must contain 10 digits',
            //confirmed: 'Password did not match'
        });

        this.form.useRules({
            // firstname: "required|alpha|between:3,20",
            // lastname: "required|alpha|between:3,20",
            username: "required|alpha_num|between:3,20",
            email: "required|email",
            mobile_no: "required|numeric|digits:10",
            password: "required|alpha_num|min:8",
            //password_confirmation: "required|alpha_num|min:8"
        });

        this.form.onformsubmit = (fields) => {
            // Do you ajax calls here.  
            console.log('field', fields);
            if(!this.state.confirmPasswordErr){
                this.confirmPasswordValidation();
            } else {

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
                <form onSubmit={this.form.handleSubmit} autoComplete="off">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" name="username" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.username} data-attribute-name="First name" />

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
                        <input type="tel" className="form-control" id="mobile_no" name="mobile_no" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.mobile} data-attribute-name="Mobile number"/>

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

                         {/* <small className="error">
                            {this.state.errors.password_confirmation  ? this.state.errors.password_confirmation  : ""}
                        </small> */}
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