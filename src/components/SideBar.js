import React, { Component } from 'react';
import ProductSideBar from './ProductSideBar'
import '../styles/sidebar.css'

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="content">
                    <aside className="search-products">
                        <form className="form-search-product" role="search" method="get" action="#">
                            <input id="input-search-product" className="search-field" type="search" placeholder="Search Products..." />
                            <input type="submit" value="search" />
                        </form>
                    </aside>
                    <aside id="filter-by-price" className="widget filter-by-price">
                        <h4 className="filter-title">FILTER BY PRICE</h4>
                        <form method="get" action="#">
                            <div className="price-slider-wrapper">
                                <div className="price-slider ui-slider ui-slider-horizontal ui-widget-content ui-corner-all">
                                    <div className="ui-slider-range ui-widget-header ui-corner-all" style={{ left: '0%', width: '100%' }}></div>
                                    <span className="ui-slider-handler ui-state-default ui-corner-all" style={{ left: '0%' }}></span>
                                    <span className="ui-slider-handler ui-state-default ui-corner-all ui-state-focus" style={{ left: '100%' }}></span>
                                </div>
                                <div className="price-slider-amount">
                                    <input type="text" id="min-price" name="min-price" value="4" placeholder="Min price" style={{ display: 'none' }} />
                                    <input type="text" id="max-price" name="max-price" value="12" placeholder="Max price" style={{ display: 'none' }} />
                                    <button type="submit" className="btn-filter">FILTER</button>
                                    <div className="price-label">
                                        Price:
                                    <span className="from">$4</span>
                                        " - "
                                    <span className="to">$12</span>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </form>
                    </aside>
                    <aside id="widget-product-categories" className="widget widget-product-categories">
                        <h4 className="widget-title"><span>Product Categories</span></h4>
                        <ul className="product-categories">
                            <li className="cat-item cat-item-bread"><a href="#bread">BREAD</a></li>
                            <li className="cat-item cat-item-cake"><a href="#cake">CAKE</a></li>
                            <li className="cat-item cat-item-chocolate"><a href="#chocolate">CHOCOLATE</a></li>
                            <li className="cat-item cat-item-cupcake"><a href="#cupcake">CUPCAKE</a></li>
                            <li className="cat-item cat-item-flour"><a href="#flour">FLOUR</a></li>
                        </ul>
                    </aside>
                    <aside id="products" className="widget products">
                        <h4>Products</h4>
                        <ul className="product-list-widget">
                            <ProductSideBar />
                            <ProductSideBar />
                            <ProductSideBar />
                            <ProductSideBar />
                        </ul>
                    </aside>
                </div>
            </div>
        )
    }
}

export default SideBar;