import React, {Component} from 'react';
import Product from '../components/Product'
import '../styles/main-home.css';

class MainHome extends Component {
    render() {
        return(
            <div>
                <div className="content">
                    <div className="search-products">
                        <input id="input-search" type="text" placeholder="holder" name="search"/>
                    </div>
                    <div className="filter-by-price">
                        <h4>FILTER BY PRICE</h4>
                        <div>
                            <div className="present-price"></div>
                            <div className="total-price"></div>
                            <div className="filter-price-start"></div>
                            <div className="filter-price-end"></div>
                        </div>
                        <button className="btn">FILTER</button>
                        <span>Price: $6-$10</span>
                    </div>
                    <div className="categories-products">
                        <h4>Product Categories</h4>
                        <ul>
                            <li>BREAD</li>
                            <li>CAKE</li>
                            <li>CHOCOLATE</li>
                            <li>CUPCAKE</li>
                        </ul>
                    </div>
                    <div className="hot-products">
                        <h4>Products</h4>
                        <ul>
                            <li>
                                <div>
                                    <img src="#" alt="product"/>
                                </div>
                                <div className="name-hot-product">Round Biscuits</div>
                                <div className="price-hot-product">$6.00</div>
                            </li>
                            <li>
                                <div>
                                    <img src="#" alt="product"/>
                                </div>
                                <div className="name-hot-product">Round Biscuits</div>
                                <div className="price-hot-product">$6.00</div>
                            </li>
                            <li>
                                <div>
                                    <img src="#" alt="product"/>
                                </div>
                                <div className="name-hot-product">Round Biscuits</div>
                                <div className="price-hot-product">$6.00</div>
                            </li>
                            <li>
                                <div>
                                    <img src="#" alt="product"/>
                                </div>
                                <div className="name-hot-product">Round Biscuits</div>
                                <div className="price-hot-product">$6.00</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-content">
                    <div className="featured-products">
                        <div><h3>FEATURED PRODUCTS</h3></div>
                        <div><p>our amazing products</p></div>
                    </div>
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
                    <div className="info-products">
                        <Product />
                        <article></article>
                        <article></article>
                        <article></article>
                        <article></article>
                        <article></article>
                        <article></article>
                        <article></article>
                        <article></article>
                    </div>
                    <div className="page-products"></div>
                </div>
            </div>
        )
    }
}

export default MainHome;