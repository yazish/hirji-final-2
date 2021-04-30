import React from 'react';
import CartProducts from "../components/js/cart/Products"
import Buy from "../components/js/cart/Submit"


function Cart(props) {
    return (
        <React.Fragment>
            <CartProducts/>
            <Buy/>
        </React.Fragment>
    )
}

export default Cart