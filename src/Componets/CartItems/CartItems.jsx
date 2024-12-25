import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Prices</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          // Add return here for JSX
          return (
            <div key={e.id} className="cartitems-format">
              <img
                src={e.image}
                alt={e.name}
                className="carticon-product-icon"
              />
              <p>{e.name}</p>
              <p>${e.new_price.toFixed(2)}</p>
              <p className="cartitems-quantity">{cartItems[e.id]}</p>
              <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
              <img
                src={remove_icon}
                onClick={() => removeFromCart(e.id)}
                alt="Remove Item"
                className="cartitems-remove-icon"
              />
            </div>
          );
        }
        return null; // Return null for items with 0 quantity
      })}
    </div>
  );
};

export default CartItems;
