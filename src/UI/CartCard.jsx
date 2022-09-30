import React from 'react';
import './CartCard.css';

function CartCard(props) {
    return (
        <div className="cart-card">
            {props.children}
        </div>
    );
}

export default CartCard;