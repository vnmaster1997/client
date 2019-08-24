import React, { Component } from "react";
import "../styles/cart.css";
class Cart extends Component {
  state = {};
  render() {
    return (
      <div id="primary-content" className="container-cart">
        <div className="container clearfix">
          <div className="row clearfix">
            <div className="col-md-12">
              <div
                id="post-8"
                className="page ap-entry-content clearfix post-8 type-page status-publish hentry"
              >
                <div className="x-commerce">
                  <form
                    className="x-commerce-cart-form"
                    action="/#"
                    method="post"
                  >
                    <table className="shop-table shop-table-responsive cart x-commerce-cart-form-contents">
                      <thead>
                        <tr>
                          <th className="product-name" colspan="2">
                            Product name
                          </th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="x-commerce-cart-form-cart-item cart-item">
                          <td className="product-thumbnail">
                            <a href="/#">
                              <img
                                src="//themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/product-05-106x130.jpg"
                                className="attachment-shop-thumbnail size-shop-thumbnail wx-post-image"
                                alt=""
                                style={{ width: "106", height: "130" }}
                              />
                            </a>
                          </td>
                          <td className="product-name" data-title="Product">
                            <a href="http://themes.g5plus.net/april-bakery/product/bread-basket/">
                              Bread Basket
                            </a>
                          </td>
                          <td className="product-price" data-title="Price">
                            <span className="x-commerce-Price-amount amount">
                              <span className="x-commerce-Price-currencySymbol">
                                $
                              </span>
                              8.00
                            </span>
                          </td>
                          <td
                            className="product-price"
                            data-title="Quantity"
                          >
                            <div className="product-quantity">
                              <div className="product-quantity-inner">
                                <a
                                  className="btn-number fa fa-minus ap-link"
                                  data-type="minus"
                                />
                                <input
                                  type="text"
                                  step="1"
                                  min="1"
                                  max
                                  name="product-quantity"
                                  value="1"
                                  title="Qty"
                                  className="input-text qty text"
                                  size="4"
                                />
                                <a
                                  className="btn-number fa fa-plus ap-link"
                                  data-type="plus"
                                ></a>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal" data-title="Total">
                            <span className="x-commerce-Price-amount amount">
                              <span className="x-commerce-Price-currencySymbol">
                                $
                              </span>
                              8.00
                            </span>
                          </td>
                          <td className="product-remove">
                            <a
                              href="http://themes.g5plus.net/april-bakery/cart/?remove_item=fc490ca45c00b1249bbe3554a4fdf6fb&amp;_wpnonce=3fda83b78f"
                              className="remove"
                              aria-label="Remove this item"
                              data-product_id="65"
                              data-product_sku=""
                            >
                              <i className="fa fa-times"></i>
                            </a>
                          </td>
                        </tr>
                        <tr className="cart-actions">
                          <td colspan="3" className="continue-shopping">
                            <a
                              className="btn btn-outline btn-md btn-black"
                              href="http://themes.g5plus.net/april-bakery/shop/"
                            >
                              Continue Shopping{" "}
                            </a>
                            <a
                              className="gsf-link disable-color clear-cart"
                              onclick='javascript:if(!confirm("Clear all items in your cart?")) {return false;}'
                              href="http://themes.g5plus.net/april-bakery/cart/?empty-cart"
                            >
                              <i className="fa fa-close"></i> Clear Shopping Cart{" "}
                            </a>
                          </td>
                          <td colspan="3" className="cart-subtotal">
                            <span className="cart-subtotal-label">
                              Subtotal:{" "}
                            </span>
                            <span className="x-commerce-Price-amount amount">
                              <span className="x-commerce-Price-currencySymbol">
                                $
                              </span>
                              8.00
                            </span>{" "}
                          </td>
                        </tr>
                        <tr className="">
                          <td className="action" style={{textAlign: "right"}} colspan="6">
                            <div className="wc-proceed-to-checkout">
                              <a
                                href="http://themes.g5plus.net/april-bakery/checkout/"
                                className="checkout-button button alt wc-forward"
                              >
                                Proceed to checkout
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                  <div className="cart-collaterals"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
