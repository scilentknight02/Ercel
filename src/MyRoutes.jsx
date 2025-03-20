import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Layout from "./Components/Layouts/Layout";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
