import React from "react";

import "./Navbar.scss";
import { NavLink } from "react-router-dom";

// Images
import SettingsIcon from "../Lib/Svg/settings";

// Components
import VideoPages from "../VideoPages/VideoPages";
import Categories from "../Categories/Categories";
import Subscriptions from "../Subscriptions/Subscriptions";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="pages">
        <VideoPages />
        <Categories />
      </div>
      <Subscriptions />
      <NavLink className="settings-link" to="/">
        <SettingsIcon />
        <span>Setting</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
