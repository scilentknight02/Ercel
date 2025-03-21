import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="position-sticky top-0 start-0 w-100 bg-primary py-2 d-flex justify-content-between px-4 z-index-999">
      <div className="w-25">
        <img src="/vite.svg" alt="Logo" className="img-fluid" />
      </div>
      <div className="w-50 d-flex justify-content-evenly align-items-center">
        <Link to="/" className="nav-link-custom">
          Home
        </Link>
        <Link to="/about" className="nav-link-custom">
          About
        </Link>
        <Link to="/services" className="nav-link-custom">
          Services
        </Link>
        <Link to="/product" className="nav-link-custom">
          Product
        </Link>
        <Link to="/contact" className="nav-link-custom">
          Contact
        </Link>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link> */}
      </div>
      <div className="w-25 d-flex justify-content-evenly align-items-center">
        <Link to="/cart" className="nav-link-custom">
          Cart
        </Link>
        <Link to="/login" className="nav-link-custom">
          Login
        </Link>
        <Link to="/register" className="nav-link-custom">
          Register
        </Link>
        {/* <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link> */}
      </div>
    </div>
  );
};

export default Header;
