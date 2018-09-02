import React from "react";

import "./Home.css";

import NavBar from "../NavBar/NavBar";

const Home = () => (
  <div className="Home">
    <NavBar />
    <h1>Little Italy</h1>
    <h2 style={{ fontWeight: "400" }}>
      <i>EST.1956</i>
    </h2>
    <h4>Authentic Italian Restaurant, serving Houstonians since 1956</h4>
  </div>
);

export default Home;
