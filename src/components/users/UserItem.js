import React, { Component } from 'react'

class UserItem extends Component {
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    }

    render() {
        const { id, login, avatar_url, html_url } = this.state;

        return (
            <div className="container mt-3">
                <div className="card text-center">
                    <div className="card-body">
                        <img src={ avatar_url } alt={ login } className="rounded-circle mb-1" style={{ width: '70px' }} />
                        <h4>{ login }</h4>
                        <div>
                            <a href={ html_url } className="btn btn-success btn-sm mt-1" target="_blank" rel="noopener">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserItem
