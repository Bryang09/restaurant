import React, { Component } from "react";

import "./Menu.css";

import NavBar from "../NavBar/NavBar";
import MenuSub from "./MenuSub/MenuSub";

class Menu extends Component {
  state = {
    Menu: [
      {
        id: 0,
        title: "Award Winning Pasta",
        class: "Pasta",
        p:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo necessitatibus, ex, similique et tempore qui veritatis quae harum magni nemo laborum iste! Voluptatem hic iure minus voluptatibus delectus corporis."
      },
      {
        id: 1,
        title: "Fresh baked Italian Pizza",
        class: "Pizza",
        p:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo necessitatibus, ex, similique et tempore qui veritatis quae harum magni nemo laborum iste! Voluptatem hic iure minus voluptatibus delectus corporis."
      },
      {
        id: 2,
        title: "World Class Bar",
        class: "Bar",
        p:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo necessitatibus, ex, similique et tempore qui veritatis quae harum magni nemo laborum iste! Voluptatem hic iure minus voluptatibus delectus corporis."
      }
    ]
  };

  render() {
    const menu = this.state.Menu.map(menuSection => {
      return (
        <div className="menuSection" key={menuSection.id}>
          <div className="Text">
            <h2 style={{ textTransform: "capitalize" }}>{menuSection.title}</h2>
            <hr />
            <p>{menuSection.p}</p>
          </div>
          <div className={menuSection.class} />
        </div>
      );
    });

    return (
      <div className="Menu">
        <NavBar />
        <div className="Home-Menu">
          <h1>Menu</h1>
          <h3>
            Take a look at some of the many amazing dishes here at
            <b> Little Italy</b>
          </h3>
        </div>
        {menu}
        <MenuSub />
      </div>
    );
  }
}

export default Menu;
