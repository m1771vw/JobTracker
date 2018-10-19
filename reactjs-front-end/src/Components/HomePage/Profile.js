import React, { Component } from 'react';
import Navbar from '../Navbar';
import HomeNavbar from '../HomeNavbar';

import { Redirect } from 'react-router-dom';
import { logout } from '../../Redux/actions/';
import { connect } from 'react-redux';



class Profile extends Component {
    state = {
        logoutClicked: false
    }


    onLogoutClick = (e) => {
        e.preventDefault();
        console.log("Logout clicked");
        this.setState({
            logoutClicked: true
        })
    }


    render() {
        return (
            <div>
                {this.state.logoutClicked ? <Redirect to='/' />
                    :
                    this.props.authorized ?
                    <div>
                        <Navbar title="Profile" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12">

                                    <div className="card">
                                        <div className="card-box">
                                            <div className="card-title mb-4">
                                                <div className="d-flex justify-content-start">
                                                    <div className="image-container">
                                                        <img src="http://placehold.it/150x150" id="imgProfile" style={{ width: "150px", height: "150px" }} className="img-thumbnail" />
                                                        <div className="middle">
                                                            <input type="button" className="btn btn-secondary" id="btnChangePicture" value="Change" />
                                                            <input type="file" style={{ display: "none" }} id="profilePicture" name="file" />
                                                        </div>
                                                    </div>
                                                    <div className="userData ml-3">
                                                        <h2 className="d-block" style={{ font: "1.5rem", font: "bold" }}><a href="javascript:void(0);">Douglas Nguyen</a></h2>
                                                        <h6 className="d-block"><a href="javascript:void(0)">12</a> Jobs Uploaded</h6>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <input type="button" className="btn btn-primary d-none" id="btnDiscard" value="Discard Changes" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" onClick={this.onLogoutClick} className="btn btn-primary btn-sm">Logout</button>

                                            <div className="row">
                                                <div className="col-12">
                                                    <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basicInfo" aria-selected="true">Basic Info</a>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content ml-1" id="myTabContent">
                                                        <div className="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                                                            <div className="row">
                                                                <div className="col-sm-3 col-md-2 col-5">
                                                                    <label style={{ font: "bold" }}>Email</label>
                                                                </div>
                                                                <div className="col-md-8 col-6">
                                                                    Douglasnguyen@yahoo.com
                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-sm-3 col-md-2 col-5">
                                                                    <label style={{ font: "bold" }}>Birth Date</label>
                                                                </div>
                                                                <div className="col-md-8 col-6">
                                                                    March 22, 1994.
                                                </div>
                                                                </div>
                                                                <hr />


                                                            <div className="row">
                                                                <div className="col-sm-3 col-md-2 col-5">
                                                                    <label style={{ font: "bold" }}>Something</label>
                                                                </div>
                                                                <div className="col-md-8 col-6">
                                                                    Something
                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-sm-3 col-md-2 col-5">
                                                                    <label style={{ font: "bold" }}>Something</label>
                                                                </div>
                                                                <div className="col-md-8 col-6">
                                                                    Something
                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-sm-3 col-md-2 col-5">
                                                                    <label style={{ font: "bold" }}>Something</label>
                                                                </div>
                                                                <div className="col-md-8 col-6">
                                                                    Something
                                                </div>
                                                                </div>
                                                                <hr />

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        :
                        <div>
                        <HomeNavbar title="Job Tracker" />
                        <h1>YOU ARE NOT AUTHORIZED.PLEASE LOG IN.</h1>
                          </div>
}
            </div>
        );
    }
}

const mapPropstoDispatch = dispatch => ({
    logout: (home) => { dispatch(logout(home)) }
})

const mapStateToProps = state => ({
    authorized: state.authorized,
})

export default connect(mapStateToProps, mapPropstoDispatch)(Profile);