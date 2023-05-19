import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className ="product">
           <div>
                <img src={img} alt="" />
           </div>
           <div className = "product-scalling">
                <h4 className ="product-name">{name}</h4>
                <br/>
                <p><small>By : {seller}</small></p>
                <h4>${price} only</h4>
                <p>Only {stock} left in stock - Order soon</p>
                <button className="main-button" onClick={()=>props.handdleAddProduct(props.product)}><FontAwesomeIcon icon={faCartShopping} />add to cart</button>
           </div>
           
           
            
        </div>
    );
};

export default Product;