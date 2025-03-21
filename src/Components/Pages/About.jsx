import React from "react";

const Home = () => {
  return (
    <div className="container-fluid p-0">

      {/* Hero Section */}
      <div className="text-center bg-dark text-white py-5">
        <h1 className="display-3">React</h1>
        <p className="lead">The library for web and native user interfaces</p>
        <button className="btn btn-light btn-lg mx-2">Learn React</button>
        <button className="btn btn-outline-light btn-lg mx-2">API Reference</button>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <h3>Declarative</h3>
            <p>React makes it easy to create interactive UIs.</p>
          </div>
          <div className="col-md-4">
            <h3>Component-Based</h3>
            <p>Build encapsulated components that manage their own state.</p>
          </div>
          <div className="col-md-4">
            <h3>Learn Once, Write Anywhere</h3>
            <p>Use React to power web and native applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
