import React, { useState, useContext } from 'react'
import GithubContext from './../../context/github/githubContext'; 
import AlertContext from './../../context/alert/alertContext'; 

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    // state hook
    const [ search, setSearch ] = useState('');

    // data binding
    const onChange = e => setSearch( e.target.value ); 

    const onSubmit = (e) => {
        e.preventDefault();
        if( search === '' ) {
            alertContext.setAlert('Please enter something.', 'danger');
        } else {
            githubContext.searchUsers(search); // passing up the value through props
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
                                    { githubContext.users.length > 0 && <button className="btn btn-default mb-2" onClick={githubContext.clearUsers} >Clear</button> }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Search
