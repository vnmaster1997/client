import React, { Component } from 'react';
import Product from '../components/Product';

class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="featured-products">
                    <div className="gf-heading"><h3 className="heading-title">FEATURED PRODUCTS</h3></div>
                    <div><p className="accent-color">our amazing products</p></div>
                </div>
                <hr />
                <div className="sort-products">
                    <ul>
                        <li className="sort-products-item">
                            <a href="google.com">
                                <i className="fa fa-th"></i>
                            </a>
                        </li>
                        <li className="sort-products-item">
                            <a href="google.com">
                                <i className="fa fa-list"></i>
                            </a>
                        </li>
                        <li className="sort-products-item">Sort By</li>
                        <li className="sort-products-item">
                            <form className="product-ordering" method="get">
                                <select className="orderby" name="orderby">
                                    <option value="menu_order" select="selected">Default sorting</option>
                                    <optgroup label="price">
                                        <option value="price-asc">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>
                                    </optgroup>
                                    <optgroup label="status">
                                        <option value="available">Status: available</option>
                                        <option value="pending">Status: pending</option>
                                        <option value="unavailable">Status: sold</option>
                                    </optgroup>
                                </select>
                            </form>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="clear-float"></div>
                <div className="info-products">
                    <div className="row row-products">
                        <div className="col-md-4"><Product /></div>
                        <div className="col-md-4"><Product /></div>
                        <div className="col-md-4"><Product /></div>
                    </div>
                    <div className="row row-products">
                        <div className="col-md-4"><Product /></div>
                        <div className="col-md-4"><Product /></div>
                        <div className="col-md-4"><Product /></div>
                    </div>
                    <div className="row row-products">
                        <div className="col-md-4"><Product /></div>
                        <div className="col-md-4"><Product /></div>
                        <div className="col-md-4"><Product /></div>
                    </div>
                </div>
                <div className="page-products pagination-main-content clear-fix">
                    <span className="page-numbers page-current">1</span>
                    <a className="page-numbers different-page-numbers" href="#2">2</a>
                    <a className="page-numbers" href="#2">NEXT</a>
                </div>
            </div>
        )
    }
}

export default MainContent;