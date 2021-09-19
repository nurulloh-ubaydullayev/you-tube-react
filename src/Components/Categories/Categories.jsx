import "./Categories.scss";

import { NavLink } from "react-router-dom";

// Images
import LibraryIcon from "../Lib/Svg/library";
import HistoryIcon from "../Lib/Svg/history";
import ClockIcon from "../Lib/Svg/clock";
import StartIcon from "../Lib/Svg/star";
import LikeIcon from "../Lib/Svg/like";
import MusicIcon from "../Lib/Svg/music";
import GamesIcon from "../Lib/Svg/games";
import ShowMoreIcon from "../Lib/Svg/showMore";

function Categories() {
  return (
    <ul className="categories-list">
      <li className="categories-list__item">
        <NavLink className="categories__item__link" to="/">
          <LibraryIcon />
          <span>Library</span>
        </NavLink>
      </li>

      <li className="categories-list__item">
        <NavLink className="categories__item__link" to="/">
          <HistoryIcon />
          <span>History</span>
        </NavLink>
      </li>

      <li className="categories-list__item">
        <NavLink className="categories__item__link" to="/">
          <ClockIcon />
          <span>Watch later</span>
        </NavLink>
      </li>

      <li className="categories-list__item">
        <NavLink className="categories__item__link" to="/">
          <StartIcon />
          <span>Favourites</span>
        </NavLink>
      </li>

      <li className="categories-list__item">
        <NavLink className="categories__item__link" to="/">
          <LikeIcon />
          <span>Liked videos</span>
        </NavLink>
      </li>

      <li className="categories-list__item">
        <NavLink className="categories__item__link" to="/">
          <MusicIcon />
          <span>Music</span>
        </NavLink>
      </li>

      <li className="categories-list__item">
        <NavLink className="categories__item__link" to="/">
          <GamesIcon />
          <span>Games</span>
        </NavLink>
      </li>

      <li className="categories-list__item">
        <button className="show-more-btn">
          <ShowMoreIcon />
          <span>Show more</span>
        </button>
      </li>
    </ul>
  );
}

export default Categories;
