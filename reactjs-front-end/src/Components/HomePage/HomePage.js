import React, { Component } from 'react';
import Header from '../Navbar';
import { Link } from 'react-router-dom';


class HomePage extends Component {

    
    render() {
        return (
            <div>
            <Header title="Home Page"/>
            <div className="hero-image">
            <div className="hero-text">
                <h1>I am John Doe</h1>
                <p>And I'm a Photographer</p>
                <button>Hire me</button>
            </div>
            </div>
            </div>

     
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to='/dashboard' className="navbar-brand">{this.props.title}</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item active">
                      <Link to='/dashboard' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/login' className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/signup' className="nav-link">Sign Up</Link>
                  </li>

              </ul>
          </div>
      </nav>
      <div class="hero-image">
  <div class="hero-text">
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