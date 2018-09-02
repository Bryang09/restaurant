import React from "react";

import { Link } from "react-router-dom";

import "./Sub1.css";

const Sub1 = () => {
  return (
    <div className="Sub1">
      <div className="White-Text">
        <h1>Welcome to the best food on Earth</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eligendi
          reiciendis eveniet rerum ipsam eaque veritatis eius iure adipisci
          tempore! Nisi saepe voluptate, dolores distinctio amet soluta ex illo
          perferendis.
        </p>
        <hr id="vertical" />
        <h3 className="Home-Button White-Box Black-Text">
          <Link to="/menu">Menu</Link>
        </h3>
      </div>
      <div className="Section1">
        <div className="Box1">
          <h1 style={{ textTransform: "capitalize" }}>Award Winning Dishes</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dolorem perspiciatis facilis pariatur officia in, sequi labore
            quidem esse animi eius deserunt nam beatae unde alias saepe
            temporibus iste ut.
          </p>

          <h3 className="Home-Button Box-Button">
            <Link to="/about">About Us</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sub1;
