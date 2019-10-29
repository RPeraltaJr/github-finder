import React from 'react'
import PropTypes from 'prop-types';

// const UserItem = (props) => { 
const UserItem = ({ user: { login, avatar_url, html_url } }) => { 

    // const { login, avatar_url, html_url } = props.user;
    return (
        <div className="col col-lg-3 col-12 mb-3">
            <div className="card text-center">
                <div className="card-body">
                    <img src={ avatar_url } alt={ login } className="rounded-circle mb-1" style={{ width: '70px' }} />
                    <h4>{ login }</h4>
                    <div>
                        <a href={ html_url } className="btn btn-success btn-sm mt-1" target="_blank" rel="noopener noreferrer">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
} 

export default UserItem
