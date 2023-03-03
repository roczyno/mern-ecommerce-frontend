import React from "react";
import Cart from "./pages/Cart";

import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Product from "./pages/product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";

const App = () => {
  const user = true;
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products/:category"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
