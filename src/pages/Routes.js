import React from "react";
import { Routes} from "react-router-dom";

// Routes
import PanelQuantity from "./AdminLayout/PanelQuantity";
import PanelOrders from "./AdminLayout/PanelOrders";
import Basket from "./UserLayout/Basket";
import Products from "./UserLayout/Products";
import Product from "./UserLayout/Product";
import Checkout from "./UserLayout/Checkout";
import Payment from "./UserLayout/Payment";
import PaymentResultSuccess from "./UserLayout/PaymentResultSuccess";
import PaymentResultFail from "./UserLayout/PaymentResultFail";
import PanelLogin from "./AdminLayout/PanelLogin";
import PanelProduct from "./AdminLayout/PanelProduct";
import PanelProductAdd from './AdminLayout/PanelProductAdd';
import NotFound from './NotFound';


 
  let Routes = [
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
      path: "/basket",
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
      path: "/payment-result-success",
      element: <PaymentResultSuccess />,
      isPrivate: false,
    },

    {
      path: "/payment-result-fail",
      element: <PaymentResultFail />,
      isPrivate: false,
    },
    {
      path: "/panel-login",
      element: <PanelLogin />,
      isPrivate: true,
    },
    {
      path: "/panel-product",
      element: <PanelProduct />,
      isPrivate: true,
    },
    {
      path: "/panel-product-add",
      element: <PanelProductAdd />,
      isPrivate: true,
    },
    {
      path: "/panel-quantity",
      element: <PanelQuantity />,
      isPrivate: true,
    },
    {
      path: "/panel-orders",
      element: <PanelOrders />,
      isPrivate: true,
    },
    {
      path: "*",
      element: <NotFound />
    },
  ];

export default Routes;