import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total + prd.price,0);

    let shipping =0;
    if(total>35){
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }
    const tax = total/10;
    const formatNumber = num =>{
        const precision =num.toFixed(2);
        return (precision);
    }
    return (
        <div className="Cart">
            <h1>Order summery</h1>
            <h3>Items Order : {cart.length}</h3>
            <p><small>Product Price :{formatNumber(total)}</small></p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>VAT + TAX : {formatNumber(tax)}</small></p>
            <h4>Total Price : {tax + total + shipping}</h4>
        </div>
    );
};

export default Cart;