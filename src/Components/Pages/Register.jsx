import React, { useState } from "react";

// apply javascript here
// const Greeting = () => {
//   const name = "John";
//   return <h1>Hello, {name}!</h1>; // JavaScript variable inside JSX
// };

// JavaScript From Here
const reset = () => {};
const Registration = () => {
  const [formData, setFormData] = useState({
    // State to hold form data
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  // State to hold error messages
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email");
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    if (!/[A-Z]/.test(formData.password)) {
      alert("Password must contain at least one uppercase letter");
    }
    if (!/[0-9]/.test(formData.password)) {
      alert("Password must contain at least one number");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      alert("Password must contain at least one special character");
    }

    console.log("Form Submitted", formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="form-label">
                  First Name &nbsp;<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="fname"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-2">
                <label className="form-label">
                  Last Name &nbsp;<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lname"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-2">
                <label className="form-label">
                  Email &nbsp;<span>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-2">
                <label className="form-label">
                  Phone &nbsp;<span>*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-2">
                <label className="form-label">
                  Gender &nbsp;<span>*</span>
                </label>
                <select
                  className="form-control"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" className="bg-dark">
                    Select
                  </option>
                  <option value="male" className="bg-sucess">
                    Male
                  </option>
                  <option value="female" className="bg-sucess">
                    Female
                  </option>
                </select>
              </div>

              <div className="mb-2">
                <label className="form-label">
                  Date of Birth &nbsp;<span>*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="dateOfBirth"
                  id="dob"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-2">
                <label className="form-label">
                  Password &nbsp;<span>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">
                  Confirm Password &nbsp;<span>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  id="cPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </div>
            </form>
            {/* Login Link */}
            <p className="text-center mt-3">
              Already have an account?{" "}
              <a href="/login" className="und">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
