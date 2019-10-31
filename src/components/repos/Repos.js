import React from 'react'
import RepoItem from './RepoItem'
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
    return (
        <div className="col col-12 mb-5">
            <div className="card">
                <div className="card-body">
                    <h3 className="font-weight-light text-secondary mb-3">Repos</h3>

                    <ul className="list-group list-group-flush">
                        { repos.map((repo) => (
                            <RepoItem repo={repo} key={repo.id} />
                        ))  }
                    </ul>

                </div>
            </div>
        </div> 
    )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos
