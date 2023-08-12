import React from "react";

const Ring = ({ ring }) => {
  console.log(ring);
  const { id, name, price, quantity } = ring.ring;
  console.log(name);
  return (
    <div className="border rounded hover:shadow-lg duration-300 p-4">
      <h2 className="text-red-800 font-bold text-2xl mb-2 "> {name}</h2>
      <p className="text-red-500 text-2xl">
        Price: <span className="text-zinc-500">{price}</span>
      </p>
    </div>
  );
};

export default Ring;
