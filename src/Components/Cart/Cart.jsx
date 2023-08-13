import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = ({ cart, handleClearCart, children }) => {
  console.log(cart);

  let totalPrice = 0;
  let quantity = 0;
  let totalShipping = 0;

  for (const ring of cart) {
    if (ring.quantity === 0) {
      ring.quantity = 1;
    }
    // ring.quantity = ring.quantity || 1;
    totalPrice = totalPrice + ring.price * ring.quantity;
    totalShipping = totalShipping + ring.shipping;
    quantity = quantity + ring.quantity;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="text-center bg-pink-100 text-zinc-500 font-bold p-3 rounded sticky top-24 leading-8  ">
      <p>Selected Item: {cart.length} </p>
      <p>Total Price: ${totalPrice.toFixed(2)} </p>
      <p>Shipping: ${totalShipping} </p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)} </p>

      <button
        onClick={handleClearCart}
        className="bg-red-500 text-white px-6 rounded mt-4"
      >
        <span>Clear Cart</span>
        <FontAwesomeIcon className="pl-3" icon={faTrashAlt}></FontAwesomeIcon>
      </button>
      {children}
    </div>
  );
};

export default Cart;
