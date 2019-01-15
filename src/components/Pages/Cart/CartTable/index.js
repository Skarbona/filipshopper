import React from 'react';
import { connect } from 'react-redux';

import TableTh from './TableTh';
import TableProducts from './TableProducts';
import Button from "../../../Elements/Button";
import CartSummary from "./CartSummary";
import { addItemToCart, removeItemFromCart } from "../../../../actions/cart";

const CartTable = ({ cartTotal, cartProducts, translations, addItemToCart, removeItemFromCart }) => {
    if(cartTotal > 0) {
        return (
            <React.Fragment>
                <table className="striped responsive-table">
                    <tbody>
                    <TableTh titles={translations}/>
                    <TableProducts
                        addItemToCart={addItemToCart}
                        removeItemFromCart={removeItemFromCart}
                        products={cartProducts.products}
                        translations={translations} />
                    </tbody>
                </table>
                <CartSummary translations={translations}
                             total={cartTotal} />
                <Button
                    to="/checkout"
                    className="btn-large blue darken-3"
                    text="Go Checkout"
                />
            </React.Fragment>
        )
    } else {
        return (
            <h2>{ !translations ? ( 'Loading...') : ( translations.messages.cart.emptyCart ) }</h2>
        );
    }
};

const mapStateToProps = ({ cart, init : { translations  } }) => {
    return {
        cartProducts : cart,
        cartTotal : cart.total ? cart.total : 0,
        translations
    }
};


export default connect(mapStateToProps, { addItemToCart, removeItemFromCart })(CartTable);
