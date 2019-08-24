import React, {Component} from 'react';
import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';
import '../styles/mainhome.css';

class MainHome extends Component {
    render() {
        return(
            <div className="container-main-home">
                <SideBar />
                <MainContent />
            </div>
        )
    }
}

export default MainHome;