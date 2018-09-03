import React, { Component } from "react";

import "./MenuSub.css";

class MenuSub extends Component {
  state = {
    title: "Our Menu",
    dish1: null,
    dish1Price: null,
    dish2: null,
    dish2Price: null,
    dish3: null,
    dish3Price: null,
    dish4: null,
    dish4Price: null,
    dish5: null,
    dish5Price: null,
    dish6: null,
    dish6Price: null
  };

  componentDidMount = () => {
    this.setState({
      title: "Our Menu"
    });
  };

  onSalad = () => {
    this.setState({
      title: "Salad",

      dish1: "Caesar Salad",
      dish1Price: 9.99,

      dish2: "Brutus Salad",
      dish2Price: 7.99,

      dish3: "Tuscan Kale",
      dish3Price: 7.99,

      dish4: "Italian Farm",
      dish4Price: 8.99,

      dish5: "Seasoned Vegetable",
      dish5Price: 9.99,

      dish6: "Chopped Chicken",
      dish6Price: 6.99
    });
  };
  onPasta = () => {
    this.setState({
      title: "Pasta",

      dish1: "Bucatini Puttanesca",
      dish1Price: 17.99,

      dish2: "Creste di Gallo",
      dish2Price: 17.99,

      dish3: "Fettuccini Alfredo",
      dish3Price: 15.99,

      dish4: "Spaghetti & Meatballs",
      dish4Price: 14.99,

      dish5: "Bucatini all'Amatriciana",
      dish5Price: 19.99,

      dish6: "Primavera Aglio e Olio",
      dish6Price: 16.99
    });
  };
  onPizza = () => {
    this.setState({
      title: "Pizza",

      dish1: "Pepperoni",
      dish1Price: 9.99,

      dish2: "Hawaiian",
      dish2Price: 9.99,

      dish3: "Supreme",
      dish3Price: 9.99,

      dish4: "Cheese",
      dish4Price: 9.99,

      dish5: "Spinach",
      dish5Price: 9.99,

      dish6: "Vegeterian",
      dish6Price: 9.99
    });
  };
  onSoup = () => {
    this.setState({
      title: "Soup",

      dish1: "Minestrone",
      dish1Price: 6.99,

      dish2: "Zuppa di verze e patate",
      dish2Price: 7.99,

      dish3: "Fagioli e castagne",
      dish3Price: 6.99,

      dish4: "Minestra d’orzo",
      dish4Price: 8.99,

      dish5: "Ribollita",
      dish5Price: 9.99,

      dish6: "Fagioli e cotiche",
      dish6Price: 7.99
    });
  };
  onDrinks = () => {
    this.setState({
      title: "Drinks",

      dish1: "Roscato Rosso Dolce",
      dish1Price: 9.99,

      dish2: "Brutus Salad",
      dish2Price: 7.99,

      dish3: "Tuscan Kale",
      dish3Price: 7.99,

      dish4: "Italian Farm",
      dish4Price: 8.99,

      dish5: "Seasoned Vegetable",
      dish5Price: 9.99,

      dish6: "Chopped Chicken",
      dish6Price: 6.99
    });
  };

  changeText = {};
  render() {
    return (
      <div className="MenuSub">
        <div className="SideBar">
          <ul>
            <li onClick={this.onSalad}>Salad</li>
            <li onClick={this.onSoup}>Soup</li>
            <li onClick={this.onPasta}>Pasta</li>
            <li onClick={this.onPizza}>Pizza</li>
            <li onClick={this.onDrinks}>Drinks</li>
          </ul>
        </div>
        <div className="MenuMain">
          <h1>{this.state.title}</h1>
          {this.state.dish1 === "Caesar Salad" ||
          this.state.dish1 === "Bucatini Puttanesca" ||
          this.state.dish1 === "Pepperoni" ||
          this.state.dish1 === "Minestrone" ? (
            <div className="drinks">
              <div className="dishes">
                <h3>
                  {this.state.dish1} ..... $ {this.state.dish1Price}
                </h3>
                <h3>
                  {this.state.dish2} ..... $ {this.state.dish2Price}
                </h3>
                <h3>
                  {this.state.dish3} ..... $ {this.state.dish3Price}
                </h3>
                <h3>
                  {this.state.dish4} ..... $ {this.state.dish4Price}
                </h3>
                <h3>
                  {this.state.dish5} ..... $ {this.state.dish5Price}
                </h3>
                <h3>
                  {this.state.dish6} ..... $ {this.state.dish6Price}
                </h3>
              </div>
            </div>
          ) : null}

          {this.state.dish1 === "Roscato Rosso Dolce" ? (
            <div className="drinks">
              <h6>
                <i>*Prices per Glass</i>
              </h6>
              <div className="dishes">
                <h3>
                  {this.state.dish1} ..... $ {this.state.dish1Price}
                </h3>
                <h3>
                  {this.state.dish2} ..... $ {this.state.dish2Price}
                </h3>
                <h3>
                  {this.state.dish3} ..... $ {this.state.dish3Price}
                </h3>
                <h3>
                  {this.state.dish4} ..... $ {this.state.dish4Price}
                </h3>
                <h3>
                  {this.state.dish5} ..... $ {this.state.dish5Price}
                </h3>
                <h3>
                  {this.state.dish6} ..... $ {this.state.dish6Price}
                </h3>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default MenuSub;
