import React from "react";
import { NavLink } from "react-router-dom";

import "./Subscriptions.scss";

// Images
import Channel1 from "../../Assets/Images/channel1.png";
import Channel2 from "../../Assets/Images/channel2.png";
import Channel3 from "../../Assets/Images/channel3.png";
import Channel4 from "../../Assets/Images/channel4.png";
import Channel5 from "../../Assets/Images/channel5.png";
import Channel6 from "../../Assets/Images/channel6.png";

function Subscriptions() {
  return (
    <div className="subscriptions">
      <h2 className="subscriptions__heading">Subscriptions</h2>
      <ul className="channels-list">
        <li className="channel-item">
          <NavLink className="channel__link" to="/channel">
            <img src={Channel1} alt="Channel avatar" />
            <p>Gussie Singleton</p>
          </NavLink>
        </li>
        <li className="channel-item">
          <NavLink className="channel__link" to="/channel">
            <img src={Channel2} alt="Channel avatar" />
            <p>Nora Francis</p>
          </NavLink>
        </li>
        <li className="channel-item">
          <NavLink className="channel__link" to="/channel">
            <img src={Channel3} alt="Channel avatar" />
            <p>Belle Briggs</p>
          </NavLink>
        </li>
        <li className="channel-item">
          <NavLink className="channel__link" to="/channel">
            <img src={Channel4} alt="Channel avatar" />
            <p>Eunice Cortez</p>
          </NavLink>
        </li>
        <li className="channel-item">
          <NavLink className="channel__link" to="/channel">
            <img src={Channel5} alt="Channel avatar" />
            <p>Emma Hanson</p>
          </NavLink>
        </li>

        <li className="channel-item">
          <NavLink className="channel__link" to="/channel">
            <img src={Channel6} alt="Channel avatar" />
            <p>Leah Berry</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Subscriptions;
