import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand">{this.props.title}</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/dashboard' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/addjob' className="nav-link">Add a Job</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/profile' className="nav-link">Profile</Link>
                        </li>
    
                    </ul>
                </div>
            </nav>
            </div>
        );
    }
}

Navbar.propTypes = {

};

export default Navbar;