import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Navbar.scss';

// const Navbar = (props) => { 
const Navbar = ({ title, icon }) => { 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h1 className="navbar-brand mb-0">
            <span className={`${icon} mr-1`}></span> { title }
        </h1>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

// default props (if not defined)
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

// helps catch bugs with typechecking
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar

