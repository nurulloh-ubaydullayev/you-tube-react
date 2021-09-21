import "./RecommendedVideo.scss";
import { NavLink } from "react-router-dom";

function RecommendedVideo({ children }) {
  return (
    <li className="recommended__item">
      <NavLink
        className="recommended__item-link"
        to="video"
        style={{ textDecoration: "none" }}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default RecommendedVideo;
