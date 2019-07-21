import React, { Component } from 'react';

class ProfilePanel extends Component {
    render() {
        const display = this.props.username ? (
            <span className="nav-text">Welcome, {this.props.username}</span>
        ) : (
            <button className="btn button-item">
                Login
            </button>
        )

        return (
            <div>
                {display}
            </div>
        )
    }
}

export default ProfilePanel;