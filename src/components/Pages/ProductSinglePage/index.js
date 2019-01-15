import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import MainContent from './Elements/MainContent'
import SinglePageCollapse from './Elements/SinglePageCollapse.js'
import { addItemToCart } from "../../../actions/cart";

const ProductSinglePage = ({ product, buttons, addItemToCart, currency }) => {
    if( product ) {
    return (
        <div className="product-single-page">
            <div className="row">
               <MainContent
                   product={product}
                   addItemToCart={addItemToCart}
                   buttons={buttons}
                   currency={currency}
               />
            </div>
            <div className="row">
                <SinglePageCollapse extra={product.extra} id={product.id}/>
            </div>
        </div>
    );
    } else {
        return (
            <h2>
                Go to Home Page and Refresh the Page. This "error" will be handle in the next step
            </h2>
        )
    }
};

const mapStateToProps = (state , ownProps) => {
    let product = null;
    let singleProduct = null;
    if(state.init) {
        singleProduct = _.filter(state.init.products, function(o) { return o.id === ownProps.match.params.id});
    }

    if( singleProduct ) {
        product = singleProduct[0];
    }
    return {
        buttons : state.init.translations ? state.init.translations.buttons : null,
        currency : state.init.translations ? state.init.translations.currency.short : null,
        product
    }
 };


export default connect(mapStateToProps, { addItemToCart })(ProductSinglePage);
