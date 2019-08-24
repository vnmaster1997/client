import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import '../styles/navbar.css'

class NavBar extends Component {
    render() {
        return (
            <div className="container-nav-bar container nav-bar">
                <div className="row">
                    <div className="">
                        <span className="title"><a href="/">HOME</a></span>
                        <span className="title"><a href="/shop">SHOP</a></span>
                        <span className="title"><a href="/blog">BLOG</a></span>
                        <span className="title"><img src="http://themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/logo.png" alt="Logo"/></span>
                        <span className="title"><a href="/about">ABOUT US</a></span>
                        <span className="title"><a href="/contact">CONTACT</a></span>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="row-button button">
                            <a href="/cart" className="button-cart"><i className="fas fa-shopping-cart"></i></a>
                            <Login onLogin={this.props.onLogin} username={this.props.username} />
                            <Register onRegister={this.props.onResgister}/>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default NavBar;