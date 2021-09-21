import "./NextVideo.scss";
import { NavLink } from "react-router-dom";

function NextVideo({ children }) {
  return (
    <li className="next__list-item">
      <NavLink className="next__item__link" to="/video">
        {children}
      </NavLink>
    </li>
  );
}

export default NextVideo;
