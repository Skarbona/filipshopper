import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    CLEAR_CART
} from "../actions";

export default (state = { total: 0, counter: 0 }, action) => {
    switch(action.type) {
        case CLEAR_CART : return { total: 0, counter: 0 };
        case REMOVE_ITEM_FROM_CART : {
            let { product, countBy } = action.payload;

            if(state.products[product.id].amount > 1) {
                return {
                    ...state,
                    products: {
                        ...state.products,
                        [product.id]: {
                            ...state.products[product.id],
                            amount: state.products[product.id].amount - countBy
                        },
                    },
                    counter: state.counter - countBy,
                    total: state.total - (countBy * product.price),
                };
            } else {

                let productsRemove = { ...state.products };
                delete productsRemove[product.id];

                return {
                    products: { ...productsRemove },
                    counter: state.counter - countBy,
                    total: state.total - (countBy * product.price),
                };
            }
        }
        case ADD_ITEM_TO_CART : {
            let { product, countBy } = action.payload;
            if (state.products && state.products[product.id]) {
                return {
                    ...state,
                    products: {
                        ...state.products,
                        [product.id] : {
                         ...product,
                        amount: state.products[product.id].amount + countBy
                    },
                    },
                    total: state.total + (action.payload.countBy * action.payload.product.price),
                    counter: state.counter + action.payload.countBy
                };
            } else {
                return {
                    ...state,
                    products: {
                        ...state.products,
                        [product.id] : {
                            amount: countBy,
                            ...product
                        }
                    },
                    total: state.total + (countBy * product.price),
                    counter: state.counter + countBy
                }
            }
        }

        default: return state;
    }
};