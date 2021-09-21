import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

// Images
import UserPic from "../../Assets/Images/Userpic.png";
import HamburgerIcon from "../Lib/Svg/hamburger";
import YouTubeLogo from "../Lib/Svg/you-tube";
import SearchIcon from "../../Assets/Images/search.png";
import CameraIcon from "../Lib/Svg/camera";
import Settings3x3 from "../Lib/Svg/settings3x3";
import BellIcon from "../Lib/Svg/bell";

function Header() {
  function handleInputSubmit(evt) {
    evt.preventDefault();
    evt.target.elements[0].value = null;
  }

  return (
    <div className="header">
      <div className="header__left">
        <HamburgerIcon />
        <NavLink to="/">
          <YouTubeLogo />
        </NavLink>

        <form className="header__search-form" onSubmit={handleInputSubmit}>
          <input className="search-input" type="text" placeholder="Search" />
          <img
            className="header__search-icon"
            src={SearchIcon}
            alt="search"
            width="19"
            height="19"
          />
        </form>
      </div>
      <div className="header__right">
        <div className="owner__features">
          <NavLink to="/video">
            <CameraIcon />
          </NavLink>
          <NavLink to="/settings">
            <Settings3x3 />
          </NavLink>
          <NavLink to="/news">
            <BellIcon />
          </NavLink>
        </div>
        <div className="header__account">
          <img
            className="header__avatar"
            src={UserPic}
            alt="User avatar"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
