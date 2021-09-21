import "./MargaretVideos.scss";
import React from "react";
import { NavLink } from "react-router-dom";

// Components
import MargaretVideo from "../MargaretVideo/MargaretVideo";

function MargaretVideos() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 6)));
  }, []);

  return (
    <div className="margaret-videos">
      <div className="margaret__top">
        <h3>Margaret Phelps videos</h3>
      </div>
      <div className="margaret__videos">
        <ul className="margaret__videos__list">
          {data.length > 0 &&
            data.map((row) => (
              <li className="margaret__list__item" key={row.id}>
                <MargaretVideo>
                  <NavLink to="/video">
                    <img
                      className="margaret__item__img"
                      src={row.thumbnailUrl}
                      alt=""
                      width={250}
                      height={150}
                    />
                    <h4>{row.title}</h4>
                    <p>240k views · 4 months ago Food & Drink</p>
                  </NavLink>
                </MargaretVideo>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default MargaretVideos;
