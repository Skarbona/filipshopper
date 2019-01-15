import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from "../../../../actions/cart";
import { Link } from 'react-router-dom';

import Button from '../../../Elements/Button'

const ProductListSingleItem = ({ product, buttons, currency, addItemToCart }) => {
    const { image, title, price, id } = product;
    return (
        <div className="col s12 m6 l4 xl4 animated fadeIn product-list__item">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <Link to={`/product/${id}`}>
                        <img src={image} alt={title} />
                    </Link>
                </div>
                <div className="card-content">
                        <span className="card-title grey-text text-darken-4">
                            <Link to={`/product/${id}`}>
                                {title}
                            </Link>
                        </span>
                        <span className="card-price grey-text text-darken-4">
                             {price} {currency}
                        </span>

                </div>
                <hr/>
                <div className="card-actions">
                    <Button
                        text={buttons ? buttons.addToCart : 'Loading...'}
                        to=''
                        className='btn-small blue darken-1'
                        icon='add'
                        onClickButton={() => addItemToCart(product)}
                    />
                    <Button
                        text={buttons ? buttons.seeMore : 'Loading...'}
                        className='btn-small blue darken-2'
                        icon='search'
                        to={`/product/${id}`}
                    />

                </div>
            </div>
        </div>
    );
};
const mapStateToProps = ({ init : { translations } }) => {
    return {
            buttons : translations ? translations.buttons : null,
            currency : translations ? translations.currency.short : null
        }
 };


export default connect(mapStateToProps, { addItemToCart })(ProductListSingleItem);
