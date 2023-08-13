import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { deleteShoppingCart, removeFromDb } from "../Utilitis/fakedb";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleRemoveFromCart = (id) => {
    console.log(id);
    const remaining = cart.filter((ring) => ring.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="grid grid-cols-5 gap-8 container mx-auto px-4 my-10">
      <div className="col-span-4">
        {cart.map((ring) => (
          <ReviewItem
            key={ring.id}
            ring={ring}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>

      <div className="">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/checkout">
            <button className="bg-pink-600 text-white px-6 rounded mt-4">
              <span> Checkout</span>
              <FontAwesomeIcon
                className="pl-3"
                icon={faCreditCard}
              ></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
