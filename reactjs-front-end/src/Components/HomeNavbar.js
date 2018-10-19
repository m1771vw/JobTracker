import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HomeNavbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand">{this.props.title}</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
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
            </div>
        );
    }
}

HomeNavbar.propTypes = {

};

export default HomeNavbar;