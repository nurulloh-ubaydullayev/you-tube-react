import React from "react";
import "./App.scss";
import { Switch, Route, NavLink } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Channel from "./Pages/Channel/Channel";

// Images
import HomeIcon from "./Components/Lib/Svg/homeIcon";
import TrendingIcon from "./Components/Lib/Svg/trending";
import SubscriptionsIcon from "./Components/Lib/Svg/subscriptions";
import LibraryIcon from "./Components/Lib/Svg/library";

// Components
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <main className="main">
          <Navbar />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/channel" component={Channel} exact />
          </Switch>
        </main>
      </div>
      <footer className="footer">
        <ul className="footer__list">
          <li className="footer__list-item">
            <NavLink className="footer__item__link" to="/">
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="footer__list-item">
            <NavLink className="footer__item__link" to="/">
              <TrendingIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="footer__list-item">
            <NavLink className="footer__item__link" to="/">
              <SubscriptionsIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="footer__list-item">
            <NavLink className="footer__item__link" to="/">
              <LibraryIcon />
              <span>Home</span>
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
