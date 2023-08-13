import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Ring = ({ ring, handleAddToCart }) => {
  //   console.log(ring);
  const { id, name, price, quantity } = ring;
  //   console.log(name);
  return (
    <div className="border rounded hover:shadow-lg duration-300 relative  ">
      <div className="p-4 mb-8">
        <h2 className="text-red-800 font-bold text-2xl mb-2 "> {name}</h2>
        <p className="text-red-500 text-2xl mb-2">
          Price: <span className="text-zinc-500 text-xl">{price}</span>
        </p>
      </div>

      <button
        onClick={() => handleAddToCart(ring)}
        className="w-full bg-pink-400 absolute bottom-0 rounded p-2 text-white font-bold duration-300 hover:bg-pink-500 "
      >
        Buy Now
        <FontAwesomeIcon
          className="ml-2"
          icon={faShoppingCart}
        ></FontAwesomeIcon>{" "}
      </button>
    </div>
  );
};

export default Ring;
