import axios from 'axios';

import {
    INIT_PRODUCT_DATA,
    INIT_TRANSLATIONS
} from './index'

export const initProductData = () => async dispatch => {
    try {
        const response = await axios.get('./database/products.json');
        dispatch({
            type: INIT_PRODUCT_DATA,
            payload: response.data
        })
    } catch(e) {
        console.warn('initProductData error: ', e);
    }

};

export const initTranslations = () => async dispatch => {
    try {
        const response = await axios.get('./database/translations.json');
        dispatch({
            type: INIT_TRANSLATIONS,
            payload: response.data
        })
    } catch(e) {
        console.warn('initTranslations error: ', e);
    }
};