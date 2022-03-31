import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import'./Product.css'

const Product = (props) => {
    const{name,img,seller,price,ratings}=props.product;
    const{handleAddToCart}=props;
    
    return (
        <div className='product'>
            <img src={img}alt=""></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Rating:{ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)}className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;