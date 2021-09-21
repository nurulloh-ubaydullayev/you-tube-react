import "./ChannelIntro.scss";
import { NavLink } from "react-router-dom";

// Images
import SearchIcon from "../../Components/Lib/Svg/search";
import PopularVideo from "../../Assets/Images/popular-video.jpg";
import FloraBenson from "../../Assets/Images/FloraBenson.png";
import VioletCobb from "../../Assets/Images/VioletCobb.png";
import PhillipMullins from "../../Assets/Images/PhillipMullins.png";

function ChannelIntro() {
  return (
    <div className="channel__intro">
      <div className="channel__intro-content">
        <nav className="channel__navbar">
          <ul className="channel__navbar__list">
            <li className="channel__navbar__item">
              <NavLink className="channel__navbar__link" to="/">
                Home
              </NavLink>
            </li>
            <li className="channel__navbar__item">
              <NavLink className="channel__navbar__link" to="/">
                Videos
              </NavLink>
            </li>
            <li className="channel__navbar__item">
              <NavLink className="channel__navbar__link" to="/">
                Playlists
              </NavLink>
            </li>
            <li className="channel__navbar__item hide">
              <NavLink className="channel__navbar__link" to="/">
                Channels
              </NavLink>
            </li>
            <li className="channel__navbar__item hide">
              <NavLink className="channel__navbar__link" to="/">
                Discussion
              </NavLink>
            </li>
            <li className="channel__navbar__item hide">
              <NavLink className="channel__navbar__link" to="/">
                About
              </NavLink>
            </li>
            <li className="channel__navbar__item hide">
              <SearchIcon />
            </li>
          </ul>
        </nav>
        <div className="popular__video">
          <img
            className="popular__video__img"
            src={PopularVideo}
            alt="It is a most popular and trend video of this channel"
            width={540}
            height={250}
          />
          <div className="popular__video-description">
            <h4>Choosing The Best Audio Player Software For Your Computer</h4>
            <p>
              Your cheap internet-based banner advertising will become one of
              the sought for ads there are. Today, the world of Internet
              advertising is rapidly evolving beyond banner ads and intrusive
              pop-ups. Bayles A common medium for advertising on the Internet is
              the use of banner ads.{" "}
            </p>
            <span>11k views · 6 months ago</span>
          </div>
        </div>
      </div>
      <div className="channel__recommendeds">
        <h4 className="channel__recommendeds__heading">Recommended channel</h4>

        <ul className="channel__recommendeds__list">
          <li className="channel__recommendeds__item">
            <NavLink className="channel__recommendeds__link" to="/channel">
              <img src={FloraBenson} alt="" />
              <h5>Flora Benson</h5>
            </NavLink>
          </li>
          <li className="channel__recommendeds__item">
            <NavLink className="channel__recommendeds__link" to="/channel">
              <img src={VioletCobb} alt="" />
              <h5>Violet Cobb</h5>
            </NavLink>
          </li>
          <li className="channel__recommendeds__item">
            <NavLink className="channel__recommendeds__link" to="/channel">
              <img src={PhillipMullins} alt="" />
              <h5>Phillip Mullins</h5>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChannelIntro;
