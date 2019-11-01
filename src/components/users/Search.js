import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchUsers, showClear, clearUsers, showAlert }) => {
    const [ search, setSearch ] = useState('');

    const onChange = e => setSearch( e.target.value ); 

    const onSubmit = (e) => {
        e.preventDefault();
        if( search === '' ) {
            showAlert('Please enter something.', 'danger');
        } else {
            searchUsers(search); // passing up the value through props
            setSearch(''); // empty the form after submit
        }
    }

    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <form className="form" autoComplete="false" onSubmit={onSubmit} >
                            <div className="form-row">
                                <div className="col-6">
                                    <label htmlFor="search" className="sr-only">Search</label>
                                    <input type="search" name="search" className="form-control" placeholder="Search Users..." value={search} onChange={onChange} />
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

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired
}

export default Search
