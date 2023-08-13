import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Layout/Home.jsx";
import AllRings from "./Components/AllRings/AllRings.jsx";
import Login from "./Components/Login/Login.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import NotFound from "./Components/AllRings/NotFound/NotFound.jsx";
import CartProductsLoaders from "./Components/Loaders/Loaders.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <AllRings></AllRings>,
        loader: () => fetch("rings.json"),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: CartProductsLoaders,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
