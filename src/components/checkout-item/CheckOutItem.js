import React from "react";
import "./checkoutitem.scss";

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div clasName="remove-button">&#10005;</div>
  </div>
);

export default CheckOutItem;
