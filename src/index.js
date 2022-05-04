import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Routers from './shared/Routes';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {Routers.map((routers,index) => {
        <Route key={index} path={routers.path} element={routers.element}/>
      })}
    </Routes>
    <App />
  </BrowserRouter>
);
