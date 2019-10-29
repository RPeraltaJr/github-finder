import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Navbar extends Component {

  // default props (if not defined)
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }

  // helps catch bugs with typechecking
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="navbar-brand mb-0">
          <span className={ this.props.icon + ' mr-1' }></span> { this.props.title }
        </h1>
      </nav>
    )
  }
}

export default Navbar

