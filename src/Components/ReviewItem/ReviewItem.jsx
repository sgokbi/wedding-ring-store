import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewItem = ({ ring, handleRemoveFromCart }) => {
  const { id, name, price } = ring;

  return (
    <div className="flex justify-between items-center border rounded mb-6 hover:shadow-lg p-4">
      <div className="">
        <h2 className="text-red-800 font-bold text-2xl mb-2 "> {name}</h2>
        <p className="text-red-500 text-2xl mb-2">
          Price: <span className="text-zinc-500 text-xl">{price}</span>
        </p>
      </div>

      <button
        onClick={() => handleRemoveFromCart(id)}
        className="w-14 h-14 rounded-full bg-pink-100"
      >
        <FontAwesomeIcon
          className="text-red-500 text-2xl"
          icon={faTrashAlt}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default ReviewItem;
