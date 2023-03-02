import React from "react";
import Cart from "./pages/Cart";

import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Product from "./pages/product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
