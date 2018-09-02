import React from "react";

import "./Main.css";

import Home from "../Home";
import Sub1 from "../Sub1/Sub1";
import Sub2 from "../Sub2/Sub2";

const Main = () => {
  return (
    <div className="Main">
      <Home />
      <Sub1 />
      <Sub2 />
    </div>
  );
};

export default Main;
