import React from "react";
import heart from "../../../images/heart.png";
import addtocart from "../../../images/addtocart.png";
import "./Product.css";
const Product = ({ product }) => {
  return (
    <>
      <div>
        <div className="single-cart-div">
          <div className="product-header-div">
            <img src={heart} alt="heart-logo" />
            <p>{product.product_quantity}</p>
          </div>
          <img
            height="120px"
            src={product.product_img}
            alt={product.product_name}
          />
          <p className="product-name">{product.product_name}</p>
          <p className="product-price">
            <sup>₹</sup>
            {product.product_price}
          </p>
        </div>

        <div className="product-cart-div">
          <img src={addtocart} alt="cart-logo" />
          <p>Add to cart</p>
        </div>
      </div>
    </>
  );
};

export default Product;
