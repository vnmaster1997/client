import React, { Component } from 'react';
import '../styles/detailproduct.css';
import Product from '../components/Product';
import NavBar from '../components/NavBar';
class DetailProduct extends Component {
    render() {
        return(
        <div id="product15" className="post-15 product type-product status-publish container container-detail-product">
            <NavBar />
            <div className="single-product-controls ap-table-cell">
                <div className="ap-table-cell-left">
                    <ul className="ap-link">
                        <li className="ap-link-home"><a href="/#home">HOME</a></li>
                        <li className="ap-sep">/</li>
                        <li className="ap-link-shop"><a href="/#shop">SHOP</a></li>
                        <li className="ap-sep">/</li>
                        <li className="ap-link-product-15">BISCUIT CHOCOLATE</li>
                    </ul>
                </div>
                {/* <div className="ap-table-cell-right">
                    <ul className="ap-inline">
                        <li></li>
                        <li></li>
                    </ul>
                </div> */}
            </div>
            <div className="single-product-info ap-single-type">
                <div className="single-product-info-inner row clearfix">
                    <div className="col-sm-5 sm-mg-bottom-30">
                        <div className="single-product-image">
                            <div id="single-product-image" className="single-product-inner">
                                <div className="single-product-image-main-wrap">
                                    <div className="single-product-image-main">
                                        <a href="http://themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/product-20.jpg" className="zoom-image" title="" data-magnific="true" data-magnific-options="{&quot;galleryId&quot;:817254898}" data-gallery-id="817254898"><i className="fa fa-expand"></i></a>
                                        <img width="445" height="620" src="http://themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/product-20-570x730.jpg" className="attachment-shop_single size-shop_single" alt="" srcset=""></img>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product-image-thumb mg-top-10 owl-carousel manual owl-loaded owl-drag">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px);', transition: 'all 0s ease 0s;', width: '96px;'}}>
                                        <div className="owl-item current active" style={{width: '106px', marginRight: '10px;'}}><div className="product-image-thumb-item">
                                            <a href="http://themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/product-20.jpg" className="woocommerce-thumbnail-image" title="" data-index="0" data-magnific="true" data-magnific-options="{&quot;galleryId&quot;:817254898}" data-large-image="http://themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/product-20-570x730.jpg" data-gallery-id="817254898">
                                                <img width="106" height="130" src="http://themes.g5plus.net/april-bakery/wp-content/uploads/2017/11/product-20-106x130.jpg" className="attachment-shop_thumbnail size-shop_thumbnail" alt="" />
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="owl-nav disabled">
                                    <div className="owl-prev">prev</div>
                                    <div className="owl-next">next</div>
                                </div>
                                <div className="owl-dots disabled">
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="sumary-product entry-sumary">
                            <div className="summary-product entry-product">
                                <h1 className="product-title entry-title product-title-rating">Biscuit Chocolate</h1>
                                <p className="product-price">
                                    <span className="product-price-amount amount">
                                        <span className="product-price-currency-symbol">$</span>
                                        10.00
                                    </span>
                                </p>
                                {/* <div className="product-rating">
                                    <div className="product-star-rating">
                                        <span>
                                            Rated
                                            <strong className="rating">5.00</strong>
                                            out of 5
                                        </span>
                                        <span className="product-rating-count">(Based on 1 review)</span>
                                    </div>
                                </div> */}
                                <div className="product-detail-short-description">
                                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate</p>
                                </div>
                                <form className="product-cart" method="post" encType="multipart/form-data">
                                    <div className="product-quantity">
                                        <div className="product-quantity-inner">
                                            <a className="btn-number fa fa-minus ap-link" data-type="minus"/>
                                            <input type="text" step="1" min="1" max name="product-quantity" value="1" title="Qty" className="input-text qty text" size="4" />
                                            <a className="btn-number fa fa-plus ap-link" data-type="plus"></a>
                                        </div>
                                    </div>
                                    <button type="submit" name="add-to-cart" value="15" className="single-add-to-card-button button alt">Add to cart</button>
                                </form>
                                <div className="product-meta-tag">
                                    <span className="posted-in">
                                        Categories:
                                        <a href="#cake" ref="tag">Cake</a>
                                        ,
                                        <a href="#cupcake" ref="tag">Cupcake</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-product-description ap-tabs-wrapper">
                <ul className="tabs ap-tabs" role="tablist">
                    <li className="description-tab active" id="tab-title-description" role="tab" aria-controls="tab-description"><a href="#tab-description">Description</a></li>
                    {/* <li className="reviews-tab" id="tab-title-revies" role="tab" aria-controls="tab-reviews"><a href="#tab-review">Review (1)</a></li> */}
                </ul>
                <div className="ap-tabs-panel ap-tabs-panel-description panel entry-content ap-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description" style={{display: 'block'}}>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
                        Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                </div>
                {/* <div className="ap-tabs-panel ap-tabs-panel-reviews panel entry-content ap-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" style={{display: 'block'}}>
                    <div id="reviews" className="ap-reviews">
                        <div id="comments">
                            <h2 className="ap-reviews-title">
                                1 review for
                                <span>Biscuit chocolate</span>
                            </h2>
                            <ol className="commentlist">
                                <li className="comment even thread-even depth-1" id="li-comment-15">
                                    
                                </li>
                            </ol>
                        </div>
                    </div>

                </div> */}
            </div>
            <section className="related products">
                <h2>Related Product</h2>
                <div className="row row-products">
                    <div className="col-md-3"><Product /></div>
                    <div className="col-md-3"><Product /></div>
                    <div className="col-md-3"><Product /></div>
                    <div className="col-md-3"><Product /></div>
                </div>
            </section>
        </div>
        )
    }
}


export default DetailProduct;
