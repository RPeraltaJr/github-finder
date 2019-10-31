import React, { Component, Fragment } from 'react'
import Spinner from './../layout/Spinner/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from './../repos/Repos';
import './User.scss';

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login) // params (:login)
        this.props.getUserRepos(this.props.match.params.login) // params (:login)
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    }

    render() {
        const { 
            name,
            avatar_url,
            location,
            bio,
            blog,
            company,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const { loading, repos } = this.props;

        if( loading ) return <Spinner />

        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Link to="/" className="text-muted">Back To Search</Link>
                            </li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item">
                                <p><strong>Hireable:</strong> { hireable ? <span className="fas fa-check text-info"></span> : <span className="fas fa-times-circle text-danger"></span> }</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 col-lg-5 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <img src={avatar_url} alt={`${name} avatar`} className="rounded-circle mb-3" style={{ width: '150px' }} />
                                <h2 className="text-info font-weight-light mb-1">{ name }</h2>
                                <p><strong>Location:</strong> { location }</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-7 mb-4">
                        <div className="card">
                            <div className="card-body">

                                { bio && (<Fragment>
                                    <h3 className="font-weight-light text-secondary">Bio</h3>
                                    <p>{ bio }</p>
                                </Fragment>)}

                                <a href={html_url} className="btn btn-dark btn-sm px-3" target="_blank" rel="noopener noreferrer">
                                    Visit Github Profile
                                </a>

                                <ul className="list-group list-group-flush mt-4">
                                    {login && (
                                        <Fragment>
                                            <li className="list-group-item pl-0">
                                                <strong>Username:</strong> { login }
                                            </li>
                                        </Fragment>
                                    )}
                                    {company && (
                                        <Fragment>
                                            <li className="list-group-item pl-0">
                                                <strong>Company:</strong> { company }
                                            </li>
                                        </Fragment>
                                    )}
                                    {blog && (
                                        <Fragment>
                                            <li className="list-group-item pl-0">
                                                <strong>Website:</strong> <a href={blog} target="_blank" rel="noopener noreferrer" className="text-info">{ blog }</a>
                                            </li>
                                        </Fragment>
                                    )}
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="col col-12 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="badge badge-primary mr-1">Followers: { followers }</div>
                                <div className="badge badge-success mr-1">Following: { following }</div>
                                <div className="badge badge-info mr-1">Public Repos: { public_repos }</div>
                                <div className="badge badge-danger mr-1">Public Gists: { public_gists }</div>
                            </div>
                        </div>
                    </div>

                    <Repos repos={repos} />

                </div>
            </div>
        )
    }
}

export default User
