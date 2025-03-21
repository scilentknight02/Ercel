import React from "react";

const Footer = () => {
  return (
    <div className="py-3 text-center font-bold h5">
      <ul className="nav justify-content-center border-bottom pb-2 mb-2">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Product
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Contact
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">
        &copy; 2025 Ercel Store Reserved
      </p>
    </div>
  );
};

export default Footer;
