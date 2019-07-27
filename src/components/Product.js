import React, { Component } from "react";
import "../styles/product.css";

class Product extends Component {
    render() {
        return (
            <article className="product-item-inner clearfix animated">
                <div className="product-thumb">
                    <div className="product-images-hover change-image">
                        <div className="product-thumb-primary">
                            <div className="entry-thumbnail">
                                <a
                                    className="entry-thumbnail-overlay"
                                    href="#/biscuit-chocolate"
                                    title="Biscuit Chocolate"
                                >
                                    <img
                                        className="img-responsive"
                                        src="http://themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/product-03-270x320.jpg"
                                        alt="#"
                                    />
                                </a>
                            </div>
                        </div>
                        {/* <div className="product-thumb-secondary">
                                        <div className="entry-thumbnail">
                                            <a className="entry-thumbnail-overlay" href="#/biscuit-chocolate" title="Biscuit Chocolate">
                                                <img className="img-responsive" src="http://themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/product-14-270x320.jpg" alt="#" />
                                            </a>
                                        </div>
                                    </div> */}
                    </div>
                    <div className="product-actions" />
                </div>
                <div className="product-info">
                    <div className="product-heading">
                        <h4 className="product-name">
                            <a className="gsf-link" href="#/product/biscuit-chocolate">
                                Biscuit Chocolate
              </a>
                        </h4>
                    </div>
                    <div className="product-meta">
                        <span className="price-amount">
                            <span className="price-currency-symbol">$</span>
                            7.00
            </span>
                    </div>
                    <div className="product-action-item">
                        <a
                            className="add_to_cart"
                            href="#/shop/?add-to-cart=70"
                            data-quantity="1"
                            data-product-id="70"
                        >
                            Add to cart
            </a>
                    </div>
                </div>
            </article>
        );
    }
}

export default Product;
