import React, { useContext } from 'react';
import AlertContext from './../../../context/alert/alertContext';

const Alert = () => {

    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

    return (
        alert !== null && (
            <div className="container mt-3">
                <div className={`alert alert-${alert.type}`} role="alert">
                    <span className="fas fa-info-circle"></span> { alert.msg }
                </div>
            </div>
            
        )
    )
}

export default Alert
