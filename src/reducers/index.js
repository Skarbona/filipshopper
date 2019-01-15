import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import init from './init';
import cart from './cart';
import search from './search';
import reviews from './reviews';

export default combineReducers({
    init,
    cart,
    search,
    reviews,
    form: formReducer
});