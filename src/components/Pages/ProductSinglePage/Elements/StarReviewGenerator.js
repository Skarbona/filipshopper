import React from 'react';

const StarReviewGenerator = ({ type }) => {
    if (type === 'full') {
        return <i className="material-icons">star</i>
    } else {
        return <i className="material-icons">star_border</i>
    }
};

export default StarReviewGenerator;
