import React from "react";
import { useLoaderData } from "react-router-dom";
import Ring from "../Ring/Ring";

const AllRings = () => {
  const rings = useLoaderData();
  console.log(rings);

  return (
    <div className="grid grid-cols-6 gap-8 container mx-auto px-4">
      <div className="col-span-5 grid grid-cols-4 gap-7">
        {rings.map((ring) => (
          <Ring key={ring.id} ring={{ ring }}></Ring>
        ))}
      </div>
      <div className="text-center bg-pink-700 ">cart</div>
    </div>
  );
};

export default AllRings;
