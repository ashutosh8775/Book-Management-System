import React,{Component} from "react";
import ReactFormInputValidation, { Lang } from "react-form-input-validation";
import axios from "axios";
class Login extends Component {
    constructor(props){
        super(props);

        this.state = { 
            fields: {
                email_username: '',
                password: ''
            },
            errors : '',
            errorMsg:''
        }

        this.form = new ReactFormInputValidation(this);
        /*TO set custom messages*/
        ReactFormInputValidation.setMessages(Lang.en, {
            required: ':attribute is required.',
            alpha_num: ':attribute must contain alpha numeric characters',
            min: ':attribute must contain atleast 8 characters'
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
            email_username: "required",
            password: "required|min:8|max:15|custompassword"
        });

        this.form.onformsubmit = () => {
            this.setState({errorMsg : ''});
            // Do you ajax calls here.  
            let data = {
                email_username : this.state.fields.email_username,
                password : this.state.fields.password
            }
            axios.post("http://localhost:3002/login/", data)
            .then(data => {
                if(data.data.response.status == "success") {
                    sessionStorage.setItem("user",JSON.stringify(data.data.response.data));
                    window.location.reload();
                } else {
                    this.setState({errorMsg : data.data.response.message});
                }
            })
            .catch(error => error);
        }
    }
        
    render() { 
        return ( 
            <div className="form-wrapper">
                {
                    this.state.errorMsg ? 
                    <div className="alert alert-danger" role="alert">
                        {this.state.errorMsg}.
                    </div> : ''
                }
                <form onSubmit={this.form.handleSubmit} autoComplete="off">
                    
                    <div className="mb-3">
                        <label htmlFor="email_username" className="form-label">Email / Username</label>
                        <input type="text" className="form-control" id="email_username" name="email_username" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.email_username} data-attribute-name="Email / Username"/>

                        <small className="error">
                            {this.state.errors.email_username ? this.state.errors.email_username : ""}
                        </small>
                    </div>
                   
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.password} data-attribute-name="Password"/>

                        <small className="error">
                            {this.state.errors.password ? this.state.errors.password : ""}
                        </small>
                    </div>
                  
                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                </form>
            </div>
        )
    }
}
 
export default Login;