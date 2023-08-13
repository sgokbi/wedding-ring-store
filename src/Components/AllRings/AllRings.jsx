import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Ring from "../Ring/Ring";
import Cart from "../Cart/Cart";
import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../Utilitis/fakedb";

const AllRings = () => {
  const rings = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (ring) => {
    const newCart = [...cart, ring];
    setCart(newCart);
    addToDb(ring.id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedRing = rings.find((ring) => ring.id === id);
      if (addedRing) {
        const quantity = storedCart[id];
        addedRing.quantity = quantity;
        savedCart.push(addedRing);
      }
    }

    setCart(savedCart);
  }, [rings]);

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="grid grid-cols-5 gap-8 container mx-auto px-4 my-10">
      <div className="col-span-4 grid md:grid-cols-3 lg:grid-cols-5  gap-7">
        {rings.map((ring) => (
          <Ring
            key={ring.id}
            ring={ring}
            handleAddToCart={handleAddToCart}
          ></Ring>
        ))}
      </div>

      <div className="">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders">
            <button className="bg-pink-600 text-white px-6 rounded mt-4">
              <span>Review Order</span>
              <FontAwesomeIcon
                className="pl-3"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default AllRings;
