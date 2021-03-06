import React, { Component } from 'react';
import HomeNavbar from '../HomeNavbar';
import { Link } from 'react-router-dom';

import bg from '../../img/hero-banner2.jpg';

class HomePage extends Component {

    
    render() {
        return (
            <div>
            <HomeNavbar title="Job Tracker"/>
            <img className='hero-image' src={bg} alt="The creators"/>

            <div className="hero-text">
                <h1>Job Tracker</h1>
                <p>Track your job progress here!</p>
                <Link to='/signup' className='btn btn-small btn-light' style={{color: 'black'}}>Sign Up</Link>
            </div>
            </div>

    
        );
    }
}


export default HomePage;