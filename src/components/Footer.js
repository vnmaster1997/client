import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className="container-fluid">
                <div className="public-column column-container col-sm-12"></div>
                <div className="public-column column-container col-sm-8 col-md-4">
                    <div className="column-inner">
                        <aside id="banner-2" className="widget widget-banner">
                            <div className="widget-banner-content">
                            <img width="172" height="80" 
                            src="http://themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/logo-02-172x80.png" alt="Bakery" />
                            </div>
                        </aside>
                        <aside id="text-2" className="mg-top-25 widget widget_text">
                            <div className="textwidget">
                                <p>
                                We are online market of organic fruits, vegetables, juices and dried fruits. Visit our site for a complete list of exclusive we are stocking.
                                </p>
                            </div>
                        </aside>
                        <aside >

                        </aside>
                    </div>
                </div>
                <div className="public-column column-container public-info col-sm-6 col-lg-offset-1 col-md-4">
                    <h2>INFORMATION</h2>

                    <div></div>

                    <ul>
                        <li>New Products</li>
                        <li>Top Sellers</li>
                        <li>Our Blog</li>
                        <li>About our shop</li>
                    </ul>
                </div>
                <div className="public-column column-container public-info col-sm-6 col-md-4">
                    <h2>USERFUL LINKS</h2>

                    <div></div>
                    <ul>
                        <li>Out team</li>
                        <li>Out Blog</li>
                        <li>About Us</li>
                        <li>Secure Shopping</li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;