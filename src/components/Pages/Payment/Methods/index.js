import React from 'react';

const PaymentMethod = ({ name, color, onClick, active }) => {

    return (
            <div
                className="col s12 m6 l4"
                onClick={() => onClick(name)}
                style={{cursor:"pointer"}}
            >
                <div className={`card ${color} darken-1`}
                     style={{boxShadow: active ? "1px 2px 3px #000" : "0px 0px 0px #000"}}
                >
                    <div className="card-content white-text">           <h3>{ name }  </h3>
                    </div>
                </div>
            </div>
    );
};

export default PaymentMethod;
