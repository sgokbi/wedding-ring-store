import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-pink-900 py-4 px-12 text-white sticky top-0 flex justify-between items-center z-50">
      <div className=" md:flex justify-between items-center container mx-auto">
        <Link to="/">
          <h1 className="text-3xl  ">ForEver</h1>
        </Link>

        <ul
          className={`md:flex absolute md:static duration-500 text-white text-1xl bg-pink-900   ${
            open ? "right-0" : "-right-80"
          } ${open ? "p-4" : "p-0"} ${open ? "mt-4" : "mt-0"} ${
            open ? "opacity-80 " : " opacity-100"
          }`}
        >
          <li className="px-2  hover:text-gray-300 duration-300">
            <Link to="/">AllRings</Link>
          </li>{" "}
          <li className="px-2  hover:text-gray-300 duration-300">
            <Link to="/orders">Orders</Link>
          </li>{" "}
          <li className="pl-2  hover:text-gray-300 duration-300">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div onClick={() => setOpen(!open)} className="md:hidden ">
        <span>
          {open === true ? (
            <FontAwesomeIcon
              className="text-3xl"
              icon={faXmark}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              className="text-2xl"
              icon={faBarsStaggered}
            ></FontAwesomeIcon>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Header;
