import React from 'react'

const Alert = ({ alert }) => {
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
