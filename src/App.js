import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Game from "./Game";
import Menu from "./Menu";
import Coupons from "./Coupons";
import Profile from "./Profile";

import "./App.css";

class Clicker extends Component {
  render() {
    return (
      <Router>
        <div className="clicker">
          <Route path="/" exact component={Game} />
          <Route path="/coupon" component={Coupons} />
          <Route path="/profile" component={Profile} />
          <Menu claimableCoupons={7} />
        </div>
      </Router>
    );
  }
}

export default Clicker;
