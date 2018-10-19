import React, { Component } from 'react';
import HomeNavbar from '../HomeNavbar';
import { Link } from 'react-router-dom';
import { login } from '../../Redux/actions/';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        username:"",
        password:"",
        submitClicked: false
    }

    onSubmitClick = (e) => {
        e.preventDefault();
        console.log("Submit clicked");
        // let user = {
        //     username: "will",
        //     password: "123"
        // }
        let { username, password } = this.state
        let user = {
            username, password
        }
        this.props.login(user);
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


    render() {
        return (
            <div>
            { this.state.submitClicked ? <Redirect to='/dashboard'/>
            :
            <div>
            <HomeNavbar title="Log In"/>
            <div className="signup-container">
            
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#" className="active" id="login-form-link">Login</a>
                                    </div>
                                    <div className="col-xs-6">
                                        <Link to='/signup' id="register-form-link" onClick={this.registerClicked}>Register</Link>
                                    </div>
                                </div>
                                <hr/>
					        </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                        <form id="login-form" method="post" role="form" style={{display: "block"}} >
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabIndex="1" className="form-control" value ={this.state.username} onChange ={this.onUsernameChange} placeholder="Username" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabIndex="2" className="form-control" value ={this.state.password} onChange ={this.onPasswordChange} placeholder="Password" />
                                            </div>
                                            <div className="form-group text-center">
                                                <input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
                                                <label htmlFor="remember"> Remember Me</label>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input onClick={this.onSubmitClick} type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="text-center">
                                                            <a href="#" tabIndex="5" className="forgot-password">Forgot Password?</a>
                                                        </div>
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
    login: (user) => { dispatch(login(user))}
  });
export default connect(null, mapPropsToDispatch)(Login);