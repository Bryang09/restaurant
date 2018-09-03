import React from "react";

import "./Sub2.css";
import "./Sub3.css";

const Sub2 = () => {
  return (
    <div className="Sub2">
      <div className="Section2">
        <div className="Box2">
          <h1 style={{ textTransform: "capitalize" }}>
            How did we get started?
          </h1>
          <hr style={{ border: "1px solid #fff" }} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dolorem perspiciatis facilis pariatur officia in, sequi labore
            quidem esse animi eius deserunt nam beatae unde alias saepe
            temporibus iste ut.
          </p>

          <h3 className="Home-Button Box-Button">
            <a>Learn More</a>
          </h3>
        </div>
      </div>
      <div className="Sub3">
        <div className="Section3">
          <div className="Box3">
            <div className="Side1">
              <h1 style={{ textTransform: "capitalize" }}>We Cater </h1>
              <hr style={{ border: "1px solid #fff" }} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                dolorem perspiciatis facilis pariatur officia in, sequi labore
                quidem esse animi eius deserunt nam beatae unde alias saepe
                temporibus iste ut.
              </p>

              <h3 className="Home-Button Box-Button White-Box" id="read">
                <a>Read More</a>
              </h3>
            </div>
            <div className="Side2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub2;
