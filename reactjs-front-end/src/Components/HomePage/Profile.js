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
                {this.state.logoutClicked ? <Redirect to='/' /> :
                    this.props.authorized ?

                        <div>
                            <Navbar title="Profile" />
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">

                                        <div class="card">
                                            <div class="card-box">
                                                <div class="card-title mb-4">
                                                    <div class="d-flex justify-content-start">
                                                        <div class="image-container">
                                                            <img src="http://placehold.it/150x150" id="imgProfile" style={{ width: "150px", height: "150px" }} class="img-thumbnail" />
                                                            <div class="middle">
                                                                <input type="button" class="btn btn-secondary" id="btnChangePicture" value="Change" />
                                                                <input type="file" style={{ display: "none" }} id="profilePicture" name="file" />
                                                            </div>
                                                        </div>
                                                        <div class="userData ml-3">
                                                            <h2 class="d-block" style={{ font: "1.5rem", font: "bold" }}><a href="javascript:void(0);">Douglas Nguyen</a></h2>
                                                            <h6 class="d-block"><a href="javascript:void(0)">12</a> Jobs Uploaded</h6>
                                                        </div>
                                                        <div class="ml-auto">
                                                            <input type="button" class="btn btn-primary d-none" id="btnDiscard" value="Discard Changes" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" onClick={this.onLogoutClick} class="btn btn-primary btn-sm">Logout</button>

                                                <div class="row">
                                                    <div class="col-12">
                                                        <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basicInfo" aria-selected="true">Basic Info</a>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content ml-1" id="myTabContent">
                                                            <div class="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                                                                <div class="row">
                                                                    <div class="col-sm-3 col-md-2 col-5">
                                                                        <label style={{ font: "bold" }}>Email</label>
                                                                    </div>
                                                                    <div class="col-md-8 col-6">
                                                                        Douglasnguyen@yahoo.com
                                                </div>
                                                                </div>
                                                                <hr />
                                                                <div class="row">
                                                                    <div class="col-sm-3 col-md-2 col-5">
                                                                        <label style={{ font: "bold" }}>Birth Date</label>
                                                                    </div>
                                                                    <div class="col-md-8 col-6">
                                                                        March 22, 1994.
                                                </div>
                                                                </div>
                                                                <hr />


                                                                <div class="row">
                                                                    <div class="col-sm-3 col-md-2 col-5">
                                                                        <label style={{ font: "bold" }}>Something</label>
                                                                    </div>
                                                                    <div class="col-md-8 col-6">
                                                                        Something
                                                </div>
                                                                </div>
                                                                <hr />
                                                                <div class="row">
                                                                    <div class="col-sm-3 col-md-2 col-5">
                                                                        <label style={{ font: "bold" }}>Something</label>
                                                                    </div>
                                                                    <div class="col-md-8 col-6">
                                                                        Something
                                                </div>
                                                                </div>
                                                                <hr />
                                                                <div class="row">
                                                                    <div class="col-sm-3 col-md-2 col-5">
                                                                        <label style={{ font: "bold" }}>Something</label>
                                                                    </div>
                                                                    <div class="col-md-8 col-6">
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