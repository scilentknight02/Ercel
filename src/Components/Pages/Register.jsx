import React, { useState } from "react";

// apply javascript here
// const Greeting = () => {
//   const name = "John";
//   return <h1>Hello, {name}!</h1>; // JavaScript variable inside JSX
// };

// JavaScript From Here

const formValidation = () => {
  var fname;
};

const Registration = () => {
  const [formData, setFormData] = useState({
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
                <label className="form-label">First Name</label>
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
                <label className="form-label">Last Name</label>
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
                <label className="form-label">Email</label>
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
                <label className="form-label">Phone</label>
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
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Gender</label>
                <select
                  className="form-control"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-2">
                <label className="form-label">Date of Birth</label>
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
                <label className="form-label">Password</label>
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
                <label className="form-label">Confirm Password</label>
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
