import React from "react";
import { Routes, Route } from "react-router-dom";

// Routes
import Panel_quantity from "../pages/AdminLayout/Panel_Quantity";
import Panel_orders from "../pages/AdminLayout/Panel_Orders";
import Basket from "./../pages/UserLayout/Basket";
import Products from "./../pages/UserLayout/Products";
import Product from "./../pages/UserLayout/Product";
import Checkout from "./../pages/UserLayout/Checkout";
import Payment from "./../pages/UserLayout/Payment";
import Payment_result_success from "./../pages/UserLayout/Payment-result-success";
import Payment_result_fail from "./../pages/UserLayout/Payment_result_fail";
import Panel_login from "./../pages/AdminLayout/Panel_login";
import Panel_product from "./../pages/AdminLayout/Panel_Product";
import Panel_product_add from "./../pages/UserLayout/Panel_product_add";


export default function Routes() {
  let routes = [
    {
      path: "/home",
      element: <Home />,
      isPrivate: false,
    },
    {
      path: "/products",
      element: <Products />,
      isPrivate: false,
    },
    {
      path: "/Basket",
      element: <Basket />,
      isPrivate: false,
    },
    {
      path: "/product",
      element: <Product />,
      isPrivate: false,
    },
    {
      path: "/checkout",
      element: <Checkout />,
      isPrivate: false,
    },
    {
      path: "/payment",
      element: <Payment />,
      isPrivate: false,
    },
    {
      path: "/payment_result_success",
      element: <Payment_result_success />,
      isPrivate: false,
    },

    {
      path: "/payment_result_fail",
      element: <Payment_result_fail />,
      isPrivate: false,
    },
    {
      path: "/panelLogin",
      element: <Panel_login />,
      isPrivate: false,
    },
    {
      path: "/panelproduct",
      element: <Panel_product />,
      isPrivate: false,
    },
    {
      path: "/panelproductadd",
      element: <Panel_product_add />,
      isPrivate: false,
    },
    {
      path: "/panelquantity",
      element: <Panel_quantity />,
      isPrivate: false,
    },
    {
      path: "/Panel_Orders",
      element: <Panel_orders />,
      isPrivate: false,
    },
  ];
}
