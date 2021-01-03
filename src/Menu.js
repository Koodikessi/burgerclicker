import React from "react";
import { Link } from "react-router-dom";

import iconburger from "./images/icon-burger.png";
import iconboy from "./images/icon-boy.png";
import iconcoupon from "./images/icon-coupon.png";

function Menu(props) {
  return (
    <div className="menu">
      <Link to="/">
        <div>
          <img src={iconburger} alt="game" />
        </div>
      </Link>
      <Link to="/coupon">
        <div>
          <img src={iconcoupon} alt="coupons" />
          <span className="badge">{props.claimableCoupons}</span>
        </div>
      </Link>

      <Link to="/profile">
        <div>
          <img src={iconboy} alt="profile" />
        </div>
      </Link>
    </div>
  );
}

export default Menu;
