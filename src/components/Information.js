import React, { Component } from 'react';
import '../styles/information.css'
class Information extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <img className="img-bg" src="http://themes.g5plus.net/april-bakery/wp-content/uploads/revslider/Bakery%20Slider/background-05.jpg" alt="img"/>
                </div>
                <div className="img-min-bg">
                    <img src="http://themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/background-08.jpg" alt="img"/>
                </div>
                <div className="information">
                    <div className="inline col-sm-6">
                        <p className="block heading-color">April bakery</p>
                        <p className="block accent-color">Discover our Service</p>
                    </div>
                    <div className="inline col-sm-6">
                        <div>
                            <p>Organic store is the greatest online health food shop. Thank you for all the amazing products you deliver each week...</p>
                        </div>
                        <div>
                            <h6>MASTER</h6>
                            <span>Director Store</span>
                        </div>
                    </div>
                    <div className="space">
                        
                    </div>
                    <div className="column-container sm-mg-bottom-30 col-sm-6 col-md-3">
                        <div className="ib-shape">
                            <div className="ib-shape-inner"><i className="fa fa-birthday-cake" aria-hidden="true"></i></div>
                        </div>
                        <div className="ib-content">
                            <h4 className="iconbox-title">Lots of breads</h4>
                            <p>Quod praeceptum quia maius erat, quam ut ab homine videretur Quod praeceptum quia videretur</p>
                        </div>
                    </div>
                    <div className="column-container sm-mg-bottom-30 col-sm-6 col-md-3">
                        <div className="ib-shape">
                            <div className="ib-shape-inner"><i className="fa fa-history" aria-hidden="true"></i></div>
                        </div>
                        <div className="ib-content">
                            <h4 className="iconbox-title">Cookies</h4>
                            <p>Quod praeceptum quia maius erat, quam ut ab homine videretur Quod praeceptum quia videretur</p>
                        </div>
                    </div>
                    <div className="column-container col-sm-6 col-md-3">
                        <div className="ib-shape">
                            <div className="ib-shape-inner"><i className="fa fa-life-ring" aria-hidden="true"></i></div>
                        </div>
                        <div className="ib-content">
                            <h4 className="iconbox-title">Recipe</h4>
                            <p>Quod praeceptum quia maius erat, quam ut ab homine videretur Quod praeceptum quia videretur</p>
                        </div>                        
                    </div>
                    <div className="column-container col-sm-6 col-md-3">
                        <div className="ib-shape">
                            <div className="ib-shape-inner"><i className="fa fa-paw" aria-hidden="true"></i></div>
                        </div>
                        <div className="ib-content">
                            <h4 className="iconbox-title">Fresh cakes</h4>
                            <p>Quod praeceptum quia maius erat, quam ut ab homine videretur Quod praeceptum quia videretur</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Information;