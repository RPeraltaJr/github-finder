import React, { Component } from 'react'

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login) // params (:login)
    }

    render() {
        const { 
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const { loading } = this.props;

        return (
            <div className="container mt-3">
               <h1 className="text-info font-weight-light">{ name }</h1>
            </div>
        )
    }
}

export default User
