import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        search: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    // name of input field is the same as what we're updating within State, hence we use [e.target.name]
    onChange = e => this.setState({ [e.target.name]: e.target.value }); 

    onSubmit = (e) => {
        e.preventDefault();
        if( this.state.search === '' ) {
            this.props.setAlert('Please enter something.', 'danger');
        } else {
            this.props.searchUsers(this.state.search); // passing up the value through props
            this.setState({ search: '' }); // empty the form after submit
        }
    }

    render() {

        const { showClear, clearUsers } = this.props;

        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <form className="form" autoComplete="false" onSubmit={this.onSubmit} >
                                <div className="form-row">
                                    <div className="col-6">
                                        <label htmlFor="search" className="sr-only">Search</label>
                                        <input type="search" name="search" className="form-control" placeholder="Search Users..." value={this.state.search} onChange={this.onChange} />
                                    </div>
                                    <div className="col-6">
                                        <button type="submit" className="btn btn-info mb-2 mr-2">Submit</button>
                                        { showClear && <button className="btn btn-default mb-2" onClick={clearUsers} >Clear</button> }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
