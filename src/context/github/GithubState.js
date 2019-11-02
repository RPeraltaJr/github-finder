import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from './../types';

// func to include all actions
const GithubState = props => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // * Search Github Users
    const searchUsers = async (search) => {
        // * if not empty
        if( search.trim() !== '' ) { 
            setLoading();
            const res = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            dispatch({
                type: SEARCH_USERS,
                payload: res.data.items
            });
        } 
    }

    // * Get Single Github User
    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        });
    }

    // * Get User Repos

    // * Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    // * Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    // * Return the provider (with anything we want available throughout the entire app)
    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
    }}>
        {/* we're wrapping the entire application within this provider */}
        { props.children }
    </GithubContext.Provider>
}

export default GithubState;