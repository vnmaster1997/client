import React, { Component } from 'react'

import NavBar from '../components/NavBar'
import Information from '../components/Information'
import Footer from '../components/Footer';
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
                <Footer />
            </div>
        )
    }
}

export default Home;