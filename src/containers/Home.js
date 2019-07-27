import React, { Component } from 'react'

import NavBar from '../components/NavBar'
import Information from '../components/Information'
import Footer from '../components/Footer';
import MainHome from '../components/MainHome'
class Home extends Component {
    state = {
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <div>
                <NavBar onLogin={this.props.onLogin} username={this.props.username} />
                <Information />
                <MainHome />
                <Footer />
            </div>
        )
    }
}

export default Home;