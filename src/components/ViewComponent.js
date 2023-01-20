import React from "react";
import "./ViewComponent.css";

export const ViewComponent = () => {
  return (
    <div className="mainborder">
      <div className="mainborder1">
        <img
          src={require("../images/Bitmap.png")}
          className="bitmap"
          alt="bitmap"
        />
        <div className="view1">
          <p className="socialtext">Facebook</p>
          <div className="view2">
            <img
              src={require("../images/eye_on.png")}
              className="copy"
              alt="copy"
            />
            <p className="copypass">Copy Password</p>
          </div>
        </div>
      </div>
      <div className="mainborder2">
        <p className="www">www.facebook.com</p>
      </div>
    </div>
  );
};
