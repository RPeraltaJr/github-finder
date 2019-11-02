import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from './../types';

// func to include all actions
const AlertState = props => {

    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // * Set Alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    }

    // * Return the provider (with anything we want available throughout the entire app)
    return <AlertContext.Provider value={{
        alert: state,
        setAlert
    }}>
        {/* we're wrapping the entire application within this provider */}
        { props.children }
    </AlertContext.Provider>
}

export default AlertState;