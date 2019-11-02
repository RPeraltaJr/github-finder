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

    // * Get Single Github User

    // * Get User Repos

    // * Clear Users

    // * Set Loading

    // * Return the provider (with anything we want available throughout the entire app)
    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
    }}>
        { props.children }
    </GithubContext.Provider>
}

export default GithubState;