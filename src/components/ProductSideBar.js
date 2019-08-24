import React, { Component } from 'react';
import '../styles/productsidebar.css';

class ProductSideBar extends Component {
    render() {
        return(
            <li className="clearfix">
                <a className="sidebar-product-link" href="#cake">
                    <img className="product-image post-image" src="//themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/product-24-106x130.jpg" alt="product"/>
                    <span className="product-title">Round Biscuits</span>
                </a>
                <span className="price-amount amount">
                    <span className="price-currency-symbol">$</span>
                    6.00
                </span>
            </li>
        )
    }
}

export default ProductSideBar;