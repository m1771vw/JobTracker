import React, { Component } from 'react';
import HomeNavbar from '../HomeNavbar';
import { Link } from 'react-router-dom';
import { register } from '../../Redux/actions/';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Signup extends Component {
    state = {
        username:"",
        password:"",
        email:"",
        confirmpassword:"",
        submitClicked: false
    }
    onSubmitClick = (e) => {
        e.preventDefault();
        console.log("Submit clicked");
        let user = {
            username: "will",
            password: "123"
        }
        this.props.register(user);
        this.setState({
            submitClicked: true
        })
    }

    onUsernameChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }

    onConfirmPasswordChange = e => {
        this.setState({
            confirmpassword: e.target.value
        })
    }

    onEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }
    render() {
        return (
            <div>
            { this.state.submitClicked ? <Redirect to='/login'/>
            :
            <div>
            <HomeNavbar title="Sign Up"/>
            <div className="signup-container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <Link to='/login' id="login-form-link">Login</Link>
                                    </div>
                                    <div className="col-xs-6">
                                        <a href="#" className="active" id="register-form-link" onClick={this.registerClicked}>Register</a>
                                    </div>
                                </div>
                                <hr/>
					        </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                    
                                        <form id="register-form" method="post" role="form" style={{display: "block"}}>
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabindex="1" onChange = {this.onUsernameChange} value={this.state.username} className="form-control" placeholder="Username"  />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" tabindex="1" onChange = {this.onEmailChange} value={this.state.email} className="form-control" placeholder="Email Address"  />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabindex="2" onChange = {this.onPasswordChange} value={this.state.password} className="form-control" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="confirm-password" id="confirm-password" onChange = {this.onConfirmPasswordChange} value={this.state.confirmpassword} tabindex="2" className="form-control" placeholder="Confirm Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input onClick={this.onSubmitClick} type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" value="Register Now" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            }
        </div>
        );
    }
}
const mapPropsToDispatch = dispatch => ({
    register: (user) => { dispatch(register(user))}
  });
export default connect(null, mapPropsToDispatch)(Signup);