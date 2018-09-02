import React, { Component } from "react";

import "./About.css";

import NavBar from "../NavBar/NavBar";
import Questions from "./Questions/Questions";

class About extends Component {
  render() {
    return (
      <div className="About">
        <NavBar />
        <div className="Hero">
          <h2>About Us</h2>
          <hr />
          <p>Have any questions about us? We'll be happy to answer them!</p>
        </div>
        <Questions />
      </div>
    );
  }
}

export default About;
