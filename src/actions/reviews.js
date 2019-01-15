import axios from 'axios';

import {
    INIT_REVIEWS
} from "./index";

export const initReviews = () => async dispatch => {
    try {
        const response = await axios.get('/database/reviews.json');
        dispatch({
            type: INIT_REVIEWS,
            payload: response.data
        })
    } catch(e) {
        console.warn('initReviews error: ', e);
    }
};