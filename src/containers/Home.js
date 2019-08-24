import React, { Component } from 'react'

import NavBar from '../components/NavBar'
import Information from '../components/Information'
import Footer from '../components/Footer';
import MainHome from '../components/MainHome'

import '../styles/home.css'
class Home extends Component {
    state = {
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="container container-home">
                    <NavBar onLogin={this.props.onLogin} username={this.props.username} />
                    <Information />
                    <hr />
                    <MainHome />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;