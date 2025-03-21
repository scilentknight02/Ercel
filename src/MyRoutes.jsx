import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Layout from "./Components/Layouts/Layout";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Product from "./Components/Pages/Product";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Cart from "./Components/Pages/Cart";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
