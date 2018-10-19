import React, { Component } from 'react';
import HomeNavbar from '../HomeNavbar';



class HomePage extends Component {

    
    render() {
        return (
            <div>
            <HomeNavbar title="Home Page"/>
            <div className="hero-image">
            <div className="hero-text">
                <h1>I am John Doe</h1>
                <p>And I'm a Photographer</p>
                <button>Hire me</button>
            </div>
            </div>
            </div>

    
        );
    }
}


export default HomePage;