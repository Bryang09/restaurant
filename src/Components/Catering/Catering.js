import React, { Component } from "react";

import "./Catering.css";

import NavBar from "../NavBar/NavBar";

class Catering extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    details: "",
    button: "Contact"
  };
  render() {
    return (
      <div className="Catering">
        <NavBar />

        <div className="Form">
          <h2>Interested In our Catering Service?</h2>
          <form>
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                id="name"
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Phone Number"
                value={this.state.number}
                onChange={e => this.setState({ number: e.target.value })}
              />
            </div>
            <div className="input">
              <textarea
                cols="30"
                rows="4"
                placeholder="Please Type any Details"
                value={this.state.details}
                onChange={e => this.setState({ details: e.target.value })}
              />
            </div>
            <h5
              id="formButton"
              onClick={() => this.setState({ button: "Received" })}
            >
              {this.state.button}
            </h5>
          </form>
        </div>
      </div>
    );
  }
}

export default Catering;
