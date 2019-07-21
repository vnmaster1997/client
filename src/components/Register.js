import React, { Component } from 'react';

class Register extends Component {
    render() {
        const display = this.props.username ? (
            <span className="nav-text">Welcome, {this.props.username}</span>
        ) : (
            <button className="btn button-item">
                Register
            </button>
        )

        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Register;