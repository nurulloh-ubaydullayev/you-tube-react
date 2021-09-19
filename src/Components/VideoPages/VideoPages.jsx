import "./VideoPages.scss";

import { NavLink } from "react-router-dom";

// Images
import HomeIcon from "../Lib/Svg/homeIcon";
import TrendingIcon from "../Lib/Svg/trending";
import SubscriptionsIcon from "../Lib/Svg/subscriptions";

function VideoPages() {
  return (
    <ul className="videos-pages-list">
      <li className="videos-list__item">
        <NavLink className="videos-list__link" to="/">
          <HomeIcon />
          <span className="home__link">Home</span>
        </NavLink>
      </li>
      <li className="videos-list__item">
        <NavLink className="videos-list__link" to="/">
          <TrendingIcon />
          <span>Trending</span>
        </NavLink>
      </li>
      <li className="videos-list__item">
        <NavLink className="videos-list__link" to="/">
          <SubscriptionsIcon />
          <span>Subscriptions</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default VideoPages;
