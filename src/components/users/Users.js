import React, { useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner/Spinner';
import GithubContext from './../../context/github/githubContext';

const Users = () => {

    const githubContext = useContext(GithubContext);
    const { users, loading } = githubContext;

    if(loading) { 
        return <Spinner />
    } else {
        return (
            <div className="container mt-3">
                <div className="row">
                
                    {/* Rendering the child component multiple times */}
                    { users.map(user => (
                        <UserItem key={user.id} user={user} />
                    )) }
    
                </div>
            </div>
        )
    }

}

export default Users
