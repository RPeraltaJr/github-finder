import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
    return (
        <Fragment>  
            <li className="list-group-item pl-0">
                <h5 className="mb-0 d-inline">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="mr-2 text-info">{ repo.name }</a>
                    <small><span className="badge badge-dark badge-pill">{ repo.language }</span></small>
                </h5>
            </li>
        </Fragment>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem
